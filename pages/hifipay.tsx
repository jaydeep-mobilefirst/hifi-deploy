import MainHeader from "./header";
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "next/image";
import Link from 'next/link';
import Collapsible from 'react-collapsible';
import {Footer} from '../components/Footer';
import {Features} from '../components/Features';
import {Slideshow} from '../components/Slideshow';
import {DevSlideshow} from '../components/DevSlideshow';
import RoundCheck_Icon from '../components/SVG/RoundCheck_Icon';

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
    <main className="Hifipay">
      <div>
        <MainHeader 
          title="HIFI Pay │ HIFI Bridge"
          image="https://hifibridge.com/thumb/hifibridge_thumb.png" 
          description="Payments Infrastructure for the Future of the Internet"
          social="Payments Infrastructure for the Future of the Internet"
          domain="hifibridge.com"
          url="https://hifibridge.com/" />
      </div>

      <div className="HpayHeroSectionWrap " id="homeSection">
        <div className="HpayHeroSection">
          <div className="HpayHeroContent">
          <Image alt="Description" src='./logos/hifipay-white.svg' width={320} height={120} />

            <h2>The Future of Payments,
             <br />
             <span className="WarmGrad">Reimagined.</span></h2>
            <h6>
            Introducing the most powerful, fastest, and <br /> easiest way 
            to accept digital payments for <br /> your online checkout.
             </h6>
            <div className="AppBtn">
            <Link target="" href="/signup"><button>Get Started for Free</button></Link>
            </div>
          </div>
        </div>

      </div>

      <section className="PowerSectionWrap">
        <div className="PowerSection">
          <div className="PowerContent">
            <div className="SideTxt Left">
              <h3><span className="WarmGrad">Power your online</span>
              <br /><span className="WarmGrad">business </span>
              with crypto payments</h3>
              <p>
              Introducing a pre-built doorway into the world of blockchain, right from your checkout page. Designed with precision to increase transactions, convert more sales, and integrate seamlessly into your business.   
              </p>
              <div className="RowListWrap">
                <div className="RowList">              
                  <Image alt="Description" src='./icons/check.svg' width={25} height={20} />
                  <p>Unlock new revenue streams</p>
                </div>
                <div className="RowList">              
                  <Image alt="Description" src='./icons/check.svg' width={25} height={20} />
                  <p>Connect to millions of digital wallets</p>
                </div>
                <div className="RowList">              
                  <Image alt="Description" src='./icons/check.svg' width={25} height={20} />
                  <p>Reach global audiencess</p>
                </div>
                <div className="RowList">              
                  <Image alt="Description" src='./icons/check.svg' width={25} height={20} />
                  <p>Reduce operational and transaction costs </p>
                </div>

               </div>

              <div className="AppBtn">
              <Link target="" href="/signup"><button>Get Started for Free</button></Link>
              </div>
            </div>

            <div className="SideImg">
            <Image alt="Description" src='./img/dashboard-hifipay.png' width={2500} height={1728} />
            </div>
          </div>

        </div>
      </section>

      <section className="BlockSectionWrap">
        <div className="BlockSection">
          <div className="BlockContent">
            <div className="SideTxt">
              <h3><span className="BlueGrad">Limitless Blockchain</span>
              <br /> <span className="BlueGrad">Payments </span>
              Igniting Unlimited Possibilities</h3>
              <p>
              Say goodbye to the complexities of building and scaling native crypto infrastructure from scratch.
              </p>
              <p>
              Leverage blockchains, digital wallets, and custody solutions all bundled into one comprehensive API to supercharge your business.               
              </p>
            </div>

            <div className="SideImg">
            <Image alt="Description" src='./img/blockchain.png' width={2500} height={1728} />
            </div>
          </div>

        </div>
      </section>

      <section className="PaySectionWrap">
        <div className="PaySection">
          <div className="PayContent">

          <div className="SideImg">
            <Image alt="Description" src='./img/checkout.png' width={1850} height={1362} />
          </div>

          <div className="SideTxt Left">
            <h3><span className="WarmGrad">Supercharged <br /></span>
            <span className="WarmGrad">Crypto Payments  <br /></span>
             Checkout Engine</h3>
            <p>
            Join the forefront of e-commerce innovation with HIFI’s game-changing crypto payments. 
            </p>
            <p>
            Enhance your online store's capabilities and tap into a world of possibilities that drive increased sales, higher conversions, and a loyal customer base.            
            </p>
          </div>
        </div>

        </div>
      </section>

      <section className="SlideSectionWrap">
        <div className="SlideSection">
          <div className="SlideSectionContent">
            <div>

              <Slideshow />
              
            </div>
          </div>
        </div>
      </section>

      <section className="SuiteSectionWrap">
        <div className="SuiteSection">
          <div className="SuiteContent">
            <div className="SideTxt">
              <h3><span className="WarmGrad">A Fully Integrated Suite </span>
              <br /> of Crypto Payments Tools</h3>
              <div className="TextGroup">
                <div>
                  <p>
                  HIFI Pay offers the most powerful and comprehensive platform that allows businesses to flexibly 
                  <span className="pblue"> track and manage payments, initiate payouts, and manage their customers all-in-one.</span>
                  </p>
                </div>
                <div>
                  <p>
                  We reduce friction for companies at scale at every step in the customer checkout process. All the essential payment tools come bundled in one unified integration including 
                  <span className="pblue"> fraud prevention, flexible billing, refund support, </span>
                  and more.                  
                  </p>
                </div>
              </div>

              <div className="AppBtn">
              <Link target="" href="/signup"><button>Get Started for Free</button></Link>
              </div>
          
            </div>

            <div className="SideImg">
            <Image alt="Description" src='./img/tools-suite.png' width={3810} height={3000} />
            </div>
          </div>

        </div>
      </section>

      <section className="FeaturesSectionWrap">
          <div className="FeaturesSection">
            <div className="FeaturesSectionContent">
            <h3><span className="BlueGrad">Experience a technology & compliance-first <br/> </span>
            approach to payments</h3>

              <Features />
              
            </div>
          </div>
        </section>

      <section className="ExploreSectionWrap">
        <div className="ExploreSection">
          <div className="ExploreContent">

            <div className="SideImg">
            </div>

            <div className="SideTxt">
              <div>
                <span className="Tag long">Fast Payments</span>
                <p className="Subtitle">Unlock rapid settlement and lightning fast payments</p>
                <h4>Explore New Frontiers with the Future of Money</h4>
                <p>
                Simplify your business payments, explore new frontiers of money, and unlock unparalleled speed and efficiency. 
                </p>
                <p>
                Revolutionize your payment processes with rapid settlement and near-zero costs. Finally, experience the power of 24/7 settlement and direct access to USDC and other stablecoins.                
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="CompSectionWrap">
        <div className="CompSection">
          <div className="CompContent">
            <div className="SideTxt">
              <div>
                <span className="Tag blue">Global Compliance</span>
                <p className="Subtitle">Maximize conversions and minimize costs</p>
                <h4>End-to-End North <br />
                America Compliance</h4>
                <p>
                Secure, propel, and unlock your businesses overall performance with robust fraud protection designed to increase conversion rates and build customer trust. Our platform is battle-tested to navigate the intricacies of any regulatory requirements effortlessly.
                </p>
                <p>
                Embrace the future with confidence with a seamless, efficient, and fully compliant operation to drive sustained growth in the competitive digital landscape.
                </p>
              </div>
            </div>

            <div className="CompList">
              <div className="RowListWrap">
                <div className="RowList"><p>U.S & Canada regulatory compliant</p></div>
                <div className="RowList"><RoundCheck_Icon /><p>U.S MTL coverage in 50 states</p></div>
                <div className="RowList"><RoundCheck_Icon /><p>U.S MSB Category: Dealing w/ digital assets</p></div>
                <div className="RowList"><RoundCheck_Icon /><p>Canada MSB Category: Dealing w/ digital assets</p></div>
              </div>

              <div className="RowListWrap">
                <div className="RowList"><p>Secure customer approvals</p></div>
                <div className="RowList"><RoundCheck_Icon /><p>Boost authorization rates</p></div>
                <div className="RowList"><RoundCheck_Icon /><p>ACH/EFT/SEPA money movement support</p></div>
                <div className="RowList"><RoundCheck_Icon /><p>Customer chargeback coverage</p></div>
              </div>

              <div className="RowListWrap">
                <div className="RowList"><p>Authentication, Validation & Fraud protection</p></div>
                <div className="RowList"><RoundCheck_Icon /><p>Dynamic 3D Secure</p></div>
                <div className="RowList"><RoundCheck_Icon /><p>Industry-leading ML protection</p></div>
                <div className="RowList"><RoundCheck_Icon /><p>KYC/AML service protection</p></div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="DevSectionWrap">
        <div className="DevSection">
          <div className="DevContent">
          
           <div className="DevSlide">
           <DevSlideshow />
           </div>

            <div className="SideTxt">
              <div>
                <span className="Tag">Developer First</span>
                <p className="Subtitle">Developer friendly payments solution</p>
                <h4>Developer Centric API’s</h4>
                <p>
                Our APIs are designed with developers in mind, offering clear documentation, comprehensive libraries, and code samples to streamline your integration process.                 </p>
                <p>
                With HIFI, you'll experience a seamless integration journey that accelerates your development cycle and reduces time-to-market.               
                </p>              
                </div>
              <div className="LineBtn">
                <div className="ButtonWrap blue">
                  <Link href=""><button>Read the Docs</button></Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="WalletSectionWrap">
        <div className="WalletSection">
          <div className="WalletContent">

            <div className="SideTxt">
              <div>
                <h4>Millions of Wallets.<br />
                  One Way to Pay.</h4>
                  <p>
                  HIFI offers powerful account aggregation that enables any business to directly connect to customers from 300+ wallets including Robinhood, Coinbase, Gemini, and more, with 40+ digital assets supported.                
                  </p>
                  <div className="LineBtn">
                    <div className="ButtonWrap">
                      <Link href="/assets"><button className="purple">Supported Assets</button></Link>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
        <section className="SupportSectionWrap">
          <div className="SupportSection">

            <div className="SupportContent">
              <p className="Subtitle">Ready to partner with us?</p>
              <h3><span className="WarmGrad">Explore New Heights <br/></span>and Discover Next Level Payments Success</h3>
                <p>
                  We believe in going above and beyond to support your business's success. 
                  That's why our dedicated account management team is here to provide personalized assistance and guidance every step of the way. 
                  From initial setup to ongoing optimization, our experts are committed to understanding your unique needs and tailoring solutions that align with your goals.              
                </p>
                <div className="ButtonGroup Left">
                <div className="AppBtn">
                <Link target="" href="/signup"><button>Get Started for Free</button></Link>
              </div>
              <div className="LineBtn">
                <div className="ButtonWrap">
                  <Link href="/pricing"><button className="">See Pricing</button></Link>
                </div>
              </div>
              </div>
            </div>
      
            <div className="CardGroup">

              <div className="Card">
                <div>
                  <div className="CardTop"></div>
                  <div className="CardTxt">
                    <h6>Seamless Onboarding</h6>
                    <p>
                    Work with our in-house experts to guide you through the setup, integration, and customization to get you up and running quickly and efficiently, ensuring a smooth implementation and ongoing success.
                    </p>
                  </div>
                </div>
              </div>
              <div className="Card">
                <div>
                  <div className="CardTop"></div>
                  <div className="CardTxt">
                    <h6>24/7/365 Support</h6>
                    <p>
                    Whether you need assistance with payment flows, subscription management, or any other aspect, our account managers are readily available to address any issues promptly, even during peak times.                        
                    </p>
                  </div>
                </div>
              </div>
              <div className="Card">
                <div>
                  <div className="CardTop Purple"></div>
                  <div className="CardTxt">
                    <h6>Tailored Solutions</h6>
                    <p>
                    Enjoy personalized support to assist you every step of the way. Our team is ready to  create customized solutions that suit your business perfectly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="Card">
                <div>
                  <div className="CardTop Purple"></div>
                  <div className="CardTxt">
                    <h6>Real-time monitoring</h6>
                    <p>
                    We proactively monitor your payment processes and provide valuable insights to optimize performance. We're always one step ahead so you can stay at the forefront of the industry.                        
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      <section className="HpaySectionWrap">
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


