class KnightClass {
    constructor(path, x, y) {
        this.path = path;  // Image path
        this.x = x;        // X position
        this.y = y;        // Y position
        this.img = null;   // To store the loaded image
        this.loaded = false;  // To track whether the image has loaded
    }

    // Load and return the image
    getImage() {
        if (this.img === null) {
            // Try loading the image
            this.img = loadImage(this.path, 
                // Success callback
                () => {
                    this.loaded = true;  // Image loaded successfully
                    console.log("Image loaded successfully!");
                }, 
                // Error callback
                () => {
                    console.log("Error loading image.");
                }
            );
        }
        return this.img;  // Return the image (null if not loaded)
    }

    // Get the X position of the knight
    getX() {
        return this.x;
    }

    // Get the Y position of the knight
    getY() {
        return this.y;
    }

    // Check if the image has been loaded
    isLoaded() {
        return this.loaded;
    }
}