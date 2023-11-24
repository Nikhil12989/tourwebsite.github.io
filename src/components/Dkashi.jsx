import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { Accordion as BootstrapAccordion, Card, Button } from 'react-bootstrap'; // Rename Accordion

const Dkashi = () => {


  
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
            <h5 className='title-accordion'>16 जानेवारी:- First day</h5>
          </div>
          {openItem === 1 && (
            <div className='accordion-content'>
              <p>दिवस पहिला. सकाळी दहा वाजता कराड हुन कोयना एक्सप्रेस ने कल्याण कडे रवाना.व रात्री दहा वाजता कल्याणहुन कोलकत्ता एक्सप्रेस ने गया कडे प्रस्थान .</p>
            </div>
          )}
          </div>
          <br />
          <div className='accordion-container' >
          <div className='accordion-item'>
            <button className='accordion-button' onClick={() => toggleAccordion(2)}>
              <span> {openItem === 2 ? '-' : '+'}</span>
             
            </button>
            <h5 className='title-accordion'>17 जानेवारी:- Second day</h5>
          </div>
          {openItem === 2 && (
            <div className='accordion-content'>
              <p> दिवस दुसरा. दिवसभर रेल्वे प्रवास.</p>
            </div>
          )}
          </div>
          <br />
          <div className='accordion-container'>
          <div className='accordion-item'>
            <button className='accordion-button' onClick={() => toggleAccordion(3)}>
              <span> {openItem === 3 ? '-' : '+'}</span>
             
            </button>
            <h5 className='title-accordion'>18 जानेवारी :- Third day</h5>
          </div>
          {openItem === 3 && (
            <div className='accordion-content'>
              <p>दिवस तिसरा. पहाटे तीन वाजता वाजता श्री तीर्थक्षेत्र गया मध्ये आगमन. फ्रेश होऊन नाष्टा करून श्री विष्णू पद विष्णु पादुका मंदिर कडे रवाना विष्णू पादुका दर्शन. श्री तीर्थक्षेत्र फाल्गुनी नदी दर्शन. 
              व श्री तीर्थक्षेत्र बौद्ध गया कडे रवाना. श्री बौद्ध गया येथील बौद्ध वटवृक्ष जेथे श्री गौतम बुद्धांनी दीक्षा घेतली ते ठिकाण व प्रत्येक बुद्धिष्ट देशांनी बांधलेली सुवर्ण मंदिरे भव्य बौद्ध मूर्ती पाहून रात्री जेवण करून अकरा वाजता बनारस कडे रवाना व बनारस (काशी)मुक्काम.</p>
            </div>
          )}
          </div>
          <br />
          <div className='accordion-container'> 
          <div className='accordion-item'>
            <button className='accordion-button' onClick={() => toggleAccordion(4)}>
              <span> {openItem === 4 ? '-' : '+'}</span>
             
            </button>
            <h5 className='title-accordion'> 19 जानेवारी :- Fourth day</h5>
          </div>
          {openItem === 4 && (
            <div className='accordion-content'>
              <p>दिवस चौथा. श्री काशी स्नान गंगा स्नान व श्री बारा ज्योतिर्लिंगापैकी एक श्री काशी विश्वेश्वराचे दर्शन.नौकेतून 80 घाटाचे दर्शन व सायंकाळी गंगा आरती श्री कमळ भैरव म्हणजेच काळभैरव दर्शन व बनारस काशी मुक्काम.</p>
            </div>
          )}
          </div>
          <br />
          <div className='accordion-container'>
          <div className='accordion-item'>
            <button className='accordion-button' onClick={() => toggleAccordion(5)}>
              <span>{openItem === 5 ? '-' : '+'}</span>
              
            </button>
            <h5 className='title-accordion'> 20 जानेवारी:- Fifth day</h5>
          </div>
          {openItem === 5 && (
            <div className='accordion-content'>
              <p>दिवस पाचवा. सकाळी नाश्ता करून अलाबाद कडे रवाना दुपारी आलाबाद प्रयाग येथील त्रिवेणी संगम गंगा यमुना सरस्वती त्रिवेणी संगमावर स्नान. लंका दहन करून आल्यानंतर श्री हनुमंताचे झोपलेले ठिकाण. व रात्री अलाहाबाद किंवा वाराणसी मुक्काम.
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
            <h5 className='title-accordion'> 21 जानेवारी :- Sixth day</h5>
          </div>
          {openItem === 6 && (
            <div className='accordion-content'>
              <p> दिवस सहावा. अयोध्या श्री राम जन्म भूमि, राम मंदिर, हनुमान गढी, श्री राजा दशरथ राजवाडा. </p>
            </div>
          )}
          </div>
          <br />
          <div className='accordion-container'>
          <div className='accordion-item'>
            <button className='accordion-button' onClick={() => toggleAccordion(7)}>
              <span>{openItem === 7 ? '-' : '+'}</span>
              
            </button>
            <h5 className='title-accordion'>22 जानेवारी:- Seventh day</h5>
          </div>
          {openItem === 7 && (
            <div className='accordion-content'>
              <p> सायंकाळी 4 वाजता कराड येथे आगमन व यात्रा समाप्त.. </p>
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
An unforgettable trip to Kashi
        </h1>
        <div className='images'>
              <img src="https://media.istockphoto.com/id/827065008/photo/holy-town-varanasi-and-the-river-ganges.jpg?s=612x612&w=0&k=20&c=WHGBF2zwPkVMpAma832RbHrov6VwKIMXuDR3N2WmfGg=" alt="" />
              <img src="https://media.istockphoto.com/id/1304671291/photo/varanasi.jpg?s=612x612&w=0&k=20&c=UpaQjGxt7byqAFoghVGASsvx0EsmvXjR9bo5tDLOc1M=" alt="" />
             <img src="https://media.istockphoto.com/id/1223218787/photo/evening-ceremony-at-the-ganges-river-in-varanasi.jpg?s=612x612&w=0&k=20&c=EBe9QaFnngwFRaJ6nmx2JgQdid-HxF1wKIK6-GHz78M=" alt="" />
             <img src="https://media.istockphoto.com/id/1749460979/photo/buddhametta.jpg?s=612x612&w=0&k=20&c=fpC0tHpnsAiV_YrwOqhdgd6u01Zo8gEj7-1b8DBk-AY=" alt="" />
             <img src="https://media.istockphoto.com/id/531689338/photo/sadhu-is-meditating-in-boat-on-holy-ganges-river-varanasi.jpg?s=612x612&w=0&k=20&c=WGx1AGbVCC_MtnUmIyRDonnUOzuqtS3-heHmt7iPwQU=" alt="" />
             <img src="https://media.istockphoto.com/id/1163455002/photo/varanasi-city-architecture-with-view-of-migratory-birds-on-river-ganges-as-seen-from-a-boat.jpg?s=612x612&w=0&k=20&c=2jNlJLR7nHTmI4fB55PjOIfyXpaBtALcal0ahFBNPAc=" alt="" />
             <img src="https://media.istockphoto.com/id/1171586475/photo/colorful-boats-and-ganges-river.jpg?s=612x612&w=0&k=20&c=RULOSAh_ujGBiN7yo0XdiXA9giaQ9BSc9zXrTPQkfG0=" alt="" />
        </div>
        <a href="#" class="book-now">Book Now</a>
      </div>
      
      <section className='page-container'>
        <hr />
        <section className='left-section'>
          <div className='header'>
            <h1 className='head'>   Kashi Gaya Prayagraj  tour</h1>
          </div>
          <Slider className='imgth' {...settings}>
            {/* Your Slider content here */}
            <div className='th'>
            <img src="https://media.istockphoto.com/id/658337338/photo/ghats-on-the-ganges-river.jpg?s=612x612&w=0&k=20&c=ACBomr3avzcqGcAimT3g9rL5s8XQ4BAl0ruVycFG-Sw=" alt="" />
          </div> 
            <div className='th'>
            <img src="https://media.istockphoto.com/id/636687208/photo/sadhu-rowing-boat-on-the-holy-ganges-river-in-varanasi.jpg?s=612x612&w=0&k=20&c=9f2JdRTAffvGx383jyJt2YvfRq9HSKOxL3S8TsDF6YI=" alt="Tour Image 1" />
          </div>
          <div className='th'>
            <img src="https://media.istockphoto.com/id/489122862/photo/vishwanath-temple-khajuraho.jpg?s=612x612&w=0&k=20&c=xmecGwCufc5Eb-qSQwHg0FAj5icmpSYl-f6VcspP54k=" alt="Tour Image 2" />
          </div>
          <div className='th'>
            <img src="https://media.istockphoto.com/id/803720214/photo/ganga-ghat-of-banaras.jpg?s=612x612&w=0&k=20&c=lTo1ZZKKjmiL7eBjzp0gU3JdWhX_3v5_P_pWJ6cRdvA=" alt="Tour Image 3" />
          </div>
          <div className='th'>
            <img src="https://media.istockphoto.com/id/1250655536/photo/on-boat-cruise-on-the-river-ganges-varanasi-india.jpg?s=612x612&w=0&k=20&c=wG6tFyesmkBxBCXrgr1dxLdDtCIaLcsgCmFAdNyzkyM=" alt="" />
          </div>
          <div className='th'>
            <img src="https://media.istockphoto.com/id/1053027618/photo/a-view-of-jain-temple-at-agarkar-road-pune-india.jpg?s=612x612&w=0&k=20&c=DHbyXueJPD4axZzaaUlOHWv-w2m2MxmJms6ePr6sqwY=" alt="" />
          </div>                                
          </Slider>
       <br /> <hr />
         
       {/* tour right section  */}
          <div className='tour-price'> 
          <h2>Tour Price</h2>
                   <h3>
                   सहल खर्च एक व्यक्ती 9,999/-  रुपये (नॉन एसी स्लीपर क्लास रेल्वे प्रवास) <br />
            <br />
            ॲडव्हान्स बुकिंग रक्कम एक व्यक्ती 3,000/- (नॉन रिफंडेबल) <br />

            सहल खर्च एक व्यक्ती 13,000/-  रुपये ( एसी थ्री टियर स्लीपर क्लास रेल्वे प्रवास) <br />
            <br />
            ॲडव्हान्स बुकिंग रक्कम एक व्यक्ती 5,000/- (नॉन रिफंडेबल) <br />
                    </h3>      
          </div>
          <div className='tour-specfic'> 
              <h2>सहल खर्चा मध्ये समाविष्ट बाबी खालील प्रमाणे</h2>
              <p>➡सकाळी चहा नाष्टा, व  दुपारी हलका आहार आणि रात्रीचे पोठबर जेवण जार चे फिल्टर पाणी. <br />
                ➡प्रवास नॉन एसी टू बाय टू  लक्झरी बस. <br />
                ➡निवास व्यवस्था नॉन एसी रूम  एक रूम मध्ये 3 किंवा 4 व्यक्ती. <br />
                ➡कराड ते कराड नॉन एसी सिटिंग रेल्वे प्रवास. <br />

            </p> 
            <h2>सहल खर्चामध्ये समाविष्ट नसलेल्या बाबी</h2>
            <p>➡ रेल्वे प्रवासा मधील जेवण,प्रवेश फी, पुजा विधी, दान धर्म, रिक्षा, बोट खर्च, बिसलेरी पाणी, इत्यादी. या सर्व गोष्टींचा खर्च स्वतःला करावा लागेल.  <br />
            
            </p>
           <hr /> <hr />
            <h3>
              <span className='warn'>   टिप:-</span>
              *** टीप**  सहली मध्ये बदल करण्याचा अधिकार टूर व्यवस्थापक यांना राहील वेळेचे बंधन पाळणे हे सर्व पर्यटकांना गरजेचे असेल
                

            </h3>
            <p>
              **********************************<br />
                        सूचना:- <br />
                        ➡ यात्रा कराड वरून सुरू होईल आणि कराड मध्ये समाप्त होईल याची नोंद घ्यावी. <br />
➡ वातावरणा नुसार दिलेल्या वेळा पत्रका मध्ये बदल होऊ शकतो. <br />
➡ रेल्वे रिझर्वेशन प्रमाणे ज्या ठिकाणी आपला सीट नंबर येईल त्या ठिकाणी बसुन सहकार्य करावे. <br />
➡ कोणीही मौल्यवान वस्तू आणू नये हरवल्यास किंवा चोरीला गेल्यास त्यास टूर आयोजक जबाबदार नसतील. <br />
 ➡ स्वतःच्या बॅग स्वतःच्या जबाबदारीवर सांभाळणे <br />
➡ रेल्वे स्टेशन वर आणि हॉटेल वर स्वतःच्या बॅग स्वतःला उचलाव्या लागतील. <br />
➡ बस मधून प्रवास करत असताना कोणी ही स्वतःची जागा (सीट) फिक्स करू नये. सीट रोज बदलत राहावे.(वाद टाळावा) <br />
➡ ओरिजनल आधार कार्ड व एक झेरॉक्स बरोबर ठेवावे. <br />
➡ सर्वांनी दिलेली वेळ पाळावी कोणी ही उशीर करू नये. <br />
➡ कोणाचे ही बुकिंग रद्द होणार नाही. <br />
➡ प्रवासा मध्ये खाण्यासाठी घरून सुखा खाऊ आणावा. <br />
➡ औषध गोळ्या चालु असल्यास डॉक्टरांच्या सल्ल्याने बरोबर घ्यावित. <br />
➡ सहली दरम्यान उद्भवणारे हॉस्पिटल अथवा अन्य कोणते ही खर्च स्वतःला करावे लागतात. <br />
➡ यात्रे दरम्यान नियोजित वेळापत्रका मध्ये नैसर्गिक आपत्ती मुळे किंवा अन्य कोणत्या ही कारणास्तव जर बदल करावा लागला तर  रेल्वे,विमान,हॉटेल,बस. या सर्व गोष्टींचा जो खर्च येईल तो ज्यादा द्यावा लागेल. <br />
➡ जिवीत व वित्त हानीस आयोजक मंडळ जबाबदार राहणार नाही ज्याच्या त्याच्या जबाबदारीवर असेल. <br />

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

export default Dkashi