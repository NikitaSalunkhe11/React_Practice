import React from 'react';
import './Home.css';

function home() {
  return (
    <>
      <div className='Outerdiv'>
        
        <div className='textdiv'>
          <p>Weaving Your Dreams </p>
          <p>into Unforgettable</p>
          <p> Adventures</p>
          <button className='btn' type="submit">Get Started</button>
        </div>
        
      </div>
      <div className='outer2'>
        <p className='name' style={{color:"purple", fontSize:"30px"}} >~ ~ ~ ~ ~ Our Destination ~ ~ ~ ~ ~ </p>
        <div className='outerinner'>

          <div className='itemdiv'>
            <div className='image'>
              <div className='smalldiv'>
                <p>From $260</p>
              </div> 
            </div>
            <p className='paris'>Paris</p>
              <a href="#" className='parisa'>More info</a>
          </div>

          <div className='itemdiv'>
            <div className='image1'>
              <div className='smalldiv'>
                <p>From $290</p>
              </div> 
            </div>
            <p className='paris'>Maldives</p>
              <a href="#" className='parisa'>More info</a>
          </div>

          <div className='itemdiv'>
            <div className='image2'>
              <div className='smalldiv'>
                <p>From $300</p>
              </div> 
            </div>
            <p className='paris'>Hawaii</p>
              <a href="#" className='parisa'>More info</a>
          </div>

          <div className='itemdiv'>
            <div className='image3'>
              <div className='smalldiv'>
                <p>From $220</p>
              </div> 
            </div>
            <p className='paris'>Goa</p>
              <a href="#" className='parisa'>More info</a>
          </div>
        </div>
      </div>

      <div className='footer'>
        <div className='footerinner'>
          <p id='parafooter'>~ ~ ~ ~ Welcome to our Website ~ ~ ~ ~</p>
          <p className='para12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic et error aperiam, maxime facere iste repellendus? Accusamus voluptate voluptatibus at ut sunt quaerat? Eaque quis, rem consequatur doloribus nostrum animi.
          Pariatur non enim ea. Iure, sint accusamus, provident accusantium facere in veritatis, ullam at doloribus corrupti alias? Adipisci repudiandae eos eveniet. Natus fugiat excepturi pariatur facere, atque quis reiciendis rem.
          Laboriosam, veniam sed! Officia, hic. Laboriosam nobis molestiae excepturi tempora quasi atque deserunt eum facilis obcaecati mollitia culpa enim illum dolor ducimus, recusandae voluptatum expedita doloremque provident tempore fugiat quae.
          Maiores at facere amet eum necessitatibus repellat vitae soluta consectetur vero. Nesciunt accusamus, itaque aut possimus, consequuntur harum optio odio, fugit non sequi assumenda doloremque beatae numquam modi error esse.
          Eaque, dicta. Eligendi similique vel commodi fuga libero illum officia ipsa ut autem tempore est cum quod fugit maxime ullam numquam inventore esse harum asperiores necessitatibus, quo odio voluptatem perferendis?</p>
          <div className='logo1'>
          <svg className="facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" fill="white"></path></svg>
          <svg  className="twitter" style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" fill="white"></path></svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default home;