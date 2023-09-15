import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Link from 'next/link';
import Image from 'next/image';

const Flickity = require('react-flickity-component');
const flickityOptions = {
    initialIndex: 0,
    wrapAround: true,
}

const flkty = new Flickity('.carousel', {
  wrapAround: true,
});


const BlogSlideshow = () => {

    return (
        <>
            <div>

               <Flickity
                    className={'blog-carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={false} // default false
                    reloadOnUpdate // default false
                    static // default false
                  >
                 
                  <div className="BlogSlideWrap gallery-cell">
                    <div className="BlogSlideInner">
                    <div className="SideImg">
                        <Image alt="Description" src='./img/brand-logo.png' width={550} height={550} />
                      </div>
                      <div className="SideTxt">
                        <p>July 15th 2023</p>
                        <h3>Blog Post Title</h3>
                        <p>
                        Receive instant updates on critical payment events, enabling you to respond swiftly to customer actions and improve your user experience.                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="BlogSlideWrap gallery-cell">
                    <div className="BlogSlideInner">
                    <div className="SideImg">
                        <Image alt="Description" src='./img/brand-logo.png' width={550} height={550} />
                      </div>
                      <div className="SideTxt">
                        <h6>Blog Title</h6>
                        <p>
                        Receive instant updates on critical payment events, enabling you to respond swiftly to customer actions and improve your user experience.                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="BlogSlideWrap gallery-cell">
                    <div className="BlogSlideInner">
                    <div className="SideImg">
                        <Image alt="Description" src='./img/brand-logo.png' width={550} height={550} />
                      </div>
                      <div className="SideTxt">
                        <h6>Blog Title</h6>
                        <p>
                        Receive instant updates on critical payment events, enabling you to respond swiftly to customer actions and improve your user experience.                        </p>
                      </div>
                    </div>
                  </div>


                </Flickity>
           </div>

        </>
    );
};


export { BlogSlideshow };