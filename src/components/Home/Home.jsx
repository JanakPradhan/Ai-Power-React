// import React from 'react'

function Home() {
  return (
    <>
      <div className="row ai-row">
        <div className="col-6">
          <h1 className="ai-title">CONNECTING<br />DIGITAL WORLD WITH<br />
            <span className="ai-title--span">ARTIFICIAL <span className='ai-title--color'>INTELLIGENCE</span></span>
          </h1>

          <p className="ai-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. magna aliqua. Quis ipsum suspendisse ultrices.<br />
            gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>

            <div className="ai-email">
              <input type="email" placeholder="Your Email Address"/>
              <button type="submit" className="btn btn-primary">SUBSCRIBE</button>
            </div>

            <div className="ai-sns">
              <a href="#">
                <img src="/facebook.png" width='32' height='32' loading="lazy" alt="facebook" />
              </a>
              <a href="#">
                <img src="/insta.png" width='29' height='29' loading="lazy" alt="insta" />
              </a>
              <a href="#">
                <img src="/linkedin.png" width='27' height='27' loading="lazy" alt="linkedin" />
              </a>
              <a href="#">
                <img src="/twitter.png" width='32' height='27' loading="lazy" alt="twitter" />
              </a>
            </div>
            <p className="ai-no">01</p>
        </div>
      </div>
    </>
  )
}

export default Home
