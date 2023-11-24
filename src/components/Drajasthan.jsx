import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Drajasthan = () => {

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
            <h5 className='title-accordion'>दि.16 नोव्हेंबर ::- First day</h5>
          </div>
          {openItem === 1 && (
            <div className='accordion-content'>
              <p>सकाळी बांद्रा टर्मिनस साठी निघणे दुपारी 12:00 वा ( ट्रेन नं 12216) बांद्रा टर्मिनस ते जयपूर साठी ट्रेन</p>
            </div>
          )}
          </div>
          <br />
          <div className='accordion-container' >
          <div className='accordion-item'>
            <button className='accordion-button' onClick={() => toggleAccordion(2)}>
              <span> {openItem === 2 ? '-' : '+'}</span>
             
            </button>
            <h5 className='title-accordion'>दि.17 नोव्हेंबर :- Second day</h5>
          </div>
          {openItem === 2 && (
            <div className='accordion-content'>
              <p>जयपूर स्टेशन वर पहाटे 6.00 ला पोहचणे स्टेशन वरून हॉटेल वर जाणे रुम शिल्लक असेल तरच सकाळी रूम मिळेल नाहीतर रिसेप्शनला वेटिंग ला थांबावे लागेल (कारण हॉटेल चेक इन हे दुपारी 12 च्या पुढे असते)
              हॉटेल फ्रेश झाल्यानंतर जयपूर लोकल जयगड, अमेरफोर्ट, हवामहल, जंतरमंतर, जलमहल पाहणे जयपूर हॉटेल मुक्काम.
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
            <h5 className='title-accordion'>दि.18 नोव्हेंबर :- Third day</h5>
          </div>
          {openItem === 3 && (
            <div className='accordion-content'>
              <p>सकाळी नाष्टा करून अजमेर ला निघणे 133 कि.मी अजमेर शरीफ दर्गाला( रिक्षा ने जावे लागेल) दर्गा पाहून पुष्कर ला जाणे भारतामधील एकमेव ब्रम्हा मंदिर आणि पुष्कर लेक त्यानंतर सावित्री मंदिर ( रोपवे ने जाणे) पुष्कर हॉटेल मुक्काम..</p>
            </div>
          )}
          </div>
          <br />
          <div className='accordion-container'> 
          <div className='accordion-item'>
            <button className='accordion-button' onClick={() => toggleAccordion(4)}>
              <span> {openItem === 4 ? '-' : '+'}</span>
             
            </button>
            <h5 className='title-accordion'>दि.19 नोव्हेंबर :- Fourth day</h5>
          </div>
          {openItem === 4 && (
            <div className='accordion-content'>
              <p>  सकाळी नाष्टा करून बिकानेर साठी निघणे 252 कि. मी प्रवास करून बिकानेर मधील करणीमाता मंदिर पाहणे ( मंदिरामध्ये देवीचे असंख्य उंदीर पहायला मिळतील पांढरा उंदीर पहायला मिळाला तर नशीबवान) बिकानेर हॉटेल मुक्काम.</p>
            </div>
          )}
          </div>
          <br />
          <div className='accordion-container'>
          <div className='accordion-item'>
            <button className='accordion-button' onClick={() => toggleAccordion(5)}>
              <span>{openItem === 5 ? '-' : '+'}</span>
              
            </button>
            <h5 className='title-accordion'>दि.20 नोव्हेंबर : Fifth day</h5>
          </div>
          {openItem === 5 && (
            <div className='accordion-content'>
              <p> सकाळी नाष्टा करून जैसलमेर साठी निघणे 330 कि.मी प्रवास जैसलमेर वॉर मेमोरियल , लाईट साऊंड शो पाहून रात्री जैसलमेर हॉटेल मुक्काम.</p>
            </div>
          )}
          </div>
          <br />
          <div className='accordion-container'>
          <div className='accordion-item'>
            <button className='accordion-button' onClick={() => toggleAccordion(6)}>
              <span> {openItem === 6 ? '-' : '+'}</span>
             
            </button>
            <h5 className='title-accordion'> दि.21 नोव्हेंबर :- Sixth day</h5>
          </div>
          {openItem === 6 && (
            <div className='accordion-content'>
              <p> सकाळी नाष्टा करून ( रिक्षाने ) जैसलमेर फिरणे, गाडीसर लेक, जैसलमेर किल्ला, पटवा की हवेली पाहणे दुपारी सम वाळवंटा मध्ये जाणे 50 कि.मी प्रवास उंट राईड, रात्री टेंट मध्ये राजस्थान कल्चर डान्स कार्यक्रम टेंट मध्ये मुक्काम.( डेझर्ट वाळवंटा मध्ये आंघोळी साठी खारं पाणी असते ) </p>
            </div>
          )}
          </div>
          <br />
          <div className='accordion-container'>
          <div className='accordion-item'>
            <button className='accordion-button' onClick={() => toggleAccordion(7)}>
              <span>{openItem === 7 ? '-' : '+'}</span>
              
            </button>
            <h5 className='title-accordion'>दि.22 नोव्हेंबर :- Seventh day</h5>
          </div>
          {openItem === 7 && (
            <div className='accordion-content'>
              <p> सकाळी नाष्टा करून लोंगेवाला बॉर्डर भारत पाकिस्तान इथे युद्ध स्थळ पाहण्यासाठी जाणे 115 कि मी
              प्रवास पाकिस्तान युद्धामध्ये जे जिंकलेले रणगाडे , सर्व हत्यारे वगैरे ते पाहायला मिळतील त्या ठिकाणाहून तनोट माता 50 कि.मी या ठिकाणी जाणार आहे तिथे भारत  पाकिस्तान युद्धा मध्ये बॉम्ब फेकलेले परंतु ते मंदिरावर फुटलेले नाही ते तुम्हाला बॉम्ब मंदिरा मध्ये पाहायला मिळतील रात्री डेझर्ट टेंट मध्ये मुक्काम.
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
            <h5 className='title-accordion'>दि.23 नोव्हेंबर :-  Eighth day</h5>
          </div>
          {openItem === 8 && (
            <div className='accordion-content'>
              <p>  जैसलमेर डेझर्ट ते जोधपुर 323 कि.मी प्रवास मेहरानगड, जसवंत थाडा, उमेदभवन पॅलेस, पाहून जोधपूर हॉटेल मुक्काम. </p>
            </div>
          )}
          </div>
          <br />
          <div className='accordion-container'>
          <div className='accordion-item'>
            <button className='accordion-button' onClick={() => toggleAccordion(9)}>
              <span> {openItem === 9 ? '-' : '+'}</span>
             
            </button>
            <h5 className='title-accordion'>दि.24 नोव्हेंबर :- Ninth Day</h5>
          </div>
          {openItem === 9 && (
            <div className='accordion-content'>
              <p>- सकाळी नाष्टा करून जोधपूर ते उदयपूर  250 कि.मी प्रवास बुलेट बाबा मंदिर पाहून उदयपूर हॉटेल मुक्काम. </p>
            </div>
          )}
          </div>
        <br />
          <div className='accordion-container'>
          <div className='accordion-item'>
            <button className='accordion-button' onClick={() => toggleAccordion(10)}>
              <span>{openItem === 10 ? '-' : '+'}</span>
            </button>
            <h5 className='title-accordion'>दि.25 नोव्हेंबर :-  Tenth day</h5>
          </div>
          {openItem === 10 && (
            <div className='accordion-content'>
              <p>सकाळी नाष्टा करून उदयपूर लोकल फिरणे सिटी पॅलेस, जगदीश्वर मंदिर, पिचोला लेक, रोप-वे करणी माता मंदिर, सहेली की बाड़ी, महाराणा प्रताप स्मारक, लोक-कला मंडल कठपुतली, फतेहसागर उदयपूर हॉटेल मुक्काम. </p>
            </div>
          )}
          </div>
          <br />
          <div className='accordion-container'>
          <div className='accordion-item'>
            <button className='accordion-button' onClick={() => toggleAccordion(10)}>
              <span>{openItem === 10 ? '-' : '+'}</span>
            </button>
            <h5 className='title-accordion'>दि.26 नोव्हेंबर : - Tenth day</h5>
          </div>
          {openItem === 10 && (
            <div className='accordion-content'>
              <p>सकाळी नाष्टा करून एकलिंगी शंकराचे प्राचीन मंदिर, नाथद्वारा श्रीकृष्ण मंदिर, महाराणा प्रताप यांचा इतिहास हल्दीघाटी पाहून संध्याकाळी 7 वाजता उदयपूर स्टेशन ड्रॉप रात्री 9.20 वाजता पुणे साठी निघणे. </p>
            </div>
          )}
          </div>
          <br />
          <div className='accordion-container'>
          <div className='accordion-item'>
            <button className='accordion-button' onClick={() => toggleAccordion(10)}>
              <span>{openItem === 10 ? '-' : '+'}</span>
            </button>
            <h5 className='title-accordion'>दि.27 नोव्हेंबर :-  Tenth day</h5>
          </div>
          {openItem === 10 && (
            <div className='accordion-content'>
              <p>पुणे स्टेशन येथे संध्या 4:35 ला पोहचणे. </p>
            </div>
          )}
          </div>
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
An unforgettable trip to Rajasthan
        </h1>
        <div className='images'>
              <img src="https://media.istockphoto.com/id/1224021113/photo/indian-cameleers-camel-driver-with-camel-silhouettes-in-dunes-on-sunset-jaisalmer-rajasthan.jpg?s=612x612&w=0&k=20&c=MeF2Dl4ya1NVOWM_I_xo3EPd8E-iazBghYhjiyRaTcU=" alt="" />
              <img src="https://media.istockphoto.com/id/1440725714/photo/heritage-king-place-with-dramatic-bright-blue-sky-from-flat-angle.jpg?s=612x612&w=0&k=20&c=k7tllj77w3KI6KoDob2LGdl-04_CiqgFQukrtnm6T0g=" alt="" />
             <img src="https://media.istockphoto.com/id/805563154/photo/mehrangharh-fort-and-jaswant-thada-mausoleum-in-jodhpur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=5r9UxPkz9mIkfAIFPLyTwqBQyqSO7mcAdQtcqGHOboA=" alt="" />
             <img src="https://media.istockphoto.com/id/1440825193/photo/udaipur-city-palace-in-the-evening-view-udaipur-india.jpg?s=612x612&w=0&k=20&c=S0iklsgJXyt0RhKGZV7kEr16FYGyHIkxsOPMsNyfOpU=" alt="" />
             <img src="https://media.istockphoto.com/id/117145542/photo/camel-riders-in-the-desert.jpg?s=612x612&w=0&k=20&c=f3eLXipn8Sm7ZcJ2KzxO8RXqtjQJcQr28GSN07jXmLc=" alt="" />
             <img src="https://media.istockphoto.com/id/1291961188/photo/stunning-view-of-the-hawa-mahal-at-sunset-with-blurred-people-walking-during-the-covid-19.jpg?s=612x612&w=0&k=20&c=6au0sGRJARDE3Y6sjuZotM2aMJR3X2AUc9zUP37lcBk=" alt="" />
             <img src="https://media.istockphoto.com/id/938975958/photo/jal-mahal-water-palace-jaipur-rajasthan-with-landscape-at-sunset.jpg?s=612x612&w=0&k=20&c=MSpEwtV35btQgqL6E4bcpkUuOsyVFLsuEQJMWv5umDg=" alt="" />
        </div>
        <a href="#" class="book-now">Book Now</a>
      </div>
      
      <section className='page-container'>
        <hr />
        <section className='left-section'>
          <div className='header'>
            <h1 className='head'>   Rajasthan tour</h1>
          </div>
          <Slider className='imgth' {...settings}>
            {/* Your Slider content here */}
            <div className='th'>
            <img src="https://media.istockphoto.com/id/482557081/photo/hawa-mahal-jaipur-india.jpg?s=612x612&w=0&k=20&c=A6qCUjoNH74nXCkB07RNgK3eIt2mun8PgsLPw9dNkVI=" alt="" />
          </div> 
            <div className='th'>
            <img src="https://media.istockphoto.com/id/629006734/photo/city-palace-and-pichola-lake-in-udaipur-india.jpg?s=612x612&w=0&k=20&c=qhP5o-dpZoWuRdCyrOVJfu6IHf7472QGovEJmytYzrI=" alt="Tour Image 1" />
          </div>
          <div className='th'>
            <img src="https://media.istockphoto.com/id/805563154/photo/mehrangharh-fort-and-jaswant-thada-mausoleum-in-jodhpur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=5r9UxPkz9mIkfAIFPLyTwqBQyqSO7mcAdQtcqGHOboA=" alt="Tour Image 2" />
          </div>
          <div className='th'>
            <img src="https://media.istockphoto.com/id/183115978/photo/rajasthan-india-udaipur-fortress-view-to-lake.jpg?s=612x612&w=0&k=20&c=gokx4uUjyLGVxWDKSTtGm7edeVId4lmSHUkBG2MsMWk=" alt="Tour Image 3" />
          </div>
          <div className='th'>
            <img src="https://media.istockphoto.com/id/876173920/photo/the-jaswant-thada-is-a-cenotaph-located-in-jodhpur-in-the-india.jpg?s=612x612&w=0&k=20&c=iBGohzvtSrXFxBeV3m4r6qFvjpbEZ5KazgmGPSbuPsw=" alt="" />
          </div>
          <div className='th'>
            <img src="https://media.istockphoto.com/id/514102692/photo/udaipur-city-palace-in-rajasthan-state-of-india.jpg?s=612x612&w=0&k=20&c=bYRDPOuf6nFgghl6VAnCn__22SFyu_atC_fiSCzVNtY=" alt="" />
          </div>                                
          </Slider>
       <br /> <hr />
         
       {/* tour right section  */}
          <div className='tour-price'> 
          <h2>Tour Price</h2>
                   <h3>
                   25,800/-  प्रति व्यक्ती  <br />
            (३ एसी रेल्वे प्रवास) <br />
            एसी ऍडव्हान्स प्रत्येकी 10,000/ <br />

            23,500/-  प्रति व्यक्ती  <br />
            (नॉन एसी रेल्वे प्रवास) <br />
            एसी ऍडव्हान्स प्रत्येकी 8,000/- <br />
                    </h3>      
          </div>
          <div className='tour-specfic'> 
              <h2>सहल खर्चा मध्ये समाविष्ट बाबी खालील प्रमाणे</h2>
              <p>➡  सर्व ठिकाणी किल्ले, पॅलेस, रोप वे, गार्डन, बोटींग, म्युझियम, मंदिरे, धार्मिक पुजा, जीप सफारी,
              पॅराग्लायडिंग या साठी लागणारे तिकीटांचे पैसे तुम्हाला द्यावे लागतील( त्यामध्ये तुम्हाला 2500 ते 3000 खर्च 
                येऊ शकतो तो स्वतः खर्च करायाचा आहे)  <br />
            ➡ पॅकेज मध्ये दुपारचे जेवण समाविष्ट नाही ते तुम्हाला स्वताः पैसे देऊन घ्यावे लागतील  <br />
            ➡ रेल्वे मधील जेवण समाविष्ट नाही.
 <br />
            ➡ शेवटच्या रात्रीचे जेवण पॅकेज मध्ये समाविष्ट नाही ते स्वता:च्या खर्चाने करावे.
 <br />
          
            </p> 
            <h2>सहल खर्चामध्ये समाविष्ट नसलेल्या बाबी</h2>
            <p>➡  सर्व ठिकाणी किल्ले, पॅलेस, रोप वे, गार्डन, बोटींग, म्युझियम, मंदिरे, धार्मिक पुजा, जीप सफारी, 
            पॅराग्लायडिंग या साठी लागणारे तिकीटांचे पैसे तुम्हाला द्यावे लागतील( त्यामध्ये तुम्हाला 2500 ते 3000 खर्च येऊ शकतो तो स्वतः खर्च करायाचा आहे)
              <br />
            ➡  पॅकेज मध्ये दुपारचे जेवण समाविष्ट नाही ते तुम्हाला स्वताः पैसे देऊन घ्यावे लागतील. <br />
            ➡ रेल्वे मधील जेवण समाविष्ट नाही. <br />
            ➡ शेवटच्या रात्रीचे जेवण पॅकेज मध्ये समाविष्ट नाही ते स्वता:च्या खर्चाने करावे.
                <br />
            </p>
           <hr /> <hr />
            <h3>
              <span className='warn'>   टिप:-</span>
                          
                    रेल्वे उपलब्धतेप्रमाणे दिलेल्या वेळा पत्रकार बदल होऊ शकतो.
                    <br /> रेल्वे/विमान/हॉटेल ई. <br />
                
            </h3>
            <p>
              **********************************<br />
                        सूचना:- <br />
                 1) सर्वांनी ओरजिनल आधार कार्ड बरोबर घ्यावे. <br />
                2) तुमची ट्रिप 9 रात्र 10 दिवस आहे त्यामुळे तुम्हाला तुमच्या पॅकेज मध्ये 9 नाष्टा 9 रात्रीचे जेवण हेच तुमच्या पॅकेज मध्ये असणार आहे बाकी सर्व ठिकाणी तुम्हाला पैसे द्यावे लागतील. <br />
                3) किल्ले, पॅलेस, राजवाडे संध्याकाळी 5 वाजता बंद होतात. <br />
                4) रोज जास्त प्रवास असल्यामुळे दुपारचे जेवण शक्यतो टाळून स्वताः जवळील पदार्थ खावे किंवा फळे घ्यावीत. <br />
                5) सकाळी हॉटेल मध्ये दिलेल्या वेळेला सर्वांनी तयार राहणे. <br />
                6) ट्रिप मध्ये जास्तीत जास्त ठिकाणे तुम्ही पहावी अशी <br />
                7) आहे त्यासाठी सर्वांनी वेळेला महत्त्व द्यावे. <br />
                8) काही ठिकाणी कमी काही ठिकाणी जास्त तिकिट आहे. <br />
                9) 9 दिवस टिकतील असे पदार्थ बनवून घ्यावे प्रवासामध्ये उपयोगी येईल. <br />
                10) रेल्वे प्रवास हा तुमच्या इच्छेने राहील एसी. नॉन एसी <br />
                11)  रूम जी दिली असेल ती घ्यावी ही शेजारी पाहिजे ती जवळ पाहिजे हे चालणार नाही. <br />
                12) राजस्थान मध्ये स्पीड लिमिट आहे त्यामुळे बस जास्त स्पीडने चालणार नाही. <br />
                13) एका व्यक्तीला रोज 1 लिटर पाण्याची बॉटल मिळेल. <br />
                14) तिकीट बुक करताना सीट कुठल्याही रेल्वेच्या बोगी मध्ये जाऊ शकते आपल्या हातामध्ये सीट सिलेक्शन नाही जे सीट आपले असेल तिथेच बसावे, रेल्वेमध्ये ज्याचे त्याने सीट ऍडजेस्टमेंट करायची असेल तर करावी. <br />
                15) टुर बुक करताना 40% रक्कम जमा करणे आवश्यक आहे,( नॉन रिफंडबेल ) टुर ची बाकी रक्कम टुर च्या आधि 15 दिवस जमा करणे. <br />
                16) अचानक वैद्यकीय आणि हॉस्पीटल खर्च उद्‌भवल्यास स्वताः करावा. <br />
                17) ज्या ठिकाणी बस जाणार नाही तिथे तुम्हाला रिक्षा करावी लागेल. <br />
                18) कराड ते पुणे  प्रवास स्वताःच्या खर्चाने राहील. <br />
                19) सर्वांनी बस मध्ये रोज सीट चेंज करणे. <br />
                20) दिलेल्या वेळेचे बंधन पाळणे, संयोजकांनी सांगितलेले सर्व सूचना लक्षात घ्याव्या. <br />
                21) कोणी उशीर केल्यास पुढच्या साईड सीन ला स्वताःच्या खर्चाने यावे. <br />
                22) एक सकाळ चा नाष्टा स्पेस सारथी टूर्स यांच्या तर्फे सर्वांना फ्री असेल. <br />
                23) जैसलमेर डेझर्ट ला अंघोळीसाठी खारं पाणी आहे असून कडक गरम पाणी असेल. <br />
                24) आपल्या मुळे दुसऱ्यांना त्रास होऊ नये यांची सर्वांनी काळजी घ्यावी. <br />
                25) सर्वांनी स्वताला लागणारी सर्व औषधे बरोबर घ्यावी. <br />
                26) अचानक टुर कॅन्सल केल्यास पॅकेज च्या 50% रक्कम रिटर्न मिळणार नाही. <br />

             <br />
          <br />
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
  );
}

export default Drajasthan;
