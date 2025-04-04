const e=`    if (specifiedSpritePath != null)\r
    {\r
        spritePath = specifiedSpritePath;\r
    }\r
\r
    // - Saving texture as PNG\r
    byte[] itemBGBytes = sprite.texture.EncodeToPNG();\r
    outputfilename = $"{parentName}_ShadowSprite";\r
    textureFailsafeID++;\r
    File.WriteAllBytes($"{spritePath}/{outputfilename}.png", itemBGBytes);\r
\r
#if UNITY_EDITOR\r
    // - Setting texture settings\r
    UnityEditor.AssetDatabase.Refresh();\r
    TextureImporter importer = (TextureImporter)TextureImporter.GetAtPath($"{spritePath}/{outputfilename}.png");\r
\r
    importer.textureType = TextureImporterType.Sprite;\r
    importer.alphaIsTransparency = true;\r
    importer.filterMode = FilterMode.Point;\r
    importer.spritePixelsPerUnit = (100 * (shadowQuality - 8)) / (shadowSizeOffset / 2);\r
\r
    EditorUtility.SetDirty(importer);\r
    importer.SaveAndReimport();\r
#endif\r
\r
    // - Applying sprite to shadow\r
    if (specifiedSpritePath != null)\r
    {\r
        tempSR.sprite = Resources.Load<Sprite>($"GeneratedShadowTextures/PermanentSprites/{outputfilename}");\r
    }\r
    else\r
    {\r
        tempSR.sprite = Resources.Load<Sprite>($"GeneratedShadowTextures/{SceneManager.GetActiveScene().name}/{outputfilename}");\r
    }\r
\r
    tempSR.color = shadowColor;\r
    tempSR.material = shadowMaterial;\r
    tempSR.gameObject.AddComponent<PolygonCollider2D>();`;export{e as default};
