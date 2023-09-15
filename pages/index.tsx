import React, { useEffect, useState } from 'react';
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "next/image";
import Link from 'next/link';
import VisibilitySensor from 'react-visibility-sensor';
import MainHeader from "./header";
import {Footer} from '../components/Footer';
import {Features} from '../components/Features';
import {Slideshow} from '../components/Slideshow';
import dynamic from 'next/dynamic';
import Spline from '@splinetool/react-spline';
import { Canvas } from '@react-three/fiber';
import Layers from '../components/models/Layers';
import Webhooks from '../components/models/Webhooks'
// import LayersMod from '../components/models/LayersMod';
// import ScaleMod from '../components/models/ScaleMod';
// import ServerMod from '../components/models/ServerMod';


const LayersMod = dynamic(() => import('../components/models/LayersMod'), {
  ssr: false,
  loading: () => <p>...</p>,
});
const ScaleMod = dynamic(() => import('../components/models/ScaleMod'), {
  ssr: false,
  loading: () => <p>...</p>,
});
const ServerMod = dynamic(() => import('../components/models/ServerMod'), {
  ssr: false,
  loading: () => <p>...</p>,
});

export default function Home() {

  const isDesktop = useMediaQuery('(min-width: 1280px)');

  if (!isDesktop) { 
    return (
      <div className="mobile-alert">
        <div className="alert-box">
          <p>Ipad and mobile version coming soon. Please visit this website with a 1280px screen or greater. </p>
          <Image src="../logos/hifi-bridge.svg" height="50" width="100" alt="Logo" />
        </div>
      </div>
    );
  }

  return (
    <main>
      <div>
        <MainHeader 
          title="HIFI Bridge │ Payments Infrastructure for the Future of the Internet"
          image="https://hifibridge.com/thumb/hifibridge_thumb.png" 
          description="Payments Infrastructure for the Future of the Internet"
          social="Payments Infrastructure for the Future of the Internet"
          domain="hifibridge.com"
          url="https://hifibridge.com/" />
      </div>

      <div className="HeroSectionWrap" id="homeSection">
        <div className="HeroSection">
          <div className="HeroContent">
            <h1><span className='dark'>Payments Infrastructure</span> 
             <br />
             for the Future of the Internet</h1>
            <h6>
              Introducing the most supercharged all-in-one toolkit to power businesses with 
              blockchain payments. Finally, it’s money made modern.
             </h6>
            <div className="AppBtn">
            <Link target="" href="/signup"><button>Get Started for Free</button></Link>
            </div>
          </div>
        </div>

      </div>
      
      <div className="Partners">
        <div className="PartnerLogos">
          <Image src="../logos/polygon-logo.png" height="200" width="908" alt="Logo" />
          <Image src="../logos/coinbase-logo.png" height="200" width="903" alt="Logo" />
          <Image src="../logos/metamask-logo.png" height="200" width="1000" alt="Logo" />
          <Image src="../logos/gemini-logo.png" height="200" width="909" alt="Logo" />
          <Image src="../logos/rokit-logo.png" height="200" width="827" alt="Logo" />
        </div>
    
      </div>

      <section className="MainSectionWrap">
        <div className="MainSection">
          <div className="MainSectionContent">
            <div className="Infinitely">
              <div className="SideTxt">
                <h2><span className="WarmGrad">Infinitely Scale your Business </span> 
                <br />
                with Blockchain Payments Infrastructure</h2>
                <p>
                Introducing the easiest way to unlock the power of blockchain into your e-commerce, marketplace, SAAS, or fintech. From startups looking to innovate to enterprise-level organizations seeking a competitive edge - It’s your pre-built doorway to delivering blazingly fast, and seamless payments.               
                </p>
              </div>

            </div>

            <div className="Accelerate">
              <div className="SideTxt Left">
                <h3><span className="WarmGrad">Accelerating The </span>
                <span className="WarmGrad">Next Generation </span>of Revenue Growth</h3>
                <p>
                Integrate digital asset payments into any online business with pre-built solutions for online checkouts, wallet integrations, global payouts, and multi-party fraud & risk support.               
                </p>
                <div className="LineBtn">
                  <div className="ButtonWrap">
                    <Link href="/hifipay"><button>Discover More</button></Link>
                  </div>
                </div>
              </div>

              <div className="SideImg">
                <Image alt="Description" src='./img/main-dash-cut.svg' width={1200} height={600} />
              </div>
            </div>
          </div>
        </div>
        <div className="SecondSection">
          <div className="Platform">
              <div>
                <LayersMod />   
              </div>

              <div className="SideTxt Right">
                <h3><span className="WarmGrad">A Powerful <br />Payments Platform,</span> 
                <br />All In-The-Box</h3>
                <p>
                A comprehensive payments stack engineered to drive your next stage of global growth. Custody, liquidity, and payments bundled into one seamless integration.               
                </p>
                <div className="AppBtn">
                <Link target="" href="/signup"><button>Get Started for Free</button></Link>
                </div>
              </div>
          </div>
        </div>
        
      </section>

      <section className="ScaleSectionWrap" id="scaleSection">
        <div className="ScaleSection">
          <div className="ScaleContent">
            <div className="SideTxt">
              <div>
                <span className="Tag long">Scalability</span>
                <p className="Subtitle">Built to Scale with Your Business</p>
                <h4>Scale Seamlessly, for Businesses of Any Size</h4>
                <p>
                  From agile startups to Fortune 500 companies - we’ve built a modern payments stack to scale and adapt to all business needs.
                </p>
                <p>
                  Flexibility and scalability designed to support business growth, ensuring a seamless payment experience as your business expands.
                </p>
              </div>
            </div>
              <div className="ScaleModWrap">

              </div>            
              <div className="SideImg">
              <ScaleMod />    
              </div>
              {/* <Image alt="Description" src='./img/scale-tags.svg' width={500} height={500} /> */}

          </div>
        </div>
      </section>


      <section className="GlobalSectionWrap" id="globalSection">
        <div className="GlobalSection">
          <div className="GlobalContent">
            <div className="SideImg">
              <Image alt="Description" src='./img/globalpay.png' width={1500} height={1500} />
            </div>

            <div className="SideTxt">
              <div>
                <span className="Tag blue">Global Expansion</span>
                <p className="Subtitle">Unlock Global Payment Opportunities</p>
                <h4>Expand Globally, Reach Customers Worldwide</h4>
                <p>
                  Seamlessly accept payments from customers worldwide, navigate cross-border transactions with ease, and tap into new markets, all while delivering a seamless payment experience across different countries and currencies.
                </p>
              </div>
              <div className="TagWrap">
                <div className="LineTag">
                  <div><span className="pblue">MTL </span>Compliance in 50 states</div>
                </div>
                <div className="LineTag">
                  <div><span className="pblue">U.S & CA </span>Regulatory Licenses</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="ToolsSectionWrap" id="toolsSection">
        <div className="ToolsSection">
          <div className="ToolsContent">
            <div className="SideTxt">
              <div>
                <span className="Tag">Customized Tools</span>
                <p className="Subtitle">Create fully customized crypto payment paylinks</p>
                <h4>Unleash a Suite of Tools for Unprecedented Growth</h4>
                <p>
                  Discover a complete business ecosystem of powerful tools designed to revolutionize your crypto payments experience. Connect to our suite of API’s and SDKs that are purpose-built to leverage a frictionless stack.
                </p>
              </div>
              <div className="LineBtn">
                <div className="ButtonWrap">
                  <Link href="/hifipay"><button className="">Discover More</button></Link>
                </div>
              </div>
            </div>
            <div className="SideImg">
            <Image alt="dashboard" src='./img/dash-tools.svg' width={500} height={500} />
            </div>
          </div>
        </div>
      </section>

      <section className="SlideSectionWrap" id="slideSection">

        <div className="SlideSection">
          
            <div>

              <Slideshow />

            </div>
        </div>
      </section>

    <div className="DevContainer">
      <section className="SecSectionWrap" id="securitySection">
        <div className="SecSection">
          <div className="SecContent">


              <div className="SideImg">
                <div>
                  <ServerMod />    
                </div>
                <Image alt="security" src='./img/security-tags.svg' width={500} height={500} />
              </div>

              {/* <div className="TagWrap">
                  <div className="LineTag">
                    <div><span className="pblue">KYC/AML </span>Service Protection</div>
                  </div>
                  <div className="LineTag">
                    <div><span className="pblue">3D </span>Dynamic Safety</div>
                  </div>
                  <div className="LineTag">
                    <div><span className="pblue">ML </span>Customer Verification</div>
                  </div>
              </div> */}

            <div className="SideTxt">
              <div>
                <span className="Tag">Enhanced Security</span>
                <p className="Subtitle">Security And Compliance Under The Hood</p>
                <h4>Uncompromising Security for Peace <br /> of Mind</h4>
                <p>
                  Built in industry-leading security measures to safeguard sensitive data and transactions.                 
                </p>
                <p>
                  A payments platform utilizing advanced encryption techniques, multi-factor authentication, and secure access controls to protect against unauthorized access.                
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="ApiSectionWrap" id="apiSection">
        <div className="ApiSection">
          <div className="ApiContent">
            <div className="SideTxt">
              <div>
                <span className="Tag blue">Seamless Integration</span>
                <p className="Subtitle">Unlock Growth With A Few Lines Of Code</p>
                <h4>An Advanced API, Built with Simplicity</h4>
                <p>
                Our powerful APIs are designed with simplicity and ease of integration in mind. Gain access to an entire interconnected network of digital wallets, blockchains, and custody solutions - with just a few lines of code. 
                </p>
              </div>
              <div className="LineBtn">
                <div className="ButtonWrap blue">
                  <Link target="_blank" href=""><button className="sBlue">Read the Docs</button></Link>
                </div>
              </div>
            </div>
            <div className="SideImg">
            <Image alt="Description" src='./img/codeapi.png' width={500} height={500} />
            </div>
          </div>
        </div>
      </section>

    </div>

      <section className="GrowthSectionWrap" id="growthSection">
        <div className="GrowthSection">
          <div className="GrowthContent">
            <h3><span className="WarmGrad">Ignite Growth and Transform your Business <br/> </span>
            with Millions of Customers</h3>
            <p>
              From startups looking to disrupt industries to established enterprises seeking new revenue streams, our platform empowers you to tap into the power of blockchain, optimize payment processes, and unlock new revenue opportunities, driving your business towards unprecedented growth.
            </p>
          </div>
        

          <div className="CardGroup">

            <div className="Card">
              <div>
                <div className="CardTop"></div>
                <div className="CardTxt">
                  <p className="CardSub">Merchant Acceptance</p>
                  <h1 className="WarmGrad">85%</h1>
                  <p>U.S Merchants are planning to accept digital assets by the year 2026.</p>
                  <Link href="/blog" className="CardLearn">Learn More {">"}</Link>
                </div>
              </div>
            </div>
            <div className="Card">
                <div>
                  <div className="CardTop"></div>
                  <div className="CardTxt">
                    <p className="CardSub">Merchant Impact</p>
                    <h1 className="WarmGrad">93%</h1>
                    <p>Merchants that experience a positive impact on customer metrics when accepting crypto.</p>
                    <Link href="/blog" className="CardLearn">Learn More {">"}</Link>
                  </div>
                </div>
            </div>
            <div className="Card">
                <div>
                  <div className="CardTop"></div>
                  <div className="CardTxt">
                    <p className="CardSub">Customer Sentiment</p>
                    <h1 className="WarmGrad">75%</h1>
                    <p>Customers who expressed the desire to transact with digital assets.</p>
                    <Link href="/blog" className="CardLearn">Learn More {">"}</Link>
                  </div>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* <section className="QuoteSectionWrap">
        <div className="QuoteSection">
          <div className="QuoteContent">
          <Image src="../logos/priority-logo.png" height="77" width="298" alt="Logo" />
            <p>“Payments are the missing piece of assessing seller risk. In looking at payers and sellers holistically with HIFI Bridge, 
            we are able to develop a fuller and more accurate picture of who our customers are and the risks they present.”
            </p>
            <p className="text-xs"><strong>Mark Tully </strong>Head of Growth</p>
          </div>
        </div>
      </section> */}

      <section className="HpaySectionWrap" id="hifipaySection">
          <div className="HpaySection">
            <div className="HpayContent">
              <h5>Get Started with</h5>
              <div className="SideImg">
              <Image alt="Description" src='./logos/hifipay-white.svg' width={400} height={150} />
              </div>
              <p>
              Discover the magic of crypto payments in just a few taps. 
              <br />
              It's seriously that easy.              
              </p>
              <div className="AppBtn Grad">
              <Link target="" href="/signup"><button>Get Started for Free</button></Link>
              </div>
            </div>
          </div>
        </section>

      <Footer />

    </main>
  );
}


