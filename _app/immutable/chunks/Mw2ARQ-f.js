const t=`void displayCurrentDialogue()
{
    StartCoroutine(enableInput());

    //Spliting for format
    string[] thisLine = dls[curLineNum].Split(':');

    //  name : character line format is split into a tiny array
    talkerName.text = thisLine[0];
    typeD = typeDialogue(thisLine[1]);

    //Set pointer to start on first line
    currentText = thisLine[1];

    //Lerp camera to specified target if needed
    if (thisLine.Length>2)
    {
        string sanitizedKey;
        if(curLineNum == dlsSize-1)
        {
            sanitizedKey = thisLine[2];//Last line doesnt have a weird extra character at the end so no need to sanitize
        }
        else
        {
            sanitizedKey = thisLine[2].Substring(0, thisLine[2].Length - 1);
        }
        camState.isCutScene = true;

        Vector3 targetPosition = new Vector3(gotoDC[sanitizedKey].position.x, gotoDC[sanitizedKey].position.y, camPos.position.z);
        Vector3 defaultPosition = new Vector3(camPos.position.x, camPos.position.y, camPos.position.z);

        StartCoroutine(lerpToTarget(defaultPosition, targetPosition));
    }

    //Start the typing letter by letter coroutine
    StartCoroutine(typeD);
    curLineNum++; 
}`;export{t as default};
