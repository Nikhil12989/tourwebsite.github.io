import React from 'react';
import './style.css';


const DHome = () => {
  return (

    <>
   
<section id='living'>
        <div class="living_main1">
						<h2>OUR <span class="well_12"> TOP </span> TRAVEL TOURS</h2>
						<p>Mastering the art of perfect adventure for 10+ years in the wild?</p>
        </div>
        <hr />
        {/* Image Section starts  */}
        <div className='images'>
        <div className='imagedetail'>
          <h2>......</h2>         
          <img src="https://media.istockphoto.com/id/519330110/photo/taj-mahal-agra-india-monument-of-love-in-blue-sky.webp?b=1&s=170667a&w=0&k=20&c=8XAl6nAQ7raW9n0_w12njW8kwQtmAtq6FEGfRZH2-aw=" />
        </div>
        <div className='imagedetail' >
        <h2>......</h2> 
          <img src="https://media.istockphoto.com/id/482557081/photo/hawa-mahal-jaipur-india.webp?b=1&s=170667a&w=0&k=20&c=Hw2XyqEWI4jjo_wi7Plhd7NjHfhuvc5AwSD9G40ABPg=" />
        </div>
        <div className='imagedetail' >
        <h2>.....</h2> 
          <img src="https://media.istockphoto.com/id/482557081/photo/hawa-mahal-jaipur-india.webp?b=1&s=170667a&w=0&k=20&c=Hw2XyqEWI4jjo_wi7Plhd7NjHfhuvc5AwSD9G40ABPg=" />
        </div>
       
        <div className='imagedetail' >
        <h2>.....</h2> 
          <img src="https://media.istockphoto.com/id/181072576/photo/chhatrapati-shivaji-terminus.webp?b=1&s=170667a&w=0&k=20&c=6-J6TlH-1clkO5p2VFbzpxx1VnwWOXcbIGPFSzAECiM=" />
        </div>
        <div className='imagedetail' >
        <h2>......</h2> 
          <img src="https://media.istockphoto.com/id/154894958/photo/amber-fort-jaipur-india.webp?b=1&s=170667a&w=0&k=20&c=dlzNCcKaBY9M9mW7xfyF3oSvcZMEddr-levwG51Q7JQ=" />
        </div>
        </div>
        {/* Image Section ends  */}
</section>
<div className="row">
  <div className="property_1">
    <h2>POPULAR TOURS</h2>
    <p>
      Lorem ipsum dolor <span class="well_12"> TOP </span> sit amet, consectetur adipisicing elit. Earum totam et
      dolores
    </p>
  </div>
</div>

    </>
    
  )
}

export default DHome