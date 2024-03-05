"use client";
import React, {useState} from 'react'
import { TypeAnimation } from 'react-type-animation';

const Tagline = () => {
    return (
        <span className='text-3xl font-medium'>
        <TypeAnimation
      sequence={[
        'An aspiring UI/UX designer, front-end web developer, and a dog lover.',
        200,
        () => {
          console.log('Sequence completed');
        },
      ]}
      cursor={true}
      repeat={Infinity}
      />
      </span>
    );
  };

const HeroSection = () => {
  return (
    // TODO: make the height longer
    <section className='text-black bg-light-green h-96 px-4'>
        <div className='flex h-full items-center justify-center px-4'>
            <div className='flex-row'>
            <h1 className='text-6xl font-extrabold quicksand'>
                Hi, I am Zhoe Aeris.
            </h1>
            <p className='text-3xl font-medium source-sans-3'> 
                <Tagline />
            </p>
            </div>
            
            
        </div>
        
        
        
    </section>
  )
}

export default HeroSection
