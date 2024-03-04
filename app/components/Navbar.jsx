import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar }  from '@fortawesome/free-regular-svg-icons';

const Navbar = () => {
    // icons
    const starIcon = <FontAwesomeIcon icon={faStar} className="w-5 h-5"/>

  return (
    <nav className='flex bg-light-green text-black px-4 py-4  items-center'>
        <div className="flex-1">
            {starIcon}
        </div>
        <div classname="flex-1 bg-pink-200">
            <ul className='flex'>
                <li className='px-4 text-sm'><Link href={"#Projects"}>Projects</Link></li>
                <li className='px-4 text-sm'><Link href={"#About"}>About</Link></li>
                <li className='px-4 text-sm'><Link href={"#Resume"}>Resume</Link></li>
            </ul>
        </div>

        
    </nav>
  )
}

export default Navbar
