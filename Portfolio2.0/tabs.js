const projectData = [
    {
        index: 0,
        gameName: "Pong",
        contentHead: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TGqBs9Fx1bM?si=y7ici8DjnmmCPJwv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        contentImg:'<img class ="showcase-img" src="img/gt/gt3.png" alt="guiltTrio_tn" draggable="false" ><img class ="showcase-img" src="img/gt/gt2.png" alt="guiltTrio_tn" draggable="false">',
        projectDuration: "1 week",
        gameEngine: "Stencyl",
        type: "Solo",
        role: "All",
        content: "My first stencyl game made for assignment. A modified pong with additional power ups.",
        imgurl: "../img/pong.png",
        textColor: "#FFFFFF",
        itchLink: "https://hagefx78.itch.io/modified-pong-game-kdu"
    },
    {
        index: 1,
        gameName: "Insemination",
        contentHead: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TGqBs9Fx1bM?si=y7ici8DjnmmCPJwv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        contentImg:'<img class ="showcase-img" src="img/gt/gt3.png" alt="guiltTrio_tn" draggable="false" ><img class ="showcase-img" src="img/gt/gt2.png" alt="guiltTrio_tn" draggable="false">',
        projectDuration: "1 week",
        gameEngine: "Stencyl",
        type: "Solo",
        role: "All",
        content: "First unreal engine game made for Final Year Project.<br>",
        imgurl: "../img/insemination.png",
        textColor: "#FFFFFF",
        itchLink: "https://hagefx78.itch.io/insemination"
    },
    {
        index: 2,
        gameName: "Hazepoint (Final Year Project)",
        contentHead: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TGqBs9Fx1bM?si=y7ici8DjnmmCPJwv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        contentImg:'<img class ="showcase-img" src="img/hazepoint/s1.png" alt="guiltTrio_tn" draggable="false" ><img class ="showcase-img" src="img/hazepoint/keyart.png" alt="guiltTrio_tn" draggable="false"><img class ="showcase-img" src="img/hazepoint/s2.png" alt="guiltTrio_tn" draggable="false">',
        projectDuration: "6 months",
        gameEngine: "Unreal Engine 5",
        type: "Solo",
        role: "All",
        content: "First unreal engine game made for Final Year Project.<br>",
        imgurl: "img/tictactoe.png",
        textColor: "#FFFFFF",
        itchLink: "https://uowmgames.itch.io/fyp2-hazepoint"
    },
    {
        index: 3,
        gameName: "Guilt Trip",
        contentHead: '<iframe width="560" height="315" src="https://www.youtube.com/embed/etgTpAIKsto?si=q-LrCChLOiW9RqIx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        contentImg:'<img class ="showcase-img" src="img/gt/gt3.png" alt="guiltTrio_tn" draggable="false" ><img class ="showcase-img" src="img/gt/gt2.png" alt="guiltTrio_tn" draggable="false">',
        projectDuration: "3 months",
        gameEngine: "Unity 2D",
        type: "Group (7 members)",
        role: "Generalist Programmer",
        content: "First unreal engine game made for Final Year Project.<br>",
        imgurl: "../img/tictactoe.png",
        textColor: "#FFFFFF",
        itchLink: "https://uowmgames.itch.io/guilt-trip"
    },
    {
        index: 4,
        gameName: "Shadow",
        contentHead: '<iframe width="560" height="315" src="https://www.youtube.com/embed/XefaRMtpqR4?si=FiAjMQ7RdRuhgMvR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        contentImg:'<img class ="showcase-img" src="img/shadow/shadow2.png" alt="guiltTrio_tn" draggable="false" ><img class ="showcase-img" src="img/shadow/shadow3.png" alt="guiltTrio_tn" draggable="false"><img class ="showcase-img" src="img/shadow/shadow4.png" alt="guiltTrio_tn" draggable="false">',
        projectDuration: "6 months",
        gameEngine: "Unity 3D Mobile",
        type: "Group (7 members)",
        role: "Generalist Programmer / Tools Programmer",
        content: "Worked on the core mechanic of the game, interactable shadows in a 3D plane.<br>Developed a tool/script to generate shadows of 3D models and place it in the scene, each shadow have a script that determines its size and position based on the distance to the light source and wall casted on.",
        imgurl: "../img/tictactoe.png",
        textColor: "#FFFFFF",
        itchLink: "https://aarontan1.itch.io/shadow-maiden-less"
    },
    {
        index: 5,
        gameName: "To Please My Slimy Wife",
        contentHead: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TGqBs9Fx1bM?si=y7ici8DjnmmCPJwv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        contentImg:'<img class ="showcase-img" src="img/tpmsw/tn.png" alt="guiltTrio_tn" draggable="false" >',
        projectDuration: "48 hours",
        gameEngine: "Unity 2D",
        type: "Solo (September Sem Jam 2023)",
        role: "All",
        content: "Submission for September Sem Jam 2023, theme was 'Slime'.<br>Gameplay is a 2D platformer where you play as a slime trying to please your wife by going on a journey to harden yourself. Game mechanic involves sucking on harder items and become harder yourself.<br>This is also to experiment with 2D softbody physics.",
        imgurl: "../img/tictactoe.png",
        textColor: "#FFFFFF",
        itchLink: "https://hagefx78.itch.io/to-please-my-slimy-wife"
    },
    {
        index: 6,
        gameName: "Touhou Endless Black",
        contentHead: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TGqBs9Fx1bM?si=y7ici8DjnmmCPJwv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        contentImg:'<img class ="showcase-img" src="img/2hu/s1.png" alt="guiltTrio_tn" draggable="false" ><img class ="showcase-img" src="img/2hu/s2.png" alt="guiltTrio_tn" draggable="false" ><img class ="showcase-img" src="img/2hu/s3.png" alt="guiltTrio_tn" draggable="false" >',
        projectDuration: "2 weeks",
        gameEngine: "Unity 2D",
        type: "Solo",
        role: "All",
        content: "A 2D vertical shooter and a fan-parody of the Touhou series. My first completed Unity game.",
        imgurl: "../img/tictactoe.png",
        textColor: "#FFFFFF",
        itchLink: "https://hagefx78.itch.io/touhou-endless-black"
    },
    {
        index: 7,
        gameName: "Midnight Snacks",
        contentHead: '<iframe width="560" height="315" src="https://www.youtube.com/embed/XefaRMtpqR4?si=FiAjMQ7RdRuhgMvR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        contentImg:'<img class ="showcase-img" src="img/midnight/msb.png" alt="guiltTrio_tn" draggable="false" ><img class ="showcase-img" src="img/midnight/s1.png" alt="guiltTrio_tn" draggable="false" ><img class ="showcase-img" src="img/midnight/s2.png" alt="guiltTrio_tn" draggable="false" ><img class ="showcase-img" src="img/midnight/s3.png" alt="guiltTrio_tn" draggable="false" ><img class ="showcase-img" src="img/midnight/s4.png" alt="guiltTrio_tn" draggable="false" >',
        projectDuration: "2 weeks",
        gameEngine: "Unity 2D",
        type: "Solo",
        role: "All",
        content: "A 2D puzzle/stealth game where the player plays as a blob that can turn into any human being it eats. You came onto the streets outside an apartment feeling hungry, so you decided to take a quick midnight snack in the apartment.<br><br>The mechanics are simple, you can consume any human as long as you're in blob form. You can morph back and forth to the latest form you've taken. Being spotted in your blob form or somewhere you shouldn't be in as a human (like a cop in some family home) will trigger suspicion.",
        imgurl: "../img/tictactoe.png",
        textColor: "#FFFFFF",
        itchLink: "https://hagefx78.itch.io/midnight-snacks"
    },
  ];


let currentItchLink = '_blank';

function swapGameContent(id)
{  
    const project = projectData.find((item) => item.index === id);
    // $(".projects-content::before").css("background-image", "url('" + project.imgurl + "')");
    $(".projects-content").css("color", project.textColor);
    
    $(".project-content-title").html(project.gameName);

    currentItchLink = project.itchLink;

    let container1 = "<div class='ele-container'>" + project.contentHead +"</div><br>";
    let container2 = "<div class='ele-container2'>" + project.contentImg +"</div><br>";
    let gameCategories ="<div class='game-cat-title'>Project Duration : </div><div class='game-cat'>" + project.projectDuration + "</div><br><div class='game-cat-title'>Made in : </div><div class='game-cat'>" + project.gameEngine + "</div><br><div class='game-cat-title'>Type : </div><div class='game-cat'>" + project.type + "</div><br><div class='game-cat-title'>Role : </div><div class='game-cat'>" + project.role + "</div><br><br>";

    let finalString = container1  + container2  + gameCategories + "<div class='game-text'>" + project.content + "</div>";

    $(".project-content-text").html(finalString);
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

        $(".projects-content").scrollTop(0);
    });
    
    $(".project-content-title-link").click(function() {
        window.open(currentItchLink, '_blank');
    });
});