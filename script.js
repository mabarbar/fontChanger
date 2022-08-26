sizeUpBtn = document.querySelector(".sizeUp");
sizeDownBtn = document.querySelector(".sizeDown");
colorBtn = document.querySelector(".color");
text = document.querySelector("p");

let fontSizeVar = 36;

const enlargeFont = () => {
  if (fontSizeVar < 48) {
    fontSizeVar += 4;
    text.style.fontSize = fontSizeVar + "px";
  }
};

const shrinkFont = () => {
  if (fontSizeVar > 24) {
    fontSizeVar -= 4;
    text.style.fontSize = fontSizeVar + "px";
  }
};

const changeColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  text.style.color = `rgb(${r}, ${g}, ${b})`;
};

sizeUpBtn.addEventListener("click", enlargeFont);
sizeDownBtn.addEventListener("click", shrinkFont);
colorBtn.addEventListener("click", changeColor);
