import { Carousel } from 'react-carousel-minimal';
import './appp.css'

function Products() {
 const data = [
    {
      image: "./art.jpg",
      
      caption: ""
    },
    {
      image: "./images/dr1.jpg",
      caption: "",
      
    },
    {
      image: "./images/dr2.jpg",
      caption: "",
    },
    {
      image: "./images/dr3.jpg",
      caption: "",
    },
    
    {
      image: "./images/dr5.jpg",
      caption: "",
    },
    {
      image: "./images/dr6.jpg",
      caption: "",
    },
  
    
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
    </div>
  );
}

export default Products;