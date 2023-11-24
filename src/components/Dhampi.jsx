import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { Accordion as BootstrapAccordion, Card, Button } from 'react-bootstrap'; // Rename Accordion


const Dhampi = () => {

  const CustomAccordion = () => { // Rename to CustomAccordion
    const [openItem, setOpenItem] = useState(null);

    const toggleAccordion = (accordionNumber) => {
      setOpenItem((prevItem) => (prevItem === accordionNumber ? null : accordionNumber));
    };
  return (
    <div>
    <br />
    <br />
    <br />
    <br />
  <div>
    <div className='accordion-container'>
    <div className='accordion-item'>
      <button className='accordion-button' onClick={() => toggleAccordion(1)}>
        <span className='plus'>{openItem === 1 ? '-' : '+'}</span>
      </button>
      <h5 className='title-accordion'>दिनांक.25 फेब्रुवारी
:- First day</h5>
    </div>
    {openItem === 1 && (
      <div className='accordion-content'>
        <p>-Virupaksha temple.
-Big and small Ganesha temple.
-Krishna temple. 
-Krishna bazaar.
-Pushkar Ani  
-Badavi linga  
-Ugranashima.  -Underground temple.
- Lotus Mahal. 
-Elephant stable. 
-Watch tower.
-Royal Centre Pushkarni. -Queens Bath Museum.
-Vitthal temple. 
-Sunset at Matunga Hills.
</p>
      </div>
    )}
    </div>
    <br />
    <div className='accordion-container' >
    <div className='accordion-item'>
      <button className='accordion-button' onClick={() => toggleAccordion(2)}>
        <span> {openItem === 2 ? '-' : '+'}</span>
       
      </button>
      <h5 className='title-accordion'>दिनांक. 26 फेब्रुवारी:- Second day</h5>
    </div>
    {openItem === 2 && (
      <div className='accordion-content'>
        <p> -Anjandri Hill
-Sanapur lake 
-Pampa sarovar 
-Durga temple 
-Water falls 
-On the way visit Malyavantha temple
</p>
      </div>
    )}
    </div>
    <br />
    <div className='accordion-container'>
    <div className='accordion-item'>
      <button className='accordion-button' onClick={() => toggleAccordion(3)}>
        <span> {openItem === 3 ? '-' : '+'}</span>
       
      </button>
      <h5 className='title-accordion'>दिनांक. 27 फेब्रुवारी:- Third day</h5>
    </div>
    {openItem === 3 && (
      <div className='accordion-content'>
        <p>-Badami caves. -Bhootnath temple.  -Badami fort.
-Pattadakal.
-Aihole .
.</p>
      </div>
    )}
    </div>
    <br />
    <div className='accordion-container'> 
    <div className='accordion-item'>
      <button className='accordion-button' onClick={() => toggleAccordion(4)}>
        <span> {openItem === 4 ? '-' : '+'}</span>
       
      </button>
      <h5 className='title-accordion'>दिनांक.28 फेब्रुवारी:- Fourth day</h5>
    </div>
    {openItem === 4 && (
      <div className='accordion-content'>
        <p> सकाळी लवकर उठून बदामी, ऐहोळे, पट्टकल्लळ, इ. साईड सिन पाहून दुपारी 3 वाजता परतीचा प्रवास रात्री 11 वाजता कराड पोच आणि ट्रीप समाप्त. 
.</p>
      </div>
    )}
    </div>
    <br />
   
    <br />

    <br />
 
 
    <br />
  </div>
</div>
);
};

// Slider settings
function Arrow(props) {
const { className, style, onClick } = props;
return (
<div
  className={className}
  style={{ ...style, display: '', color: 'white', background: '#a9a4a4' }}
  onClick={onClick}
/>
);
}
const settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 1,
slidesToScroll: 1,
prevArrow: <Arrow />,
nextArrow: <Arrow />,
};

