import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DAbout = () => {
  return (
  
    <>
    <hr />
   <div >
    <h1 className='headings12' >आमच्याबद्दल माहिती <span class="pen-icon">✏️ <br /> <h2>संपर्क</h2></span></h1>
    <p className='address'>स्पेस सारथी टूर्स तवटे मार्केट शेजारी , कृष्णा हॉस्पिटल समोर मलकापूर कराड  , Email - spacesarathi123@gmail.com <br />  प्रदीप पवार - 9527577800 &nbsp; संतोष पाटील - 9822234849</p>
  
    <div className='contact-section'>
      
      <FontAwesomeIcon icon={faEnvelope} size="4x" />
      
    </div>
   </div> <hr />
<div className="about-page">
      <div className="left-section">
        <h1><b>आमचे व्हिजन</b></h1>
        <p>स्पेस सारथी टूर्स ग्राहकांना अत्यंत संतुष्टता देणारे, उत्कृष्ट व अनुभवशील पर्यटन सेवा चे उद्धिष्ट आहे. आम्ही आमच्या ग्राहकांसाठी सौजन्य, सुरक्षितता, समृद्धी, आणि आनंदाचं संच पर्याप्तपणे प्रदान करणार आहोत.</p>
        <h1> <b> आमचे मिशन</b> </h1>
        <p>स्पेस सारथी टूर्सचा ध्येय आहे की आपल्या ग्राहकांसाठी देश आणि विदेशीतील प्रेक्षणीय स्थळांचे सौंदर्य अनुभवायला सारथी व्हायचे त्याचबरोबर आनंद, आणि आपल्या स्मृतीला भरारी देणारे अनुभव देणं आपलं परम उद्देश आहे. हे सर्व काही आम्ही अत्यंत उत्सुकतेने प्रत्येक ग्राहकाला प्रदान करण्याचं आमचं ध्येय आहे.</p>
     
      </div>  
   
      <div className="right-section">
       <h1><b>स्पेस सारथी टूर्स ची मूल्ये</b></h1>
       <b>यात्रेचं अनुभव असंख्य आनंददायक असतं आणि आपल्याला अवकाश सारथी टूर्सच्या मूल्यांचं पालन करतांना आनंद होईल!</b>
       <p>सौजन्य: आपल्या ग्राहकांचं मनापासून सत्कार करणं आणि सर्वांचं सौजन्यपूर्वक सेवेचं प्रदान करणं आमच्या मूल्यातील एक गरज आहे.
          सुरक्षितता: आपल्या ग्राहकांचं सुरक्षित असणे आमच्या मूल्यातील एक महत्वपूर्ण आणि नियमित सांगतं आहे.
          समृद्धी: आम्ही आपल्या ग्राहकांचं सुख-शांतीतलं आणि समृद्धीचं अनुभव प्रदान करणार आहोत.
          आनंद: पर्यटनाचं सुंदर अनुभव, आनंद आणि मनोरंजन आपल्या ग्राहकांसाठी प्रमुख आहे.
          सूक्ष्मदृष्टी: आम्ही आपल्या ग्राहकांच्या सांस्कृतिक, इतिहासिक आणि पर्यावरणातील सूक्ष्मदृष्टीचं महत्व आपल्याला जाणवतो.
          व्यावसायिकता: प्रोफेशनल व्यवस्थापन, सज्जता, आणि अनुशासन आपल्याला आपलं व्यावसायिक परिवार ठरवतं.</p>
           
       </div>
   

    </div> 

        <div className='img2 '>
          <h2 className='aj'>स्पेस सारथी टूर्स चे संचालक</h2><hr />
          <h4 className='bj'> श्री प्रदीप पवार</h4>
          <h4 className='bj'>श्री संतोष नांगरे</h4>
           <img src="https://spacesarathi.com/wp-content/uploads/2023/08/7.jpeg" alt="" />
          <div>
          </div>
          </div>

         
         

    </>
  )
}

export default DAbout