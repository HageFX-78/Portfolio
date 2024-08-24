

$(document).ready(function() {
    $(".modal-box-back").click(function() {
        $(".modal-box-back").hide();
    });
    $(".modal-box-container").click(function(event) {
        event.stopPropagation(); // Stop event propagation to prevent closing the modal
    });
    $(".project-item").click(function() {
        
        $(".modal-box-container").html("<div class='loader-container'><div class='loader'></div></div>");
        $(".modal-box-back").show();
        
        var projectID = parseInt($(this).attr("readID"));
        var directory = "None"
        if($(this).attr("dirType")== "game"){
            directory = "GameProjects";
        }else if($(this).attr("dirType")== "side"){
            directory = "SideWorks";
        }

        // Load html content of the project
        $(".modal-box-container").load("Portfolio2.0/"+ directory +"/"+ $(this).attr("loadname")+".html", function(response, status, xhr) {
            if (status == "error") {
                var msg = "Sorry but there was an error: ";
                $(".modal-box-container").html(msg + xhr.status + " " + xhr.statusText);
            }
            else if(status == "success"){

                var tempDiv = $("<div>").html(response);
                const project = projectData.find((item) => item.index == projectID);
    
                tempDiv.find(".project-vid").html(project.contentHead);



                $(".modal-box-container").html(tempDiv.html());

                Prism.highlightAll(); // Initialize Prism.js after content is loaded
            }
            
        });
        
    });


    $(".project-item-text").hide();
    $(".project-item").hover(function() {
        $(this).find(".project-item-text").fadeIn(100);
    }
    , function() {
        $(this).find(".project-item-text").fadeOut(100);
    });
    

    // Project tile hover
    $(".tile-item").hover(function(){
        $(this).find(".tile-project-text").css({
            "background-color": "rgba(0,0,0,0.4)",
            "backdrop-filter": "blur(5px)",
            "transform": "scale(1.1)"
        });
    },
    function(){
        $(this).find(".tile-project-text").css({
            "background-color": "rgba(0,0,0,0)",
            "backdrop-filter": "blur(0px)",
            "transform": "scale(1)"
        });
    });

    var categorySelected = false;
    // Project tile click
    $(".tile-item").click(function(){
        if(!categorySelected){
            categorySelected = true;

            var projectCategory = $(this).attr("ptype");
            $("#tile-projects-container").css({
                "grid-template-areas": ' "'+ $(this).css("grid-area") +'" "'+ projectCategory +'" ',
                "grid-template-rows": "20% 80%",
                "grid-template-columns": "100%"
            }); 
        }else{
            categorySelected = false;
            $("#tile-projects-container").css({
                "grid-template-areas": ' "L1 R1" "L1 R2" ',
                "grid-template-rows": "50% 50%",
                "grid-template-columns": "50% 50%"
            });
        }
    });

    InitializeProjectTags();

    //----------------------------------------------------------------- Mouse functions
    //ON mouse mmove move background slightly to create parallax effect
    $(document).on('mousemove', function(e){
        var x = e.pageX / $(window).width();
        var y = e.pageY / $(window).height();
        $(".parallax-back").css('transform', 'translate(-'+x*50+'px, -'+y*50+'px)');

        // Move flashlight element where center is mouse position
        $(".flashlight").css({
            "left": e.pageX - $(window).width(),
            "top": e.pageY - $(window).height()
        });
    });

    $(document).on('mousedown', function(e){
        $("iframe").css("pointer-events", "auto");
    });
});


// Horizontal scrolling on screenshots
$(document).on('wheel', '.ele-container2', function (e) {
    var $scrollArea = $('.ele-container2');
    if ($scrollArea.get(0).scrollWidth <= $scrollArea.get(0).clientWidth) {
        // No need to scroll horizontally if there's no overflow
        return;
    }

    var scrollAmount = e.originalEvent.deltaY;

    $('.ele-container2').on('wheel', function (e) {
        e.preventDefault();
        $('.ele-container2').scrollLeft($('.ele-container2').scrollLeft() + scrollAmount);
    });
});


function InitializeProjectTags()
{
    var projectTags = {
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

    $(".projects-thumbnail").each(function() {
        let index = parseInt($(this).attr("readID"));
        const project = projectData.find((item) => item.index === index);

        if(project && project.tags){
            let resultText = "<div class='thumbnail-flex-container'>";
            project.tags.forEach(element => {
                resultText += "<div class='thumbnail-tags' style='background-color:"+ projectTags[element][1]+"'>"+ projectTags[element][0] +"</div>"
            });
            resultText += "</div>"
            $(this).append(resultText);
        }
    });

    $(".tile-project-thumbnail").each(function() {
        let index = parseInt($(this).attr("readID"));
        const project = projectData.find((item) => item.index === index);

        if(project && project.tags){
            let resultText = "<div class='thumbnail-flex-container'>";
            project.tags.forEach(element => {
                resultText += "<div class='thumbnail-tags' style='background-color:"+ projectTags[element][1]+"'>"+ projectTags[element][0] +"</div>"
            });
            resultText += "</div>"
            $(this).append(resultText);
        }
    });
}