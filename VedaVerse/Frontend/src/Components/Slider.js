// import React, { Component } from "react";
// import Carousel from "react-bootstrap/Carousel";

// function BootstrapCarousel() {
//   return (
//     <div className="container-fluid">
//       <Carousel>
//         <Carousel.Item style={{ maxHeight: "400px" }}>
//           <img
//             style={{ height:"100%" }}
//             className="d-block w-100"
//             src={"https://img.freepik.com/free-photo/spoons-full-spices-beige-fabric_23-2148211184.jpg?w=900&t=st=1694798630~exp=1694799230~hmac=651d6a6ff05aead2d4379c4564364c3027d48698876d86297fff8d90db633911"}
//           />
//           <Carousel.Caption>
//             <h3>First Demo </h3>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item style={{ maxHeight: "400px" }}>
//           <img
//             style={{height:"100%"}}
//             className="d-block w-100"
//             src={"https://img.freepik.com/free-photo/blended-curcumin-powder-wooden-spoon_114579-69886.jpg?w=1060&t=st=1694798702~exp=1694799302~hmac=a38eefb2e1e66264826e960c6781734795fbf25c50e130cf1a64684d0a836183"}
//           />
//           <Carousel.Caption>
//             <h3>Second Demo</h3>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item style={{ maxHeight: "400px" }}>
//           <img
//             style={{ height:"100%" }}
//             className="d-block w-100"
//             src={"https://img.freepik.com/free-photo/top-view-organic-medicines-with-ginger_23-2148776431.jpg?w=900&t=st=1694798761~exp=1694799361~hmac=20ae7ccb1cc3e00f79c0237a73f34c440b9e575c341b22f13d1836e99b9f4a9b"}
//           />
//           <Carousel.Caption>
//             <h3>Third Demo</h3>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// }

// export default BootstrapCarousel;


import React from "react";
import Carousel from "react-bootstrap/Carousel";


function BootstrapCarousel() {
  return (
    <div className="container-fluid p-0">
      <Carousel>
        <Carousel.Item style={{ maxHeight: "600px" }}>
          <a href="https://www.ibef.org/blogs/india-emerging-as-a-global-wellness-and-ayurveda-hub">
            <div className="carousel-content">
              <Carousel.Caption>
                <h3 className="animated-text">INDIA EMERGING AS A GLOBAL WELLNESS AND AYURVEDA HUB</h3>
              </Carousel.Caption>
            </div>
            <img
              className="d-block w-100 img-fluid"
              src="https://img.freepik.com/free-photo/variety-spices-are-cutting-board-with-green-vegetable-background_1340-23417.jpg?t=st=1694817002~exp=1694820602~hmac=f9b45d21e00bcfc9c76d862af48e91ef52cea092c0eed346b5838a3bf4ba5741&w=1060"
              alt="First Demo"
            />
          </a>
        </Carousel.Item>

        <Carousel.Item style={{ maxHeight: "600px" }}>
          <a href="https://www.sciencedirect.com/science/article/pii/S0975947620300590">
          <div className="carousel-content">
            <img
              className="d-block w-100 img-fluid"
              src="https://wallpaperaccess.com/full/2996863.jpg"
              alt="Second Demo"
            />
            <Carousel.Caption>
              <h3 className="animated-text" style={{color:"black"}}>Ayurveda: (W)here is the evidence</h3>
            </Carousel.Caption>
          </div>
          </a>
        </Carousel.Item>

        <Carousel.Item style={{ maxHeight: "600px" }}>
          <a href="https://www.ijariit.com/manuscripts/v9i2/V9I2-1171.pdf#:~:text=The%20study%20employed%20a%20systematic%20review%20of%20existing,and%20Allopathy%20in%20the%20treatment%20of%20various%20diseases.">
          <div className="carousel-content">
            <img
              className="d-block w-100 img-fluid"
              src="https://th.bing.com/th/id/OIP.Vt9S1EZ-2vOcspeLI7uU8gHaEb?pid=ImgDet&rs=1"
              alt="Third Demo"
            />
            <Carousel.Caption>
              <h3 className="animated-text" style={{color:"black"}}>A comparative overview of Ayurveda and Allopathy with special 
reference to efficiency and limitation</h3>
            </Carousel.Caption>
          </div>
          </a>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BootstrapCarousel;

