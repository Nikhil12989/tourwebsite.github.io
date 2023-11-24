import React from 'react';
import './style.css';


const DHome = () => {
  return (

    <>
      <div className="container">
      {/* Image Example */}
      <div className="media-item">
        <img
          src="https://media.istockphoto.com/id/1224021113/photo/indian-cameleers-camel-driver-with-camel-silhouettes-in-dunes-on-sunset-jaisalmer-rajasthan.jpg?s=612x612&w=0&k=20&c=MeF2Dl4ya1NVOWM_I_xo3EPd8E-iazBghYhjiyRaTcU="
          alt="Tour Image"
          className="media"
        />
      </div>
      <div className="media-item">
        <img
          src="https://media.istockphoto.com/id/484056606/photo/decorated-elephant.jpg?s=612x612&w=0&k=20&c=EX1ARWjkW0t0qeuHOs6MU7-nGWCeYTxC4mp94kiSYaU="
          alt="Tour Image"
          className="media"
        />
      </div>
      <div className="media-item">
        <img
          src="https://media.istockphoto.com/id/857389362/photo/one-of-the-best-beaches-in-goa-cola-beach.jpg?s=612x612&w=0&k=20&c=NcVhUckqx3zqdZH4irSVQm5sOEkZHg60kwn1KEc0a5w="
          alt="Tour Image"
          className="media"
        />
      </div>
      <div className="media-item">
        <img
          src="https://media.istockphoto.com/id/1343698772/photo/ancient-stone-chariot-with-archaeological-ruins-in-the-courtyard-of-vittala-temple-at-hampi.jpg?s=612x612&w=0&k=20&c=iaK8rxzVtgrs2F-_Lt596JHer13-e9Es_TINWl6vta4="
          alt="Tour Image"
          className="media"
        />
      </div>
      <div className="media-item">
        <img
          src="https://media.istockphoto.com/id/520837732/photo/indian-landmark-gadi-sagar-in-rajasthan.jpg?s=612x612&w=0&k=20&c=sQgwAHU6yh91YrW63vhYXELdzgJJAklZshGBsObKDfE="
          alt="Tour Image"
          className="media"
        />
      </div>
          <div className="media-item">
        <img
          src="https://media.istockphoto.com/id/903877840/photo/the-crowd-and-vehicles-in-front-of-hawa-mahal.jpg?s=612x612&w=0&k=20&c=OB7q3UQsf0vpcno_6-6WLFhp3Ugota3B5IH3WdFYhUY="
          alt="Tour Image"
          className="media"
        />
      </div>

      {/* Video Example */}
      <div className="media-item">
        <video controls className="media">
          <source
            src="https://www.example.com/your-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="media-item">
        <video controls className="media">
          <source
            src="https://www.example.com/your-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="media-item">
        <video controls className="media">
          <source
            src="https://www.example.com/your-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Add more images and videos as needed */}
    </div>
         </>
    
  )
}

export default DHome