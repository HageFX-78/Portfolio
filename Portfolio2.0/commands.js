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
    AppendTerminalText("  _________________");
    AppendTerminalText(" < Fuck you, moo! >");
    AppendTerminalText("  -----------------");
    AppendTerminalText("         \\   ^__^");
    AppendTerminalText("          \\  (oo)\\_______");
    AppendTerminalText("             (__)\\       )\\/\\");
    AppendTerminalText("                 ||----w |");
    AppendTerminalText("                 ||     ||");
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