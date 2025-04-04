const e=`// - Creating the texture and capturing
RenderTexture renderTexture = new RenderTexture(horizontalResolution, verticalResolution, captureDepth);
Rect rect = new Rect(0, 0, horizontalResolution, verticalResolution);
Texture2D texture = new Texture2D(horizontalResolution, verticalResolution, TextureFormat.ARGB32, false);

generationCam.targetTexture = renderTexture;
generationCam.Render();

RenderTexture currentRenderTexture = RenderTexture.active;
RenderTexture.active = renderTexture;
texture.ReadPixels(rect, 0, 0);
texture.Apply();

generationCam.targetTexture = null;
RenderTexture.active = currentRenderTexture;
DestroyImmediate(renderTexture);

Sprite sprite = Sprite.Create(texture, rect, Vector2.zero);`;export{e as default};
