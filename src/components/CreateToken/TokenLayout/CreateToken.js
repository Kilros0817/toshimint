import React from 'react';
import Sample from '../Wizard/Wizard';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';


function CreateToken() {
  return (
    
    <body className="main-bg d-flex flex-column">
            <div className="min-vh-100">
               <Header />
                <Sample />
                <Footer />
            </div>
        </body>
  )
}


export default CreateToken;