
$(document).ready(function() {
    $(".modal-box-back").click(function() {
        $(".modal-box-back").hide();
    });

    $("#fumo").click(function() {
        $(".modal-box-back").show();
    });


    // $(document).keypress(function (event) {
 

    // });
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

