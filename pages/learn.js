import React from 'react'
// import morse from '../public/images/wp5048666.png'
import Image from 'next/image';
function Header() {
    return (
        <div  className='bodyBox'>
            <div className="brand">
          <div className="logo"></div>
          <div className="brandName">Roger</div>

         
        </div>

        <div className='imageBox' >
             <Image src="/images/wp5048666.png" width={500} height={600} alt="Morse Code" />
        </div>


        <style jsx>
            {
                `
                .brand {
                    position: fixed;
                    top: 28px;
                    left: 54px;
                  }
                  .logo {
                    height: 55px;
                    width: 55px;
                    background-color: #a9a9b3;
                    border-radius: 50%;
                  }
        
                  .brandName {
                    font-family: "Work Sans", sans-serif;
                    position: absolute;
                    top: 7px;
                    left: 71px;
                    font-size: 30px;
                    color: #81818b;
                  }
                `
            }
        </style>
        </div>

       

        
    )
}

export default Header;
