import React from 'react';

import carRepairShop from '../assets/CarRepairShops.png'
import calendarApp from '../assets/calendarapp.png'
import HoriseonApp from '../assets/HoriseonRefactored.png'
import PasswordGenorator from  '../assets/PasswordGenerator.png'
import APIPractice from '../assets/APIPractice.png'
import nodeJSScreenshot from '../assets/nodeJSscreenshot.png'

const work = () => {
  return (
    <div>
      <section className="page-section text bg-dark portfolio" id="portfolio">
            <div className="container">
                
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Check Out Some My Previous Work</h2>
                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                  
                </div>
                
                <div className="row justify-content-center">
                   
                    <a href= "https://bighamcyrus.github.io/passwordgenerator/" target="_blank" className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" >
                      
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                               
                            </div>
                          
                            <img className="img-fluid" src={PasswordGenorator} target="_blank" alt="password generator" />
                        </div>
                    </a>
                  
                    <a href="https://bighamcyrus.github.io/Refactored-Code-for-Horiseon/" target="_blank" className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                               
                            </div>
                           
                            <img className="img-fluid" src={HoriseonApp} target="_blank" alt="SEO Company Webpage" />
                        </div>
                    </a>
                   
                    <a href="https://bighamcyrus.github.io/calendarCode/" target="_blank" className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                
                            </div>
                            <img className="img-fluid" src={calendarApp} alt="A link to a calendar app" />
                        </div>
                    </a>
                   
                    <a href="https://whispering-basin-00391.herokuapp.com/" target="_blank" className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div className="portfolio-item mx-auto">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                               
                            </div>
                            <img className="img-fluid" src={carRepairShop} />
                        </div>
                    </a>
                    
                    <a href="https://bighamcyrus.github.io/SteamAPI/" target="_blank" className="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div className="portfolio-item mx-auto">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                              
                            </div>
                            <img className="img-fluid" src={APIPractice} alt="..." />
                        </div>
                    </a>
                    
                    <a href="https://drive.google.com/file/d/1AncCv8ss0kb2c7IbVff87k9XOzNXqVOb/view" target="_blank" className="col-md-6 col-lg-4">
                        <div className="portfolio-item mx-auto">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                             
                            </div>
                            <img className="img-fluid" src={nodeJSScreenshot} alt=" code picture working node.js" />
                        </div>
                    
                    </a>
                </div>
            </div>
        </section>
     </div>
        
  );
};

export default work;