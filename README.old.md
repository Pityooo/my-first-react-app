# my-first-react-app

1. " npx create-react-app . " npx -> futtat, create-react-app -> react appot csinál, . -> a gyökér mappába telepít amiben vagyunk // ez feltelepíti a szükséges dolgokat a mappánkba

-- ez egy fejlesztést segítő szerver-t tartalmaz , ami a 3000-es porton fut -> ez párhozamosan fut a backendel ,ami a 9000-es port.

2. "npm start" -> elinditjuk a fejlesztői szervert

3. app.js-ben kommentek
-- VSCode-ban jobb alul kiválasztani h JavaScript React
-- import/export ->
-- JSX 2 elemet nem tud exportálni. (pl 2db div-et) --> ha elejére végére <> </>-t teszünk, akkor lehet
-- importnál a nagy betű jelöli azt h JSX Komponenst importálunk (import app --> import App), exportnál nem lényeges


4. index.js-ben kommentek
--React.StrictMode -> jobban ellenőriz kijelölés elött (több hibaüzenet), de a kód validabb/gyorsabb lesz

5. mindennek a kezdete a pub mappában lévő index.html


Compiler / Bundler :

-- Compiler(pl. Bumble.js): - binárist készít egy kódból (machine readable)
                            - megnézi a packageJSON verzióját  
                            - optimalizál, és átformáz ( replaceAll() )

-- Bundler:     - webpack (ez is potimalizál valamennyit)
                - öszsecsomagol minden fájlunkat
                - buildelésnél is mindent összepakol (úgy csomagolja öszse az összes fájlt, hogy hétköznapi index.html, js, css fájlt csinál belőle, és bemásolja egy mappába)
                - npm run build

Build futtatása után, a build mappát beküldjük a repo-ba, és azt adjuk meg elérési utvonalnak a gitHubPages-nek

CSAK AZ SRC MAPPÁT HASZNÁLJUK!

Ha HTML elemet rakunk komponensként (importálva) akkor < />-be kell tenni (<importált neve/>)

json beolvasása:
-- JSON loader nevű package (Backendre is fel lehet telepíteni) -> importál, és JS objekté alakítja
-- távoli fájlokon nem lehet használni (csak lokális fájlokon)
-- dinamikus listánál adjunk "key" értéket ami egyedi

tailwind, materialui, bootstrap