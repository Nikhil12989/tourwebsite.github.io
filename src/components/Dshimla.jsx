import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { Accordion as BootstrapAccordion, Card, Button } from 'react-bootstrap'; // Rename Accordion


const Dshimla = () => {

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
      <h5 className='title-accordion'>२७ फेब्रु :-  First day</h5>
    </div>
    {openItem === 1 && (
      <div className='accordion-content'>
        <p>सर्वांनी पुणे स्टेशन वर सकाळी ७:०० वा हजर राहणे पुणे स्टेशन वरून सकाळी ७:५० च्या 🚆प्रगती एक्सप्रेस ने पनवेल कडे निघणे १०:०० वा पनवेल स्टेशन वर पोहचणे, पनवेल स्टेशन वरून 🚆संपर्क क्रांती एक्सप्रेस ने ११:०० वा चंदीगड साठी निघणे.</p>
      </div>
    )}
    </div>
    <br />
    <div className='accordion-container' >
    <div className='accordion-item'>
      <button className='accordion-button' onClick={() => toggleAccordion(2)}>
        <span> {openItem === 2 ? '-' : '+'}</span>
       
      </button>
      <h5 className='title-accordion'>२८ फेब्रु :- Second day</h5>
    </div>
    {openItem === 2 && (
      <div className='accordion-content'>
        <p>  सकाळी ९.५० वा चंदिगडला स्टेशन वर पोहचणे त्यानंतर 🚌 टेम्पो ट्रॅव्हलर ने चंदीगड ते शिमला ५ तास प्रवास शिमला मध्ये हॉटेल वर पोहचणे फ्रेश होऊन शिमला मध्ये फिरायला जाणे रात्रीचे जेवण करून 🏨 शिमला हॉटेल मुक्काम.
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
      <h5 className='title-accordion'>२९ फेब्रु : Third day</h5>
    </div>
    {openItem === 3 && (
      <div className='accordion-content'>
        <p>सकाळी नाष्टा करून कुफरी, लक्कर बाजार, मॉलरोड, चर्च फिरणे, जाखू टेम्पल ( रोप वे किंवा जीपने जाणे तुमच्या गाडी ला परमिशन नाही ) 🏨 शिमला हॉटेल मुक्काम.

</p>
      </div>
    )}
    </div>
    <br />
    <div className='accordion-container'> 
    <div className='accordion-item'>
      <button className='accordion-button' onClick={() => toggleAccordion(4)}>
        <span> {openItem === 4 ? '-' : '+'}</span>
       
      </button>
      <h5 className='title-accordion'>
०१ मार्च :- Fourth day</h5>
    </div>
    {openItem === 4 && (
      <div className='accordion-content'>
        <p> शिमला हॉटेल मध्ये नाष्टा करून तुम्ही मनाली ला निघणे  रोड मध्ये थांबत फोटोग्राफी करत वैष्णवो देवी टेम्पल, करून रात्री 🏨 मनाली हॉटेल मुक्काम.</p>
      </div>
    )}
    </div>
    <br />
    <div className='accordion-container'>
    <div className='accordion-item'>
      <button className='accordion-button' onClick={() => toggleAccordion(5)}>
        <span>{openItem === 5 ? '-' : '+'}</span>
        
      </button>
      <h5 className='title-accordion'>०२ मार्च :- Fifth day</h5>
    </div>
    {openItem === 5 && (
      <div className='accordion-content'>
        <p> सकाळी हॉटेल मध्ये नाष्टा करून मनाली मध्ये तिबेटियन मॉनेस्टरी, वनविहार, हिंडीबा टेम्पल, वशिष्ट टेम्पल, मॉलरोड, मार्केट शॉपिंग, रात्री 🏨 मनाली हॉटेल मुक्काम.
</p>
      </div>
    )}
    </div>
    <br />
    <div className='accordion-container'>
    <div className='accordion-item'>
      <button className='accordion-button' onClick={() => toggleAccordion(6)}>
        <span> {openItem === 6 ? '-' : '+'}</span>
       
      </button>
      <h5 className='title-accordion'>०३ मार्च :- Sixth day</h5>
    </div>
    {openItem === 6 && (
      <div className='accordion-content'>
        <p> सकाळी नाष्टा करून सोलंग व्हॅली 🚡 ला जाणे पुढे अटल टनल, सिसू फिरणे 🏨 मनाली हॉटेल मुक्काम.
      (रोहतांग पास ला जायचे असेल तर तुम्हाला परमिट ची कार घ्यावी लागेल तुमची कार जाऊ शकणार नाही त्यासाठीं तुम्हाला १५०० ते २००० पर्यंत पैसे द्यावे)
      रोहतांग पास आणि सिसू डिसें ते एप्रिल मध्ये बंद असते
      </p>
      </div>
    )}
    </div>
    <br />
    <div className='accordion-container'>
    <div className='accordion-item'>
      <button className='accordion-button' onClick={() => toggleAccordion(7)}>
        <span>{openItem === 7 ? '-' : '+'}</span>
        
      </button>
      <h5 className='title-accordion'>०४ मार्च : Seventh day</h5>
    </div>
    {openItem === 7 && (
      <div className='accordion-content'>
        <p>मनाली हॉटेल मध्ये नाष्टा मनाली ते मणीकरण ला जाणे मणीकरण गुरुद्वारा गरम🔥पाण्याचे कुंड पाहून चंदीगड ला रात्री उशिरा पोहचणे.
 </p>
      </div>
    )}
     </div>
  <br />
    <div className='accordion-container'>
    <div className='accordion-item'>
      <button className='accordion-button' onClick={() => toggleAccordion(8)}>
        <span> {openItem === 8 ? '-' : '+'}</span>
      </button>
      <h5 className='title-accordion'>०५ मार्च :- Eighth day</h5>
    </div>
    {openItem === 8 && (
      <div className='accordion-content'>
        <p>  चंदीगड स्टेशन वरून पहाटे ३:३० वा पुणे साठी🚆 ट्रेन.

</p>
      </div>
    )}
    </div>
    <br />
    <div className='accordion-container'>
    <div className='accordion-item'>
      <button className='accordion-button' onClick={() => toggleAccordion(9)}>
        <span> {openItem === 9 ? '-' : '+'}</span>
       
      </button>
      <h5 className='title-accordion'>०६ मार्च :- Ninth Day</h5>
    </div>
    {openItem === 9 && (
      <div className='accordion-content'>
        <p> पुणे स्टेशन वर ११:०० वाजता पोहचणे. </p>
      </div>
    )}
    </div>
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
An unforgettable trip to Shimla and kullu manali
  </h1>
  <div className='images'>
        <img src="https://media.istockphoto.com/id/530844529/photo/shimla-mountains-and-houses.jpg?s=612x612&w=0&k=20&c=aV8TWZ9fsCLhKRxTaP9xiSq0srmWHG8yhK9NDr7WgvI=" alt="" />
        <img src="https://media.istockphoto.com/id/1339403908/photo/shimla.jpg?s=612x612&w=0&k=20&c=09z1z_P7Nn_Byv6ijFlnJ9VrGGHvNA86Pn5E1zfvd9A=" alt="" />
       <img src="https://media.istockphoto.com/id/1271158171/photo/former-residence-of-the-british-viceroy-of-india-viceregal-lodge-it-is-also-known-as.jpg?s=612x612&w=0&k=20&c=Cx0I5qxN4C0iIg0iAolAPsVXb_1M-7_Ha0pZwYXxqmQ=" alt="" />
       <img src="https://media.istockphoto.com/id/1703963245/photo/river-flows-through-valley-flanked-by-rocks-in-manali-india.jpg?s=612x612&w=0&k=20&c=4DasZrA9k3qoUnrz1M70lzh6zvRlgmeoFHogpeHaFrU=" alt="" />
       <img src="https://media.istockphoto.com/id/1682150247/photo/gurudwara-shri-manikaran-sahib-india.jpg?s=612x612&w=0&k=20&c=YxZJwPhdQmHS-yLZIRfSZVFeh8RZcsz53IDeG09u480=" alt="" />
       <img src="https://media.istockphoto.com/id/1667344750/photo/orange-sunset-in-the-mountains-of-manali.jpg?s=612x612&w=0&k=20&c=-Fvj6FQ6OERQz2h-kyt94-no1kPB1ZCTrGSANh0XjCc=" alt="" />
       <img src="https://media.istockphoto.com/id/1667351670/photo/mountains-of-manali-during-sunrise.jpg?s=612x612&w=0&k=20&c=26xZZ7oBvkbVXFhWsQW0_y6kETnLdbe7ixkh6Th3YYY=" alt="" />
  </div>
  <a href="#" class="book-now">Book Now</a>
</div>

<section className='page-container'>
  <hr />
  <section className='left-section'>
    <div className='header'>
      <h1 className='head'>   Shimla and Kullu Manali Tour</h1>
    </div>
    <Slider className='imgth' {...settings}>
      {/* Your Slider content here */}
      <div className='th'>
      <img src="https://media.istockphoto.com/id/475836292/photo/clouds-rolling-between-hills-of-himachal.jpg?s=612x612&w=0&k=20&c=orTwGIhfXYnJPMpnkq70AL5IQPSLj0XeLVgn-EjjdyM=" alt="" />
    </div> 
      <div className='th'>
      <img src="https://media.istockphoto.com/id/1417858086/photo/shimla-scene.jpg?s=612x612&w=0&k=20&c=hwSNGQUQnaDQDxUnrZG7147aTQDne-zdddi7IhtKSKg=" alt="Tour Image 1" />
    </div>
    <div className='th'>
      <img src="https://media.istockphoto.com/id/1756604396/photo/suburb-of-kulu-town-in-himachal-pradesh-nexto-river-beas.jpg?s=612x612&w=0&k=20&c=xbANjOnImKGqAzKYToq2JqFrR9Ne49a3WGlE5RTcMQY=" alt="Tour Image 2" />
    </div>
    <div className='th'>
      <img src="https://media.istockphoto.com/id/1682150236/photo/colorful-local-houses-in-manikaran-india.jpg?s=612x612&w=0&k=20&c=YyOeUHKIWqUklAm4SpYH1RA6kSq2uL2nZmfaJBUHuqY=" alt="Tour Image 3" />
    </div>
    <div className='th'>
      <img src="https://media.gettyimages.com/id/1223233088/photo/india-gujarat-baroda-or-vadodara-lakshmi-vilas-palace.jpg?s=612x612&w=0&k=20&c=f6WVT4iHvMBxoZKw9VSCyFsaIGj-6gy5SaGWaC1Cldc=" alt="" />
    </div>
    <div className='th'>
      <img src="https://media.istockphoto.com/id/1595873522/photo/para-sailing-in-manali-in-fog-showing-the-popular-adventure-sport-in-hill-stations-like.jpg?s=612x612&w=0&k=20&c=mLdoxM4HhcQmw3K4qURXub8HRWdYNUbIu4eut8aD10c=" alt="" />
    </div>                                
    </Slider>
 <br /> <hr />
   
 {/* tour right section  */}
    <div className='tour-price'> 
    <h2>Tour Price</h2>
             <h3>🚆 टोटल पॅकेज १४,५००/- ट्रेन ३ एसी तिकिट १ रूम मध्ये ३ व्यक्ती<br />🚆 टोटल पॅकेज १६,४००/- ट्रेन ३ एसी तिकिट रूम १ रूम मध्ये २ व्यक्ती<br />
🚆 रेल्वेचे तिकीट ४ महिने आधी ओपन होत असल्यामुळे फेब्रु टुर चे बुकिंग १५ ऑक्टोबर पर्यंतच घेतलं जाईल त्यानंतर बुंकिंग घेतले जाणार नाही.
 <br />
              </h3>      
    </div>
    <div className='tour-specfic'> 
        <h2>सहल खर्चा मध्ये समाविष्ट बाबी खालील प्रमाणे</h2>
        <p>➡ यात्रा पुणे स्टेशन वरून सुरू होईल आणि पुणे स्टेशन वर समाप्त होईल. <br />
      ➡ संपूर्ण सहली मध्ये शाकाहारी आहार दिवसातून २ वेळेस चहा, सकाळी नाश्ता, रात्रीचे जेवण. <br />
      ➡ सर्व हॉटेल डिलक्स, ३* प्रकारचे असतील निवास रूम एक रूम तीन व्यक्ती साठी राहील. <br />
      ➡ दोन बेड आणि दोन किंवा एक Extra गादी खाली असेल. <br />
      ➡ स्वतंत्र रूम हवी असल्यास त्याचे प्रत्येकी ३,०००/- एक्सट्रा होतील तसे टूर बुक करता वेळेस सांगावे. <br />
      ➡ लोकल प्रवास करण्यासाठी नॉन एसी  मिनी बस असेल. <br />
      ➡ सकाळचा नाष्टा रात्रीचे जेवण समाविष्ट आहे. <br />
      </p> 
      <h2>सहल खर्चामध्ये समाविष्ट नसलेल्या बाबी</h2>
      <p>➡ बेट द्वारका येथील बोट प्रवास. <br />
      ➡  स्थानिक तिकिटे. <br />
      ➡ रेल्वे प्रवासा मधील आणि दुपारचे जेवण समाविष्ट नसेल. <br />
      ➡ रिक्षा-टॅक्सी, हमाल, लॉंड्री, डोली, रोपवे फी इत्यादी याचा सर्व खर्च स्वताः करायचा आहे. <br />
      </p>
     <hr /> <hr />
   
      <p>
        **********************************<br />
                  सूचना:- <br />
                  ▶ सर्व हॉटेल ३ स्टार प्रकारचे राहतील. <br />
▶ पॅकेज मध्ये ५ नाष्टा ५ रात्रीचे जेवण समाविष्ट आहे. <br />
▶ टुर पुणे स्टेशन वरून चालू होईल आणि पुणे स्टेशन वर समाप्त होईल. <br />
▶ एका रूममध्ये ३ जण राहतील, दोघां साठी रूम पाहिजे असल्यास त्यांना प्रत्येकी २०००/- एकस्ट्रा वेगळे द्यावे लागेल. <br />
▶ हॉटेल मध्ये कोणाला थंडी मुळे गरम हिटर पाहिजे असल्यास हॉटेल काउंटर वर पैसे देऊन हिटर घ्यावे. <br />
▶ बर्फा मधील सर्व ऍक्टिव्हिटीज, घोडे, रोप वे, बर्फा मधील सुट, यांचे सर्व पैसे तुम्हाला द्यायचे आहे. <br />
▶ अचानक बर्फ जास्त पडल्यास सिसु रोड बंद केल्यास जाता येणार नाही. <br />
▶ शिमला मनाली मध्ये थंडी असते त्यामुळे सर्वांनी ग्रुप मधील सर्व सदस्यानां सूचना आहे जवळ १ शाल, स्वेटर, कानटोपी बाकी थंडीचे सर्व कपडे घेणे. <br />
▶ रोज दिलेल्या टायमिंग ला तयार राहणे सर्वांनी दिलेल्या टाईम मध्ये गाडी जवळ यावे कोणीही उशीर करू नये. <br />
▶ गाडी मध्ये रोज सीट चेंज करावे. <br />
▶ शिमला मनाली हा माउंटन भाग असल्यामुळे आपला प्रवास पुश बॅक सीट १४ सीट टेम्पो ट्रॅव्हलर ने राहील. <br />
▶ सर्व पर्यटन स्थंळाचा खर्च गार्डन, रोपवे, बोटींग, म्युझियम, रिक्षा, सुमो, हमाल यांचा सर्व खर्च तुम्हाला पॅकेज व्यतिरिक्त स्वतःला तिथे द्यावा लागेल. <br />
▶ ज्या ठिकाणी आपली गाडी जाणार नाही तिथे तुम्हाला दुसऱ्या छोट्या गाडी ने स्वताःच्या पैशाने बुक करून जावे लागेल. <br />
▶ ट्रिप माऊंटन मध्ये प्रवास असल्यामुळे कुठेही कमी जास्त टाईम होऊ शकतो ते सर्वांनी ॲडजस्टमेंट करावी. <br />
▶ रेल्वे मध्ये स्वताःचे जेवण घेणे. <br />
▶ कोणाला काही औषधे असल्यास सर्व औषधे किंवा डॉक्टर च्या सल्ल्यानुसार घ्यावीत टुर मध्ये काही झाल्यास हॉस्पीटल चा खर्च तुम्हाला स्वताःला करायचा आहे. <br />
▶ जीवित व वित्त हानीस टूर आयोजक जबाबदार नसतील. <br />
 <br />
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

export default Dshimla