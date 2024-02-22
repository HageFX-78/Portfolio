

$(document).ready(function() {
    $(".modal-box-back").click(function() {
        $(".modal-box-back").hide();
    });

    $(".modal-box-container").click(function(event) {
        event.stopPropagation(); // Stop event propagation to prevent closing the modal
    });

    $("#fumo").click(function() {
        
        $(".modal-box-container").html("<div class='loader-container'><div class='loader'></div></div>");
        $(".modal-box-back").show();
        
        $(".modal-box-container").load("Portfolio2.0/SideWorks/fumo_engine.html", function() {
            // Callback function to execute after content is loaded
            Prism.highlightAll(); // Initialize Prism.js after content is loaded
            
        });//*/
        
    });
    
    InitializeProjectTags();
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
}