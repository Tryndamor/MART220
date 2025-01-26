PepperoniX = [150,170,200,210,280,300,350,150,210,220,280,330,330]
PepperoniY = [200,170,200,150,150,200,210,310,370,310,310,280,340]
PepperoniD = [30,20,35,40,50,50,40,35,40,50,40,30,50]


function setup()
{
    createCanvas(500,500);
}

function draw ()
{
    background(90,90,90);

    fill (210,180,140);
    strokeWeight(2);
    stroke(0,0,0);
    circle (250,250,350);
    
    fill (245, 175, 60);
    stroke(139,0,0);
    strokeWeight(2);
    circle (250,250,300);

    line (250,100,250,400);
    line (100,250,400,250);

    fill(180,50,20)
    for (let i = 0; i < PepperoniX.length; i++)
    {
        circle (PepperoniX[i],PepperoniY[i],PepperoniD[i]);
    }
    
    
}