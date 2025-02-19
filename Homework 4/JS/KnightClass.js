class KnightClass
{
    constructor(path, x, y)
    {
        this.path = path;
        this.x = x;
        this.y = y;
    }


    getImage()
    {
        return loadImage(this.path);
    }

    getX()
    {
        return this.x;
    }

    getY()
    {
        return this.y;
    }

}