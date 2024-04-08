import React from "react";
import twitter from '../../assests/Twitter.svg';
import Medium from '../../assests/Medium.svg';
import Github from '../../assests/Github.svg';
import Discord from '../../assests/Discord.svg';
import './Footer.css';


const Footer = () => {
    return(
        <footer class="footer-icon py-2 my-2">
    <ul class="nav justify-content-center pb-3 mx-4 mx-sm-0 text-center">
      <li class="nav-item"><a href="#" class="nav-link px-0 px-sm-2"><img src={Medium} alt='twitter' ></img></a></li>
      <li class="nav-item"><a href="#" class="nav-link px-0 px-sm-2 "><img src={twitter} alt='twitter' ></img></a></li>
      <li class="nav-item"><a href="#" class="nav-link px-0 px-sm-2 "><img src={Github} alt='twitter' ></img></a></li>
      <li class="nav-item"><a href="#" class="nav-link px-0 px-sm-2 "><img src={Discord} alt='twitter' ></img></a></li>
      
    </ul>
    <p class="text-center text-white">© 2023 ToshiMint | All rights reserved</p>
  </footer>
    )
};

export default Footer;