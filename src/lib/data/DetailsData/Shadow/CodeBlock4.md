
//Made own intersect because unity default intersect checks for Z val, will return false even though its 0 <= 0 and think nothing is intersecting at all

//And also to check for cached bounds.extents val instead of the disabled one.

public bool IntersectCheck(Bounds thisB, Bounds collidedB, Vector2 collidedExtentCache)
{
    return IMin(thisB, true) <= IMax(collidedB, true, collidedExtentCache) && 
        IMax(thisB, true) >= IMin(collidedB, true, collidedExtentCache) && 
        IMin(thisB, false) <= IMax(collidedB, false, collidedExtentCache) && 
        IMax(thisB, false) >= IMin(collidedB, false, collidedExtentCache);
}
public float IMin(Bounds boundStruct, bool isX, Vector2? cache = null)
{
    if (cache != null)
    {
        return isX ? boundStruct.center.x - (cache.ConvertTo<Vector2>().x + extentScaleIncreaseX) : boundStruct.center.y - (cache.ConvertTo<Vector2>().y + extentScaleIncreaseY);
    }
    else
    {
        return isX ? boundStruct.center.x - boundStruct.extents.x : boundStruct.center.y - boundStruct.extents.y;
    }

}
public float IMax(Bounds boundStruct, bool isX, Vector2? cache = null)
{
    if (cache != null)
    {
        return isX ? boundStruct.center.x + (cache.ConvertTo<Vector2>().x + extentScaleIncreaseX) : boundStruct.center.y + (cache.ConvertTo<Vector2>().y + extentScaleIncreaseY);
    }
    else
    {
        return isX ? boundStruct.center.x + boundStruct.extents.x : boundStruct.center.y + boundStruct.extents.y;
    }

}