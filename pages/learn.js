import React from 'react'
// import morse from '../public/images/wp5048666.png'
import Image from 'next/image';
function Header() {
    return (
        <div  className='bodyBox'>

        <div className='imageBox' >
             <Image src="/images/wp5048666.png" width={500} height={600} alt="Morse Code" />
        </div>
        </div>

       

        
    )
}

export default Header;
