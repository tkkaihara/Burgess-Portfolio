import React from 'react';
import {Link as ScrollLink} from 'react-scroll';
import OutdoorBurlapHandnotes from '../img/OutdoorBurlap/Handnotes.png';
import OutdoorBurlapMoodboard from '../img/OutdoorBurlap/Moodboard.jpg';
import OutdoorBurlapWireframe from '../img/OutdoorBurlap/Wireframe.png';
import OutdoorBurlapStyleguide from '../img/OutdoorBurlap/Styleguide.jpg';
import RoarBikesBrief from '../img/RoarBikes/Brief.jpg';
import RoarBikesCustomer from '../img/RoarBikes/Customer.jpg';
import RoarBikesCustomization from '../img/RoarBikes/Customization.jpg';
import RoarBikesMoodboard from '../img/RoarBikes/Moodboard.jpg';
import RoarBikesWireframe from '../img/RoarBikes/Wireframe.jpg';
import TianaCosetteConversations from '../img/TianaCosette/Conversations.jpg';
import TianaCosetteMoodboard from '../img/TianaCosette/Moodboard.jpg';
import TianaCosetteWireframe from '../img/TianaCosette/Wireframe.jpg';

export default function AppDesigns() {
  return (
    <>
      <section id='app-designs' className='process-background-a'>
        <div className='container'>
          <p className='text-center py-1 app-page-header'>App Designs</p>
          <div className='process-header-bottom-line'></div>
          <div className='app-design-menu'>
            <div className='app-design-menu-item'>
              <ScrollLink
                className=' font-size-1_3'
                to='outdoor-burlap'
                smooth={true}
                duration={800}>
                Outdoor Burlap
              </ScrollLink>
            </div>
            <div className='app-design-menu-item'>
              <ScrollLink
                className=' font-size-1_3'
                to='roar-bikes'
                smooth={true}
                duration={800}>
                Roar Bikes
              </ScrollLink>
            </div>
            <div className='app-design-menu-item'>
              <ScrollLink
                className=' font-size-1_3'
                to='tiana-cosette'
                smooth={true}
                duration={800}>
                Tiana Cosette
              </ScrollLink>
            </div>
          </div>
        </div>
      </section>
      <section
        id='outdoor-burlap'
        className='text-center py-2 process-background-b'>
        <h2 className='section-title pt-30'>Outdoor Burlap</h2>
        <div className='process-bottom-line'></div>
        <div>
          <p className='font-size-1_3'>
            The idea started with my client, who like myself, enjoys hiking and
            being outdoors. Upon seeing all the trash on hikes and in
            campgrounds, they had the idea for Outdoor Burlap.
          </p>
          <img
            src={OutdoorBurlapHandnotes}
            alt='Hand Written Notes'
            className='process-picture-vertical'></img>
        </div>
        <div>
          <p className='font-size-1_3'>
            To make sure I was properly encapsulating their vision, I created a
            mood board that made sure to include the things that were most
            important to them, the Pacific Northwest, mountains, and the color
            Evergreen.
          </p>
          <img
            src={OutdoorBurlapMoodboard}
            alt='Hand Written Notes'
            className='process-picture-landscape'></img>
        </div>
        <div>
          <p className='font-size-1_3'>
            I then created a style guide to make sure the fonts, buttons, and
            colors were in the spirit of Outdoor Burlap.
          </p>
          <img
            src={OutdoorBurlapStyleguide}
            alt='Hand Written Notes'
            className='process-picture-landscape'></img>
        </div>
        <div>
          <p className='font-size-1_3'>
            To create something brand new, we needed a good wireframe that
            included all of their ideas. By the time I started the HiFi Mockup,
            my client had expanded their vision, so I ended up adding more than
            what was originally in my wireframe.
          </p>
          <img
            src={OutdoorBurlapWireframe}
            alt='Hand Written Notes'
            className='process-picture-landscape'></img>
        </div>
        <div>
          <p className='font-size-1_3'>
            One of the problems I came across creating Outdoor Burlap was
            figuring out how to prototype my design and make it functional. This
            was my first project using Figma, and I had several issues with
            connectivity. This was also one of biggest projects I had done, so
            keeping everything organized and making sure every button had the
            correct function was difficult. Thankfully, I am a visual person, so
            writing it out for myself and completing intermittent user testing
            was integreal in the success of this project.
            <br></br>
            <br></br>
            Overall, this is one of my favorite projects because it was
            difficult, rewarding, and on a topic I feel passionate about. I
            learned a lot about my own process and how working with others
            really improved my design.
          </p>
        </div>
        <div className='mb-5'>
          <p className='font-size-1_3'>Check out the finished project here!</p>
          <a
            className='app-link pt-6'
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.figma.com/file/uRle9b0wRLew9gobg4T8F9/Outdoor-Burlap?node-id=0%3A1'>
            Finished Project
          </a>
        </div>
      </section>

      <section
        id='roar-bikes'
        className='text-center py-2 process-background-a'>
        <h2 className='section-title pt-30'>Roar Bikes</h2>
        <div className='process-bottom-line'></div>
        <div>
          <p className='font-size-1_3'>
            This project was for a fictitious bike company, and the brief and
            persona were provided to me as an optional project for an online
            class I took.
          </p>
          <img
            src={RoarBikesCustomer}
            alt='Customer'
            className='process-picture-landscape'></img>
          <br></br>
          <img
            src={RoarBikesBrief}
            alt='Brief'
            className='process-picture-landscape'></img>
        </div>
        <div>
          <p className='font-size-1_3'>
            I started with a wireframe and moodboard after reviewing each
            document and determining what the client really wanted; a modern and
            easy-to-use website for the trendy and passionate bike enthusiast
            including social media to share with a like-minded community. I
            focused on colors found in nature (orange, blue, yellow, and green)
            to instill a feeling of fresh air, adventure, and freedom.
          </p>
          <img
            src={RoarBikesMoodboard}
            alt='Moodboard'
            className='process-picture-landscape'></img>
          <br></br>
          <img
            src={RoarBikesWireframe}
            alt='Wireframe'
            className='process-picture-landscape'></img>
        </div>
        <div>
          <p className='font-size-1_3'>
            During the course of this project, I really struggled with making
            the website simple but still informative. Since the choices of bikes
            are limited, I wanted there to be a focus on individuality through
            customization and social media to compare bikes. By doing that, the
            small website was still thorough and the user testing revealed it
            was easy to purchase and navigate.
          </p>
          <img
            src={RoarBikesCustomization}
            alt='Custumization'
            className='process-picture-landscape'></img>
        </div>
        <div className='mb-5'>
          <p className='font-size-1_3'>Check out the finished project here!</p>
          <a
            className='app-link pt-6'
            target='_blank'
            rel='noopener noreferrer'
            href='https://xd.adobe.com/view/a4d32bfc-6ecb-4231-a375-1be735761550-f180/'>
            Finished Project
          </a>
        </div>
      </section>

      <section
        id='tiana-cosette'
        className='text-center py-2 process-background-b'>
        <h2 className='section-title pt-30'>Tiana Cosette</h2>
        <div className='process-bottom-line'></div>
        <div>
          <p className='font-size-1_3'>
            This project was commissioned to me by one of my best friends who
            has recently found fame on social media. She asked me to design an
            app where she could connect with fans on a more personal level. Her
            top criteria were merchendise, forums, ease of use, and mental
            health inclusivity. After deciding what the app needed, I created a
            wireframe and a moodboard to outline the process and feel of the
            project. I decided on a bright color palette with some occasional
            dark tones to bring a sense of positivity and friendliness to the
            app, while being mindful of her focus on serious mental health
            topics.
          </p>
          <img
            src={TianaCosetteMoodboard}
            alt='Moodboard'
            className='process-picture-landscape'></img>
        </div>
        <div>
          <p className='font-size-1_3'>
            Once I began the process, I realized that her moderating each and
            every personal conversation would be exhausting for her. Keeping the
            user and Tiana in mind, I suggested we try forums. Deciding what
            would be best for her followers and herself was a compromise, but
            ultimately would allow for a sense of community while being easier
            on everyone. Win-win-win!
          </p>
          <img
            src={TianaCosetteWireframe}
            alt='Wireframe'
            className='process-picture-landscape'></img>
        </div>
        <div>
          <p className='font-size-1_3'>
            Using forums opened up our options of how the app could function and
            look, creating separate spaces for conversation topics that Tiana is
            passionate about and that her fans look for in her content. I
            enjoyed this project emmensitly, and working with the client closely
            was important to bring the creativity, function, and community
            together.
          </p>
          <img
            src={TianaCosetteConversations}
            alt='Conversations'
            className='process-picture-vertical'></img>
        </div>
        <div className='mb-5'>
          <p className='font-size-1_3'>Check out the finished project here!</p>
          <a
            className='app-link pt-6'
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.figma.com/file/gxUyj7vRhZUGJYM2itrw1J/Tiana-App-HiFi-Prototype-V1.0'>
            Finished Project
          </a>
        </div>
      </section>
    </>
  );
}
