class BadFoodClass 
{
    constructor(x, y) 
    {
        this.x = x;
        this.y = y;
        this.width = foodWidth;  
        this.height = foodHeight; 
    }

    display() 
    {
        fill(0);
        noStroke(); 
        rect(this.x, this.y, this.width, this.height);
    }

    randomizePosition() 
    {
        this.x = random(width - this.width);
        this.y = random(height - this.height);
    }

    checkCollision(knightX, knightY, knightWidth, knightHeight) 
    {
        return knightX < this.x + this.width &&
               knightX + knightWidth > this.x &&
               knightY < this.y + this.height &&
               knightY + knightHeight > this.y;
    }
}