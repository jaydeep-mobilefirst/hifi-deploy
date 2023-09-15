import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Link from 'next/link';
import Image from 'next/image';


const Features = () => {

    return (
        <>
            <div>

            <div className="FeaturesCards">

                <div className="FeaturesCardWrap">
                    <div className="FeaturesCardInner">
                      <div className="FeaturesCardImg">                  
                        <Image alt="Description" src='./icons/connect.png' width={80} height={80} />
                      </div>
                      <div className="FeaturesCardTxt">
                      <h6 className="">Multicoin Acceptance</h6>
                        <p>Integrate hundreds of digital assets including BTC, ETH, and USDC. Access a 
                      <span className="pblue"> modern network</span> and wider audience.</p>
                      </div>
                    </div>
                </div>
                <div className="FeaturesCardWrap">
                    <div className="FeaturesCardInner">
                      <div className="FeaturesCardImg">                  
                      <Image alt="Description" src='./icons/time.png' width={136} height={64} />
                      </div>
                      <div className="FeaturesCardTxt">
                      <h6 className="">Instant Settlement</h6>
                        <p> Reduce settlement time from days to seconds. Experience
                          <span className="pblue"> faster access to funds</span> and improved cash flow.
                        </p>
                      </div>
                    </div>
                </div>
                <div className="FeaturesCardWrap">
                    <div className="FeaturesCardInner">
                      <div className="FeaturesCardImg">                  
                      <Image alt="Description" src='./icons/globe.png' width={80} height={80} />
                      </div>
                      <div className="FeaturesCardTxt">
                      <h6 className="">Global Payouts</h6>
                        <p>Seamlessly execute
                         <span className="pblue"> cross-border payments</span>, to reach suppliers, partners, and customers around the world.
                        </p>
                      </div>
                    </div>
                </div>
                <div className="FeaturesCardWrap">
                    <div className="FeaturesCardInner">
                      <div className="FeaturesCardImg">                  
                      <Image alt="Description" src='./icons/diamond.png' width={80} height={80} />
                      </div>
                      <div className="FeaturesCardTxt">
                      <h6 className="">Near Zero Cost</h6>
                        <p>Benefit from
                         <span className="pblue"> near-zero cost transactions</span>, reducing overhead expenses and optimizing your financial operations.
                        </p>
                      </div>
                    </div>
                </div>
                <div className="FeaturesCardWrap">
                    <div className="FeaturesCardInner">
                      <div className="FeaturesCardImg">                  
                      <Image alt="Description" src='./icons/paper.png' width={80} height={80} />
                      </div>
                      <div className="FeaturesCardTxt">
                      <h6 className="">Advanced Reporting</h6>
                        <p>Full-service customer management in a
                         <span className="pblue"> simplified dashboard</span>. Get an end-to-end view of your business activities.
                        </p>
                      </div>
                    </div>
                </div>
                <div className="FeaturesCardWrap">
                    <div className="FeaturesCardInner">
                      <div className="FeaturesCardImg">                  
                      <Image alt="Description" src='./icons/link2.png' width={80} height={80} />
                      </div>
                      <div className="FeaturesCardTxt">
                      <h6 className="">Interoperable Connectivity</h6>
                        <p>Achieve
                         <span className="pblue"> seamless compatibility</span> across various payment methods, platforms, and protocols with one integration.
                        </p>
                      </div>
                    </div>
                </div>

                </div>

              </div>

        </>
    );
};


export { Features };