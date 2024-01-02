function setup() {
    // sugarbunnies drawing :D!

    // set the background size of our canvas
    createCanvas(400, 400);
  
    // erase the background with a pink color
    background(248,210,218,255);

    stroke(237,135,172,255);
    strokeWeight(6);
    line(0, 0, 400, 400);
    line(100, 0, 400, 300);
    line(200, 0, 400, 200);
    line(300, 0, 400, 100);
    line(-100, 0, 400, 500);
    line(-200, 0, 400, 600);
    line(-300, 0, 400, 700);
    stroke(255);
    strokeWeight(3);
    line(2, 0, 400, 400);
    line(102, 0, 400, 300);
    line(202, 0, 400, 200);
    line(302, 0, 400, 100);
    line(-98, 0, 400, 500);
    line(-198, 0, 400, 600);
    line(-298, 0, 400, 700);

    // add text
    fill(255);
    stroke(237,135,172,255);
    strokeWeight(2);
    text("シュガーバニーズ",10,40);
    // no stroke
    noStroke();
    // make fill white
    fill(255);
    // draw an ellipse at 150,150
    ellipse(150,150, 220, 150);
    // fill eye color
    fill(79,45,26);
    // draw eyes 
    ellipse(90, 170, 22, 35);
    ellipse(210, 170, 22, 35);
    // draw eyelashes
    stroke(79,45,26);
    strokeWeight(3);
    line(80,155,85,160);
    line(220,155,215,160);
    // draw nose outline
    stroke(239,219,228,255);
    fill(255);
    ellipse(150, 180, 60, 40);
    // draw nose
    noStroke();
    fill(79,45,26);
    ellipse(150, 171, 14, 8);
    // draw mouth
    stroke(79,45,26);
    strokeWeight(3);
    line(140,190,150,180);
    line(160,190,150,180);
    // ear details
    noStroke();
    fill(255);
    // draw and rotate ears
    push();
    translate(150,150);
    rotate(radians(45));
    ellipse(100,-100,200,45)
    fill(250,220,233,255)
    ellipse(100,-100,100,20)
    pop();
    // draw and rotate ears
    push();
    translate(150,150);
    rotate(radians(-45));
    ellipse(-95,-100,200,45)
    fill(250,220,233,255)
    ellipse(-95,-100,100,20)
    pop();
    
    noStroke();
    // make fill brown
    fill(170,117,66,255)
    // draw another ellipse 270,250
    ellipse(270,270, 220, 150);
    // fill eye color
    fill(79,45,26);
    // draw eyes 
    ellipse(210, 290, 22, 35);
    ellipse(330, 290, 22, 35);
    // draw eyebrows
    stroke(79,45,26);
    strokeWeight(3);
    line(200,245,215,240);
    line(325,240,340,245);
    // draw nose outline
    stroke(251,254,227,255);
    fill(251,254,227,255);
    ellipse(270, 301, 60, 40);
    // draw nose
    noStroke();
    fill(79,45,26);
    ellipse(270, 291, 14, 8);
    // draw mouth
    stroke(79,45,26);
    strokeWeight(3);
    line(260,310,270,300);
    line(280,310,270,300);
    // ear details
    noStroke();
    fill(170,117,66,255);
    // draw and rotate ears
    push();
    translate(270,270);
    rotate(radians(45));
    ellipse(100,-100,200,45)
    fill(250,220,233,255)
    ellipse(100,-100,100,20)
    pop();
    // draw and rotate ears
    push();
    translate(270,270);
    rotate(radians(-45));
    ellipse(-95,-100,200,45)
    fill(250,220,233,255)
    ellipse(-95,-100,100,20)
    pop();
  }
  