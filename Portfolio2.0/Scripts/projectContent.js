// Indexes are explicitely defined to allow for easy reordering of projects
const jamDataMap = {
	0: {
		htmlFile: "slimywife",
		gameName: "To Please My Slimy Wife",
		summary: "A 2D game with softbody physics made for a 48 hour jam!",
		contentHead:
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/TGPXmKoQxk8?si=ZU4L3yiYilYavOHu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
		logoImg: "img/projects/tpmsw/logo.png",
		thumbnail: "img/projects/tpmsw/tn.png",
		background: "img/projects/tpmsw/back.png",
		contentImg: [
			"img/projects/tpmsw/tn.png",
			"img/projects/tpmsw/tps1.png",
			"img/projects/tpmsw/tps2.png",
			"img/projects/tpmsw/tps3.png",
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
		htmlFile: "happycombattrain",
		gameName: "Happy Combat Train",
		summary: "3D local multiplayer game where you fight as trains ",
		contentHead:
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/4AuPsQPdxWA?si=RZdDl_-8h2PZ2QIi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
		logoImg: "",
		thumbnail: "img/projects/happytrain/thumb.png",
		background: "bliss",
		contentImg: [
			"img/projects/happytrain/s1.png",
			"img/projects/happytrain/s2.png",
			"img/projects/happytrain/s3.png",
			"img/projects/happytrain/s4.png",
		],
		projectDuration: "48 hours",
		type: "Group (Global Game Jam 2024) [ 2 members ]",
		role: "Programmer",
		textColor: "#FFFFFF",
		itchLink: "https://hagefx78.itch.io/happy-combat-train",
		tags: ["cs", "unity", "game3d", "group"],
		tools: [tIcons.cs, tIcons.unity, tIcons.photoshop, tIcons.vscode],
	},
	2: {
		htmlFile: "planetarydecay",
		gameName: "Planetary Decay",
		summmary: "3D local multiplayer game where you fight as trains ",
		contentHead: "",
		logoImg: "img/projects/planetD/tn.png",
		thumbnail: "img/projects/planetD/tn.png",
		background: "img/projects/planetD/back.jpg",
		contentImg: [
			"img/projects/planetD/s1.png",
			"img/projects/planetD/s2.png",
			"img/projects/planetD/s3.png",
			"img/projects/planetD/s4.png",
		],
		projectDuration: "48 hours",
		type: "Group (Global Game Jam 2024)",
		role: "Programmer",
		textColor: "#FFFFFF",
		itchLink: "https://hagefx78.itch.io/planatary-decay",
		tags: ["cs", "unity", "game2d", "solo"],
		tools: [tIcons.cs, tIcons.unity, tIcons.photoshop, tIcons.vscode],
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
		logoImg: "img/projects/hazepoint/logo.png",
		thumbnail: "img/projects/hazepoint/tn.png",
		background: "img/projects/hazepoint/promotional_art_nologo.png",
		contentImg: [
			"img/projects/hazepoint/s1.png",
			"img/projects/hazepoint/s2.png",
			"img/projects/hazepoint/s3.png",
			"img/projects/hazepoint/keyart.png",
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
		logoImg: "img/projects/shadow/shadow1.png",
		thumbnail: "img/projects/shadow/shadow1.png",
		background: "img/projects/shadow/shadow2.png",
		contentImg: [
			"img/projects/shadow/shadow2.png",
			"img/projects/shadow/shadow3.png",
			"img/projects/shadow/shadow4.png",
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
		logoImg: "",
		thumbnail: "img/projects/gt/gt1.png",
		background: "img/projects/gt/gt3.png",
		contentImg: [
			"img/projects/gt/gt2.png",
			"img/projects/gt/gt3.png",
			"img/projects/gt/gt1.png",
		],
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
		background: "bliss",

		tags: ["cpp"],
		tools: [tIcons.cpp, tIcons.vstudio, tIcons.opengl],
	},
	1: {
		htmlFile: "lua8",
		gameName: "Lua Chip 8",
		summary:
			"A 2D game engine made in C++ with GLFW by OpenGL with ECS architecture.",
		contentHead:
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/XefaRMtpqR4?si=FiAjMQ7RdRuhgMvR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
		thumbnail: "img/side/lua8.png",
		background: "bliss",

		tags: ["cs", "unity", "mobile", "game3d", "group"],
		tools: ["cs", "unity", "photoshop", "vscode"],
	},
};