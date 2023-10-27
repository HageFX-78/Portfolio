const projectData = [
    {
        index: 0,
        gameName: "Pong",
        content: 
        "This is the content of file 1This is the content of file 1.This is the content of file 1.This is the content of file 1.This is the content of file 1.This is the content of file 1.This is the content of file 1.This is the content of file 1.This is the content of file 1.This is the content of file 1. <br><br><br> This a a a fdfdskfdjn d dkfn dslnf ldkn fldn klfdnskl fndsklnf dkln fkldnklf ndsklfn dklnf kldnsfkl ndslk fndslknf dlkfn dlknf dklsnf dsklnf dklsnf ldksnf klsdnklfdsnkl fnsdklfn dskln flkdsnf kldsnf kldsn fkldsnf kldsnfkl dsnklfdsnfkldsnlkf <br><br><br><br><br><br><br><br><br><br><br><br><br> asdnasdkasndlksandlsandkl sndklasndklsandklasndkl asndkl asndklsandkla sndklasndklasn dklasndklsandklasndkl <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>tesatt",
        imgurl: "../img/pong.png",
        textColor: "#FFFFFF"
    },
    {
        index: 1,
        gameName: "Insemination",
        content: "Content of file 2 goes here.",
        imgurl: "../img/insemination.png",
        textColor: "#000000"
    },
  ];


function swapGameContent(id)
{  
    const project = projectData.find((item) => item.index === id);
    // $(".projects-content::before").css("background-image", "url('" + project.imgurl + "')");
    $(".projects-content").css("color", project.textColor);
    
    $(".project-content-title").html(project.gameName);
    $(".project-content-text").html(project.content);
}

$(document).ready(function() {

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
    });
    
});