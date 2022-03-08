import { Carousel } from 'react-carousel-minimal';
import './appp.css'
import Footer from '../Footer';

function dyer() {
 const data = [
    {
      image: "./art.jpg",
      
      caption: ""
    },
    {
      image: "./images/foto1.jpg",
      caption: "",
      
    },
    {
      image: "./images/foto2.jpg",
      caption: "",
    },
    {
      image: "./images/foto3.jpg",
      caption: "",
    },
    {
      image: "./images/foto4.jpg",
      caption: "",
    }
    
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="Appp">
      <div style={{ textAlign: "center" }}>
       
        <div className="cont" style={{
          padding: "10px 5px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="100%"
            height="450px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={false}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="white"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="110px"
            style={{
              textAlign: "center",
              maxWidth: "900px",
              maxHeight: "550px",
              margin: "0px auto",
              
              
             
              
            }}
          />
        </div>
      </div>
      <div style={{color:"white"}}>---------</div>
      <Footer/>
    </div>
    
  );
  
}

export default dyer;