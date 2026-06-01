let showBgPalette = false; 
let currentBg = 'lab';

// 버튼 디자인
function drawBgPaletteButton() {
  let bgBtnX = width - (paletteW * 2) - 30 - 15; 
  
  push();
  noStroke();
  
  fill(0, 0, 0, 40);
  rect(bgBtnX + 4, paletteY + 4 + palettePressOffset, paletteW, paletteH, 15);


  fill(255, 255, 255, paletteBtnAlpha);
  rect(bgBtnX, paletteY + palettePressOffset, paletteW, paletteH, 15);

  stroke(200, 200, 200, paletteBtnAlpha);
  strokeWeight(2);
  noFill();
  rect(bgBtnX, paletteY + palettePressOffset, paletteW, paletteH, 15);
  
  // 글씨
  noStroke();
  fill(100, 100, 100, paletteBtnAlpha);
  textSize(14);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text("배경변경", bgBtnX + paletteW / 2, paletteY + paletteH - 28 + palettePressOffset);
  
  push();
  noStroke();
  translate(bgBtnX + 60, paletteY + 45 + palettePressOffset);
  
  // 원 배경
  fill("#F8F4CA4C"); 
  ellipse(0, 15, 95, 95);
  rectMode(CENTER);
  
  // 지붕
  push();
  translate(0, 5);
  rotate(QUARTER_PI); // 45도 회전
  fill("#806A5F");
  rect(0, 0, 32, 32, 3);
  pop();
  
  // 집 벽면
  fill("#A2896B");
  rect(0, 22, 40, 30, 2);
  
  // 문
  fill("#806A5F");
  rect(0, 26, 12, 22, 2);
  
  // 창문
  fill("#EBF7FF");
  rect(-11, 18, 9, 10, 1);

  pop();
  
  pop(); 
}

// 배경 옵션 디자인
function drawBgOptions() {
  let bgOptX = width - (paletteW * 2) - 30 - 15;

  let bgs = [
    { id: "lab", name: "lab", color: "#D7FEFF" },
    { id: "home", name: "home", color: "#FFF9C4" },
    { id: "sea", name: "sea", color: "#C4DEFF" } 
  ];
  
  push();
  for (let i = 0; i < bgs.length; i++) {
    let optX = bgOptX;
    let optY = paletteY + paletteH + 15 + (i * 55);
    let optW = paletteW; 
    let optH = 45;

    if (mouseX >= optX && mouseX <= optX + optW && mouseY >= optY && mouseY <= optY + optH) {
      stroke(100);
      strokeWeight(3);
    } else {
      stroke(200);
      strokeWeight(1.5);
    }

    fill(bgs[i].color);
    rect(optX, optY, optW, optH, 10);

    noStroke();
    fill(80);
    textAlign(CENTER, CENTER);
    textSize(12);
    textStyle(BOLD);
    text(bgs[i].name, optX + optW / 2, optY + optH / 2);
  }
  pop();
}

// 마우스 클릭 처리
function checkBgClick() {
  let bgOptX = width - (paletteW * 2) - 30 - 15; 

  if (mouseX >= bgOptX && mouseX <= bgOptX + paletteW && 
      mouseY >= paletteY && mouseY <= paletteY + paletteH) {
    showBgPalette = !showBgPalette; 
    return;
  }

  if (showBgPalette) {
    let bgs = ["lab", "home", "sea"];

    for (let i = 0; i < bgs.length; i++) {
      let optX = bgOptX;
      let optY = paletteY + paletteH + 15 + (i * 55);
      let optW = paletteW;
      let optH = 45;

      if (mouseX >= optX && mouseX <= optX + optW && 
          mouseY >= optY && mouseY <= optY + optH) {
        currentBg = bgs[i];
        break;
      }
    }
  }
}