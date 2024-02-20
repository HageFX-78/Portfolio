
$(document).ready(function() {
    $(".modal-box-back").click(function() {
        $(".modal-box-back").hide();
    });

    $(".modal-box-container").click(function(event) {
        event.stopPropagation(); // Stop event propagation to prevent closing the modal
    });

    $("#fumo").click(function() {
        $(".modal-box-container").html("");
        $(".modal-box-container").load("Portfolio2.0/SideWorks/fumo_engine.html", function() {
            // Callback function to execute after content is loaded
            Prism.highlightAll(); // Initialize Prism.js after content is loaded
            $(".modal-box-back").show();
        });
        
    });
});


// Horizontal scrolling on screenshots
$(document).on('wheel', '.ele-container2', function (e) {
    var $scrollArea = $('.ele-container2');
    if ($scrollArea.get(0).scrollWidth <= $scrollArea.get(0).clientWidth) {
        // No need to scroll horizontally if there's no overflow
        return;
    }

    var scrollAmount = e.originalEvent.deltaY;

    $('.ele-container2').on('wheel', function (e) {
        e.preventDefault();
        $('.ele-container2').scrollLeft($('.ele-container2').scrollLeft() + scrollAmount);
    });
});

