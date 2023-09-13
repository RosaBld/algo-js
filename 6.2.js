class Rectangle {
    constructor(topLeftXPos,topLeftYPos,width, length) {
        this.topLeftXPos=topLeftXPos;
        this.topLeftYPos=topLeftYPos;
        this.width=width;
        this.length=length;
    }
    collides(otherRectangle) {
        let thisRightX=this.topLeftXPos+this.width;
        let thisBottomY=this.topLeftYPos+this.length;
        let otherRightX=otherRectangle.topLeftXPos+otherRectangle.widht;
        let otherBottomY=otherRectangle.topLeftYPos+otherRectangle.length;

        if (
            this.topLeftXPos<otherRightX &&
            this.thisRightX>otherRectangle.topLeftXPos &&
            this.topLeftYPos<otherBottomY &&
            thisBottomY>otherRectangle.topLeftYPos
        ) {
            return true;
        } else { 
            return false;
        }
    }
}
