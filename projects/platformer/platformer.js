$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    createPlatform(0,350,99,0);
    createPlatform(300,100,1,360);
    createPlatform(125,680,130,0);
    createPlatform(100,100,200,1);
    createPlatform(0,100,50,0); 
    createPlatform(300,600,1,150);
    createPlatform(500,400,90,1);
    createPlatform(400,550,75,1);
    createPlatform(800,550,100,1);
    createPlatform(950,300,1,500);
    createPlatform(1050,100,40,1);
    createPlatform(1050,550,80,1);
    createPlatform(1200,300,1,500);
    createPlatform(1200,300,100,1);
    createPlatform(475,140,350,1);
    createPlatform(350,200,70,0);
    createPlatform(1200,680,100,0);
    createPlatform(1300,500,60,1);

    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    
    createCollectable("database", 800, 120, 0, 0.6);//creates a database collectable at coordinates (800,120) with the gravity of 0 and bouncing of 60%
    createCollectable("database", 600, 10, 0, 0.4);//creates a database collectable at coordinates (600,10) with the gravity of 0 and bouncing of 40%
    createCollectable("diamond",0,50,0,0.2);//creates a Diamond collectable at coordinates(0,50) with the gravity of 0 and bouncing of 40%
    createCollectable("steve",1200,640,0,0.2);

    // TODO 3 
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay)

   createCannon("bottom",50,700);
   createCannon("right",760,-1);
   createCannon("bottom",930,700);




    ////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
