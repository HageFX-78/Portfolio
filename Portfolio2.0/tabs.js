$(document).ready(function() {
    $(".portfolio-tab").click(function() {
        const index = $(this).index();
        $(".portfolio-tab").removeClass("active");
        $(this).addClass("active");
        $(".portfolio-tab-pane").removeClass("active");
        $(".portfolio-tab-pane:eq(" + index + ")").addClass("active");
    });
});