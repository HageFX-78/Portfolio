const tagIcons = {
    cpp : '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />',
    cs : '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />',
    lua: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg" />',
    css: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />',
    html: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />',
    js: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />',
    jquery: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" />',
    java: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />',
    php: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />',

    // Game engines
    // -- -- img-invert class inverts image color
    ue5 : '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original.svg" class="img-invert"/>',
    unity : '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" />',
    stc : '<img src="../../img/tag_logo/stencyl.png" />',

    vscode : '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />',
    rider: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rider/rider-original.svg" />',
    photoshop: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" />',
    blender: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" />',
}
const projectTags = {
    cpp : ["C++", "#ebb400"],
    cs : ["C#", "#ebb400"],
    lua: ["Lua", "#ebb400"],

    ue5 : ["Unreal Engine 5", "#ebb400"],
    unity : ["Unity", "#ebb400"],
    stc : ["Stencyl", "#ebb400"],
    game2d : ["2D", "#ebb400"],
    game3d : ["3D", "#ebb400"],
    mobile : ["Mobile", "#ebb400"],
    gamejam : ["Game Jam", "#ebb400"],
    solo : ["Solo", "#ebb400"],
    group : ["Group", "#ebb400"],

};

function getProjectTags(index, projectType){

    let resultText = "";
    var projectDataMap;
    if(projectType == "game"){
        projectDataMap = gameDataMap;
    }else if(projectType == "jam"){
        projectDataMap = jamDataMap;
    }else if(projectType == "side"){
        projectDataMap = sideDataMap;
    }
    projectDataMap[index].tags.forEach(element => {
        resultText += "<div class='thumbnail-tags' style='background-color:"+ projectTags[element][1]+"'>"+ projectTags[element][0] +"</div>"
    });

    return resultText
}

// on document ready

$(document).ready(function() {

    // Load project items
    var projectBody = "";
    for(var index = 0 ; index < Object.keys(gameDataMap).length; index++){
        var element = gameDataMap[index];
        projectBody += '<div dirType="game" class="project-item" readID="' + index +'">'
        projectBody += '<img src="'+ element.thumbnail +'" draggable="false"/>';
        projectBody += '<div class="project-item-text">';
        projectBody += '<b>'+ element.gameName +'</b>';
        projectBody += '<p>' + element.summary + '</p>';
        projectBody += '<div class="project-thumbnail-tags">'+ getProjectTags(
            index, "game")+ '</div></div></div>';
    }
    $("#game-projects-container").html(projectBody);
    console.log(projectBody);

    $(".project-item-text").hide();
    $(".project-item").hover(function() {
        var textElement = $(this).find(".project-item-text");
        textElement.fadeToggle("fast");
    });

    // Open project modal
    $(".project-item").click(function() {
        
        $(".modal-box-container").html("<div class='loader-container'><div class='loader'></div></div>");
        $(".modal-box-back").show();
        
        var projectID = parseInt($(this).attr("readID"));
        var projectType = $(this).attr("dirType");

        var directory = "None";
        var project;

        switch(projectType){
            case "game":
                directory = "GameProjects";
                project = gameDataMap[projectID];
                break;
            case "jam":
                directory = "JamProjects";
                project = jamDataMap[projectID];
                break;
            case "side":
                directory = "SideWorks";
                project = sideDataMap[projectID];
                break;
        }

        
        // Load html content of the project
        $(".modal-box-container").load("Portfolio2.0/"+ directory +"/"+ project.htmlFile+".html", function(response, status, xhr) {
            if (status == "error") {
                var msg = "Page not found or unfinished: ";
                $(".modal-box-container").html(msg + xhr.status + " " + xhr.statusText);
            }
            else if(status == "success"){
                var projectHeader;
                var projectContent;
                var projectFooter;

                if(projectType == "side"){
                    projectHeader ="";
                    projectContent = "";
                }
                else{
                    projectHeader = '<div class="project-header">';
                    var headerTop = '<div class="project-header-top">';

                    //Project tags
                    var projectTags = '<div class="project-tags">';
                    project.tools.forEach(element => {
                        projectTags += tagIcons[element];
                    });
                    projectTags += '</div>';
                    headerTop += projectTags;

                    //Project link
                    var projectLink = "<div class='project-link'><div class='project-link-text' onclick='window.open('" + project.itchLink + "', '_blank')'>Itch Link!<i style='font-size:24px' class='fa'>&#xf08e;</i></div></div>";
                    headerTop += projectLink+"</div>";

                    //Logo
                    projectHeader += headerTop + "<img src='" + project.logoImg + "'/></div>";


                    // -----------------Content side -------
                    projectContent = '<div class="project-content-container">';
                    projectContent += "<div class='project-vid'>"+ project.contentHead +"</div><br><br>";

                    projectContent += "<div class='project-gallery'>";
                    project.contentImg.forEach(element => {
                        projectContent += "<img class='showcase-img' src='" + element + "' draggable='false'/>";
                    });
                    projectContent += "</div><br><br>";
                }
                // --------------------------Footer
                projectFooter = '<div class="project-footer"></div>';
                // Apply content and highlight code snippet
                $(".modal-box-container").html(projectHeader+ projectContent + response + "</div>");
                $(".modal-box-container").append(projectFooter);
                Prism.highlightAll(); // Initialize Prism.js after content is loaded
            }
            
        });
        
    });
});