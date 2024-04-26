window.addEventListener('load', function(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.background = "green";

    console.log(canvas.width,canvas.height)

    class Particle{
	constructor(effect,x,y,color){
	    this.effect = effect;
	    this.x = Math.random()* this.effect.width;
	    this.y = Math.random()* this.effect.height;
	    this.originX = Math.floor(x);
	    this.originY = Math.floor(y);
	    this.color = color;
	    this.size = this.effect.gap;
	    this.vx = this.effect.gap;
	    this.vy = this.effect.gap;
	    this.moveVelocity = Math.random()*1;
	    this.ease = this.moveVelocity < 0.02? 0.02:this.moveVelocity;
	    this.dx = 0;
	    this.dy = 0;
	    this.distance = 0;
	    this.force = 0;
	    this.angle = 0;
	    this.friction = 0.98;
	}

	draw(context){
	    context.fillStyle = this.color;
	    context.fillRect(this.x, this.y, this.size, this.size);
	}

	update(){
	    this.dx = this.effect.mouse.x - this.x;
	    this.dy = this.effect.mouse.y - this.y;
	    this.distance = this.dx * this.dx + this.dy * this.dy
	    this.force = -this.effect.mouse.radius / this.distance;

	    if(this.distance < this.effect.mouse.radius){
		this.angle = Math.atan2(this.dy, this.dx);
		this.vx += this.force * Math.sin(this.angle);
		this.vy += this.force * Math.cos(this.angle);
	    }

	    let originXMinusX = this.originX - this.x;
	    let originYMinusY = this.originY - this.y; 
	    this.x += (this.vx *= this.friction)+(originXMinusX * this.ease);
	    this.y += (this.vy *= this.friction)+(originYMinusY * this.ease);
	}

	warp(){
	    this.x = Math.random()* this.effect.width;
	    this.y = Math.random()* this.effect.height;
	    this.moveVelocity = Math.random()*0.03;
	    this.ease = this.moveVelocity < 0.02? 0.02:this.moveVelocity;
	}
    }

    class Effect{
	
	constructor(width,height){
	    this.width = width;
	    this.height = height;
	    this.particlesArray = [];
            this.image = document.getElementById('image1');
	    this.centerX = this.width * 0.5;
	    this.centerY = this.height * 0.5;
	    this.x = this.centerX - (this.image.width * 0.5);
	    this.y = this.centerY - (this.image.height *0.5);
	    this.gap = 4;
	    this.mouse = {
		radius:3000,
		x: undefined,
		y: undefined
	    }
	    window.addEventListener('mousemove', event =>{ 
		this.mouse.x = event.x;
		this.mouse.y = event.y;
	    })
	    window.addEventListener('touchmove', event =>{ 
		console.log(event)
		this.mouse.x = event.changedTouches[0].clientX
		this.mouse.y = event.changedTouches[0].clientY;
	    }
	    )
	}

	init(context){
    	    context.drawImage(this.image, this.x, this.y);
	    const pixels = context.getImageData(0, 0, this.width, this.height).data;
	    for (let y = 0; y < this.height; y+= this.gap){
		for(let x = 0; x < this.width; x += this.gap){
		    const index = (y* this.width + x) * 4;
		    const red = pixels[index];
		    const green = pixels[index+1];
		    const blue = pixels[index+2];
		    const alpha = pixels[index+3];
		    const color = `rgb(${red},${green},${blue},${alpha})`

		    if(alpha > 0){
			this.particlesArray.push(new Particle(this, x, y, color));
		    }
		}

	    }
	}

	draw(context){
	    this.particlesArray.forEach( particle => particle.draw(context));
	}

	update(){
	    this.particlesArray.forEach(particle => particle.update());
	}

	warp(){
	    this.particlesArray.forEach(particle => particle.warp());
	}
    }
    
    const effect = new Effect(canvas.width, canvas.height);
    effect.init(ctx);
    console.log(effect.particlesArray)

    function animate(){
	ctx.clearRect(0,0,canvas.width, canvas.height);
	effect.draw(ctx);
        effect.update();
	requestAnimationFrame(animate);

    }

    animate();
    
    const warpButton = this.document.getElementById('warpButton');
    warpButton.addEventListener("click",() => {
	effect.warp(); 
    })
});
