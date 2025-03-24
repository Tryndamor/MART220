class FoodClass 
{
    constructor(x, y) 
    {
        this.x = x;
        this.y = y;
        this.width = 60;  
        this.height = 60; 
    }

    display() 
    {
        fill(255, 0, 0);  
        noStroke(); 
        rect(this.x, this.y, this.width, this.height);
    }

    randomizePosition() 
{
    do {
        this.x = random(width - this.width);
        this.y = random(height - this.height);
    } while (immovableObjects.some(obj =>
        collideRectRect(this.x, this.y, this.width, this.height, 
                        obj.x, obj.y, immovableWidth, immovableHeight)
    ));
}

    checkCollision(knightX, knightY, knightWidth, knightHeight) 
    {
        return knightX < this.x + this.width &&
               knightX + knightWidth > this.x &&
               knightY < this.y + this.height &&
               knightY + knightHeight > this.y;
    }
}


