import React from 'react'
import { ReactP5Wrapper } from "react-p5-wrapper";

const NYU = () => {

    let a = 0.0;
    let s = 0.0;
    let rays = 14;

    function setup(p5) {
        return () => {
          p5.createCanvas(400, 500);
          p5.background(20, 100, 140);
        };
      }
      
      function draw(p5) {
        return () => {
          a = a + 0.01;          // motion varible 
          p5.translate(p5.width/2, p5.height/2); // centers
          s = p5.sin(a) * 3;        
          p5.scale(s);               // scales motion according to sin func
        
        for(var i = 0; i < rays; i++){
            p5.push();
            p5.rotate(p5.TWO_PI * i / rays);
            p5.sun();
            p5.pop();
        }
      };
    }

    function sun(p5){
        return () => {
        let x1 = 5;
        let y1 = 10;
        let x2 = 100;
        let y2 = 60;

        let x3 = 80;
        let y3 = 20;
        let x4 = 100;
        let y4 = 70;

        p5.fill(100, 200, 180);
        p5.beginShape();
        p5.vertex(x1, y1);
        p5.vertex(x2, y2);
        p5.vertex(x3, y3);
        p5.vertex(x4, y4);
        p5.endShape(p5.CLOSE); 
        };
    }
    
      function sketch(p5) {
        p5.setup = setup(p5);
        p5.draw = draw(p5);
        p5.sun = sun(p5);
      }

  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 py-4'>
               <div className='sm:text-right text-1xl font-bold font-mono'>
                <p>Interactive Computing: Project 1.0 </p>
                </div>
               
                
            </div>
            <ReactP5Wrapper sketch={sketch} />
            <div className='sm:text-left text-1xl font-mono'>
                <p>Sept 19, 2022</p>
             </div>
        </div>
    </div>
  )
}

export default NYU