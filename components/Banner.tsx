import { useState, forwardRef } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Link from 'next/link';
import Image from 'next/image';
import Website_Icon from "./SVG/Website_Icon";
import Twitter_Icon from "./SVG/Twitter_Icon";
import Linkedin_Icon from "./SVG/Linkedin_Icon";
import Telegram_Icon from "./SVG/Telegram_Icon";

const Banner = forwardRef((props, ref) => {
    return (
        
        <div className="Banner">
          <div className="BannerCarousel">

            <div className="BannerGroup">
              <p className="BannerTitle">News</p>
              <p>
                Sign up for first $10,000 in free processing
                </p>
            </div>
            <div className="BannerGroup">
              <p className="BannerTitle">Product</p>
              <p>
                HIFI Pay launches with select US Merchants
                </p>
            </div>
            <div className="BannerGroup">
              <p className="BannerTitle">Jobs</p>
              <p>
                Hiring Head of Growth for NYC office location
              </p>
            </div>
            <div className="BannerGroup">
              <p className="BannerTitle">News</p>
              <p>
                HIFI Bridge raises $2M Pre-Seed funding
              </p>
            </div>
          
            <div className="BannerGroup">
              <p className="BannerTitle">News</p>
              <p>
                Sign up for first $10,000 in free processing
                </p>
            </div>
            <div className="BannerGroup">
              <p className="BannerTitle">Product</p>
              <p>
                HIFI Pay launches with select US Merchants
                </p>
            </div>
            <div className="BannerGroup">
              <p className="BannerTitle">Jobs</p>
              <p>
                Hiring Head of Growth for NYC office location
              </p>
            </div>
            <div className="BannerGroup">
              <p className="BannerTitle">News</p>
              <p>
                HIFI Bridge raises $2M Pre-Seed funding
              </p>
            </div>

            <div className="BannerGroup">
              <p className="BannerTitle">News</p>
              <p>
                Sign up for first $10,000 in free processing
                </p>
            </div>
            <div className="BannerGroup">
              <p className="BannerTitle">Product</p>
              <p>
                HIFI Pay launches with select US Merchants
                </p>
            </div>
            <div className="BannerGroup">
              <p className="BannerTitle">Jobs</p>
              <p>
                Hiring Head of Growth for NYC office location
              </p>
            </div>
            <div className="BannerGroup">
              <p className="BannerTitle">News</p>
              <p>
                HIFI Bridge raises $2M Pre-Seed funding
              </p>
            </div>

            
            
          </div>
        </div>
    );
});


export { Banner };