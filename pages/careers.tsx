import MainHeaderWhite from "./headerwhite";
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
    <main className="Careers">
      <div>
        <MainHeaderWhite 
          title="Careers │ HIFI Bridge"
          image="https://hifibridge.com/thumb/hifibridge_thumb.png" 
          description="Payments Infrastructure for the Future of the Internet"
          social="Payments Infrastructure for the Future of the Internet"
          domain="hifibridge.com"
          url="https://hifibridge.com/" />
      </div>

      <div className="JobsHeroSectionWrap" id="homeSection">
        <div className="JobsHeroSection">
          <div className="JobsHeroContent">
            <h1><span className="dark">Join Our Team</span></h1>
            <h6>
            Together, we can reimagine the future of blockchain infrastructure for everyone, everywhere.
             </h6>
             <div className="AppBtn Blue">
                <Link href="/"><button>View Openings</button></Link>
              </div>
          </div>
        </div>

      </div>

      <section className="JobsSectionWrap">
        <div className="JobsSection">

          <div className="Future">
            <div className="SideTxt">
              <h3><span className="BlueGrad">The future of tomorrow </span>
              starts here</h3>
              <p>
              Join us in building the next generation of crypto products to be used by millions of people everywhere. We believe in making the complicated, easy for everyone - to fully unleash the power of a safer and more secure future.              
              </p>
              <p>
              HiFi Bridge was built on the premise of taking a powerful and complex technology, and turning it into the way it was intended; to be loved and used by everyone.
              </p>
            </div>

            <div className="SideImg">
            <Image alt="Description" src='./img/global.svg' width={500} height={500} />
            </div>
          </div>

          <div className="Whoarewe">
            <div className="SideImg">
            <Image alt="Description" src='./logos/hifilogo-blue.svg' width={400} height={400} />
            </div>

            <div className="SideTxt">
              <h3><span className="WarmGrad">Who are we?</span></h3>
              <p>
              Our teams are comprised of people from diverse backgrounds and industries ranging from world class tech and finance organizations, startup founders, venture capitalists, and researchers. We are always looking for incredible people across engineering, UX design, marketing, product, security & risk management, legal, and more!
              </p>
              <p>
              If you're looking to work on hard ideas and build amazing products alongside incredibly talented people — you’ll find them all at Hifi Bridge.              </p>
              <div className="LineBtn">
                <div className="ButtonWrap">
                  <Link href="/about"><button>About Us</button></Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="JoinSectionWrap">
        <div className="JoinSectionBg"></div>
          <div className="JoinSection">
            <div className="BuildContent">
            <h3>Ready to find your next role and join the <br />
              <span className="BlueGrad">HiFi team?</span></h3>
              <p>
              We are always looking for incredibly talented people. If you don't see an open role for you - send us an email or tweet us @hifibridge              </p>
              <div className="ButtonGroup Center">
                <div className="AppBtn Blue">
                <Link href="mailto:contact@hifibridge.com"><button>Email our team</button></Link>
              </div>
              <div className="LineBtn">
                <div className="ButtonWrap blue">
                  <Link target="_blank" href="https://twitter.com/hifibridge"><button className="grey">Tweet Us</button></Link>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

      <Footer />

    

    </main>
  );
}


