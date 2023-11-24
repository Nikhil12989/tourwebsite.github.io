import React from 'react';
import { Link } from 'react-router-dom';


const DTourpackges = () => {
  return (
    <section>
              <div className='tour-packages'>
                <div className='tours-container'>
                  {/* Tour Card 1 */}
                  <div className='first-tour'>
          <Link to="/Gujrat">
            <div className='title-card'>
            
              <h3 className='tour-name'>Gujarat Tour</h3>
              <div className='rating'>
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index} className='star'>
                    ★
                  </span>
                ))}
                <span className='ribbon'>
        </span>
              </div>
              <div className='book-now'>Book Now</div>
            </div>
          </Link>
          <br />
        </div>

          {/* Tour Card 2 */}
                  <div className='first-tour'>
          <Link to="/Rajasthan">
            <div className='title-cardrj'>
        
              <h3 className='tour-name'>Rajasthan Tour</h3>
              <div className='rating'>
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index} className='star'>
                    ★
                  </span>
                ))}
                <span className='ribbon'>
        </span>
              </div>
              <div className='book-now'>Book Now</div>
            </div>
          </Link>
          <br />
        </div>

          {/* Tour Card 3 */}
                  <div className='first-tour'>
          <Link to="/Bhutan">
            <div className='title-cardgj'>
          
              <h3 className='tour-name'>Bhutan Tour</h3>
              <div className='rating'>
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index} className='star'>
                    ★
                  </span>
                ))}
                <span className='ribbon'>
        </span>
              </div>
              <div className='book-now'>Book Now</div>
            </div>
          </Link>
          <br />
        </div>

          {/* Tour Card 4 */}
                  <div className='first-tour'>
          <Link to="/kashi">
            <div className='title-cardkh'>
        
              <h3 className='tour-name'>Kashi Tour</h3>
              <div className='rating'>
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index} className='star'>
                    ★
                  </span>
                ))}
         
              </div>
              <div className='book-now'>Book Now</div>
            </div>
          </Link>
          <br />
        </div>

          {/* Tour Card 5 */}
                  <div className='first-tour'>
          <Link to="/shimla">
            <div className='title-cardsh'>
            
              <h3 className='tour-name'>Shimla  Tour</h3>
              <div className='rating'>
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index} className='star'>
                    ★
                  </span>
                ))}
                <span className='ribbon'>
        </span>
              </div>
              <div className='book-now'>Book Now</div>
            </div>
          </Link>
          <br />
        </div>

          {/* Tour Card 6 */}
                  <div className='first-tour'>
          <Link to="/Andaman">
            <div className='title-cardad'>
            
              <h3 className='tour-name'>Andamann Tour</h3>
              <div className='rating'>
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index} className='star'>
                    ★
                  </span>
                ))}
                <span className='ribbon'>
        </span>
              </div>
              <div className='book-now'>Book Now</div>
            </div>
          </Link>
          <br />
        </div>

          {/* Tour Card 7 */}
                  <div className='first-tour'>
          <Link to="/Hampi">
            <div className='title-cardhp'>
        
              <h3 className='tour-name'>Hampi Tour</h3>
              <div className='rating'>
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index} className='star'>
                    ★
                  </span>
                ))}
                <span className='ribbon'>
        </span>
              </div>
              <div className='book-now'>Book Now</div>
            </div>
          </Link>
          <br />
        </div>

          {/* Tour Card 8 */}
                  <div className='first-tour'>
          <Link to="/jammu">
            <div className='title-cardjk'>
          
              <h3 className='tour-name'>Jammu Kashmir Tour</h3>
              <div className='rating'>
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index} className='star'>
                    ★
                  </span>
                ))}
                <span className='ribbon'>
        </span>
              </div>
              <div className='book-now'>Book Now</div>
            </div>
          </Link>
          <br />
        </div>
                      {/* Tour Card 9 */}

               <div className='first-tour'>
                <Link to="/Tirupati">
                  <div className='title-cardbl'>
                  
                    <h3 className='tour-name'>Tirupati balaji Tour</h3>
                    <div className='rating'>
                      {Array.from({ length: 5 }, (_, index) => (
                        <span key={index} className='star'>
                          ★
                        </span>
                      ))}
                      <span className='ribbon'>
              </span>
                    </div>
                    <div className='book-now'>Book Now</div>
                  </div>
                </Link>
                <br />
              </div>

          {/* Repeat the above structure for other tour cards */}
        </div>
      </div>
    </section>
  );
};

export default DTourpackges;
