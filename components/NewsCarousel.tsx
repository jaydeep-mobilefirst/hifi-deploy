import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Link from 'next/link';
import Image from 'next/image';
import ImgCarousel from "./carousel/ImgCarousel";

const Flickity = require('react-flickity-component');
const flickityOptions = {
    initialIndex: 0,
    wrapAround: true,
    prevNextButtons: false
}

const flkty = new Flickity('.carousel', {
  wrapAround: true,
});

const NewsCarousel: React.FC = () => {

    return (
        <>

    <section className="NewsSectionWrap">
        <div className="NewsSectionBg">
          <div className="NewsSection">
            <div className="NewsContent">
                <h1>In the News</h1>

            <div className="Posts">
                
              <div className="CardGroup">

                <div className="CardWrap">
                  <div className="CardTop"></div>
                  <div className="Card">
                      <div className="CardTxt">
                        <p className="CardSub">July 4th 2023</p>
                        <h6>Coming Soon</h6>
                      </div>
                  </div>
                </div>

                <div className="CardWrap">
                  <div className="CardTop"></div>
                  <div className="Card">
                      <div className="CardTxt">
                        <p className="CardSub">July 4th 2023</p>
                        <h6>Coming Soon</h6>
                      </div>
                  </div>
                </div>

                <div className="CardWrap">
                  <div className="CardTop"></div>
                  <div className="Card">
                      <div className="CardTxt">
                        <p className="CardSub">July 4th 2023</p>
                        <h6>Coming Soon</h6>
                      </div>
                  </div>
                </div>

              </div>
            </div>
                
          </div>
        </div>
      </div>

      </section>

        </>
    );
};


export { NewsCarousel };