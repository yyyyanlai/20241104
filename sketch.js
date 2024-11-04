let angle = 0; // 用於控制旋轉的角度

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#b2b2b2");
  noFill(); // 以下畫圓或方形都不要填滿顏色
  stroke("#736f72"); // 線條顏色
  strokeWeight(3); // 線條粗細
  
  // 宣告變數
  var rect_width = 50 + mouseX / 100; // 方形的寬度
  var bc_w = 50 + mouseX / 100; // 大圓的寬度
  var sc_w = 25 + mouseX / 100; // 小圓的寬度

  rectMode(CENTER);
  
  // 使用迴圈，產生25排
  for (let j = 0; j < 25; j++) { // 負責產生幾排
    for (let x = 0; x < width; x += rect_width) {
      ellipse(x, 25 + 50 * j, bc_w);
      rect(x, 25 + 50 * j, rect_width);
      ellipse(25 + x + rect_width, 50 + 50 * j, sc_w);
    }
  }

  fill("#ffafcc"); // 設定文字顏色
  textSize(100); // 設定文字大小

  translate(width / 2, height / 2); // 在中心
  rotate(angle)
  text("lai", 0, 0); // 文字在中間

  angle += 1.5; //角度
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布大小
}