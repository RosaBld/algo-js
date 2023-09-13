class Circle {
    constructor(xPos,yPos,radius) {
        this.xPos=xPos;
        this.yPos=yPos;
        this.radius=radius;
    }
    move(xOffset,yOffset) {
        this.xOffset+=xPos;
        this.yOffset+=yPos;
        return this;
    }
    get surface() {
        return Math.PI*this.radius*this.radius;
        }
}

const aCircle = new Circle(2,2,10);

console.log('the properties of your circle are x: ' + aCircle.xPos +
            ' y: ' + aCircle.yPos +
            ' radius: ' + aCircle.radius +
            ' and the surface is: ' + aCircle.surface);