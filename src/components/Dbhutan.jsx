import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { Accordion as BootstrapAccordion, Card, Button } from 'react-bootstrap'; // Rename Accordion


const Dbhutan = () => {

  
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
            <h5 className='title-accordion'>१३ फेब्रु :- First day</h5>
          </div>
          {openItem === 1 && (
            <div className='accordion-content'>
              <p>कल्याण ते हशिमारा रेल्वे प्रवास ( रेल्वे प्रवास २ दिवस )
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
            <h5 className='title-accordion'>१४ फेब्रु :- Second day</h5>
          </div>
          {openItem === 2 && (
            <div className='accordion-content'>
              <p> दिवसभर रेल्वे प्रवास.</p>
            </div>
          )}
          </div>
          <br />
          <div className='accordion-container'>
          <div className='accordion-item'>
            <button className='accordion-button' onClick={() => toggleAccordion(3)}>
              <span> {openItem === 3 ? '-' : '+'}</span>
             
            </button>
            <h5 className='title-accordion'>१५ फेब्रु :-  Third day</h5>
          </div>
          {openItem === 3 && (
            <div className='accordion-content'>
              <p>हशिमारा रेल्वे स्टेशन वर ८:३० ला पोहचून नंतर लगेच जयगांवकडे रवाना (२० कि.मी.) 
              जयगांव हे भारता मधील शेवटचे गांव भूतान बॉर्डर वर फुन्सशलिंग येथे परमिट काढून आपण भूतान मध्ये प्रवेश करणार आहोत, भूतानची राजधानी थिम्पू या शहरात पोहचून थिम्पू हॉटेल मुक्काम.
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
            <h5 className='title-accordion'>१६ फेब्रु :-  Fourth day</h5>
          </div>
          {openItem === 4 && (
            <div className='accordion-content'>
              <p> नाश्ता करून थिम्पू दर्शन यामध्ये चोर्टन टेम्पल, थिंम्पू झॉन्ग ( किल्ला), थिंपू संग्रहालय, बुद्धा पॉईंट पाहून थिंम्पू मार्केट मध्ये खरेदी करून थिम्पू हॉटेल मुक्काम. </p>
            </div>
          )}
          </div>
          <br />
          <div className='accordion-container'>
          <div className='accordion-item'>
            <button className='accordion-button' onClick={() => toggleAccordion(5)}>
              <span>{openItem === 5 ? '-' : '+'}</span>
              
            </button>
            <h5 className='title-accordion'>१७ फेब्रु :- Fifth day</h5>
          </div>
          {openItem === 5 && (
            <div className='accordion-content'>
              <p> सकाळी नाश्ता करून भूतानची धार्मिक राजधानी पुनाखा येथे जाणार आहोत. सर्वांत लांब पुनाखा सस्पेन्शन ब्रिज, मोचू आणि पोचू नद्यांच्या मध्ये असलेला सर्वात सुंदर पुनाखा झॉन्ग पाहणार आहोत भूतान मधील सर्व पारंपरिक व धार्मिक सण उत्सव याच ठिकाणावरून सुरु होतात. संध्याकाळी पारो हॉटेल मुक्काम.</p>
            </div>
          )}
          </div>
          <br />
          <div className='accordion-container'>
          <div className='accordion-item'>
            <button className='accordion-button' onClick={() => toggleAccordion(6)}>
              <span> {openItem === 6 ? '-' : '+'}</span>
             
            </button>
            <h5 className='title-accordion'>१८ फेब्रु :-  Sixth day</h5>
          </div>
          {openItem === 6 && (
            <div className='accordion-content'>
              <p>  सकाळी नाश्ता करून पारो झॉन्ग आणि दुसऱ्या शतकातील किचू मॉनेस्ट्री मार्केट मध्ये शॉपिंग करून मुक्काम पारो हॉटेल मुक्काम. </p>
            </div>
          )}
          </div>
          <br />
          <div className='accordion-container'>
          <div className='accordion-item'>
            <button className='accordion-button' onClick={() => toggleAccordion(7)}>
              <span>{openItem === 7 ? '-' : '+'}</span>
              
            </button>
            <h5 className='title-accordion'>१९ फेब्रु :- Seventh day</h5>
          </div>
          {openItem === 7 && (
            <div className='accordion-content'>
              <p>सकाळी नाष्टा करून टायगर नेस्ट मॉनेस्टरी साठी जाणे ४ तास पायी ट्रेक पारो हॉटेल मुक्काम. </p>
            </div>
          )}
           </div>
        <br />
          <div className='accordion-container'>
          <div className='accordion-item'>
            <button className='accordion-button' onClick={() => toggleAccordion(8)}>
              <span> {openItem === 8 ? '-' : '+'}</span>
            </button>
            <h5 className='title-accordion'>२० फेब्रु :- Eighth day</h5>
          </div>
          {openItem === 8 && (
            <div className='accordion-content'>
              <p>  सकाळी नाश्ता करून लतागुरी येथे जाणार आहोत. लतागुरी हे एकशिंगी गेंडा व हातींसाठी प्रसिद्ध ठिकाण आहे. लतागुरी हॉटेल मुक्काम. </p>
            </div>
          )}
          </div>
          <br />
          <div className='accordion-container'>
          <div className='accordion-item'>
            <button className='accordion-button' onClick={() => toggleAccordion(9)}>
              <span> {openItem === 9 ? '-' : '+'}</span>
             
            </button>
            <h5 className='title-accordion'>२१ फेब्रु :-  Ninth Day</h5>
          </div>
          {openItem === 9 && (
            <div className='accordion-content'>
              <p>सकाळी नाश्ता करून बागडोगरा विमानतळाकडे प्रस्थान - बागडोगरा ते पुणे/ मुंबई विमान प्रवास पुणे / मुंबई पोहचणे सहल समाप्त. </p>
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
An unforgettable trip to Bhutan
        </h1>
        <div className='images'>
              <img src="https://media.istockphoto.com/id/1071090480/photo/taktsang-monastery.jpg?s=612x612&w=0&k=20&c=c1ZSS5QT2lWGNYcV0-Na4rMjUgq123gvhHUD6x91Ec4=" alt="" />
              <img src="https://media.istockphoto.com/id/802928878/photo/iron-chain-bridge-of-tachog-lhakhang-monastery-paro-river-bhutan.jpg?s=612x612&w=0&k=20&c=rMk5hQr_w60SxGxXd2hU8ODtmRHgvuCphv7-nq1aYXM=" alt="" />
             <img src="https://media.istockphoto.com/id/1419706157/photo/parliament-of-bhutan-building-thimphu-bhutan.jpg?s=612x612&w=0&k=20&c=AERsGwzX-o_f_3vWhLEKn_GwS1gCVGxv7lz56LyslXU=" alt="" />
             <img src="https://media.istockphoto.com/id/1422495525/photo/kyichu-lhakhang-temple-prayer-wheels-paro-bhutan.jpg?s=612x612&w=0&k=20&c=q8sdjB_rUCxJ2LIa65cQVb0ZfVhlj46ErJtb3fh_hRU=" alt="" />
             <img src="https://media.istockphoto.com/id/1481355717/photo/the-great-buddha-dordenma-is-sited-amidst-the-ruins-of-kuensel-phodrang-in-thimphu-bhutan.jpg?s=612x612&w=0&k=20&c=zDaq7zHBlKIXFBCbJEQdVoQ2aDr2M3PbcoHve-p_wZE=" alt="" />
             <img src="https://media.istockphoto.com/id/1363981932/photo/buddhist-stupa.jpg?s=612x612&w=0&k=20&c=BlJyPrtDs1aPzGiVfruxSFwS2Gm641WO4NcfvHbx1Xc=" alt="" />
             <img src="https://media.istockphoto.com/id/940114158/photo/bhutan.jpg?s=612x612&w=0&k=20&c=IGCji0usEyzwppKyXjMVTXapcU8XXDI9XLKSQkZ5o0M=" alt="" />
        </div>
        <a href="#" class="book-now">Book Now</a>
      </div>
      
      <section className='page-container'>
        <hr />
        <section className='left-section'>
          <div className='header'>
            <h1 className='head'>   Bhutan tour</h1>
          </div>
          <Slider className='imgth' {...settings}>
            {/* Your Slider content here */}
            <div className='th'>
            <img src="https://media.istockphoto.com/id/1394585308/photo/buddha-dordenma-statue-bhutan.jpg?s=612x612&w=0&k=20&c=8j30lEY_-lyw_kkdbWwc7_-eN80g6h6XELKVzPxZqbI=" alt="" />
          </div> 
            <div className='th'>
            <img src="https://media.istockphoto.com/id/684144348/photo/punakha-dzong-bhutan.jpg?s=612x612&w=0&k=20&c=ZzzirahSyvZpjD_dtntLfzBiO0xupD4u6-Gve3MFqfQ=" alt="Tour Image 1" />
          </div>
          <div className='th'>
            <img src="https://media.istockphoto.com/id/470879938/photo/a-giant-buddha-statue-under-blue-sky-in-thimphu-bhutan.jpg?s=612x612&w=0&k=20&c=40OZ2SmY_Xfc7EBS7uVSJVcQO15Z7iTZxV6g5ewRPbI=" alt="Tour Image 2" />
          </div>
          <div className='th'>
            <img src="https://media.istockphoto.com/id/1433815053/photo/thimphu-bhutan.jpg?s=612x612&w=0&k=20&c=l988ad2s6L_GXwiQ83PDIiY3VGxU40HpFASBUBL1lOo=" alt="Tour Image 3" />
          </div>
          <div className='th'>
            <img src="https://media.istockphoto.com/id/695787008/photo/lighting-of-praying-candles-in-zangdhopelri-monastery-in-thimphu-bhutan.jpg?s=612x612&w=0&k=20&c=kSeQbMvIgAx_STOAxB7ts_A8-TTt-7QkE7yAy94-Pag=" alt="" />
          </div>
          <div className='th'>
            <img src="https://media.istockphoto.com/id/1365791746/photo/druk-wangyal-khangzang-stupa-with-108-chortens-dochula-pass-bhutan-dochula-pass-is-located-on.jpg?s=612x612&w=0&k=20&c=BUpjGBj9j7mpSsOs5_2OVmRhK12EMt9sb8x3FcoGLIQ=" alt="" />
          </div>                                
          </Slider>
       <br /> <hr />
         
       {/* tour right section  */}
          <div className='tour-price'> 
          <h2>Tour Price</h2>
                   <h3>
                   टोटल पॅकेज प्रतिव्यक्ती ३८,४००/- <br />
                   
                   (दोन्ही बाजूने ३ एसी रेल्वे प्रवास सह.)

          
                    </h3>      
          </div>
          <div className='tour-specfic'> 
              <h2>सहल खर्चा मध्ये समाविष्ट बाबी खालील प्रमाणे</h2>
              <p>➡ ६ रात्री ७ दिवस थ्री स्टार हॉटेल वास्तव्य <br />
            ➡  ६ नाष्टा ६ रात्री चे जेवण. <br />
            ➡ एक रूम दोन व्यक्ती मध्ये राहील. <br />
            ➡ थ्री टियर एसी रेल्वे प्रवास जाऊन येऊन. <br />
            ➡  भूतान मधील स्थळ दर्शन साठी बस <br />
            ➡ भूतान मध्ये रहाण्यासाठी एका दिवसाला प्रति व्यक्ती १२०० रु चार्जेस आहेत अर्थात त्याला व्हिजा फी म्हणू शकता हा खरच पॅकेज मध्ये आहे <br />
            </p> 
            <h2>सहल खर्चामध्ये समाविष्ट नसलेल्या बाबी</h2>
            <p>➡ दुपारचे जेवण व रेल्वे आणि विमान प्रवासातील जेवण पॅकेज मध्ये नाही.
 <br />
            ➡  इंट्री तिकीट,गार्डन,बोटिंग,जीप सफारी,म्युझियम,प्राणी संग्रहालय,पकेज मध्ये नमूद केलेल्या व्यतिरिक्त इतर कोणतेही खर्च समाविष्ट नाहीत.
 <br />
            ➡  विमान तिकीट हा खर्च ज्या वेळी तुम्ही विमान बुक कराल त्या दिवशी जो असेल तो दर extra द्यावा लागेल.
 <br /></p>
              
 🚫 कॅन्सल पॉलिसी 🚫 <br />
काही कारणास्तव ट्रिप कॅन्सल केल्यास विमान तिकिटाचे पैसे व टूर पॅकेज चे पैसे रिटर्न मिळणार नाही.

           <hr /> <hr />
            <h3>
              <span className='warn'>   टिप:-</span>
              भूतान टूर बुक करण्यासाठी मतदान कार्ड किंवा पासपोर्ट गरजेचा आहे आधार कार्ड चालणार नाही.
                

            </h3>
            <p>
              **********************************<br />
                        सूचना:- <br />
               <br />
            ******************************<br />
            १) भूतान ग्रुप मधील सर्व सदस्यानां सूचना आहे जवळ १ शाल घेणे थंडीचे सर्व गरम कपडे घेणे. थंडी भरपूर असते. <br />
२) शक्यतो एका माणसा जवळ १ च बॅग असावी तुमच्या जवळ २ बॅग असतील तर १ बँगचे विमानतळावर ४०० रु १ किलो चे असे तुमच्या दुसऱ्या बॅगेचे वजन होईल तेवढे तुम्हाला पैसे द्यावे लागेल,१ बॅग १५ किलो च्या पुढे नसावी, हँडबॅग ७ किलो च्या पुढे नसावी. <br />
३) रोज दिलेल्या टायमिंग ला तयार राहणे सर्वांनी दिलेल्या टाईम मध्ये बस जवळ यावे कोणीही उशीर करू नये. <br />
४) एका रूम मध्ये दोन व्यक्ति राहतील. <br />
५) बस मध्ये रोज सीट चेंज करावे. <br />
६) काही शंका वाटल्यास आपल्या ग्रुप लीडर ला सांगावे <br />
७) भूतान मध्ये तुमचे सिमकार्ड चालणार नाही, हॉटेल वर वाय - फाय चालते आणि वॉटस्अप कॉल यांची सर्वांनी नोंद घ्यावी. <br />
८) अचानक विमाना किंवा रेल्वे टायमिंग मध्ये रिशेडयूल किंवा रद्द झाल्यास टूर आयोजक जी काय पर्याय व्यवस्था करतील त्याचा extra खर्च  द्यावा लागेल तसेच तेवढा वेळ तुम्हाला विमानतळावर किंवा रेल्वे स्टेशन वर थांबावे लागेल. <br />
९) ट्रिप मध्ये प्रवासामध्ये कुठेही कमी जास्त होते ते 
सर्वांनी ॲडजस्टमेंट करावी. <br />
१०) सर्व हॉटेल ३* असतील, नाष्टा आणि रात्रीचे जेवण समाविष्ट. <br />
११) रेल्वे मध्ये स्वताःचे जेवण घेणे. <br />
१२) पुणे ते मुंबई सीटींग प्रवास, कल्याण ते हाशिमरा ३ एसी रेल्वे प्रवास,  रिटर्न ३ एसी पुणे मुंबई रेल्वे प्रवास. <br />
१३)जीवित व वित्त हानीस टूर आयोजक जबाबदार नसतील <br />

            ➡ जिवीत व वित्त हानीस आयोजक मंडळ जबाबदार राहणार नाही ज्याच्या त्याच्या जबाबदारीवर असेल.


            बुकिंग करताना सर्वांनी नियम व अटी वाचुनच बुकिंग करावे <br />
 
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

export default Dbhutan