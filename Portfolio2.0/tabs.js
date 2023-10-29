const projectData = [
    {
        index: 0,
        gameName: "Pong",
        contentHead: 'No Video :C',
        contentImg:'No Images :(',
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
        contentHead: 'No Video :C',
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
        contentHead: 'No Video Yet :C',
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
        content: "<b>Contributions :</b><ul><li>Developed and maintained a tool to generate interactable flat 2D shadows from 3D models</li><li>Created the mechanic of light exclusion</li><li>Rigged and animated 2D skeletal meshes of enemy sprites</li><li>Worked on some puzzles</li></ul><br>The way the shadow script genrally works is it generates shadows of 3D models and place it in the scene, each shadow have a script that determines its size and position based on the distance to the light source and wall casted on.<br><br><b>For a basic flow of sequence :</b><ol><li>Assuming you have a 3D object to generate for, instantiate copy of object in front of sub camera.</li><li>Adjust translation and size to fit the camera lens</li><li>Snap a photo with background removed</li><li>Save the picture as sprite and apply some settings to it</li><li>Create an empty object and place a sprite rendere component on it</li><li>Attach to the original 3D game object and adjust the size and positon of the spirite based on distance to the \"main light source\" and \"main wall\"</li></ol><img src='img/shadow/g3.gif' alt='guiltTrio_tn' draggable='false' /><br><br><b>The main script for shadow generated is as follows :</b><br><br>This section is 'snapshot' phase referenced from a screenshot plugin, while this part maybe heavily referenced, the rest of the code are original.<br><br>This code involves the screenshot action and converting into a sprite.<br><br><a href='https://github.com/AaronTan1/GPS2Shadow/blob/7415065366055427e3e728f703ba873a3ac4e3ef/Assets/Scripts/Shadow2DTest/RefreshStaticShadows.cs#L334' target='_blank'>Full Snippet link</a><div class='snippet-container shadow-s1'></div>Then store the sprite in a specified folder, and apply texture settings with UNITY_EDITOR, shadow generation is only done once in the editor as this is a mobile game.<br><br> To change shadow shape in real-time we had a workaround that we did not have the chance to apply but, the idea is to generate multiple frames of the object at different angles then animate between them.<div class='snippet-container shadow-s2'></div><br><br><b>Note</b><br><br>The rest of the code can be found at the snippet link from the first snippet.<br><br>The idea for this way of generating shadows was conceived on week 2 of the project when it was approved by the lecturer, the rest of the time was spent on improving the tool and making it more user friendly.<br><br>It was somewhat of a cheese way that doesn't require real time shadow rendering which is a heavy task for mobile devices, but it was a fun experiment. The other reason for this method is normal 3D shadow has a complex shape, which makes it hard to build a 2D level. <br><br>Our method however snaps the objects in orthographic mode therefore generating flat sprites, allowing for easy level blocking.<br><br><b>Week 2 Concept Demo :</b><br><br><img src='img/shadow/g1.gif' alt='guiltTrio_tn' draggable='false' />",
        snippets: ['shadow-s1', 'shadow-s2'],
        imgurl: "../img/tictactoe.png",
        textColor: "#FFFFFF",
        itchLink: "https://aarontan1.itch.io/shadow-maiden-less"
    },
    {
        index: 5,
        gameName: "To Please My Slimy Wife",
        contentHead: 'No Video :C',
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
        contentHead: 'No Video :C',
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

    $(".projects-content").css("color", project.textColor);
    
    $(".project-content-title").html(project.gameName);

    currentItchLink = project.itchLink;

    let container1 = "<div class='ele-container'>" + project.contentHead +"</div><br>";
    let container2 = "<div class='ele-container2'>" + project.contentImg +"</div><br>";
    let gameCategories ="<div class='game-cat-title borderBlack3pxNS'>Project Duration : </div><div class='game-cat borderOrange3pxNS'>" + project.projectDuration + "</div><br><div class='game-cat-title borderBlack3pxNS'>Made in : </div><div class='game-cat borderOrange3pxNS'>" + project.gameEngine + "</div><br><div class='game-cat-title borderBlack3pxNS'>Type : </div><div class='game-cat borderOrange3pxNS'>" + project.type + "</div><br><div class='game-cat-title borderBlack3pxNS'>Role : </div><div class='game-cat borderOrange3pxNS'>" + project.role + "</div><br><br>";

    let finalString = container1  + container2  + gameCategories + "<div class='game-text borderBlack3pxNS'>" + project.content + "</div>";

    $(".project-content-text").html(finalString);

    //Gist refused to connect
    // $("#gist-frame").attr("src", gistURL);

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
        const textToCopy = $(this).html();
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