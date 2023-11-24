import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { Accordion as BootstrapAccordion, Card, Button } from 'react-bootstrap'; // Rename Accordion


const Djammu = () => {

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
      <h5 className='title-accordion'>15th December:- First day</h5>
    </div>
    {openItem === 1 && (
      <div className='accordion-content'>
        <p>पुणे स्टेशन वरून संध्याकाळी ६:५० वा भरूच साठी ट्रेन भरुच कडे प्रस्थान.</p>
      </div>
    )}
    </div>
    <br />
    <div className='accordion-container' >
    <div className='accordion-item'>
      <button className='accordion-button' onClick={() => toggleAccordion(2)}>
        <span> {openItem === 2 ? '-' : '+'}</span>
       
      </button>
      <h5 className='title-accordion'>16th December:- Second day</h5>
    </div>
    {openItem === 2 && (
      <div className='accordion-content'>
        <p> पहाटे २:२१ वा. भरुच रेल्वे स्टेशन वर उतरून तेथून बस ने स्टॅच्यू ऑफ युनिटी कडे प्रवास हे अंतर १०० की.मी आहे. तिथे पोहचल्या नंतर फ्रेश होऊन स्टॅच्यू ऑफ युनिटी पाहणे.
          भारतातील स्वातंत्र्य चळवळीचे नेते सरदार वल्लभभाई पटेल यांचा हा पुतळा १८२ मीटर (५९७ फूट) उंचीचा असून हा जगातील सर्वात उंच पुतळा आहे. तिथून पुढे दुपारी जेवण करून कुबेर भंडारी मंदिर पाहणार आहोत तिथे भगवान शिवाचे स्वयंभू शिवलिंग आहे कर्णाळी गावात नर्मदा नदी च्या काठावर सुमारे ८०० फूट उंची वर वसलेले हे मंदिर २५०० वर्ष जुने आहे. नीलकंठ धाम हॉटेल मुक्काम</p>
      </div>
    )}
    </div>
    <br />
    <div className='accordion-container'>
    <div className='accordion-item'>
      <button className='accordion-button' onClick={() => toggleAccordion(3)}>
        <span> {openItem === 3 ? '-' : '+'}</span>
       
      </button>
      <h5 className='title-accordion'>17th December:- Third day</h5>
    </div>
    {openItem === 3 && (
      <div className='accordion-content'>
        <p>सकाळी नाष्टा करून नीलकंठ धाम मंदिर पाहणे हे भव्य मंदिर नर्मदा नदी च्या काठी १०८ एकर मध्ये वसलेले आहे.
  लक्ष्मी विलास पॅलेस (गायकवाड वाडा) हा गुजरात च्या वडोदरा शहरातील आलिशान राजवाडा आहे. हा वाडा महाराज श्रीमंत सयाजीराव गायकवाड यांनी बांधला आहे. अहमदाबाद पोहचणे व साबरमती आश्रम पाहणे हे आश्रम महात्मा गांधी यांचा इतिहास व स्वातंत्र्य लढ्यातील योगदान आणि घडामोडी यांचे दर्शन घडविणारे कायमस्वरूपी प्रदर्शन या ठिकाणी उभारले आहे.
  अक्षरधाम मंदिर हे स्वामी नारायण यांचे भारतातील गुजरात राज्या मधील पहिले मंदिर आहे जे १८२२ मध्ये बांधले गेले मंदिर पाहून अहमदाबाद हॉटेल मुक्काम.</p>
      </div>
    )}
    </div>
    <br />
    <div className='accordion-container'> 
    <div className='accordion-item'>
      <button className='accordion-button' onClick={() => toggleAccordion(4)}>
        <span> {openItem === 4 ? '-' : '+'}</span>
       
      </button>
      <h5 className='title-accordion'>18 December:- Fourth day</h5>
    </div>
    {openItem === 4 && (
      <div className='accordion-content'>
        <p> सकाळी नाष्टा करून मोढेरा येथील सूर्य मंदिर पाहणार आहोत. रावणाचा वध करून परतलेल्या श्रीरामाने गुरु वशिष्ठांना ब्रह्म हत्येच्या पातकातून मुक्त होण्यासाठी काय करावे असे विचारले असता गुरू वशिष्ठांनी धर्मारण्यात जाऊन यज्ञ करण्यास सल्ला दिला मोढेरा जन धारणे नुसार प्रभू श्रीरामांनी आणि सीता मातेने या ठिकाणाला भेट देऊन यज्ञ केला.
  राणी की वाव. गुजरात राज्यात 'बावडी' किंवा 'वाव' या नावाने ओळखल्या जाणाऱ्या अनेक विहिरी आहेत. या विहिरींना पाण्यापर्यंत जाण्यासाठी पायऱ्या असतात तसेच विश्रांतीसाठी मजले, छत आणि हे ठिकाण रमणीय व्हावे म्हणून कोरीव काम केलेले असते. गुजरातमधील पाटण या जिल्ह्याच्या गावी असणारी अशी विहीर 'राणीनी वाव' या नावाने प्रसिद्ध आहे. २२ २०१४ मध्ये युनेस्कोच्या जागतिक वारसा यादीत या स्थळाचा समावेश झाला. तसेच नविन १०० रु च्या नोटेवर तिचा फोटो गौरवार्थ छापलेला आहे रात्री अहमदाबाद स्टेशन वर जाणे रात्री अहमदाबाद ते द्वारका रेल्वे प्रवास.</p>
      </div>
    )}
    </div>
    <br />
    <div className='accordion-container'>
    <div className='accordion-item'>
      <button className='accordion-button' onClick={() => toggleAccordion(5)}>
        <span>{openItem === 5 ? '-' : '+'}</span>
        
      </button>
      <h5 className='title-accordion'>19th December:- Fifth day</h5>
    </div>
    {openItem === 5 && (
      <div className='accordion-content'>
        <p> सकाळी नाष्टा करून मोढेरा येथील सूर्य मंदिर पाहणार आहोत. रावणाचा वध करून परतलेल्या श्रीरामाने गुरु वशिष्ठांना ब्रह्म हत्येच्या पातकातून मुक्त होण्यासाठी काय करावे असे विचारले असता गुरू वशिष्ठांनी धर्मारण्यात जाऊन यज्ञ करण्यास सल्ला दिला मोढेरा जन धारणे नुसार प्रभू श्रीरामांनी आणि सीता मातेने या ठिकाणाला भेट देऊन यज्ञ केला.
  राणी की वाव. गुजरात राज्यात 'बावडी' किंवा 'वाव' या नावाने ओळखल्या जाणाऱ्या अनेक विहिरी आहेत. या विहिरींना पाण्यापर्यंत जाण्यासाठी पायऱ्या असतात तसेच विश्रांतीसाठी मजले, छत आणि हे ठिकाण रमणीय व्हावे म्हणून कोरीव काम केलेले असते. गुजरातमधील पाटण या जिल्ह्याच्या गावी असणारी अशी विहीर 'राणीनी वाव' या नावाने प्रसिद्ध आहे. २२ २०१४ मध्ये युनेस्कोच्या जागतिक वारसा यादीत या स्थळाचा समावेश झाला. तसेच नविन १०० रु च्या नोटेवर तिचा फोटो गौरवार्थ छापलेला आहे रात्री अहमदाबाद स्टेशन वर जाणे रात्री अहमदाबाद ते द्वारका रेल्वे प्रवास.</p>
      </div>
    )}
    </div>
    <br />
    <div className='accordion-container'>
    <div className='accordion-item'>
      <button className='accordion-button' onClick={() => toggleAccordion(6)}>
        <span> {openItem === 6 ? '-' : '+'}</span>
       
      </button>
      <h5 className='title-accordion'>20th December:- Sixth day</h5>
    </div>
    {openItem === 6 && (
      <div className='accordion-content'>
        <p> सकाळी नाष्टा करून द्वारकेतील राहिलेली ठिकाणे करून पोरबंदर कडे प्रस्थान पोरबंदर लोकल साईड सीन व पोरबंदर हॉटेल मुक्काम. </p>
      </div>
    )}
    </div>
    <br />
    <div className='accordion-container'>
    <div className='accordion-item'>
      <button className='accordion-button' onClick={() => toggleAccordion(7)}>
        <span>{openItem === 7 ? '-' : '+'}</span>
        
      </button>
      <h5 className='title-accordion'>21 December:- Seventh day</h5>
    </div>
    {openItem === 7 && (
      <div className='accordion-content'>
        <p> सकाळी नाष्टा करून द्वारकेतील राहिलेली ठिकाणे करून पोरबंदर कडे प्रस्थान पोरबंदर लोकल साईड सीन व पोरबंदर हॉटेल मुक्काम. </p>
      </div>
    )}
     </div>
  <br />
    <div className='accordion-container'>
    <div className='accordion-item'>
      <button className='accordion-button' onClick={() => toggleAccordion(8)}>
        <span> {openItem === 8 ? '-' : '+'}</span>
      </button>
      <h5 className='title-accordion'>22 December:- Eighth day</h5>
    </div>
    {openItem === 8 && (
      <div className='accordion-content'>
        <p> सकाळी नाष्टा करून गुजरात मधील सिंहा साठी प्रसिद्ध असलेले सासनगिर जंगल सफारी करून सोमनाथ कडे प्रस्थान बारा ज्योतिर्लिंग पैकी एक सोमनाथ दर्शन व लोकल साईड सीन करून सोमनाथ हाँटेल मुक्काम. </p>
      </div>
    )}
    </div>
    <br />
    <div className='accordion-container'>
    <div className='accordion-item'>
      <button className='accordion-button' onClick={() => toggleAccordion(9)}>
        <span> {openItem === 9 ? '-' : '+'}</span>
       
      </button>
      <h5 className='title-accordion'>23rd December:- Ninth Day</h5>
    </div>
    {openItem === 9 && (
      <div className='accordion-content'>
        <p>सकाळी नाष्टा करून खरेदी व वेरावळ रेल्वे स्टेशन वरून सकाळी १०:५५ वाजता पुणे साठी ट्रेन. </p>
      </div>
    )}
    </div>
  <br />
    <div className='accordion-container'>
    <div className='accordion-item'>
      <button className='accordion-button' onClick={() => toggleAccordion(10)}>
        <span>{openItem === 10 ? '-' : '+'}</span>
      </button>
      <h5 className='title-accordion'>24th December:- Tenth day</h5>
    </div>
    {openItem === 10 && (
      <div className='accordion-content'>
        <p>सकाळी ७:३५ वाजता पुणे स्टेशन वर पोहचणे. </p>
      </div>
    )}
    </div>
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
An unforgettable trip to Gujarat
  </h1>
  <div className='images'>
        <img src="https://media.istockphoto.com/id/1485796612/photo/silhouette-image-of-worlds-tallest-statue-known-as-statue-of-unity-with-beautiful-sunset-sky.jpg?s=612x612&w=0&k=20&c=wPm9Ptlhbh7wVQIBagbRN-pncaTAo4P7lhJ9JwHvFII=" alt="" />
        <img src="https://media.istockphoto.com/id/1589558349/photo/big-horned-wild-male-blackbuck-or-antilope-cervicapra-or-indian-antelope-head-on-walking-in.jpg?s=612x612&w=0&k=20&c=JQLi2OKaZqXD6PFld3pUcxmNlYj-51oM879mgZRxm6Y=" alt="" />
       <img src="https://media.istockphoto.com/id/539025138/photo/akshardham-temple.jpg?s=612x612&w=0&k=20&c=j_74HZmFFlT-Jo8WtlLuiS_SEWR-24Q_t_ITo4dAYys=" alt="" />
       <img src="https://media.gettyimages.com/id/537857722/photo/jain-temples-mount-shatrunjaya-palitana-gujarat-india.jpg?s=612x612&w=0&k=20&c=TybVUjn3kYZoOWHLXVIVMdoWxqJ4JHP7mZwlLA1Z77s=" alt="" />
       <img src="https://media.gettyimages.com/id/1488785856/photo/the-sun-temple-modhera-gujarat-india.jpg?s=612x612&w=0&k=20&c=VpVw0HoLfVjNkFkxY6GEyws-R8fwsYZVrRI1tuPb6jE=" alt="" />
       <img src="https://media.gettyimages.com/id/1194637007/photo/mandvi-gujarat-india.jpg?s=612x612&w=0&k=20&c=7lM0fv_qVMjJh7yd8VVzbWGr7YgZmhjBTnt4gW68-uc=" alt="" />
       <img src="https://media.istockphoto.com/id/486811554/photo/akshardham-temple-at-new-delhi-india-cngltrv1109.webp?b=1&s=170667a&w=0&k=20&c=YCuHkmFLPpR60vBHh1_luxwrL-C4rJXGYmP0-KMmVk4=" alt="" />
  </div>
  <a href="#" class="book-now">Book Now</a>
</div>

<section className='page-container'>
  <hr />
  <section className='left-section'>
    <div className='header'>
      <h1 className='head'>   Gujarat tour</h1>
    </div>
    <Slider className='imgth' {...settings}>
      {/* Your Slider content here */}
      <div className='th'>
      <img src="https://media.gettyimages.com/id/1391931246/photo/statue-of-unity-worlds-tallest-statue-gujarat-india.jpg?s=612x612&w=0&k=20&c=0E4YOT6CMa9Ca5SAUcp7B5k2biLoIpxXVNQq2ddJHTA=" alt="" />
    </div> 
      <div className='th'>
      <img src="https://media.istockphoto.com/id/483067712/photo/akshardham-temple-new-delhi-india.webp?b=1&s=170667a&w=0&k=20&c=OwF-pL8Nv2NZitq6XisLubGopmFdQAeRhONezlcIAIs=" alt="Tour Image 1" />
    </div>
    <div className='th'>
      <img src="https://media.istockphoto.com/id/1338639354/photo/wildlife-at-its-best.webp?b=1&s=170667a&w=0&k=20&c=H3gxTc8zt7_TIdQr1857ud1cT2L9ZdVeNdW_-lHRJOo=" alt="Tour Image 2" />
    </div>
    <div className='th'>
      <img src="https://media.istockphoto.com/id/177800537/photo/bay-and-harbor-view-of-dwarka-gujarat-india.webp?b=1&s=170667a&w=0&k=20&c=Ofnvzq5CFGuFHDvrsWfvDPZ9FovkftpdLqt18ByLjWQ=" alt="Tour Image 3" />
    </div>
    <div className='th'>
      <img src="https://media.gettyimages.com/id/1223233088/photo/india-gujarat-baroda-or-vadodara-lakshmi-vilas-palace.jpg?s=612x612&w=0&k=20&c=f6WVT4iHvMBxoZKw9VSCyFsaIGj-6gy5SaGWaC1Cldc=" alt="" />
    </div>
    <div className='th'>
      <img src="https://media.gettyimages.com/id/535263984/photo/swaminarayan-temple-in-bharuch-gujarat.jpg?s=612x612&w=0&k=20&c=cQq1suB4fKky4KN1Tkm1ZZNZzj1eCDmbtuE2ABVGlz8=" alt="" />
    </div>                                
    </Slider>
 <br /> <hr />
   
 {/* tour right section  */}
    <div className='tour-price'> 
    <h2>Tour Price</h2>
             <h3>
             सहल खर्च प्रत्येकी १७,८००/- <br />
      (३ एसी रेल्वे प्रवास) <br />
      ॲडव्हान्स बुकिंग रक्कम. ६,०००/- <br />

      सहल खर्च प्रत्येकी १५,८००/- <br />
      (नॉन एसी रेल्वे प्रवास) <br />
      ॲडव्हान्स बुकिंग रक्कम. ४,०००/- <br />
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
      <h3>
        <span className='warn'>   टिप:-</span>
          ठरलेल्या वेळा पत्रका मध्ये बदल करण्याचा अधिकार टूर आयोजक यांना राहील.
          तसेच कोणत्या कारणास्तव रेल्वे किंवा विमान सेवा विस्कळीत झाल्यास पर्यायी व्यवस्था करण्यात येईल त्याचा जो काही ज्यादा खर्च असेल तो पर्यटकांना द्यावा लागेल. <br /> रेल्वे/विमान/हॉटेल ई. <br />
          <span className='warn'>   लहान मुलांसाठी वयोमर्यादा <br /></span>
          ५ वर्षा पर्यंत निशुल्क सेवा असेल . <br />
          ५ ते १० वर्षा पर्यंत अर्धी शुल्क असेल . <br />
           ११ वर्षा पुढे पूर्ण शुल्क आकारली जाईल. <br />

      </h3>
      <p>
        **********************************<br />
                  सूचना:- <br />
      दिलेल्या वेळा पत्रकामध्ये रेल्वे उपलब्ध प्रमाणे बदल होऊ शकतो. <br />
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

export default Djammu