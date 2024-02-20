
$(document).ready(function() {
    $(".modal-box-back").click(function() {
        $(".modal-box-back").hide();
    });

    $(".modal-box-container").click(function(event) {
        event.stopPropagation(); // Stop event propagation to prevent closing the modal
    });

    $("#fumo").click(function() {
        $(".modal-box-back").show();
        fetchTextFile("Portfolio2.0/SideWorks/fumo_engine.html").then(text => insertTextContent(text));
    });


    // $(document).keypress(function (event) {
 

    // });

    // Function to fetch text file content
    function fetchTextFile(path) {
        return fetch(path)
            .then(response => response.text())
            .catch(error => console.error('Error fetching text file:', error));
    }

    // Function to insert text content into div
    function insertTextContent(text) {
        $(".modal-box-container").html(text);
    }
    
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

