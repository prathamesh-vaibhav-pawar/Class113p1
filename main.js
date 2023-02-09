image = ""

function setup(){
    Canvas = createCanvas(640,500)
    Canvas.position(360,250)
    img = createCapture(VIDEO)
    img.hide()
}
function draw(){
    image(img,0,0,640)
    fill(150,90,200) 
    stroke(80,100,170)
    rect(0,20,800,30) 
    rect(20,0,30,800) 
    rect(600,0,30,800) 
    rect(0,460,800,30)
}
function take_sanpshot(){
    save("Snap.png")
}
