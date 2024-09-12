// on document ready

$(document).ready(function () {
	// Load project items
	InitProjectItems("#game-projects-container", gameDataMap, "game");
	InitProjectItems("#jam-projects-container", jamDataMap, "jam");
	InitProjectItems("#side-projects-container", sideDataMap, "side");

	$(".project-item-text").hide();
	$(".project-item").hover(function () {
		var textElement = $(this).find(".project-item-text");
		textElement.fadeToggle("fast");
	});

	// Open project modal
	$(".project-item").click(function () {
		$("#modal-box-container").html(
			"<div class='loader-container'><div class='loader'></div></div>"
		);
		$(".modal-box-back").show();

		var projectID = parseInt($(this).attr("readID"));
		var projectType = $(this).attr("dirType");

		let dirData = GetProjectDirectory(projectType, projectID);
		var directory = dirData[0];
		var project = dirData[1];

		// Load html content of the project
		$("#modal-box-container").load(
			"Portfolio2.0/" + directory + "/" + project.htmlFile + ".html",
			function (response, status, xhr) {
				GenerateProjectContent(
					response,
					status,
					xhr,
					project,
					projectType
				);
			}
		);
	});
});

// -------------------- Functions
function InitProjectItems(containerString, dataMap, dType) {
	var projectBody = "";
	for (var index = 0; index < Object.keys(dataMap).length; index++) {
		var element = dataMap[index];
		projectBody +=
			'<div dirType="' +
			dType +
			'" class="project-item" readID="' +
			index +
			'">';
		projectBody +=
			'<img src="' + element.thumbnail + '" draggable="false"/>';
		projectBody += '<div class="project-item-text">';
		projectBody += "<b>" + element.gameName + "</b>";
		projectBody += "<p>" + element.summary + "</p>";
		projectBody +=
			'<div class="project-thumbnail-tags">' +
			GetProjectTags(element.tags) +
			"</div></div></div>";
	}
	$(containerString).html(projectBody);
}

function GetProjectTags(tagArray) {
	let resultText = "";
	console.log(tagArray);
	tagArray.forEach((element) => {
		resultText +=
			"<div class='thumbnail-tags' style='background-color:" +
			projectTags[element][1] +
			"'>" +
			projectTags[element][0] +
			"</div>";
	});

	return resultText;
}

function GetProjectDirectory(projectType, ID) {
	let dir, project;
	switch (projectType) {
		case "game":
			dir = "GameProjects";
			project = gameDataMap[ID];
			break;
		case "jam":
			dir = "JamProjects";
			project = jamDataMap[ID];
			break;
		case "side":
			dir = "SideProjects";
			project = sideDataMap[ID];
			break;
	}

	return [dir, project];
}
const colorClass = {
	bliss: "bg-gradient-purpleBliss",
	combi: "bg-gradient-combi",
};

function RemoveBackgroundClass() {
	$("#modal-box-container").css("background-image", "");

	$("#modal-box-container").removeClass();
	$("#modal-box-container").addClass("borderBlack5pxNS");
}

function GenerateProjectContent(response, status, xhr, project, projectType) {
	if (status == "error") {
		var msg = "Page not found or unfinished: ";
		$("#modal-box-container").html(msg + xhr.status + " " + xhr.statusText);
	} else if (status == "success") {
		var projectHeader = "",
			projectContent = "",
			projectFooter = "";

		// Set background image if it exists

		if (project.background) {
			RemoveBackgroundClass();
			if (project.background == "combi") {
				$("#modal-box-container").addClass(colorClass.combi);
			} else if (project.background == "bliss") {
				$("#modal-box-container").addClass(colorClass.bliss);
			} else {
				$("#modal-box-container").addClass("bg-image");
				$(".bg-image").css(
					"background-image",
					"url(" + project.background + ")"
				);
			}
		}

		// Side project doesn't need header or divider
		if (projectType != "side") {
			// ---- Project Header ----
			projectHeader = '<div class="project-header">';

			// Header Top Section with tags and link
			var headerTop = '<div class="project-header-top">';

			// Project tags
			var projectTags = '<div class="project-tags">';
			project.tools.forEach((element) => {
				projectTags += tagIcons[element];
			});
			projectTags += "</div>";
			headerTop += projectTags;

			// Project link
			var projectLink =
				"<div class='project-link'><div class='project-link-text' onclick='window.open(\"" +
				project.itchLink +
				"\", \"_blank\")'>Itch Link!<i style='font-size:24px' class='fa'>&#xf08e;</i></div></div>";
			headerTop += projectLink + "</div>";

			// Add logo and complete header
			projectHeader +=
				headerTop +
				(project.logoImg == ""
					? "<h1>" + project.gameName + "</h1></div>"
					: "<img src='" + project.logoImg + "'/></div>");

			// ---- Project Content ----
			projectContent = '<div class="project-content-container">';
			projectContent +=
				"<div class='project-vid'>" +
				project.contentHead +
				"</div><br><br>";

			// Project gallery
			projectContent += "<div class='project-gallery'>";
			project.contentImg.forEach((element) => {
				projectContent +=
					"<img class='showcase-img' src='" +
					element +
					"' draggable='false'/>";
			});
			projectContent += "</div><br><br>";
		} else {
			projectHeader =
				'<div class="project-header-side">' +
				project.gameName +
				"</div>";
			projectContent = '<div class="project-content-container-side">';
			var projectTags = '<div class="project-content-tags-side">';
			project.tools.forEach((element) => {
				projectTags += tagIcons[element];
			});
			projectTags += "</div>";
			projectContent += projectTags;
		}

		// ---- Project Footer ----
		projectFooter = '<div class="project-footer"></div>';

		// Append content and highlight code snippets
		$("#modal-box-container").html(
			projectHeader + projectContent + response + "</div>"
		);
		$("#modal-box-container").append(projectFooter);

		// Initialize Prism.js for syntax highlighting
		Prism.highlightAll();
	}
}

// -------------------------------- LEGACY
