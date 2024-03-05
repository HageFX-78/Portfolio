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
    },
    'legacy':{
        execute: legacy,
        description: "Redirects to the old portfolio site",
        usage: "legacy"
    }

    
};


function AppendTerminalText(strVal) {
    var appendElement = "<div class='terminalText historyText'><pre>" + strVal + "</pre></div>";
    $("#textInputLine").after(appendElement);
}


let animationSpeed = 400;
let terminalState = true;
let terminalAnimating = false;
let resetPosX = 0;
let resetPosY = 0;

var hasTouchScreen = false;


function ToggleTerminal() {
    if(!terminalState){
        

        terminalAnimating = true;
        $(".terminal").show();
        if(hasTouchScreen)
        {
            $(".terminal").height('55%');
            $(".terminal").width('95%');
        }
        else
        {
            $(".terminal").height('55%');
            $(".terminal").width('45%');
        }
        
        $("#draggableTerminal").animate({ top: resetPosY, left: resetPosX }, animationSpeed, function() {
            terminalState = true;
            terminalAnimating = false;
        });
    }
    else{
        terminalAnimating = true;
        $(".terminal").height(0);
        $(".terminal").width(0);
        $("#draggableTerminal").animate({ top: '120%', left: '120%' }, animationSpeed, function() {
            terminalState = false;
            $(".terminal").hide();
            terminalAnimating = false;
        });
    }
}


$(document).ready(function() {
    
    // Check if the user is on a touch screen device
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
        hasTouchScreen = true;
        resetPosX = "0";
        resetPosY = "20%";
    }
    else{
        resetPosX = "25%";
        resetPosY = "20%";
    }


    // Start on terminal
    AppendTerminalText("Welcome to my portfolio! \\(@^0^@)/ Type 'help' for a list of commands. <br><br> &nbsp;&nbsp;&nbsp;<i>Tip: Press space to toggle the terminal.</i><br><br>Btw there is a powerful command that could break this page if you know your stuff xD <br><br>");

    ToggleTerminal();
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
        $("#draggableTerminal").css("z-index", "999");
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