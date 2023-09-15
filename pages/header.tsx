import React, { useRef } from "react";
import { Toolbar } from "../components/Toolbar";
import { useElementOnScreen } from "../hooks/useElementOnScreen"
import Image from "next/image";
import Head from 'next/head';
import Link from "next/link";
import { Banner } from "../components/Banner";

const MenuButton = (props: any) => (
  <button className="MenuButton" {...props}>
    {props.children}
  </button>
);

export default function MainHeader(props: any) {
    
  const [ bannerRef, isVisible ] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0
  });

  return (
    <>
     <Head>
        {props.title && <title>{props.title}</title>}
        {props.description && <meta name="description" content={props.description} key="desc" />}
        {props.title && <meta property="og:title" content={props.title} />}
        {props.description && <meta property="og:description" content={props.description} />}
        {props.image && <meta property="og:image" content={props.image} />}

      </Head>

      <div ref={bannerRef}><Banner  /></div>
        <div className={isVisible ? "header-top" : "header-scrolled"}>
          <div>
            <Toolbar {...props}>
              <div className="MenuLinks Shadow">
                <div className="dropdown">
                  <Link href="#" className="dropdown-toggle">Products</Link>
                  <ul className="dropdown-menu">
                  <li><Link href="/hifipay">Hifi Pay</Link></li>
                    <li>Global Payments <span className="Tag">Coming soon</span></li>
                    <li>Loyalty & Rewards <span className="Tag">Coming soon</span></li>
                    <li>Treasury <span className="Tag">Coming soon</span></li>
                  </ul>
                </div>
                <Link href="/">Developers</Link>
                <div className="dropdown">
                  <Link href="#" className="dropdown-toggle">Resources</Link>
                  <ul className="dropdown-menu">
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/careers">Careers</Link></li>
                    <li><Link href="/assets">Supported Assets</Link></li>
                    <li><Link href="/blog">Blogs</Link></li>
                  </ul>
                </div>
                <Link href="/pricing">Pricing</Link>
              </div>
            </Toolbar>

            {/* <Toolbar {...props}>
              <div className="MenuLinks Shadow">
                <div className="dropdown">
                  <Link href="#" className="dropdown-toggle">Products</Link>
                  <ul className="dropdown-menu">
                    <li>
                      <div className="dropdown-item">
                        <div className="icon">
                        <Image src="../img/brand-logo.png" height="30" width="30" alt="Logo" />
                          </div>
                        <div className="text">
                          <Link href="/">Hifi Pay</Link>
                          <small>Lorem ipsum dolor sit</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item">
                        <div className="icon"><img src="icon1.png" alt="icon1" /></div>
                        <div className="text">
                          <Link href="/">Hifi Pay</Link>
                          <small>Description 1</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item">
                        <div className="icon"><img src="icon1.png" alt="icon1" /></div>
                        <div className="text">
                          <Link href="/>Hifi Pay</Link>
                          <small>Description 1</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item">
                        <div className="icon"><img src="icon1.png" alt="icon1" /></div>
                        <div className="text">
                          <Link href="/>Hifi Pay</Link>
                          <small>Description 1</small>
                        </div>
                      </div>
                    </li>

                  </ul>
                </div>
                <Link href="/">Developers</Link>
                <div className="dropdown">
                  <Link href="#" className="dropdown-toggle">Resources</Link>
                  <ul className="dropdown-menu">
                    <li>
                      <div className="dropdown-item">
                        <div className="icon"><img src="icon2.png" alt="icon2" /></div>
                        <div className="text">
                          <Link href="/>About</Link>
                          <small>Description 2</small>
                        </div>
                      </div>
                    </li>

                  </ul>
                </div>
                <Link href="/>Pricing</Link>
              </div>
            </Toolbar> */}
          </div>
        </div>
    </>
  );
}


