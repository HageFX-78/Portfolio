const e=`\r
//Made own intersect because unity default intersect checks for Z val, will return false even though its 0 <= 0 and think nothing is intersecting at all\r
\r
//And also to check for cached bounds.extents val instead of the disabled one.\r
\r
public bool IntersectCheck(Bounds thisB, Bounds collidedB, Vector2 collidedExtentCache)\r
{\r
    return IMin(thisB, true) <= IMax(collidedB, true, collidedExtentCache) && \r
        IMax(thisB, true) >= IMin(collidedB, true, collidedExtentCache) && \r
        IMin(thisB, false) <= IMax(collidedB, false, collidedExtentCache) && \r
        IMax(thisB, false) >= IMin(collidedB, false, collidedExtentCache);\r
}\r
public float IMin(Bounds boundStruct, bool isX, Vector2? cache = null)\r
{\r
    if (cache != null)\r
    {\r
        return isX ? boundStruct.center.x - (cache.ConvertTo<Vector2>().x + extentScaleIncreaseX) : boundStruct.center.y - (cache.ConvertTo<Vector2>().y + extentScaleIncreaseY);\r
    }\r
    else\r
    {\r
        return isX ? boundStruct.center.x - boundStruct.extents.x : boundStruct.center.y - boundStruct.extents.y;\r
    }\r
\r
}\r
public float IMax(Bounds boundStruct, bool isX, Vector2? cache = null)\r
{\r
    if (cache != null)\r
    {\r
        return isX ? boundStruct.center.x + (cache.ConvertTo<Vector2>().x + extentScaleIncreaseX) : boundStruct.center.y + (cache.ConvertTo<Vector2>().y + extentScaleIncreaseY);\r
    }\r
    else\r
    {\r
        return isX ? boundStruct.center.x + boundStruct.extents.x : boundStruct.center.y + boundStruct.extents.y;\r
    }\r
\r
}`;export{e as default};
