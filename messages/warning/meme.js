let meme = "";
let MemeList = [];

const MemePlaceHolder = document.getElementById("text.meme");

async function FetchJsonFile() {
  try {
    const response = await fetch('text.json');
    if (!response.ok) throw new Error(`[ERROR] beware, scary code: ${response.status}`);
    MemeList = await response.json();          
    console.log("[INFO] loaded json!", MemeList);
    ChangeMemeOnScript();                          
  } catch (error) {
    console.error("[ERROR] failed to load json:", error);
  }
}

function GetRandomMemeInJson() {
  if (!MemeList.length) return null;
  const i = Math.floor(Math.random() * MemeList.length);
  return MemeList[i];
}

function ChangeMemePlaceholder() {
  const randomMeme = GetRandomMemeInJson();
  if (randomMeme == null) return;
  meme = randomMeme;
  if (MemePlaceHolder) MemePlaceHolder.textContent = meme;
}

function ChangeMemeOnScript() {
  ChangeMemePlaceholder();
  setInterval(ChangeMemePlaceholder, 5000);
}

FetchJsonFile();