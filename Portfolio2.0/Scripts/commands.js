function showHelp()
{
    AppendTerminalText("Command List:");
    var concatName = "";
    var subCounter = 0;
    Object.keys(commandList).forEach(element => {
        concatName += "     " + element;
        subCounter++;
        if(subCounter > 4)
        {
            subCounter = 0;
            AppendTerminalText(concatName);
            concatName = "";
        }
    });
    AppendTerminalText(concatName);
}
function clearTerminal()
{
    $(".historyText").remove();
}
function cowsay()
{
    AppendTerminalText(" _______________________");
    AppendTerminalText("< Moo, I'm a cow. FR. >");
    AppendTerminalText(" -----------------------");
    AppendTerminalText("  &bsol;&bsol;");
    AppendTerminalText("   &bsol;&bsol;");
    AppendTerminalText("           . - - .");
    AppendTerminalText("          |o_o |");
    AppendTerminalText("          |:_/   |");
    AppendTerminalText("     //     &bsol;&bsol; &bsol;&bsol;");
    AppendTerminalText("    (|                 | )");
    AppendTerminalText("   /'&bsol;&bsol;_     _/`&bsol;&bsol;");
    AppendTerminalText("   &bsol;&bsol;___)=(___/");
}

function setBackgroundColor(color = '#000000')
{
    $('body').css("background-color", color);
}
function echo(str = "Deez nuts")
{
    if(str.length > 1)
    {
        var concatStr = str[0];
        for(var x = 1; x < str.length;x++)
        {
            concatStr += " " + str[x];
        }
        AppendTerminalText(concatStr);
    }
    else
        AppendTerminalText(str);
}
function man(cmdName)
{
    if(commandList[cmdName]){
        AppendTerminalText(commandList[cmdName].description);
        AppendTerminalText("Usage: <i>" + commandList[cmdName].usage + "</i>");
    }
    else
        AppendTerminalText("No such command exist");
}
function legacy()
{
    window.location.href = "../OutdatedPortfolio/index.html";
}

function flashlight()
{
    var isOn = $(".flashlight").css("display") === "block";
    if(isOn){
        flashLightState = false;
        AppendTerminalText("Flashlight turned off");
        $(".flashlight").css("display", "none");
    }else{
        flashLightState = true;
        AppendTerminalText("Flashlight turned on");
        $(".flashlight").css("display", "block");
    }
}

function crt()
{
    $("body").toggleClass("effects");
}