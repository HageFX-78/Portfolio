
$(document).ready(function() {
    let isDragging = false;
    let offsetX, offsetY;

    $(".handle").on("mousedown", function(event) {
        isDragging = true;
        const terminal = $(this).closest("#draggableTerminal");
        const position = terminal.position();
        offsetX = event.pageX - position.left;
        offsetY = event.pageY - position.top;
        terminal.css("z-index", "999"); // Bring the terminal to the top

        terminal.css("user-select", "none"); // Disable text selection
    });

    $(document).on("mouseup", function() {
        isDragging = false;
        $("#draggableTerminal").css("z-index", "auto");
        $("#draggableTerminal").css("user-select", "auto"); // Enable text selection
    });

    $(document).on("mousemove", function(event) {
        if (isDragging) {
            const terminal = $("#draggableTerminal");
            terminal.css("left", event.pageX - offsetX);
            terminal.css("top", event.pageY - offsetY);
        }
    });
    $("#minimizeButton").on("click", function() {
        $("#draggableTerminal").hide(); // Hide the terminal when the minimize button is clicked
    });


    // Temp Command enter event listener
    $(".inputBox").on("keypress", function(event) {
        if (event.key === "Enter") {
            //Cmd insert
            var inputValue = $(this).val();
            var appendElement = "<div class='terminalText historyText'><span class='gtext'>guest</span><span class='gPort'>@portfolio</span><span class='gCash'>$</span>" + inputValue + "</div>";
            $("#textInputLine").after(appendElement);
            $(this).val("");

            if(inputValue == "help") {
                AppendTerminalText("help - shows other commands");
            }
            else if(inputValue == "clr"){
                $(".historyText").remove();
            }
            else if(inputValue== "cowsay")
            {
                AppendTerminalText("  _________________");
                AppendTerminalText(" < Fuck you, moo! >");
                AppendTerminalText("  -----------------");
                AppendTerminalText("         \\   ^__^");
                AppendTerminalText("          \\  (oo)\\_______");
                AppendTerminalText("             (__)\\       )\\/\\");
                AppendTerminalText("                 ||----w |");
                AppendTerminalText("                 ||     ||");
            }
            else
            {
                AppendTerminalText("No such command found. Type 'help' for more information.");
            }
        }
    });

    function AppendTerminalText(strVal) {
        var appendElement = "<div class='terminalText historyText'><pre>" + strVal + "</pre></div>";
        $("#textInputLine").after(appendElement);
    }
});