import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { Accordion as BootstrapAccordion, Card, Button } from 'react-bootstrap'; // Rename Accordion


const DAndaman = () => {

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
      <h5 className='title-accordion'>दि. २८ नोव्हेंबर २०२३
 First day</h5>
    </div>
    {openItem === 1 && (
      <div className='accordion-content'>
        <p> मुंबई विमानतळावरून विमानाने पोर्टब्लेरकडे निघणे व्हाया चेन्नई पोर्टब्लेअर विमानतळावर वर सकाळी ७:२५ वा पोहचून हॉटेलकडे निघणे, हॉटेल मध्ये चेकइन टाईम पर्यंत रिस्पेशन ला थांबणे त्यानंतर फ्रेश होऊन फिरायला निघणे
****सेल्युलर जेल = दुपारचे जेवण करून संध्याकाळी सेल्युलर जेल आणि सेल्युलर जेल मधील लाईट आणि साऊंड शो पाहणे त्यामध्ये वीर सावरकर आणि त्यांच्या सहकाऱ्यांनी काळ्या पाण्याची शिक्षा कशाप्रकारे झेलली याच्यावर आधारित प्रोग्राम आपण पाहणार आहोत.आणि रात्री जेवण करून पोर्टब्लेअर येथील हॉटेल मध्ये मुक्काम करणार आहोत.  **** समुद्रिका मुझियम =
समुद्रीका मुझियम हे भारतीय नेवी तर्फे चालवण्यात येते, समुद्री जीवन, पुरातत्व शास्त्र आणि अंदमान मधल्या लोकांविषयी संपूर्ण प्रकारची माहिती येथे उपलब्ध आहे, येथे चांगल्या प्रकारचे शिंपले, कोरल्स आणि वेगवेगळ्या प्रकारचे मासे संग्रहित आहेत. 
जेवण = रात्रीचे जेवण.
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
      <h5 className='title-accordion'>दि. २९ नोव्हेंबर २०२३
 Second day</h5>
    </div>
    {openItem === 2 && (
      <div className='accordion-content'>
        <p> पोर्टब्लेअर ते नॉर्थ बे आयलंड आणि रोस आयलंड
सकाळी नाष्टा करून बोटीने आपण दोन आयलंडची सफर करणार आहोत,
**** नॉर्थ बे आयलंड = नॉर्थ बे आयलंडला ‘द गेट वे टू पोर्टब्लेअर’ असेही म्हटले जाते.कोरल साठी प्रसिद्ध असलेले ठिकाण या आयलंड मध्ये खूप रंगीबेरंगी प्रकारचे मासे पहावयाला मिळतात,अंदमान मध्ये स्नोर्क्लिंग साठी नॉर्थ बे आयलंड प्रसिद्ध आहे,ग्लास बोटम बोट राईड याच आयलंडला आहे.तसेच स्कूबा डायव्हिंग आणि अंडर वॉटर सी वाल्क सेवा याच आयलंडला आहे. 
**** रोझ आयलंड = ब्रिटीश आणि जापनीज राजवटी मध्ये रोस आयलंड हि पोर्टब्लेअरची राजधानी होती.याला टोपण नाव ‘द पेरीस ऑफ द इस्ट’ असेही म्हटले जाते आता हे ठिकाण इंडिअन नेवी च्या अंडर मध्ये आहे.हे आयलंड एक आदर्श असे ठिकाण आहे कि जेथे निसर्गात चालणे म्हणजेच आजूबाजूला हरणे आणि मोर तसेच इतर असामान्य विदेशी पक्षी पाहायला मिळतात.                 
            कार्यक्रम संपल्यानंतर आपण जेवण करून रात्री पोर्टब्लेअर येथील हॉटेल मध्ये मुक्काम करणार आहोत.
जेवण = नाष्टा आणि रात्रीचे जेवण.

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
      <h5 className='title-accordion'>दि. ०१ डिसेंबर २०२३:-
 Third day</h5>
    </div>
    {openItem === 3 && (
      <div className='accordion-content'>
        <p>पोर्टब्लेअर ते हॅवलॉक - कालापत्थर बीच 
**** हॅवलोक आयलंड =  सकाळी अंघोळ करून आपण जहाजाने हॅवलॉक आयलंडकडे निघणे, पोर्टब्लेअर ते हॅवलॉक आयलंड हे पाण्यातील अंतर ५८ कि.मी. आहे, अंदाजे २.३० तासांचा जहाज प्रवास करून आपण हॅवलॉक आयलंडला पोहचून नाष्टा करून बसने राधानगर बीच ला जाणे आशियातला सर्वात सुंदर असा बीच असेल तो राधानगर बीच आहे असे टाईम्स वृत्तपत्राने घोषित केलेले आहे.आशियातला सातव्या क्रमांकाचा बीच आहे. ब्रिटीश आर्मी ऑफिसर चे नाव या आयलंडला देण्यात आले आहे. हॅवलॉक हे समुद्रामधील पांढरी माती आणि पारदर्शक असे समुद्राचे पाण्यासाठी प्रसिद्ध आहे.संपूर्ण दिवसभर समुद्र स्नान करून करून रात्री आपण जेवण करून हॅवलॉक येथील हॉटेल मध्ये मुक्काम करणार आहोत.
जेवण = नाष्टा आणि रात्रीचे जेवण.</p>
      </div>
    )}
    </div>
    <br />
    <div className='accordion-container'> 
    <div className='accordion-item'>
      <button className='accordion-button' onClick={() => toggleAccordion(4)}>
        <span> {openItem === 4 ? '-' : '+'}</span>
       
      </button>
      <h5 className='title-accordion'>दि. ०२ डिसेंबर २०२३
:- Fourth day</h5>
    </div>
    {openItem === 4 && (
      <div className='accordion-content'>
        <p> हॅवलॉक आयलंड – नील आयलंड
 सकाळी नाष्टा करून आपण जहाजाने नील आयलंडकडे निघणे दुपारी नील आयलंड मध्ये पोहचून आपण दुपारनंतर लक्ष्मणपूर बीच, भरतपूर बीच आणि हावरा बीचला भेट देऊन नील आयलंडमध्ये मुक्काम करणार आहोत.   
 जेवण = नाष्टा आणि रात्रीचे जेवण. 
</p>
      </div>
    )}
    </div>
    <br />
    <div className='accordion-container'>
    <div className='accordion-item'>
      <button className='accordion-button' onClick={() => toggleAccordion(5)}>
        <span>{openItem === 5 ? '-' : '+'}</span>
        
      </button>
      <h5 className='title-accordion'>दि. ०३ डिसेंबर २०२३
:- Fifth day</h5>
    </div>
    {openItem === 5 && (
      <div className='accordion-content'>
        <p>नील आयलंड - पोर्टब्लेअर - चिडिया टापू
      सकाळी नाष्टा करून आपण जहाजेने पोर्टब्लेरकडे निघणे.
      **** चिडिया टापू =  चिडिया टापूला दुसरे नाव आहे बर्ड आयलंड,चिडिया टापू हे पोर्टब्लेअर पासून २५ कि.मी.अंतरावर दक्षिण अंदमान कडे आहे.चिडिया टापू हे खूप छोटे गाव आहे, असंख्य पक्षी चिरचिर करत असतात त्यामुळे सुंदर असा आदर्श पिकनिक स्थळ निर्माण झाले आहे, चिडिया टापू हे पक्षांसाठी एक निसर्ग ठेवाच आहे, पक्षी प्रेमींसाठी योग्य स्थळ असेल तर ते आहे चिडिया टापू. रात्री पोर्टब्लेअर येथील हॉटेल मध्ये मुक्काम करणार आहोत.
      जेवण = नाष्टा आणि रात्रीचे जेवण.
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
      <h5 className='title-accordion'>दि. ०४ डिसेंबर २०२३ 
:- Sixth day</h5>
    </div>
    {openItem === 6 && (
      <div className='accordion-content'>
        <p> पोर्टब्लेअर ते बारटांग आयलंड ते पोर्टब्लेअर
पहाटे ३.३० वा.बसने आपण बारटांगकडे निघणे, पोर्टब्लेअर ते बारटांग हे अंतर ११० किमीचे आहे सकाळी आपल्याला ६.३० वा. पोहचणे गरजेचे आहे.
****बारटांग आयलंड = हे बेट दक्षिण मध्य अंदमानात आहे या बेटाला सुंदर असा समुद्रकिनारा, मान्गृची खाडी, चिखलाचे ज्वालामुखी आणि चुनखडीच्या गुहा अशा प्रकारची प्रेक्षणीय स्थळे लाभली आहेत या बेटामधून रंगट आणि माया बंदर साठी अंदमान ट्रंक बोटी चालू आहेत.चुनखडीच्या गुहेमध्ये जाण्यासाठी बारटांग मधील वन विभागाची परवानगी काडावी लागते,
**चुनखडीच्या गुहा = या गुहांमध्ये जाण्यासाठी बारटांग पासून (निलांबर जेट्टी) सुमारे दीड तासांचा प्रवास हा बोटींमधून करण्यात येईल तेथून पुढे उष्ण कटीबंधनीय वनातून पायी प्रवास करायचा आहे.
             चूनखडीचा दगड हा समुद्र तळाच्या साठलेल्या गाळापासून तयार होतो.हा गाळ लाखो वर्षे साचलेल्या समुद्रीय वनस्पती, प्राण्यांचे अवशेष, सांगाडे या पासून तयार होतो. नायदेरा जेट्टी येथून २४० मीटरवर आहे, पर्यटक मंगरुव्हमधून बोट किंवा पायी जाण्याचा पर्याय निवडू शकतात. मंगरुव्हमधून बोट प्रवासाचा अनुभव अविस्मरणीय असेल, एका रुंद खाडीमधून हा प्रवास होतो.तेथे मोठमोठे चुनखडक असून त्यातील काही गुहेच्या छपरापासून उलटे लटकत असून काही खडक जमिनीतून देखील वाढलेले आहेत.या गुहा आकाराने कायम बदलत असतात गुहेच्या आतील बाजूस चुनखडकाचे वेगवेगळे आकार पाहायला मिळतात.
             काही गुहा रुंदीने लांब असून त्यामध्ये जाण्यासाठी टॉर्चचा वापर करावा लागतो. पर्यटकांनी चागल्या प्रकारच्या चपला बूट घालणे गरजेच्या आहेत कारण बहुधा गुहा निसरड्या झाल्या आहेत.
           ( प्रत्येकाने बारटांगला जीवनात एकदा तरी भेट देवून तेथील निसर्गाच्या कलागुणांचा आनंद घ्यावा. )                                    जेवण = नाष्टा आणि रात्रीचे जेवण.
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
      <h5 className='title-accordion'>दि. ०५ डिसेंबर २०२३
:- Seventh day</h5>
    </div>
    {openItem === 7 && (
      <div className='accordion-content'>
        <p> पोर्टब्लेअर – मुंबई
     सकाळी ६:०० वा पोर्टब्लेअर विमानतळावरून  विमानाने मुंबईकडे निघणे, व्हाया चेन्नई मुंबई एअरपोर्ट वर ५.२५ वा पोहचणे
टूर समाप्त. </p>
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
An unforgettable trip to Andaman islands
  </h1>
  <div className='images'>
        <img src="https://media.istockphoto.com/id/503371903/photo/radhanagar-beach.jpg?s=612x612&w=0&k=20&c=t-xDNt7UfndqFmZGyLJdCCFEgi-RLUh7-1-2RNjtcWs=" alt="" />
        <img src="https://media.istockphoto.com/id/1266075200/photo/andaman-sea-island-with-morning-sun-lighting.jpg?s=612x612&w=0&k=20&c=QiA1iufg8dKT7uPGckSdFVHZ-p3TfRQw71FyU6Bs9WM=" alt="" />
       <img src="https://media.istockphoto.com/id/666238696/photo/longtail-boats-phi-phi-islands-thailand.jpg?s=612x612&w=0&k=20&c=25pVN1n7aQGNT71wf_3IZNdX2kPmyRt6Jf2J7ZVPAIc=" alt="" />
       <img src="https://media.istockphoto.com/id/1331275707/photo/andaman-and-nicobar.jpg?s=612x612&w=0&k=20&c=QHH3fpDxq3TK66ngYwUYNnghhUzvudOCVMUeZxf00qo=" alt="" />
       <img src="https://media.istockphoto.com/id/642794474/photo/old-cellular-prison-on-the-island-of-andamans-in-india.jpg?s=612x612&w=0&k=20&c=6lCvV8a_hhfrD8LAYWPYp0yaeQ0LEtwkilVSlqgVaxs=" alt="" />
       <img src="https://media.istockphoto.com/id/475734440/photo/fabulous-beach-with-exotic-plants-and-white-sand.jpg?s=612x612&w=0&k=20&c=dZkBnL-hX63O3xtWPhQ98iQSxcDF9Y2Be0KTdcx7g9g=" alt="" />
       <img src="https://media.istockphoto.com/id/1490908827/photo/female-scuba-diver-taking-a-photo-of-hawksbill-turtle-swimming-over-coral-reef-in-the-blue.jpg?s=612x612&w=0&k=20&c=so8AHQZ4Ylt0dMMVxC7YIuc-j9AwNSlFATziGo8UmYI=" alt="" />
  </div>
  <a href="#" class="book-now">Book Now</a>
</div>

<section className='page-container'>
  <hr />
  <section className='left-section'>
    <div className='header'>
      <h1 className='head'>  Amdaman Island tour</h1>
    </div>
    <Slider className='imgth' {...settings}>
      {/* Your Slider content here */}
      <div className='th'>
      <img src="https://media.istockphoto.com/id/149977305/photo/tropical-beach.jpg?s=612x612&w=0&k=20&c=KyZCewc30rpiGg7mfbKdL3H1KDPynRnAxoHa7LaUHUA=" alt="" />
    </div> 
      <div className='th'>
      <img src="https://media.istockphoto.com/id/1056512350/photo/rainforest-buttress-roots.jpg?s=612x612&w=0&k=20&c=A6kKwZwUPWJYNwDDs4pj3HVtbe4gMoWvM2bx55Cw2Ok=" alt="Tour Image 1" />
    </div>
    <div className='th'>
      <img src="https://media.istockphoto.com/id/1179334756/photo/mangrove-trees-in-andaman-beach.jpg?s=612x612&w=0&k=20&c=Pk9LJB5bLbpsxpTpoR_KU4uaTHeqamIwpkZJU-B9x8E=" alt="Tour Image 2" />
    </div>
    <div className='th'>
      <img src="https://media.istockphoto.com/id/1736626349/photo/above-the-ocean-ao-nang-beach-can-be-seen-as-sunrise-begins-krabi-thailand.jpg?s=612x612&w=0&k=20&c=PDeMbjREuXqPb3RomBJbZ1dWDDYgHMXiMlNCY6qNn3A=" alt="Tour Image 3" />
    </div>
    <div className='th'>
      <img src="https://media.istockphoto.com/id/479096886/photo/green-tropical-island.jpg?s=612x612&w=0&k=20&c=y5jigkhBFOZ9HNz_ETbjc9vwoEp5vBv6E1-m-i1EAF0=" alt="" />
    </div>
    <div className='th'>
      <img src="https://media.istockphoto.com/id/1464191462/photo/najasa-tai-chi-shrine-ang-sila-chonburi-thailand.jpg?s=612x612&w=0&k=20&c=UPuh4VFrl4PgOS84XVWsOd-Ol_YTNFYUzg6FGRoxKyw=" alt="" />
    </div>                                
    </Slider>
 <br /> <hr />
   
 {/* tour right section  */}
    <div className='tour-price'> 
    <h2>Tour Price</h2>
             <h3>
           
एकूण खर्च पुढीलप्रमाणे =   लँड पॅकेज ३२,७००/-प्रति व्यक्ती(हे फक्त अंदमान मधील पॅकेज आहे या मध्ये विमान तिकिट समाविष्ट नाही. )

ऍडव्हान्स २५,०००/- प्रती व्यक्ती

 
              </h3>      
    </div>
    <div className='tour-specfic'> 
        <h2>सहल खर्चा मध्ये समाविष्ट बाबी खालील प्रमाणे</h2>
        <p>१)	हॉटेलचे वास्तव्य हे उत्तम प्रतीचे आणि वातानुकुलीत रूम असेल, रूमचे शेअरींग हे दोघांमध्ये एक रूम असणार आहे. <br />
२)	ज्या हॉटेल मध्ये आपण राहणार आहोत त्या हॉटेल मध्ये सकाळचा नाष्टा आणि रात्रीचे जेवण हे बुफे पध्दतीने असणार आहे. <br />
३) स्थळ दर्शन करण्यासाठी वातानुकुलीत बस असेल. <br />
४) संपूर्ण प्रकारच्या बोटीचे तिकीट समाविष्ट असेल. <br />
५)	पोर्ट ब्लेअर ते हॅवलॉक आयलंड ते नील आयलंड आणि पोर्ट ब्लेअर या फेरी चे तिकीट हे सरकारी किंवा खाजगी प्रकारच्या वातानुकुलीत जहाजेने असेल. <br />
६) जंगलामधील संपूर्ण प्रकारची परवाना फी असेल. <br />
७) बागेची, बोटीची, संग्रहालयाची आणि जेल मधील लाईट आणि साऊंड शो ची तिकिटे सुधा समाविष्ट असेल. <br />
८) मुंबई किंवा पुणे एअरपोर्ट जाण्या येण्याच्या खर्च समाविष्ट आहे. <br />

      </p> 
      <h2>सहल खर्चामध्ये समाविष्ट नसलेल्या बाबी</h2>
      <p>१) दुपारचे जेवण समाविष्ट नाही. <br />
        २) विमानाच्या ठरलेल्या दरापेक्षा वाढलेले विमान दर, विमानतळावरील कर, सरकारी कर, इंधन कर आणि एन वेळेस सरकारने लावलेले कर हे समाविष्ट नसेल. <br />
        ३) प्रवासाच्या वेळी अचानक काही कारणास्तव जर विमान रद्द झाले, विमान कंपनीमध्ये बदल, मार्ग बदल, किंवा हॉटेल वास्तव्य याचा खर्च समाविष्ट नाही. <br />
        ४) इस्त्री, पॉकेट मनी, टेलीफोन चार्जेस, खरेदी आणि सॉप्ट ड्रींक समाविष्ट नाही. <br />
        ५) सहली दरम्यान अचानक उद्भवणारे आजार, अपघात, हॉस्पिटल चा खर्च समाविष्ट नाही. <br />
        ६) स्कूबा डायव्हिंग, सी वाल्कींग, ग्लास बोटम बोट, स्नोर्क्लिंग तसेच इतर फी समाविष्ट नाही. <br />
        <br />
        <h2> वयोमर्यादा:-</h2>
        <p>
        १) ५ वर्षा पर्यंत च्या लहान मुलांना विमान तिकीट सोडून टूर पॅकेज निशुल्क असेल. <br />
          २) ६ ते १० वर्षा पर्यंतच्या मुलांना अर्धी शुल्क आकारली जाईल. <br />
          ३) ११ वर्षा पासून पुढे पूर्ण शुल्क आकारली जाईल. <br />

        </p>
      </p>
     <hr /> <hr />
   
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

export default DAndaman