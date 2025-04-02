    if (specifiedSpritePath != null)
    {
        spritePath = specifiedSpritePath;
    }

    // - Saving texture as PNG
    byte[] itemBGBytes = sprite.texture.EncodeToPNG();
    outputfilename = $"{parentName}_ShadowSprite";
    textureFailsafeID++;
    File.WriteAllBytes($"{spritePath}/{outputfilename}.png", itemBGBytes);

#if UNITY_EDITOR
    // - Setting texture settings
    UnityEditor.AssetDatabase.Refresh();
    TextureImporter importer = (TextureImporter)TextureImporter.GetAtPath($"{spritePath}/{outputfilename}.png");

    importer.textureType = TextureImporterType.Sprite;
    importer.alphaIsTransparency = true;
    importer.filterMode = FilterMode.Point;
    importer.spritePixelsPerUnit = (100 * (shadowQuality - 8)) / (shadowSizeOffset / 2);

    EditorUtility.SetDirty(importer);
    importer.SaveAndReimport();
#endif

    // - Applying sprite to shadow
    if (specifiedSpritePath != null)
    {
        tempSR.sprite = Resources.Load<Sprite>($"GeneratedShadowTextures/PermanentSprites/{outputfilename}");
    }
    else
    {
        tempSR.sprite = Resources.Load<Sprite>($"GeneratedShadowTextures/{SceneManager.GetActiveScene().name}/{outputfilename}");
    }

    tempSR.color = shadowColor;
    tempSR.material = shadowMaterial;
    tempSR.gameObject.AddComponent<PolygonCollider2D>();