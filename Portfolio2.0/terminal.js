const commandList = {
    'help': {
        execute: showHelp,
        description: "Show all commands",
        usage: "help"
    },
    'clr': {
        execute: clearTerminal,
        description: "Clears the terminal",
        usage: "clr"
    },
    'cowsay': {
        execute: cowsay,
        description: "Moo",
        usage: "cowsay"
    },
    'color': {
        execute: setBackgroundColor,
        description: "Sets the background color",
        usage: "color [color]",
        args: 1
    },
    'echo': {
        execute: echo,
        description: "Prints any following text",
        usage: "echo [args]"
    },
    'man':{
        execute: man,
        description: "Shows the manual for a command",
        usage: "man [cmd]"
    }
    
};


function AppendTerminalText(strVal) {
    var appendElement = "<div class='terminalText historyText'><pre>" + strVal + "</pre></div>";
    $("#textInputLine").after(appendElement);
}


let animationSpeed = 600;
let terminalState = true;
let terminalAnimating = false;
function ToggleTerminal() {
    if(!terminalState){
        terminalAnimating = true;
        $(".terminal").height('55%');
        $(".terminal").width('45%');
        $("#draggableTerminal").animate({ top: "25%", left: "25%" }, animationSpeed, function() {
            terminalState = true;
            $("terminal").show();
            terminalAnimating = false;
        });
    }
    else{
        terminalAnimating = true;
        $(".terminal").height(0);
        $(".terminal").width(0);
        $("#draggableTerminal").animate({ top: '200%', left: '200%' }, animationSpeed, function() {
            terminalState = false;
            $("terminal").hide();
            terminalAnimating = false;
        });
    }
}

$(document).ready(function() {
    //ToggleTerminal();


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
        ToggleTerminal();
    });

    $("#terminal-toggle").on("click", function() {
        ToggleTerminal();
    });

    // Temp Command enter event listener
    $(".inputBox").keypress(function (event) {
        if (event.key === "Enter") {
            //Cmd insert
            var inputValue = $(this).val();
            var appendElement = "<div class='terminalText historyText'><span class='gtext'>guest</span><span class='gPort'>@portfolio</span><span class='gCash'>$</span><pre>" + inputValue + "</pre></div>";
            $("#textInputLine").after(appendElement);
            $(this).val("");

            const inputParts = inputValue.split(/\s+/);
            const commandName = inputParts[0];
            const optionalArgs = inputParts.slice(1); // Optional args to be processed by each cmd function

            const commandInfo = commandList[commandName];
            if (commandInfo) {
                if(optionalArgs.length > 0)
                    commandInfo.execute(optionalArgs);
                else
                    commandInfo.execute();
            } else {
                AppendTerminalText("No such command found. Type 'help' for more information.");
            }
        }
    });

    //Key press terminal toggle
    $(document).keypress(function (event) {
 
        if(event.keyCode == 32 && !terminalAnimating)
        {

            if(!$(".inputBox").is(":focus")) {
                $("#terminal-toggle").trigger("click");
            }
        }   
    });
});