// Indexes are explicitely defined to allow for easy reordering of projects
const jamDataMap ={
    0: {
        htmlFile: "to-please-my-slimy-wife.html",
        gameName: "To Please My Slimy Wife",
        contentHead: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TGPXmKoQxk8?si=ZU4L3yiYilYavOHu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        logoImg: "img/hazepoint/logo.png",
        contentImg: [
            'img/tpmsw/tn.png',
            "img/tpmsw/tps1.png",
            "img/tpmsw/tps2.png",
            "img/tpmsw/tps3.png",
        ],
        projectDuration: "48 hours",
        type: "Solo (September Sem Jam 2023)",
        role: "All",
        textColor: "#FFFFFF",
        itchLink: "https://hagefx78.itch.io/to-please-my-slimy-wife",
        tags: []
    },
    1: {
        htmlFile: "happy_combat_train.html",
        gameName: "Happy Combat Train",
        contentHead: '',
        logoImg: "img/hazepoint/logo.png",
        contentImg: [],
        projectDuration: "48 hours",
        type: "Group (Global Game Jam 2024)",
        role: "Programmer",
        textColor: "#FFFFFF",
        itchLink: "https://hagefx78.itch.io/to-please-my-slimy-wife",
        tags: []
    }
}

const gameDataMap = {
    0: {
        htmlFile: "hazepoint",
        summary: "3D First-person mech sim where you hunt a giant kaiju! Made in Unreal 5 for FYP",
        gameName: "Hazepoint",
        contentHead: '<iframe width="560" height="315" src="https://www.youtube.com/embed/J2Dco_VgSQA?si=81UODVTmcOMo6eaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        logoImg: "img/hazepoint/logo.png",
        thumbnail: "img/hazepoint/tn.png",
        contentImg:[
            "img/hazepoint/s1.png",
            "img/hazepoint/s2.png",
            "img/hazepoint/s3.png",
            "img/hazepoint/keyart.png"
        ],
        projectDuration: "6 months",
        type: "Solo",
        role: "All",
        textColor: "#FFFFFF",
        itchLink: "https://uowmgames.itch.io/fyp2-hazepoint",
        tags: ["cpp", "ue5", "game3d", "solo"],
        tools: ["cpp", "ue5", "blender","rider","photoshop"]
    },
    1: {
        htmlFile: "shadow",
        gameName: "Shadow",
        summary: "3D + 2D platformer puzzle game for mobile utiliizing switching between a 2D and 3D character",
        contentHead: '<iframe width="560" height="315" src="https://www.youtube.com/embed/XefaRMtpqR4?si=FiAjMQ7RdRuhgMvR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        logoImg: "img/shadow/shadow1.png",
        thumbnail: "img/shadow/shadow1.png",
        contentImg:[
            'img/shadow/shadow2.png',   
            'img/shadow/shadow3.png',
            'img/shadow/shadow4.png'
        ],
        projectDuration: "6 months",
        type: "Group (7 members)",
        role: "Generalist Programmer / Tools Programmer",
        textColor: "#FFFFFF",
        itchLink: "https://aarontan1.itch.io/shadow-maiden-less",
        tags: ["cs", "unity", "mobile", "game3d", "group"],
        tools: ["cs", "unity", "photoshop", "vscode"]
    }
}
const sideDataMap = {
    0: {
        htmlFile: "fumo_engine",
        gameName: "Fumo Engine",
        summary: "A 2D game engine made in C++ with GLFW by OpenGL with ECS architecture.",
        contentHead: '<iframe width="560" height="315" src="https://www.youtube.com/embed/XefaRMtpqR4?si=FiAjMQ7RdRuhgMvR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        thumbnail: "img/shadow/shadow1.png",

        tags: ["cs", "unity", "mobile", "game3d", "group"],
        tools: ["cs", "unity", "photoshop", "vscode"]
    }
}