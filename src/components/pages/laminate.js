import { Carousel } from 'react-carousel-minimal';
import './appp.css'
import Footer from '../Footer';

function laminate() {
 const data = [
    {
      image: "./art.jpg",
      
      caption: ""
    },
    {
      image: "./images/lm1.jpg",
      caption: "",
      
    },
    {
      image: "./images/lm2.jpg",
      caption: "",
    },
    {
      image: "./images/lm3.jpg",
      caption: "",
    },
    {
      image: "./images/lm4.jpg",
      caption: "",
    },
    {
        image: "./images/lm5.jpg",
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

export default laminate;