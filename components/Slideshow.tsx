import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Link from 'next/link';
import Image from 'next/image';
import ImgCarousel from "../components/carousel/ImgCarousel";

const Flickity = require('react-flickity-component');
const flickityOptions = {
    initialIndex: 0,
    wrapAround: true,
    prevNextButtons: false
}

const flkty = new Flickity('.carousel', {
  wrapAround: true,
});

const Slideshow: React.FC = () => {

    return (
        <>
            <div>

               <Flickity
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={false} // default false
                    reloadOnUpdate // default false
                    static // default false
                  >
                 
                  <div className="SlideRowWrap gallery-cell">
                    <div className="SideTxt">
                      <h1><span className="OrangeGrad">300+</span></h1>
                      <h4>Digital Wallets Integrated</h4>
                      <p>
                      Connect your business to customers from Robinhood, Coinbase, Gemini, and more.                      
                      </p>

                       <div>
                         <ImgCarousel set="wallets" />
                      </div>

                    </div>
                  </div>

                  <div className="SlideRowWrap gallery-cell">
                  <div className="SlideWave"></div>
                    <div className="SideTxt">
                      <h1><span className="OrangeGrad">40+</span></h1>
                      <h4>Assets Supported</h4>
                      <p>
                      Gain access to a suite of assets including bitcoin, ethereum, solana, and more.
                      </p>

                      <div>
                        <ImgCarousel set="assets" />
                      </div>

                    </div>
                  </div>

                  <div className="SlideRowWrap gallery-cell">
                  <div className="SlideWave"></div>
                    <div className="SideTxt">
                      <h1><span className="OrangeGrad">14+</span></h1>
                      <h4>Networks Supported</h4>
                      <p>
                      Integrate a multi-chain network into any business to supercharge scalability, speed, and security.                      </p>

                      <div>
                        <ImgCarousel set="networks" />
                      </div>

                    </div>
                  </div>


                </Flickity>
           </div>

        </>
    );
};


export { Slideshow };