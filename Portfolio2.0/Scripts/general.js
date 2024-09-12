var flashLightState = false; // Global flashlight state
var categorySelected = false;

$(document).ready(function () {
	// --------------------------- Main modal box for projects
	$(".modal-box-back").click(function () {
		ClearModalBox();
	});
	$("#modal-box-container").click(function (event) {
		event.stopPropagation(); // Stop event propagation to prevent closing the modal
	});

	// --------------------------- Project item instances, hover for summary and stuff

	// Project tile hover
	$(".tile-item").hover(
		function () {
			$(this).find(".tile-project-text").css({
				"background-color": "rgba(0,0,0,0.4)",
				"backdrop-filter": "blur(5px)",
				transform: "scale(1.1)",
			});
		},
		function () {
			$(this).find(".tile-project-text").css({
				"background-color": "rgba(0,0,0,0)",
				"backdrop-filter": "blur(0px)",
				transform: "scale(1)",
			});
		}
	);

	// Project tile click
	$(".tile-item").click(function () {
		if (!categorySelected) {
			categorySelected = true;

			var projectCategory = $(this).attr("ptype");
			$("#tile-projects-container").css({
				"grid-template-areas":
					' "' +
					$(this).css("grid-area") +
					'" "' +
					projectCategory +
					'" ',
				"grid-template-rows": "20% 80%",
				"grid-template-columns": "100%",
			});
		} else {
			categorySelected = false;

			if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
				$("#tile-projects-container").css({
					"grid-template-areas": ' "L1" "R1" "R2" ',
					"grid-template-rows": "33% 33% 33%",
					"grid-template-columns": "100%",
				});
			} else {
				$("#tile-projects-container").css({
					"grid-template-areas": ' "L1 R1" "L1 R2" ',
					"grid-template-rows": "50% 50%",
					"grid-template-columns": "50% 50%",
				});
			}
		}
	});

	// --------------------------- Initialize portfolio about me
	const languagesIknow = [
		tagIcons.cpp,
		tagIcons.cs,
		tagIcons.lua,
		tagIcons.css,
		tagIcons.html,
		tagIcons.js,
		tagIcons.jquery,
		tagIcons.java,
		tagIcons.php,
		tagIcons.vbasic,
		tagIcons.python,
		tagIcons.ruby,
	];
	const toolsIuse = [
		tagIcons.ue5,
		tagIcons.unity,
		tagIcons.stc,
		tagIcons.vscode,
		tagIcons.vstudio,
		tagIcons.rider,
		tagIcons.photoshop,
		tagIcons.blender,
		tagIcons.opengl,
		tagIcons.powershell,
		tagIcons.mysql,
		tagIcons.git,
		tagIcons.github,
		tagIcons.gitlab,
	];
	languagesIknow.forEach((element) => {
		$("#langIcon").append(element);
	});
	toolsIuse.forEach((element) => {
		$("#toolsIcon").append(element);
	});
	//----------------------------------------------------------------- Mouse functions
	//ON mouse mmove move background slightly to create parallax effect

	$(document).on("mousemove", function (e) {
		var x = e.pageX / $(window).width();
		var y = e.pageY / $(window).height();
		$(".parallax-back").css(
			"transform",
			"translate(-" + x * 50 + "px, -" + y * 50 + "px)"
		);

		// Move flashlight element where center is mouse position
		if (!flashLightState) return;
		$(".flashlight").css({
			left: e.pageX - $(window).width(),
			top: e.pageY - $(window).height(),
		});
	});
});

// -------------------------------- Horizontal scrolling on screenshots
$(document).on("wheel", ".modal-box-side-image-container", function (e) {
	var $scrollArea = $(".modal-box-side-image-container");
	if ($scrollArea.get(0).scrollWidth <= $scrollArea.get(0).clientWidth) {
		// No need to scroll horizontally if there's no overflow
		return;
	}

	var scrollAmount = e.originalEvent.deltaY;

	$(".modal-box-side-image-container").on("wheel", function (e) {
		e.preventDefault();
		$(".modal-box-side-image-container").scrollLeft(
			$(".modal-box-side-image-container").scrollLeft() + scrollAmount
		);
	});
});

function ClearModalBox() {
	$(".modal-box-back").hide();
	$("#modal-box-container").html("");
}
