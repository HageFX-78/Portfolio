const e=`[SerializeField] float extentScaleIncreaseX;\r
[SerializeField] float extentScaleIncreaseY;\r
private Collider2D thisBounds; //Exclusion own bounds\r
Queue<KeyValuePair<Collider2D, Vector2>> collidedList = new Queue<KeyValuePair<Collider2D, Vector2>>();\r
Coroutine crCheck = null;\r
\r
private void Start(){\r
    thisBounds = GetComponent<Collider2D>();\r
}\r
\r
void OnTriggerEnter2D(Collider2D collision)\r
{\r
    //Enqueue collided collider components, and disable them\r
    if (collision.CompareTag("Blight") || collision.CompareTag("ExcludableProp"))\r
    {\r
        collidedList.Enqueue(new KeyValuePair<Collider2D, Vector2>(collision, collision.bounds.extents));\r
        collision.enabled = false;\r
        if (crCheck == null)\r
        {\r
            //Start coroutine that checks if it's in bound every few milliseconds\r
            crCheck = StartCoroutine(ColliderUpdate());\r
        }\r
    }\r
}\r
\r
IEnumerator ColliderUpdate()\r
{\r
    while (collidedList.Count > 0)\r
    {\r
        KeyValuePair<Collider2D, Vector2> item = collidedList.Dequeue();\r
        if (!IntersectCheck(thisBounds.bounds, item.Key.bounds, item.Value))\r
        {\r
            item.Key.enabled = true;\r
        }\r
        else\r
        {\r
            collidedList.Enqueue(item);\r
        }\r
        yield return new WaitForSeconds(0.5f);\r
    }\r
    crCheck = null;\r
}\r
`;export{e as default};
