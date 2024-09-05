// Indexes are explicitely defined to allow for easy reordering of projects
const jamDataMap = {
	0: {
		htmlFile: "slimywife",
		gameName: "To Please My Slimy Wife",
		summary: "A 2D game with softbody physics made for a 48 hour jam!",
		contentHead:
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/TGPXmKoQxk8?si=ZU4L3yiYilYavOHu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
		logoImg: "img/tpmsw/tn.png",
		thumbnail: "img/tpmsw/tn.png",
		background: "img/tpmsw/tn.png",
		contentImg: [
			"img/tpmsw/tn.png",
			"img/tpmsw/tps1.png",
			"img/tpmsw/tps2.png",
			"img/tpmsw/tps3.png",
		],
		projectDuration: "48 hours",
		type: "Solo (September Sem Jam 2023)",
		role: "All",
		textColor: "#FFFFFF",
		itchLink: "https://hagefx78.itch.io/to-please-my-slimy-wife",
		tags: ["cs", "unity", "game2d", "solo"],
		tools: [tIcons.cs, tIcons.unity, tIcons.photoshop, tIcons.vscode],
	},
	1: {
		htmlFile: "happy_combat_train",
		gameName: "Happy Combat Train",
		contentHead: "",
		logoImg: "img/hazepoint/logo.png",
		contentImg: [],
		projectDuration: "48 hours",
		type: "Group (Global Game Jam 2024)",
		role: "Programmer",
		textColor: "#FFFFFF",
		itchLink: "https://hagefx78.itch.io/to-please-my-slimy-wife",
		tags: [],
	},
};

const gameDataMap = {
	0: {
		htmlFile: "hazepoint",
		summary:
			"3D First-person mech sim where you hunt a giant kaiju! Made in Unreal 5 for FYP",
		gameName: "Hazepoint",
		contentHead:
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/J2Dco_VgSQA?si=81UODVTmcOMo6eaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
		logoImg: "img/hazepoint/logo.png",
		thumbnail: "img/hazepoint/tn.png",
		background: "img/hazepoint/promotional_art_nologo.png",
		contentImg: [
			"img/hazepoint/s1.png",
			"img/hazepoint/s2.png",
			"img/hazepoint/s3.png",
			"img/hazepoint/keyart.png",
		],
		projectDuration: "6 months",
		type: "Solo",
		role: "All",
		textColor: "#FFFFFF",
		itchLink: "https://uowmgames.itch.io/fyp2-hazepoint",
		tags: ["cpp", "ue5", "game3d", "solo"],
		tools: ["cpp", "ue5", "blender", "rider", "photoshop"],
	},
	1: {
		htmlFile: "shadow",
		gameName: "Shadow",
		summary:
			"3D + 2D platformer puzzle game for mobile utiliizing switching between a 2D and 3D character",
		contentHead:
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/XefaRMtpqR4?si=FiAjMQ7RdRuhgMvR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
		logoImg: "img/shadow/shadow1.png",
		thumbnail: "img/shadow/shadow1.png",
		background: "img/shadow/shadow2.png",
		contentImg: [
			"img/shadow/shadow2.png",
			"img/shadow/shadow3.png",
			"img/shadow/shadow4.png",
		],
		projectDuration: "6 months",
		type: "Group (7 members)",
		role: "Generalist Programmer / Tools Programmer",
		textColor: "#FFFFFF",
		itchLink: "https://aarontan1.itch.io/shadow-maiden-less",
		tags: ["cs", "unity", "mobile", "game3d", "group"],
		tools: ["cs", "unity", "photoshop", "vscode"],
	},
	2: {
		htmlFile: "guilttrip",
		gameName: "Guilt Trip",
		summary:
			"2D top-down turn-based game where you fight with words instead of brute",
		contentHead:
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/etgTpAIKsto?si=q-LrCChLOiW9RqIx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
		logoImg: "img/gt/gt1.png",
		thumbnail: "img/gt/gt1.png",
		background: "img/gt/gt3.png",
		contentImg: ["img/gt/gt2.png", "img/gt/gt3.png", "img/gt/gt1.png"],
		projectDuration: "6 months",
		type: "Group (7 members)",
		role: "Generalist Programmer / Tools Programmer",
		textColor: "#FFFFFF",
		itchLink: "https://uowmgames.itch.io/guilt-trip",
		tags: ["cs", "unity", "game2d", "group"],
		tools: ["cs", "unity", "photoshop", "vscode"],
	},
};
const sideDataMap = {
	0: {
		htmlFile: "fumo_engine",
		gameName: "Fumo Engine",
		summary:
			"A 2D game engine made in C++ with GLFW by OpenGL with ECS architecture.",
		contentHead:
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/XefaRMtpqR4?si=FiAjMQ7RdRuhgMvR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
		thumbnail: "img/side/fumoEngine.png",

		tags: ["cs", "unity", "mobile", "game3d", "group"],
		tools: ["cs", "unity", "photoshop", "vscode"],
	},
	1: {
		htmlFile: "lua8",
		gameName: "Lua Chip 8",
		summary:
			"A 2D game engine made in C++ with GLFW by OpenGL with ECS architecture.",
		contentHead:
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/XefaRMtpqR4?si=FiAjMQ7RdRuhgMvR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
		thumbnail: "img/side/lua8.png",

		tags: ["cs", "unity", "mobile", "game3d", "group"],
		tools: ["cs", "unity", "photoshop", "vscode"],
	},
};
