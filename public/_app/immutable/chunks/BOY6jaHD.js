const r=`//Conversation functions that are called once to initiate by TriggerDialigue.cs\r
public void startConversation(TextAsset targetFile)\r
{\r
    currentText = "";\r
    canInput = true;\r
\r
    dialogueUI.SetActive(true);\r
    dialogueActive = true;\r
    dialogueCooldown = true;\r
    curLineNum = 0;\r
\r
    //Dialogue lines, split by line breaks in text file\r
    dls = targetFile.text.Split('\\n');\r
    dlsSize = dls.Length;\r
    Time.timeScale = 0;\r
    displayCurrentDialogue();\r
}\r
//Overloaded funciton to start conversations with locations to lerp camera to mid convo\r
public void startConversation(TextAsset targetFile, List<TransformList> trList)//Function override\r
{\r
    canInput = true;\r
    currentText = "";\r
\r
    gotoDC.Clear();\r
    gotoDC.Add("player", playerPos);\r
    if (trList.Count > 0)\r
    {\r
        foreach (TransformList x in trList)\r
        {\r
            gotoDC.Add(x.locationName, x.transformReference);\r
        }\r
    }\r
    //*/\r
\r
    dialogueUI.SetActive(true);\r
    dialogueActive = true;\r
    dialogueCooldown = true;\r
    curLineNum = 0;\r
\r
    dls = targetFile.text.Split('\\n');\r
    dlsSize = dls.Length;\r
    Time.timeScale = 0;\r
    displayCurrentDialogue();\r
}`;export{r as default};
