import React from 'react'
import { TypeAnimation } from 'react-type-animation';
export default function Typingani() {
  return (
    <TypeAnimation
      sequence={[
        
        `"Unlocking technology's potential, one innovation at a time"`,
        4000, 
       `" Coding the future, one line at a time"`,
        4000,
       `" Empowering progress through IT excellence"`,
        4000,
        `"Navigating the digital frontier with expertise"`,
        4000
      ]}
      wrapper="span"
      speed={20}
      className='text-3xl inline-block p-3'
      
      repeat={Infinity}
    />
  )
}
