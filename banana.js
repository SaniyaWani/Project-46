class banana {
    constructor(x,y){
      var options={
          isStatic:true
      }
   
   
       this.image = loadImage("banana.png");
       this.body=Bodies.rectangle(x,y,20,20);
       
       World.add(world,this.body);
   
   
    }
   display(){
        var position=this.body.position;
        imageMode(CENTER);
       image(this.image,position.x,position.y,40,40);
   
   
   
   }
   
   
   
   }