import { useState } from "react";
import MainHeaderWhite from "./headerwhite";
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "next/image";
import Link from 'next/link';
import {Footer} from '../components/Footer';
import AssetList from '../components/AssetList';
import FiatList from '../components/FiatList';
import { AssetsFaq } from '../components/AssetsFaq';


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
    <main className="Assets">
      <div>
        <MainHeaderWhite 
          title="Supported Assets │ HIFI Bridge"
          image="https://hifibridge.com/thumb/hifibridge_thumb.png" 
          description="Payments Infrastructure for the Future of the Internet"
          social="Payments Infrastructure for the Future of the Internet"
          domain="hifibridge.com"
          url="https://hifibridge.com/" />
      </div>

      <section className="AssetsSectionWrap" id="item">
          <div className="AssetsSection">
            <div className="AssetsContent">
              <div>
                <h1><span className="">Supported Assets</span></h1>
                <p>
                HiFi Bridge supports the following digital assets and fiat currencies. Assets that are offered HiFi Bridge liquidity services are indicated in the liquidity column. HiFi Bridge currently supports over 60 digital assets and tokens and 29 fiat currencies.           
                </p>
              </div>

              </div>
                <div className="ButtonGroup Left">
                <button className={activeSection==='default' ? 'activeBtn' : 'inactiveBtn'} 
                onClick = {()=>setActiveSection('default')}>Crypto</button>

                <button className={activeSection==='fiat' ? 'activeBtn' : 'inactiveBtn'} 
                onClick = {()=>setActiveSection('fiat')}>Fiat</button>
               </div>
              <div>

              <div className={activeSection==='default' ? 'activeTab' : 'hiddenTab'}>
                <AssetList />
              </div>
              <div className={activeSection==='fiat' ? 'activeTab' : 'hiddenTab'}>
                <FiatList />
              </div>

        </div>
      </div>

      </section>

      <section className="AssetsFaqWrap">
        <div className="AssetsFaqSection">

          <h3>Learning Center</h3>
          <p>Discover answers to frequently asked questions. Need some help? Reach out to our team 
            <a href="mailto:contact@hifibridge.com"className="pblue"> here.</a>
          </p>

          <AssetsFaq />
      
        </div>

      </section>

      <Footer />

    

    </main>
  );
}


