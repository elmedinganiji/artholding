import React from 'react';
import '../../App.css';
import '../Footer.css';
import ContactForm from '../../ContactForm';



export default function ContactUs() {
  return(
  <div className="contact">
    
            
        
         <div className="container1">
           <h2>Our social media</h2>
  
  <div className="row">
    <div className="col-25">
      <label for="facebook">Facebook</label>
    </div>
    <div className="col-75 social-icons">
    <a href="https://www.facebook.com/ART-Holding-188588771487407"
              class='social-icon-link facebook'
              
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label for="instagram">Instagram</label>
    </div>
    <div className="col-75 social-icons">
    <a href=""
              class='social-icon-link instagram'
              
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label for="Number">Noumber</label>
    </div>
    <div className="col-75">
    <a href="tel:+38972656838">+38972656838</a>
    </div>
        </div>
        </div>
    <ContactForm/>
     </div>

     
       
    
   
  )
}