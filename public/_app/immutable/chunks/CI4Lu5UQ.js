const t=`void displayCurrentDialogue()\r
{\r
    StartCoroutine(enableInput());\r
\r
    //Spliting for format\r
    string[] thisLine = dls[curLineNum].Split(':');\r
\r
    //  name : character line format is split into a tiny array\r
    talkerName.text = thisLine[0];\r
    typeD = typeDialogue(thisLine[1]);\r
\r
    //Set pointer to start on first line\r
    currentText = thisLine[1];\r
\r
    //Lerp camera to specified target if needed\r
    if (thisLine.Length>2)\r
    {\r
        string sanitizedKey;\r
        if(curLineNum == dlsSize-1)\r
        {\r
            sanitizedKey = thisLine[2];//Last line doesnt have a weird extra character at the end so no need to sanitize\r
        }\r
        else\r
        {\r
            sanitizedKey = thisLine[2].Substring(0, thisLine[2].Length - 1);\r
        }\r
        camState.isCutScene = true;\r
\r
        Vector3 targetPosition = new Vector3(gotoDC[sanitizedKey].position.x, gotoDC[sanitizedKey].position.y, camPos.position.z);\r
        Vector3 defaultPosition = new Vector3(camPos.position.x, camPos.position.y, camPos.position.z);\r
\r
        StartCoroutine(lerpToTarget(defaultPosition, targetPosition));\r
    }\r
\r
    //Start the typing letter by letter coroutine\r
    StartCoroutine(typeD);\r
    curLineNum++; \r
}`;export{t as default};
