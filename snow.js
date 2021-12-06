class snowflake{
    constructor(x,y,width,height){
        var options= {
            density: 0.01,
            restitution: 1,
            friction: 0.2
        }
        this.body = Bodies.rectangle(x, y,width,height,options);
        World.add(world, this.body);
        rand2 = Math.round(random(1,2));
        if(rand2 === 1){
            this.snowflakeIMG1 = loadImage("snow4.webp");
        }
        else{
            this.snowflakeIMG1 = loadImage("snow5.webp");
        }
        this.width = width;
        this.height = height;
    }
    
    display(){
        
        image(this.snowflakeIMG1,this.body.position.x,this.body.position.y,this.width,this.height);

    }
}