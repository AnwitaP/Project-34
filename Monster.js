class Monster{
    constructor(x, y, width, height, angle){
        var options ={
            "frictionAir": 1,
            "density": 1,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 150;
        this.height = 150;
        this.image = loadImage("images/Monster-01.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
   
}