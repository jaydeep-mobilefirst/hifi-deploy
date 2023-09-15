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
    <main className="Signup">
      
      <div className="SignupBg"></div>
      <div className="SignupWrap">
        <div className="SignupSection">
          <div className="SignupContent">

            <div className="SignupInfo">
              <h5>Get started with</h5>
              <Image alt="hifipay" src='./logos/hifipay-white.svg' width={320} height={120} />
              <h6>
              We are onboarding select merchants for H2 2023. Please fill out our onboarding form to request access and we will be in touch within 24 hours.            
              </h6>
           </div>
    
           <div className="SignupBoxWrap">
             <div className="SignupBox">
                <h6>Sign up for an account</h6>
                <p>First Name</p>
                <input type="text" />
                <p>Last name</p>
                <input type="text" />
                <p>Email*</p>
                <input type="text" />
                <p>Company name*</p>
                <input type="text" />
                <p>Website URL</p>
                <input type="text" />
                <p>Estimated revenue size</p>
                <input type="text" />
                <div className="AppBtn Submit">
                  <Link href="/"><button>Submit</button></Link>
                </div>
              </div>
            </div>

        </div>

        </div>

      </div>


    

    </main>
  );
}


