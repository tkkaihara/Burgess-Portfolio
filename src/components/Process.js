import React from 'react';
import Handnotes from '../img/Handnotes.png';
import Moodboard from '../img/Moodboard.png';
import Wireframe from '../img/Wireframe.png';
import Styleguide from '../img/Styleguide.png';

export default function Process() {
  return (
    <>
      <section id='my-process' className='process-background'>
        <div className='container'>
          <section id='my-process' className='text-center py-2'>
            <h2 className='section-title'>My Process - Outdoor Burlap</h2>
            <div className='process-bottom-line'></div>
            <div>
              <p className='font-size-1_3'>
                The idea started with my client, who like myself, enjoys hiking
                and being outdoors. Upon seeing all the trash on hikes and in
                campgrounds, they had the idea for Outdoor Burlap.
              </p>
              <img
                src={Handnotes}
                alt='Hand Written Notes'
                className='process-picture-vertical'></img>
            </div>
            <div>
              <p className='font-size-1_3'>
                To make sure I was properly encapsulating their vision, I
                created a mood board that made sure to include the things that
                were most important to them, the Pacific Northwest, mountains,
                and the color Evergreen.
              </p>
              <img
                src={Moodboard}
                alt='Hand Written Notes'
                className='process-picture-landscape'></img>
            </div>
            <div>
              <p className='font-size-1_3'>
                I then created a style guide to make sure the fonts, buttons,
                and colors were in the spirit of Outdoor Burlap.
              </p>
              <img
                src={Styleguide}
                alt='Hand Written Notes'
                className='process-picture-landscape'></img>
            </div>
            <div>
              <p className='font-size-1_3'>
                To create something brand new, we needed a good wireframe that
                included all of their ideas. By the time I started the HiFi
                Mockup, my client had expanded their vision, so I ended up
                adding more than what was originally in my wireframe.
              </p>
              <img
                src={Wireframe}
                alt='Hand Written Notes'
                className='process-picture-landscape'></img>
            </div>
            <div>
              <p className='font-size-1_3'>
                One of the problems I came across creating Outdoor Burlap was
                figuring out how to prototype my design and make it functional.
                This was my first project using Figma, and I had several issues
                with connectivity. This was also one of biggest projects I had
                done, so keeping everything organized and making sure every
                button had the correct function was difficult. Thankfully, I am
                a visual person, so writing it out for myself and completing
                intermittent user testing was integreal in the success of this
                project.
                <br></br>
                <br></br>
                Overall, this is one of my favorite projects because it was
                difficult, rewarding, and on a topic I feel passionate about. I
                learned a lot about my own process and how working with others
                really improved my design. See the finished design below!
              </p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
