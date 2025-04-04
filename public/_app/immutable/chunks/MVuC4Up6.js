const e=`// - Creating the texture and capturing\r
RenderTexture renderTexture = new RenderTexture(horizontalResolution, verticalResolution, captureDepth);\r
Rect rect = new Rect(0, 0, horizontalResolution, verticalResolution);\r
Texture2D texture = new Texture2D(horizontalResolution, verticalResolution, TextureFormat.ARGB32, false);\r
\r
generationCam.targetTexture = renderTexture;\r
generationCam.Render();\r
\r
RenderTexture currentRenderTexture = RenderTexture.active;\r
RenderTexture.active = renderTexture;\r
texture.ReadPixels(rect, 0, 0);\r
texture.Apply();\r
\r
generationCam.targetTexture = null;\r
RenderTexture.active = currentRenderTexture;\r
DestroyImmediate(renderTexture);\r
\r
Sprite sprite = Sprite.Create(texture, rect, Vector2.zero);`;export{e as default};
