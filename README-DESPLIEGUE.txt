PUBLICAR EN VERCEL (carpeta veracruz-app)

Tiene que subirse la CARPETA completa (index.html + fotos/ + icons/ + manifest.webmanifest + sw.js + vercel.json),
no solo el index.html y no el .zip.

Opción A - Terminal (la más rápida)
  1) Instala Node.js desde https://nodejs.org
  2) npm install -g vercel
  3) cd veracruz-app
  4) vercel --prod
     (la primera vez pide iniciar sesión; responde: Set up and deploy? Y / Link to existing project? N /
      Build Command: deja vacío / Output Directory: deja vacío)

Opción B - GitHub
  1) Crea un repositorio y sube el contenido de la carpeta veracruz-app (en la raíz del repo)
  2) En vercel.com: Add New > Project > Import el repositorio
  3) Framework Preset: Other. Build Command y Output Directory: vacíos. Deploy.
