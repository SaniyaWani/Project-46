class Monkey {
    constructor(x,y,width,height)
    {
        var options = {
            'isStatic':false
        }
       
        this.image=loadImage("sprite_2.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
                World.add(world,this.body);
    }

    display()
    {

         var position=this.body.position;
         push();
        imageMode(CENTER);
       image(this.image,position.x,position.y,60,60);
      


    }
    moveRMonkey(){
        this.body.position.x=this.body.position.x+5
    }
    
}