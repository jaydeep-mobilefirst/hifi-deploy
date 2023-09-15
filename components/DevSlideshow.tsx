import { useState } from "react";
import Image from 'next/image';
import dynamic from 'next/dynamic';
// import WebMod from '../components/models/WebMod';
// import SecMod from '../components/models/SecMod';
// import CubesMod from '../components/models/CubesMod';

const WebMod = dynamic(() => import('../components/models/WebMod'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const SecMod = dynamic(() => import('../components/models/SecMod'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const CubesMod = dynamic(() => import('../components/models/CubesMod'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Flickity = require('react-flickity-component');
const flickityOptions = {
    initialIndex: 0,
    wrapAround: true,
    prevNextButtons: false
}

const flkty = new Flickity('.carousel', {
  wrapAround: true,
});

const DevSlideshow = () => {

    return (
        <>
            <div>

               <Flickity
                    className={'dev-carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={false} // default false
                    reloadOnUpdate // default false
                    static // default false
                  >
                 
                  <div className="DevSlideWrap gallery-cell">
                    <div className="CardTop"></div>
                    <div className="DevSlideInner">
                      <div className="SideTxt">
                        <h6>Real-time Webhooks</h6>
                        <p>
                        Receive instant updates on critical payment events, enabling you to respond swiftly to customer actions and improve your user experience.                        </p>
                      </div>

                      <div className="SideImg">
                        <WebMod />
                      </div>

                    </div>
                  </div>

                  <div className="DevSlideWrap gallery-cell">
                    <div className="CardTop"></div>
                    <div className="DevSlideInner">
                      <div className="SideTxt">
                        <h6>Secure Dev Environment</h6>
                        <p>
                        HIFI follows industry-leading security standards, including PCI-DSS Level 1 certification, to safeguard your customers' data and protect your business from potential risks.                      
                        </p>
                      </div>

                      <div className="SideImg">
                        <SecMod />
                      </div>

                    </div>
                  </div>

                  <div className="DevSlideWrap gallery-cell">
                    <div className="CardTop"></div>
                    <div className="DevSlideInner">
                      <div className="SideTxt">
                        <h6>API Versioning & Upgrades</h6>
                        <p>
                        With HIFI’s commitment to backward compatibility and clear versioning, you can rest assured that your integration remains stable even as our APIs evolve.                       
                        </p>
                      </div>

                      <div className="SideImg">
                        <CubesMod />
                      </div>

                    </div>
                  </div>


                </Flickity>
           </div>

        </>
    );
};


export { DevSlideshow };