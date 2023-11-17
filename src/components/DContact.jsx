import React from 'react'

const DContact = () => {
  const contactInfo = {
    companyName: 'स्पेस-सारथी',
    address: '  Flat No - F1, Shree Shailya Residency, Gayatri Pentas Behind, Nearby Panjab Hotel Kolhapur Naka.Malkapur. Karad 415 539 ',
    email: 'info@example.com',
    officeLocation: 'https://maps.app.goo.gl/CEeHr7rUz9LVTnZh9', 
  };
  return (
    <div className="address-container">
      <h1>{contactInfo.companyName}</h1>
      <div className="contact-info">
        <p>{contactInfo.address}</p>
        <p>Email: {contactInfo.email}</p> 
      </div>
      <div className="map-container">
        <iframe
          title="Google Maps Location"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?q=${contactInfo.officeLocation}&key=YOUR_GOOGLE_MAPS_API_KEY`}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default DContact