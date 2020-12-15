class Stone {
    constructor(x,y){
      // var options={
      //     isStatic:false
     //  }
   
   
       this.image = loadImage("stone.png");
       this.body=Bodies.rectangle(x,y,20,20);
       
       World.add(world,this.body);
   
   
    }
   display(){
        var position=this.body.position;
        imageMode(CENTER);
       image(this.image,position.x,position.y,40,40);
   
   
   
   }
   
   
   
   }