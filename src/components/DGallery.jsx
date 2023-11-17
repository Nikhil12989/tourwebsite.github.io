import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faSuitcase, faEnvelope ,faImage } from '@fortawesome/free-solid-svg-icons';


const DGallery = () => {
  const [mediaItems] = useState([
    { type: 'image', src: 'https://spacesarathi.com/wp-content/uploads/2023/08/10.jpeg', caption: 'Trip To Sun Temple' },
    { type: 'image', src: 'https://spacesarathi.com/wp-content/uploads/2023/08/11.jpeg', caption: 'Trip to Temple' },
    { type: 'image', src: 'https://spacesarathi.com/wp-content/uploads/2023/08/9.jpeg', caption: 'Trip to Taj Mahal' },
    { type: 'image', src: 'https://spacesarathi.com/wp-content/uploads/2023/08/2.jpeg', caption: 'Trip to Red Fort' },
    { type: 'image', src: 'https://spacesarathi.com/wp-content/uploads/2023/08/1.jpeg', caption: 'Trip to .....' },
    { type: 'image', src: 'https://spacesarathi.com/wp-content/uploads/2023/08/1.jpeg', caption: 'Trip to .....' },
    { type: 'image', src: 'https://spacesarathi.com/wp-content/uploads/2023/08/4.jpeg', caption: 'Trip to Zoo' },
    { type: 'image', src: 'https://spacesarathi.com/wp-content/uploads/2023/08/3.jpeg', caption: 'Trip to Charminar' },
    { type: 'image', src: 'https://spacesarathi.com/wp-content/uploads/2023/08/6.jpeg', caption: 'Trip to coimbatore' },
    { type: 'video', src: 'https://spacesarathi.com/wp-content/uploads/2023/08/t1.mp4', caption: 'Trip to Temple' },
    { type: 'video', src: 'https://spacesarathi.com/wp-content/uploads/2023/08/t2.mp4', caption: 'Trip to Temple' },
    { type: 'video', src: 'https://spacesarathi.com/wp-content/uploads/2023/08/t3.mp4', caption: 'Trip to Temple' },
    // Add more images and videos as needed
  ]);

  return (
    <>
    <h1 className='abcd'>  <FontAwesomeIcon icon={faImage} /> Our Gallery </h1>
    <hr />
    <div className="gallery">
      {mediaItems.map((item, index) => (
        <div key={index} className="gallery-item">
          {item.type === 'image' ? (
            <>
              <img src={item.src} alt={`Image ${index + 1}`} />
              <h1 className="caption">{item.caption}</h1>
            </>
          ) : (
            <>
              <video controls>
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h1 className="caption">{item.caption}</h1>
            </>
          )}
        </div>
      ))}
    </div>
    </>
  );
};

export default DGallery;
