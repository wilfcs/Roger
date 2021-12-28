import React from 'react'
// import morse from '../public/images/wp5048666.png'
import Image from 'next/image';
import Logo from '../components/MyLogo';
import HomeArrow from '../components/HomeArrow';
function Header() {
    return (
        <div  className='bodyBox shiftBox'>
            <div className="brand">
          <Logo/>
         
        </div>

        <div className='imageBox' >
             <Image src="/images/wp5048666.png" width={500} height={600} alt="Morse Code" />
        </div>
        <HomeArrow page="/developers"/>



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
                  .bodyBox{
                    width: 97vw;
                    height: 97vh;
                  }
                  .imageBox{
                      width: 401px;
                  }
                `
            }
        </style>
        </div>

       

        
    )
}

export default Header;
