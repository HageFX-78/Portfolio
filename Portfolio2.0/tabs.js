let currentItchLink = '_blank';

function swapGameContent(id)
{  
    const project = projectData.find((item) => item.index === id);

    $(".projects-content").css("color", project.textColor);
    $(".project-content-text").removeClass("default-format");
    
    $(".project-content-title").html(project.gameName);
    $(".project-content-title").css("display", "block");
    $(".project-content-title-link").css("display", "block");



    currentItchLink = project.itchLink;

    let container1 = "<div class='ele-container'>" + project.contentHead +"</div><br>";
    let container2 = "<div class='ele-container2'>" + project.contentImg +"</div><br>";
    let gameCategories ="<div class='game-cat-title borderBlack3pxNS'>Project Duration : </div><div class='game-cat borderOrange3pxNS'>" + 
    project.projectDuration + "</div><br><div class='game-cat-title borderBlack3pxNS'>Made in : </div><div class='game-cat borderOrange3pxNS'>" + project.gameEngine + "</div><br><div class='game-cat-title borderBlack3pxNS'>Type : </div><div class='game-cat borderOrange3pxNS'>" + 
    project.type + "</div><br><div class='game-cat-title borderBlack3pxNS'>Role : </div><div class='game-cat borderOrange3pxNS'>" + 
    project.role + "</div><br><br>";

    let finalString = container1  + container2  + gameCategories + "<div class='game-text borderBlack3pxNS'>" + $("#"+project.content).html() + "</div>";

    $(".project-content-text").html(finalString);

    //Copy and paste snippets from a hidden code-repo to their respective containers
    //Havent figured out how to include another html file so i can only store it in index.
    if(project.snippets)
    {
        project.snippets.forEach(element => {
            $(".snippet-container." + element).html($("#" + element).html());
        });
    }
}



// <script src="https://gist.github.com/HageFX-78/fe25219d983549a44b00583145d5054f.js"></script>

// var gistID = "fe25219d983549a44b00583145d5054f";

// var gistURL = "https://gist.github.com/HageFX-78/" + gistID + ".js";

//  - - - - - - D O C   R E A D Y 
$(document).ready(function() {

    //Contacts copy
    $(".contact").click(function() {
        const textToCopy = $(this).html().replace(' <i class="fa fa-copy"></i>', '');
        const $textArea = $('<textarea>').val(textToCopy);
        $('body').append($textArea);
        $textArea.select();
        document.execCommand('copy');
        $textArea.remove();


        $(".copy-notice").css('bottom', '10px');

        setTimeout(function() {
            $(".copy-notice").css('bottom', '-50px');
          }, 2000);
    });


    // Tab switch
    $(".portfolio-tab").click(function() {
        const index = $(this).index();
        $(".portfolio-tab").removeClass("active");
        $(this).addClass("active");
        $(".portfolio-tab-pane").removeClass("active");
        $(".portfolio-tab-pane:eq(" + index + ")").addClass("active");
    });

    // - - - - - - - - - - - - - - - -
    //Projects tabs
    $(".projects-thumbnail").click(function() { 
        let index = parseInt($(this).attr("readID"));
        if(index == NaN)
            return;
        swapGameContent(index);

        $(".projects-content").scrollTop(0);
    });
    
    $(".project-content-title-link").click(function() {
        window.open(currentItchLink, '_blank');
    });

});



