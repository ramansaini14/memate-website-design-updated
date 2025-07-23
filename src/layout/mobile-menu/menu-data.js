
import React, { useState,useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Images from "../../assests/images";
import Link from "next/link";
import './style.css'; 
import PanelMenu from './panel-menu';
import menuImages from "../../assests/menu-images";
// import { useLocation } from "react-router-dom";
import { usePathname } from "next/navigation";



const MenuData = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };


  // const closeMenu = () => setMenuOpen(false);
  // const toggleMenu = () => setMenuOpen(!menuOpen);
  

    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > '100%' ) {
            setShow(true)
        }else{
          setShow(false)
        }
    }
  
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

  
  
  
  
    // const location = useLocation();
    const pathname = usePathname();
  return (
    <div className={`burger-menu-wrapper active ${show && 'hidden'}`}>
      <Menu 
        isOpen={menuOpen}
        right
        customBurgerIcon={ <img src={Images.BurgerIcon} alt='BurgerIcon' type="image/svg+xml" /> }
        customCrossIcon={ <img src={Images.burgerCloseIcon} className='burgerCloseIcon' alt='burgerCloseIcon' type="image/svg+xml" /> }
        onStateChange={handleStateChange}
        width={'359px'}
      >
        <PanelMenu />
         <div className='listMobileWrap'>
         <div className="privacymobileNav">
           <Link href='/pricing'>Pricing</Link>
            <Link href='/news'>News</Link>
           <Link href='/contact-us'>Contact us</Link>
          </div>
       </div>
       <div className='logoMobileWrap'>
       <div className="header-menu-header-div-memate-component">
                  <img src={Images.logo} alt="logo" type="image/svg+xml" />
                  <div className="header-menu-memate-feature">
                    <div className="header-menu-feature">
                      <img src={menuImages.meMateCheck} alt='meMateCheck'/>
                      <p className="header-menu-feature-text">
                        Easy to Learn and Use
                      </p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} alt='meMateCheck'/>
                      <p className="header-menu-feature-texts">Remote Acess</p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} alt='meMateCheck'/>
                      <p className="header-menu-feature-texts">Workflow</p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} alt='meMateCheck' />
                      <p className="header-menu-feature-texts">
                        Single database
                      </p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} alt='meMateCheck'/>
                      <p className="header-menu-feature-texts">
                        Build for Australia
                      </p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} alt='meMateCheck'/>
                      <p className="header-menu-feature-texts">CRM & ERP</p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} alt='meMateCheck'/>
                      <p className="header-menu-feature-texts">Reporting</p>
                    </div>
                  </div>
                  <div className="request-a-button-wrapper">
                   <Link href='https://app.memate.com.au/requestdemo'  target="_blank"><img src={menuImages.RequestAdemo} alt='RequestAdemo'/> </Link>
                  </div>
                </div>
       </div>
      </Menu>
      <div className='mobilemenu-wrapper'>
 <div className='mobile-logo'>
<Link href='/'><img src={Images.logo} alt="logo" type="image/svg+xml" /></Link>
 </div>
 <div className="hamburger-container"></div>
 </div>
    </div>
  );
};

export default MenuData;
