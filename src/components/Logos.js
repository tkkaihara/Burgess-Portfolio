import React from 'react';
import {Link as ScrollLink} from 'react-scroll';
import OutdoorBurlapLogo from '../img/Logos/OutdoorBurlap/OutdoorBurlapLogo.png';
import OutdoorBurlapStart from '../img/Logos/OutdoorBurlap/OutdoorBurlapStart.jpg';
import VerticalRanchLogo from '../img/Logos/VerticalRanch/VerticalRanchLogo.png';
import VerticalRanchStart from '../img/Logos/VerticalRanch/VerticalRanchStart.jpg';

export default function AppDesigns() {
  return (
    <>
      <section id='logos' className='process-background-b'>
        <div className='container'>
          <p className='text-center py-1 logos-page-header'>Logos</p>
          <div className='process-header-bottom-line'></div>
          <div className='logos-menu'>
            <div className='logos-menu-item'>
              <ScrollLink
                className=' font-size-1_3'
                to='outdoor-burlap'
                smooth={true}
                duration={800}>
                Outdoor Burlap
              </ScrollLink>
            </div>
            <div className='logos-menu-item'>
              <ScrollLink
                className='font-size-1_3'
                to='vertical-ranch'
                smooth={true}
                duration={800}>
                Vertical Ranch
              </ScrollLink>
            </div>
          </div>
        </div>
      </section>
      <section
        id='outdoor-burlap'
        className='text-center py-2 process-background-a'>
        <h2 className='section-title pt-30'>Outdoor Burlap</h2>
        <div className='process-bottom-line'></div>
        <div className='pb-5'>
          <p className='font-size-1_3'>
            I wanted to create a custom logo for the website I designed (look
            for Outdoor Burlap on my projects page) that had the elements the
            client wanted and was eye catching. Here is the original sketch. The
            arrows symbolize reduce, reuse, recycle, while the colors and design
            aim to convey the passion for this idea to clean up the trails in
            the Pacific Northwest.
          </p>

          <div className='logo-pictures mt-5'>
            <p className='font-size-1_3'>Before:</p>
            <p className='font-size-1_3'>After:</p>
            <img
              src={OutdoorBurlapStart}
              alt='Outdoor Burlap start'
              className='circle logo-picture'></img>
            <img
              src={OutdoorBurlapLogo}
              alt='Outdoor Burlap logo'
              className='logo-picture'></img>
          </div>
        </div>
      </section>

      <section
        id='vertical-ranch'
        className='text-center py-2 process-background-b'>
        <h2 className='section-title pt-30'>Vertical Ranch</h2>
        <div className='process-bottom-line'></div>
        <div className='pb-5'>
          <p className='font-size-1_3'>
            Taking a design from my grandfather’s original idea for the family
            property, I designed this logo to go with a website to let family
            and friends rent spaces at the property. I spent a lot of my
            childhood here, so I wanted to logo to include not only the
            landscape that I love, but the feeling of fun and the great
            outdoors.
          </p>
          <div className='logo-pictures mt-5'>
            <p className='font-size-1_3'>Before:</p>
            <p className='font-size-1_3'>After:</p>
            <img
              src={VerticalRanchStart}
              alt='Vertical Ranch start'
              className='circle logo-picture'></img>
            <img
              src={VerticalRanchLogo}
              alt='Vertical Ranch logo'
              className='logo-picture'></img>
          </div>
        </div>
      </section>
    </>
  );
}
