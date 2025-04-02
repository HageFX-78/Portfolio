[SerializeField] float extentScaleIncreaseX;
[SerializeField] float extentScaleIncreaseY;
private Collider2D thisBounds; //Exclusion own bounds
Queue<KeyValuePair<Collider2D, Vector2>> collidedList = new Queue<KeyValuePair<Collider2D, Vector2>>();
Coroutine crCheck = null;

private void Start(){
    thisBounds = GetComponent<Collider2D>();
}

void OnTriggerEnter2D(Collider2D collision)
{
    //Enqueue collided collider components, and disable them
    if (collision.CompareTag("Blight") || collision.CompareTag("ExcludableProp"))
    {
        collidedList.Enqueue(new KeyValuePair<Collider2D, Vector2>(collision, collision.bounds.extents));
        collision.enabled = false;
        if (crCheck == null)
        {
            //Start coroutine that checks if it's in bound every few milliseconds
            crCheck = StartCoroutine(ColliderUpdate());
        }
    }
}

IEnumerator ColliderUpdate()
{
    while (collidedList.Count > 0)
    {
        KeyValuePair<Collider2D, Vector2> item = collidedList.Dequeue();
        if (!IntersectCheck(thisBounds.bounds, item.Key.bounds, item.Value))
        {
            item.Key.enabled = true;
        }
        else
        {
            collidedList.Enqueue(item);
        }
        yield return new WaitForSeconds(0.5f);
    }
    crCheck = null;
}
