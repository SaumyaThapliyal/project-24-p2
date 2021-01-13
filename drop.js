class Drop{
    constructor(x,y,w,h){
        var option = {
            isStatic:true
          }
          this.body = Bodies.rectangle(x,y,w,h,option);
          World.add(world,this.body);
          this.w = w;
          this.h = h;
    }

   
         showwall(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }

}
