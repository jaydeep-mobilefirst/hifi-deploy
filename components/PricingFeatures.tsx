import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Link from 'next/link';
import Image from 'next/image';
import RoundCheck_Icon from '../components/SVG/RoundCheck_Icon';

const PricingFeatures = () => {

    return (
        <>
          <div className="Pricelist">

            <div className="FeaturesCards">

                <div className="FeaturesCardWrap">
                    <div className="FeaturesCardInner">
                      <div className="FeaturesCardImg">                  
                        <Image alt="check" src='./icons/connect.png' width={80} height={80} />
                      </div>
                      <div className="FeaturesCardTxt">
                      <h6>Multicurrency Support</h6>
                        <p>
                        Gain access to every major digital currency & blockchain
                        </p>
                      </div>
                    </div>
                </div>

                <div className="RowListWrap Inc">
                  <div className="RowList"><RoundCheck_Icon />
                    <p>ETH, BTC, USDC, USDT, SOL, LTC, AVAX, & DOGE. See full list <a className="pblue">here</a></p>
                  </div>
                  <div className="RowList"><RoundCheck_Icon />
                    <p><span className="pblue">Fiat settlement</span> in USD across U.S. & Canada</p>
                  </div>
                  <div className="RowList"><RoundCheck_Icon />
                    <p><span className="pblue">Multi-chain support</span> for all chains and rollups in the platform</p>
                  </div>
                </div>
                

                <div className="RowListWrap Price">
                  <div className="">
                    <h6>1% + $0.25</h6>
                    <p>per successful transaction</p>
                    <p className="Add">+1% for fiat settlement</p>
                    <p className="Add">+1% for smart contract escrow</p>
                  </div>
                </div>

            </div>

            <div className="FeaturesCards">

                <div className="FeaturesCardWrap">
                    <div className="FeaturesCardInner">
                      <div className="FeaturesCardImg">                  
                        <Image alt="check" src='./icons/globe.png' width={80} height={80} />
                      </div>
                      <div className="FeaturesCardTxt">
                      <h6>Bank Transfers</h6>
                        <p>
                        Compatible with a global business banking network
                        </p>
                      </div>
                    </div>
                </div>

                <div className="RowListWrap Inc">
                  <div className="RowList"><RoundCheck_Icon />
                    <p><span className="pblue">ACH, wire, ACH debit</span> payout transfers</p>
                  </div>
                  <div className="RowList"><RoundCheck_Icon />
                  <p><span className="pblue">Multi-bank access</span> with 100+ business bank accounts</p>
                  </div>
                  <div className="RowList"><RoundCheck_Icon />
                    <p>Enable rapid, real-time <span className="pblue">transaction processing</span></p>
                  </div>
                </div>
                

                <div className="RowListWrap Price">
                  <div className="">
                    <h6>1%</h6>
                    <p>per ACH payout (max $5.00)</p>
                    <p className="Add">max $5</p>
                  </div>
                </div>

            </div>

            <div className="FeaturesCards">

                <div className="FeaturesCardWrap">
                    <div className="FeaturesCardInner">
                      <div className="FeaturesCardImg">                  
                        <Image alt="check" src='./icons/circles.png' width={80} height={80} />
                      </div>
                      <div className="FeaturesCardTxt">
                      <h6>Digital Wallet Compatibility</h6>
                        <p>
                        Integrate with 300+ wallet providers
                        </p>
                      </div>
                    </div>
                </div>

                <div className="RowListWrap Inc">
                  <div className="RowList"><RoundCheck_Icon />
                    <p>Coinbase, Metamask, Robinhood, Gemini, Ledger, Trust Wallet, & more. 
                      {/* See full list <a className="pblue">here</a> */}
                      </p>
                  </div>
                  <div className="RowList"><RoundCheck_Icon />
                    <p><span className="pblue">Seamless Integration</span> to allow users to connect wallet in one sign in</p>
                  </div>
                  <div className="RowList"><RoundCheck_Icon />
                    <p>Push notifications wallet compatibility</p>
                  </div>
                </div>
                

                <div className="RowListWrap Price">
                  <div className="">
                    <h6>Included</h6>
                    <p className="Add">No additional fees</p>
                  </div>
                </div>

            </div>

            <div className="FeaturesCards">

                <div className="FeaturesCardWrap">
                    <div className="FeaturesCardInner">
                      <div className="FeaturesCardImg">                  
                        <Image alt="check" src='./icons/shield.png' width={80} height={80} />
                      </div>
                      <div className="FeaturesCardTxt">
                      <h6>Rigorous Security and Compliance</h6>
                        <p>
                        Industry leading data security monitoring & support
                        </p>
                      </div>
                    </div>
                </div>

                <div className="RowListWrap Inc">
                  <div className="RowList"><RoundCheck_Icon />
                    <p>Data security and encryption</p>
                  </div>
                  <div className="RowList"><RoundCheck_Icon />
                    <p>Client Side <span className="pblue"> 2FA & SSO login encryption</span></p>
                  </div>
                  <div className="RowList"><RoundCheck_Icon />
                    <p>Dynamic risk-based <span className="pblue">KYC/AML</span> checks</p>
                  </div>
                </div>
                

                <div className="RowListWrap Price">
                  <div className="">
                    <h6>Included</h6>
                    <p className="Add">No additional fees</p>
                  </div>
                </div>

            </div>

            <div className="FeaturesCards">

                <div className="FeaturesCardWrap">
                    <div className="FeaturesCardInner">
                      <div className="FeaturesCardImg">                  
                        <Image alt="check" src='./icons/phone.png' width={80} height={80} />
                      </div>
                      <div className="FeaturesCardTxt">
                      <h6>24x7 Phone, Slack, and Email Support</h6>
                        <p>
                        World-class support for Anytime, Anywhere
                        </p>
                      </div>
                    </div>
                </div>

                <div className="RowListWrap Inc">
                <div className="RowList"><RoundCheck_Icon />
                    <p><span className="pblue">24x7x365</span> dedicated support. No A.I agents - real people.</p>
                  </div>
                  <div className="RowList"><RoundCheck_Icon />
                    <p>In-house solutions / troubleshooting team</p>
                  </div>
                  <div className="RowList"><RoundCheck_Icon />
                    <p>CEO’s phone number</p>
                  </div>
                </div>
                

                <div className="RowListWrap Price">
                  <div className="">
                    <h6>Included</h6>
                    <p className="Add">No additional fees</p>
                  </div>
                </div>

            </div>

          </div>
        </>
    );
};


export { PricingFeatures };