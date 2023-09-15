import MainHeaderWhite from "./headerwhite";
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "next/image";
import Link from 'next/link';
import Collapsible from 'react-collapsible';
import {Footer} from '../components/Footer';
import {Features} from '../components/Features';
import {BlogSlideshow} from '../components/BlogSlideshow';
import {BlogPosts} from '../components/BlogPosts';
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
    <main className="Blog">
      <div>
        <MainHeaderWhite 
          title="Blog │ HIFI Bridge"
          image="https://hifibridge.com/thumb/hifibridge_thumb.png" 
          description="Payments Infrastructure for the Future of the Internet"
          social="Payments Infrastructure for the Future of the Internet"
          domain="hifibridge.com"
          url="https://hifibridge.com/" />
      </div>

      <section className="BlogSectionWrap">
        <div className="BlogSectionBg">
          <div className="BlogSection">
            <div className="BlogContent">

              <h1><span className="WarmGrad">The HiFi Blog</span></h1>
              <h5>
              Don't just keep up —Lead the way with cutting-edge insights at your fingertips
                            
              </h5>
        
              <div className="BlogSlide">

              <BlogSlideshow />
              
              </div>
          </div>
        </div>
      </div>

      </section>

      <section className="PostSectionWrap">
        <div className="PostSectionBg">
          <div className="PostSection">
            <div className="PostContent">
              <div className="Categories">
                <a>View All</a>
                <a>General</a>
                <a>Product</a>
                <a>Company</a>
              </div>  

              <div>
              <BlogPosts />
              </div>

            </div>
          </div>
        </div>

      </section>


      <section className="SubSectionWrap">
        <div className="SubSection">
          <div className="SubContent">
            <div className="SideTxt">
              <div>
                <h6>Stay ahead of the curve.</h6>
                <h5>Subscribe to the HIFI Blog</h5>
                <p>Name</p>
                <input type="text" />
                <p>Email*</p>
                <input type="text" />
              </div>
              <div className="AppBtn">
              <Link href="/"><button>Submit</button></Link>
            </div>
            </div>
          </div>
        </div>
      </section>
      

      <Footer />

    

    </main>
  );
}


