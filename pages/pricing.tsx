import { useState } from "react";
import MainHeaderWhite from "./headerwhite";
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "next/image";
import Link from 'next/link';
import {Footer} from '../components/Footer';
import { PricingFaq } from '../components/PricingFaq';
import { PricingFeatures } from '../components/PricingFeatures';


export default function Home() {

  const isDesktop = useMediaQuery('(min-width: 1280px)');

  const [activeSection, setActiveSection] = useState<string>("default");


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
    <main className="Pricing">
      <div>
        <MainHeaderWhite 
          title="Pricing │ HIFI Bridge"
          image="https://hifibridge.com/thumb/hifibridge_thumb.png" 
          description="Payments Infrastructure for the Future of the Internet"
          social="Payments Infrastructure for the Future of the Internet"
          domain="hifibridge.com"
          url="https://hifibridge.com/" />
      </div>

      <section className="PricingHeroWrap">
          <div className="CenterSection">
            <div className="PricingHeroContent">
              <h1><span className="">Pricing</span></h1>
              <h3><span className="WarmGrad">From Agile Startups to Fortune-500 Companies</span><br />
              Designed for businesses of all sizes</h3>

              <div className="CardGroup">
              <div>
                <div className="CardTop"></div>
                  <div className="Card">
                    <div>
                      <div className="CardTxt">
                        <div className="CardLeft">
                         <div>
                            <h6>Standard</h6>
                            <p>
                            Gain access to entire payments platform with ease with pay-as-you go pricing. No setup fees, monthly fees, or hidden fees.
                            </p>
                          </div>
                          <div className="AppBtn">
                          <Link target="" href="/signup"><button>Get Started for Free</button></Link>
                          </div>
                        </div>
                        <div className="CardRight Standard">
                          <h3 className="WarmGrad">1% + $0.25</h3>
                          <p>Per Transaction</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="CardTop Purple"></div>
                  <div className="Card">
                    <div>
                      <div className="CardTxt">
                        <div className="CardLeft">
                          <div>
                            <h6>Custom</h6>
                            <p>
                            Design a custom package. Available for businesses with large payments volume or unique business models.
                            </p>
                          </div>
                          <div className="LineBtn">
                            <div className="ButtonWrap">
                              <Link target="_blank" href="/signup"><button>Contact Sales</button></Link>
                            </div>
                          </div>

                        </div>
                        <div className="CardRight Custom">
                          <div>Volume Discount</div>
                          <div>Tiered Pricing</div>
                          <div>Multi-product discounts</div>
                          <div>White label solutions</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

          </div>
      </div>

      </section>

      <section className="PricelistWrap">
        <div className="CenterSection">

          <h3>What's included</h3>
          <p>
          An entire <span className="pblue">end-to-end blockchain infrastructure platform</span> for e-commerce, recurring billing, marketplaces, and more. 
          </p>

          <PricingFeatures />
      
        </div>

      </section>

      <section className="LargeSectionWrap" id="toolsSection">
        <div className="CenterSection">
          <div className="LargeContent">
            <div className="SideTxt">
              <div>
                <h4>Large payments volume or unique business model?
                  </h4>
                <p>
                For businesses processing substantial payment volumes, operating with a distinct business model, or within industries with heightened risk factors, we encourage you to reach out. Our team will carefully assess your existing statements and collaborate with you to create a custom pricing solution.
                </p>
              </div>
              <div className="LineBtn">
                <div className="ButtonWrap">
                  <Link target="_blank" href=""><button className="/signup">Contact Sales</button></Link>
                </div>
              </div>
            </div>
            <div className="SideImg">
            </div>
          </div>
        </div>
      </section>

      <section className="AssetsFaqWrap">
        <div className="AssetsFaqSection">

          <h3>Learning Center</h3>
          <p>Discover answers to frequently asked questions. Need some help? Reach out to our team 
          <a href="mailto:contact@hifibridge.com"className="pblue"> here.</a></p>

          <PricingFaq />
      
        </div>

      </section>

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


