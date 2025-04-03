//Conversation functions that are called once to initiate by TriggerDialigue.cs
public void startConversation(TextAsset targetFile)
{
    currentText = "";
    canInput = true;

    dialogueUI.SetActive(true);
    dialogueActive = true;
    dialogueCooldown = true;
    curLineNum = 0;

    //Dialogue lines, split by line breaks in text file
    dls = targetFile.text.Split('\n');
    dlsSize = dls.Length;
    Time.timeScale = 0;
    displayCurrentDialogue();
}
//Overloaded funciton to start conversations with locations to lerp camera to mid convo
public void startConversation(TextAsset targetFile, List<TransformList> trList)//Function override
{
    canInput = true;
    currentText = "";

    gotoDC.Clear();
    gotoDC.Add("player", playerPos);
    if (trList.Count > 0)
    {
        foreach (TransformList x in trList)
        {
            gotoDC.Add(x.locationName, x.transformReference);
        }
    }
    //*/

    dialogueUI.SetActive(true);
    dialogueActive = true;
    dialogueCooldown = true;
    curLineNum = 0;

    dls = targetFile.text.Split('\n');
    dlsSize = dls.Length;
    Time.timeScale = 0;
    displayCurrentDialogue();
}