return (
<>
<hr />
<div className='heading-title'>
  <h1  >
  
  </h1>
  <h1  className='gujrat'>
An unforgettable trip to Hampi Badami
  </h1>
  <div className='images'>
        <img src="https://media.istockphoto.com/id/137340137/photo/vittala-temple-stone-chariot-hampi-karnataka-india.jpg?s=612x612&w=0&k=20&c=HMFrtHk2QCPENR6bBncce0Xz46Lg49w-HSOrb5qyU2E=" alt="" />
        <img src="https://media.istockphoto.com/id/1366793968/photo/india-hampi-beautiful-view-of-the-river-and-mountains.jpg?s=612x612&w=0&k=20&c=kEJ5M7oywTnXfG47Z7ymV5-mVFgI6tkDYXawqftOWt4=" alt="" />
       <img src="https://media.istockphoto.com/id/136232473/photo/achyuta-raya-temple-hampi-karnataka-india.jpg?s=612x612&w=0&k=20&c=iyApv09FCVZU1KitHzw0WyAsEoGEt4xE4ZsEjEQG8tQ=" alt="" />
       <img src="https://media.istockphoto.com/id/648800178/photo/hampi-unesco-world-heritage-site-karnataka-india.jpg?s=612x612&w=0&k=20&c=xKfxXoBFevMS1gMDJyD68fWUgJ5iRav2ih_ojUWDYUM=" alt="" />
       <img src="https://media.istockphoto.com/id/171154365/photo/malyavantha-ragunatha-temple-hampi-karnataka-india.jpg?s=612x612&w=0&k=20&c=vD8zdpzEBOhUBxXhSypnNURrbaOjU9h4xh-DIctyeYA=" alt="" />
       <img src="https://media.istockphoto.com/id/151702035/photo/hampi-at-sunset.jpg?s=612x612&w=0&k=20&c=724DwcRQMe2_FTK7JZVuJVDIdc13v4vADFJamo9YdKU=" alt="" />
       <img src="https://media.istockphoto.com/id/696966108/photo/beautiful-sunset-over-rocks-in-hampi.jpg?s=612x612&w=0&k=20&c=V32Fx0vK16xyKV77xX9Y48aDCIOBmaIvsGK4rlZd4GM=" alt="" />
  </div>
  <a href="#" class="book-now">Book Now</a>
</div>

<section className='page-container'>
  <hr />
  <section className='left-section'>
    <div className='header'>
      <h1 className='head'>   Hampi Badami Tour</h1>
    </div>
    <Slider className='imgth' {...settings}>
      {/* Your Slider content here */}
      <div className='th'>
      <img src="https://media.istockphoto.com/id/184740950/photo/ganesha-temple.jpg?s=612x612&w=0&k=20&c=qzqFZR1Ec3DWR1BxQOAFJvhcRg-BEaodHxoJl_vdM8I=" alt="" />
    </div> 
      <div className='th'>
      <img src="https://media.istockphoto.com/id/172412009/photo/hampi-lotus-mahal.jpg?s=612x612&w=0&k=20&c=fniXnimhRFtUqDEp5725RtsjYyzxmdZgnXjrJwb89oU=" alt="Tour Image 1" />
    </div>
    <div className='th'>
      <img src="https://media.istockphoto.com/id/484272052/photo/virupaksha-temple-hampi-india.jpg?s=612x612&w=0&k=20&c=47h5Ze4ZrY5igpF9YTZX8VPzdplKqDHEj1H7vBVlrXw=" alt="Tour Image 2" />
    </div>
    <div className='th'>
      <img src="https://media.istockphoto.com/id/1319414979/photo/wall-sculptures-of-hindu-gods-at-hampi-temple-in-black-and-white.jpg?s=612x612&w=0&k=20&c=Zcf_tGjKuOkKO_VnUEOhlQdSPPFgvBgIap-cUsgCDVc=" alt="Tour Image 3" />
    </div>
    <div className='th'>
      <img src="https://media.istockphoto.com/id/1270775325/photo/man-witnessing-at-narasimha-lakshmi-temple-hampi-antique-stone-art-close-up-shot.jpg?s=612x612&w=0&k=20&c=KRMmk3ei1YLQFkOwRj80Qdxy9un8UrTmom9n9OfHuN8=" alt="" />
    </div>
    <div className='th'>
      <img src="https://media.istockphoto.com/id/966618808/photo/decorative-pillars-from-black-basalt-in-mandappa-or-hall-hazara-rama-temple-hampi-karnataka.jpg?s=612x612&w=0&k=20&c=n9Y6UUleNEk0VZFayw-gRa3W2H-ifhAitJ1zjn4QKXA=" alt="" />
    </div>                                
    </Slider>
 <br /> <hr />
   
 {/* tour right section  */}
    <div className='tour-price'> 
    <h2>Tour Price</h2>
             <h3>
             ➡ ट्रिपचा एका व्यक्तीचा खर्च <br />
✅ कराड 6,500/- प्रति व्यक्ती 

 </h3>      
    </div>
    <div className='tour-specfic'> 
        <h2>सहल खर्चा मध्ये समाविष्ट बाबी खालील प्रमाणे</h2>
        <p>➡ नॉन एसी मिनी बस प्रवास <br />
          ➡ चहा,नाष्टा,जेवण (शुद्ध शाकाहारी)  दिवसातून 2 लिटर बिसलेरी पाणी <br />
          ➡ 3 ते 4 व्यक्ती मध्ये नॉन एसी रूम होम स्टे पद्धतीत मिळेल. <br />
          ➡ सर्व ठिकाणची इंट्री फी तिकिट्स. <br />
          ➡ गाईड. <br />
. <br />
      </p> 
   
     <hr /> <hr />
  
      <p>
        **********************************<br />
                  सूचना:- <br />
                  ➡ आपली ट्रीप कराड वरून सुरू होईल व कराड ला समाप्त होईल. <br />
➡ सहली दरम्यान उद्भवणारे हॉस्पिटल अथवा अन्य कोणते ही खर्च स्वतःला करावे लागतात. <br />
 ➡ बस मधून प्रवास करत असताना कोणी ही स्वतःची जागा (सीट) फिक्स करू नये. सीट रोज बदलत राहावे. <br />
➡ वातावरणा नुसार किंवा नैसर्गिक आपत्ती मुळे दिलेल्या वेळापत्रका मध्ये बादल होऊ शकतो. <br />
➡ ओरिजनल आधार कार्ड व एक झेरॉक्स बरोबर ठेवावे. <br />
➡ मुक्कामा साठी ३ ते ४ व्यक्तीं मध्ये एक रूम असेल. <br />
➡ सर्वांनी दिलेली वेळ पाळावी कोणी ही उशीर करू नये. <br />
➡ कोणाचे ही बुकिंग रद्द होणार नाही. <br />
➡ 5 वर्षा पर्यंतच्या मुलांना निशुल्क सेवा असेल. 6 ते 10 वर्षा पर्यंतच्या मुलांना आर्दी (हाफ) शुल्क आकारली जाईल 11 वर्षा पासून पुढे पूर्ण शुल्क आकारली जाईल. <br />
➡ स्वतःच्या औषध गोळ्या चालु असल्यास डॉक्टरांच्या सल्ल्याने बरोबर घ्यावित. <br />
➡ ट्रीप वर येताना कोणी ही मौल्यवान वस्तू आणू नये हरवल्यास किंवा चोरीला गेल्यास टूर आयोजक जबाबदार नसतील. <br />
➡ स्वतःच्या बॅग स्वतःला उचलाव्या लागतील. <br />
➡ आपातकालीन वैद्यकीय मदत खर्च स्वतःचा राहील. <br />
➡ एसी रूम किंवा स्वतंत्र रूम हवी असल्यास तसे अगोदर सांगावे त्याचे ज्यादा पैसे द्यावे लागतील. <br />
➡ जिवीत व वित्त हानीस आयोजक मंडळ जबाबदार राहणार नाही ज्याच्या त्याच्या जबाबदारीवर असेल. <br />
. <br />
      ******************************<br />
      ➡ जिवीत व वित्त हानीस आयोजक मंडळ जबाबदार राहणार नाही ज्याच्या त्याच्या जबाबदारीवर असेल.


      बुकिंग करताना सर्वांनी नियम व अटी वाचुनच बुकिंग करावे

      👉काही शंका असल्यास आपण फोन करून विचारू शकता.

      </p>
          <p className='contact'>
          ☸ सदैव आपल्या सेवेसी तत्पर आहोत.  <br /> <hr />
                       
            संतोष नांगरे पाटील <br />
            9822234839 &nbsp;/ &nbsp;8007972139 &nbsp;<br />
            प्रदीप पवार. <br />
            9527577800 &nbsp;/ &nbsp;9284648080

            ------------------------------------
            सदर पोस्ट आपल्या मित्र मंडळी नातेवाईकांना पाठवावी.
            धन्यवाद.🙏
           </p>
    </div>
  </section>
  <section className='right-section'>
    <CustomAccordion />
  </section>
</section>
</>
  )
}

export default Dhampi