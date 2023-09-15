import MainHeaderWhite from "./headerwhite";
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "next/image";
import Link from 'next/link';
import Collapsible from 'react-collapsible';
import {Footer} from '../components/Footer';
import {Features} from '../components/Features';
import {Slideshow} from '../components/Slideshow';
import {DevSlideshow} from '../components/DevSlideshow';
import {NewsCarousel} from '../components/NewsCarousel';
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
    <main className="About">
      <div>
        <MainHeaderWhite 
          title="About │ HIFI Bridge"
          image="https://hifibridge.com/thumb/hifibridge_thumb.png" 
          description="Payments Infrastructure for the Future of the Internet"
          social="Payments Infrastructure for the Future of the Internet"
          domain="hifibridge.com"
          url="https://hifibridge.com/" />
      </div>

      <div className="AboutHeroSectionWrap" id="homeSection">
        <div className="AboutHeroSection">
          <div className="AboutHeroContent">
          <h6>OUR VISION</h6>
            <h1>Power the Infrastructure
             <br />
             <span className="dark">For the Future.</span></h1>
          </div>
        </div>

      </div>

      <section className="AboutSectionWrap">
        <div className="AboutSectionBg">
        <div className="AboutSection">
          <div className="AboutContent">
          <h6>OUR MISSION</h6>
              <h2><span className="WarmGrad">By 2030, we plan to bring digital asset</span>
              <br />infrastructure to 1 billion people.</h2>

              <hr className="grad-line"></hr>

              <div>

              <div className="AboutLeftWrap">
                <div className="AboutLeft">
                <h4><span className="OrangeGrad">It’s time to accelerate </span>
                <br />
                <span className="OrangeGrad">into the future. </span></h4>
                <p><span className="AboutSub">
                  There currently exist over 1.7 billion people on earth who remain unbanked and lack access to a bank account. 
                </span></p>
                <p>
                Today, the emergence of the internet, mobile smartphones, and blockchain technology has finally closed this gap and allowed us to reinvent the way we think about finance. Our mission is to build world class, easy-to-use, and lovable digital asset infrastructure that will power the future of blockchain for everyone, everywhere.
                </p>
                </div>
              </div>

              <div className="AboutRightWrap">
              <div className="AboutRight">
                <h4><span className="OrangeGrad">Building the future of finance for everyone </span></h4>
                <p><span className="AboutSub">
                30 years ago, the development of the internet gave rise to a new era of information and possibilities that were previously non-existent to humans.                 
                </span></p>
                <p>
                10 years ago, the emergence of social network effect driven companies like Facebook, Instagram, and Twitter fundamentally connected the world and communities on a scale never achieved before. Now, we sit at a new intersection of the next generational shift with blockchain technology and we are so excited to continue to create new experiences that will shape the future of finance - built for everyone, everywhere.
                </p>
              </div>
            </div>
            </div>
          </div>

        </div>
        </div>

        <div className="Timeline">

        </div>

      </section>

      <section className="ValuesSectionWrap">
        <div className="ValuesSection">
          <div className="ValuesContent">
           <div>
              <h6>OUR VALUES</h6>
              <h2><span className="WarmGrad">Undertaking big changes </span>
              starts with <br /> small actions.</h2>
              <p>
              At HiFi Bridge, we respect the visionaries that came before us - however, we are taking a radically different approach than those that built the world of big tech and traditional finance. We understand that the path to building a redefined financial future for everyone starts with values we bake into our work every day.
              </p>
            </div>

            <div className="ValuesCardsWrap">

              <div className="ValuesCards">

                <div className="ValuesCardWrap">
                    <div className="ValuesCardInner">
                      <div className="ValuesCardImg">                  
                        <Image alt="Description" src='./icons/warm-circle.svg' width={80} height={80} />
                      </div>
                      <h5 className="WarmGrad">Clear Transparency</h5>
                      <div className="ValuesCardTxt">
                        <h6>Customers should know exactly what’s under the hood.</h6>
                        <p>
                        Whether you're an investor, executive, or team member - everyone is held to the same standard of radical transparency and accountability.               
                        </p>
                        <p>
                        We are building a fair, open, and more accessible financial system and we understand that begins with us.               
                        </p>
                      </div>
                    </div>
                </div>

                <div className="ValuesCardWrap">
                    <div className="ValuesCardInner">
                      <div className="ValuesCardImg">                  
                      <Image alt="Description" src='./icons/warm-circle.svg' width={80} height={80} />
                      </div>
                      <h5 className="WarmGrad">Humans First</h5>
                      <div className="ValuesCardTxt">
                        <h6>Everyone deserves a fair share.</h6>
                        <p>
                        We listen to our customers and create our products with the intention that they will help the lives of people everyday. 
                        </p>
                        <p>
                        We know our products will be used by real humans, each with their own unique lives, thoughts and feelings. Our products are built with empathy to be accessible by everyone, everywhere.
                        </p>
                      </div>
                    </div>
                </div>

              </div>

              <div className="ValuesCards Blue">

                <div className="ValuesCardWrap">
                    <div className="ValuesCardInner">
                      <div className="ValuesCardImg">                  
                      <Image alt="Description" src='./icons/cold-circle.svg' width={80} height={80} />
                      </div>
                      <h5 className="BlueGrad">Privacy and Security Centered</h5>
                      <div className="ValuesCardTxt Blue">
                        <h6>Our customer’s data and privacy will always be our top priority.</h6>
                        <p>
                        We firmly believe in our customers' right to data privacy, and we fully commit to safeguarding it. 
                        </p>
                        <p>
                        Utilizing advanced AI and top preventive measures, we actively mitigate data security risks. We aim to serve as a symbol of trust and reliability for best security practices in the new financial world.
                        </p>
                      </div>
                    </div>
                </div>

                <div className="ValuesCardWrap">
                    <div className="ValuesCardInner">
                      <div className="ValuesCardImg">                  
                      <Image alt="Description" src='./icons/cold-circle.svg' width={80} height={80} />
                      </div>
                      <h5 className="BlueGrad">Think Big, Do Bigger</h5>
                      <div className="ValuesCardTxt Blue">
                        <h6>We have big ambitious plans and believe no goal is ever out of reach.</h6>
                        <p>
                        We reward big, bold bets and comprise ourselves of a stellar team of dreamers and doers. 
                        </p>
                        <p>
                        We take a ‘zero-to-one’ approach and believe the most disruptive tech in the world all starts with just an idea and the firm belief it can be built into something life changing.
                        </p>
                      </div>
                    </div>
                </div>

              </div>
              
            </div>
          </div>

        </div>


      </section>

      <section className="TeamSectionWrap">
        <div className="TeamSection">
          <div className="TeamContent">
            <div className="SideTxt">
            <h6>OUR PEOPLE</h6>
              <h3><span className="BlueGrad">A world class </span>founding team</h3>
              <div>
              <p>
              The HiFi Bridge team comes together and brings decades of leadership experience in building world class products that connect the lives of billions of people from companies like Facebook, Uber, Apple, Citi Group, Coinbase, and Polygon.
              </p>
              <p>
              Our teams are comprised of people from diverse backgrounds and industries ranging from world class tech and finance organizations, startup founders, venture capitalists, and researchers.
              </p>
              <p>
              Our purpose comes from the love of building amazing products that ignite a new world of possibilities to improve the lives of people everyday.
              </p>
              </div>
            </div>

            <div className="SideImg">
            <Image alt="Thorus" src='./img/world.png' width={300} height={300} />
            </div>
          </div>

        </div>

      </section>

      <div className="Partners">
        <div className="PartnerLogos">
          <Image src="../logos/meta-logo.png" height="50" width="50" alt="Logo" />
          <Image className="WideImg" src="../logos/apple-logo.png" height="50" width="50" alt="Logo" />
          <Image src="../logos/uber-logo.png" height="50" width="50" alt="Logo" />
          <Image src="../logos/citi-logo.png" height="50" width="50" alt="Logo" />
          <Image src="../logos/coinbase-logo.png" height="50" width="50" alt="Logo" />
          <Image src="../logos/polygon-logo.png" height="50" width="50" alt="Logo" />

        </div>
      </div>

      <section className="BuildSectionWrap">
        <div className="BuildSectionBg"></div>
          <div className="BuildSection">
            <div className="BuildContent">
            <h3>Want to build <span className="BlueGrad">the future with us?</span></h3>
              <p>
              We have a long road ahead of us with a lot of work to be done. We’re so happy to bring together a team with experience creating life changing products at some of the greatest companies of the past decade across tech and finance.              
              </p>
              <div className="AppBtn Blue">
                <Link href="/"><button>Explore Careers </button></Link>
              </div>
            </div>
          </div>
        </section>

        <NewsCarousel />

      <Footer />

    

    </main>
  );
}


