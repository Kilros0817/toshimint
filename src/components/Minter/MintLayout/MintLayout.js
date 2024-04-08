import React from 'react';

import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Mint from '../Mint/Mint';


function MintLayout() {
  return (
    
    <body className="main-bg d-flex flex-column">
            <div className="min-vh-100">
               <Header />
                <Mint />
                <Footer />
            </div>
        </body>
  )
}


export default MintLayout;