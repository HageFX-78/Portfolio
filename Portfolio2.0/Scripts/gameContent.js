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
        content: "pong-content",
        textColor: "#FFFFFF",
        itchLink: "https://hagefx78.itch.io/modified-pong-game-kdu",
        tags: ["stc", "game2d", "solo"]
    },
    {
        index: 1,
        gameName: "Insemination",
        contentHead: 'No Video :C',
        contentImg:'<img class ="showcase-img" src="img/insemination/stage1.png" alt="guiltTrio_tn" draggable="false" ><img class ="showcase-img" src="img/insemination/title.png" alt="guiltTrio_tn" draggable="false">',
        projectDuration: "1 week",
        gameEngine: "Stencyl",
        type: "Solo",
        role: "All",
        content: "insemination-content",
        textColor: "#FFFFFF",
        itchLink: "https://hagefx78.itch.io/insemination",
        tags: ["stc", "game2d", "solo"]
    },
    {
        index: 2,
        gameName: "Hazepoint",
        contentHead: '<iframe width="560" height="315" src="https://www.youtube.com/embed/J2Dco_VgSQA?si=81UODVTmcOMo6eaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        contentImg:'<img class ="showcase-img" src="img/hazepoint/s1.png" alt="guiltTrio_tn" draggable="false" ><img class ="showcase-img" src="img/hazepoint/keyart.png" alt="guiltTrio_tn" draggable="false"><img class ="showcase-img" src="img/hazepoint/s2.png" alt="guiltTrio_tn" draggable="false">',
        projectDuration: "6 months",
        gameEngine: "Unreal Engine 5",
        type: "Solo",
        role: "All",
        content: "hazepoint-content",
        snippets: ['hazepoint-s1', 'hazepoint-s2'],
        textColor: "#FFFFFF",
        itchLink: "https://uowmgames.itch.io/fyp2-hazepoint",
        tags: ["cpp", "ue5", "game3d", "solo"]
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
        content: "guilt-content",
        snippets: ['guilt-s1', 'guilt-s2', 'guilt-s3'],
        textColor: "#FFFFFF",
        itchLink: "https://uowmgames.itch.io/guilt-trip",
        tags: ["cs", "unity", "game2d", "group"]
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
        content: "shadow-content",//Content id redirect
        snippets: ['shadow-s1', 'shadow-s2', 'shadow-s3', 'shadow-s4'],
        textColor: "#FFFFFF",
        itchLink: "https://aarontan1.itch.io/shadow-maiden-less",
        tags: ["cs", "unity", "mobile", "game3d", "group"]
    },
    {
        index: 5,
        gameName: "To Please My Slimy Wife",
        contentHead: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TGPXmKoQxk8?si=ZU4L3yiYilYavOHu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        contentImg:'<img class ="showcase-img" src="img/tpmsw/tn.png" alt="guiltTrio_tn" draggable="false" ><img class ="showcase-img" src="img/tpmsw/tps1.png" alt="guiltTrio_tn" draggable="false" ><img class ="showcase-img" src="img/tpmsw/tps2.png" alt="guiltTrio_tn" draggable="false" ><img class ="showcase-img" src="img/tpmsw/tps3.png" alt="guiltTrio_tn" draggable="false" >',
        projectDuration: "48 hours",
        gameEngine: "Unity 2D",
        type: "Solo (September Sem Jam 2023)",
        role: "All",
        content: "tpmsw-content",
        textColor: "#FFFFFF",
        itchLink: "https://hagefx78.itch.io/to-please-my-slimy-wife",
        tags: ["cs", "unity", "game2d", "solo", "gamejam"]
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
        content: "2huBlack-content",
        textColor: "#FFFFFF",
        itchLink: "https://hagefx78.itch.io/touhou-endless-black",
        tags: ["cs", "unity", "game2d", "solo"]
    },
    {
        index: 7,
        gameName: "Midnight Snacks",
        contentHead: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ulu2YlfJflc?si=DjDSZbU54LGTPyj9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        contentImg:'<img class ="showcase-img" src="img/midnight/msb.png" alt="guiltTrio_tn" draggable="false" ><img class ="showcase-img" src="img/midnight/s1.png" alt="guiltTrio_tn" draggable="false" ><img class ="showcase-img" src="img/midnight/s2.png" alt="guiltTrio_tn" draggable="false" ><img class ="showcase-img" src="img/midnight/s3.png" alt="guiltTrio_tn" draggable="false" ><img class ="showcase-img" src="img/midnight/s4.png" alt="guiltTrio_tn" draggable="false" >',
        projectDuration: "2 weeks",
        gameEngine: "Unity 2D",
        type: "Solo",
        role: "All",
        content: "midnight-content",
        imgurl: "../img/tictactoe.png",
        textColor: "#FFFFFF",
        itchLink: "https://hagefx78.itch.io/midnight-snacks",
        tags: ["cs", "unity", "game2d", "solo"]
    },
    {
        index: 8,
        gameName: "Waddle Quest",
        contentHead: 'No Video :C',
        contentImg:'<img class ="showcase-img" src="img/waddle_quest/stage1.png" alt="guiltTrio_tn" draggable="false" ><img class ="showcase-img" src="img/waddle_quest/s2.png" alt="guiltTrio_tn" draggable="false"><img class ="showcase-img" src="img/waddle_quest/bg.png" alt="guiltTrio_tn" draggable="false" ><img class ="showcase-img" src="img/waddle_quest/gliding-code.png" alt="guiltTrio_tn" draggable="false"><img class ="showcase-img" src="img/waddle_quest/slapping-code.png" alt="guiltTrio_tn" draggable="false"><img class ="showcase-img" src="img/waddle_quest/sliding-code.png" alt="guiltTrio_tn" draggable="false">',
        projectDuration: "2 week",
        gameEngine: "Stencyl",
        type: "Solo",
        role: "All",
        content: "waddle-content",
        textColor: "#FFFFFF",
        itchLink: "https://hagefx78.itch.io/waddle-quest",
        tags: ["stc", "game2d", "solo"]
    },
    {
        index: 9,
        gameName: "Happy Combat Train",
        contentHead: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4AuPsQPdxWA?si=qmTKVA7rIBaxscvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        contentImg:'<img class ="showcase-img" src="img/waddle_quest/stage1.png" alt="guiltTrio_tn" draggable="false">',
        projectDuration: "48 Hours",
        gameEngine: "Unity",
        type: "2 Members",
        role: "All",
        content: "train-content",
        textColor: "#FFFFFF",
        itchLink: "https://hagefx78.itch.io/happy-combat-train",
        tags: ["cs", "unity", "game3d", "group", "gamejam"]
    }
  ];
