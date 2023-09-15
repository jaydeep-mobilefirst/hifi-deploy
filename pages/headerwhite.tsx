import React, { useRef } from "react";
import { ToolbarWhite } from "../components/ToolbarWhite";
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

export default function MainHeaderWhite (props: any) {

  const [ bannerRef, isVisible ] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0
  });

  return (
    <>
      <div ref={bannerRef}><Banner /></div>
        <div className={isVisible ? "header-top-w" : "header-scrolled-w"}>
          <div>
              <ToolbarWhite {...props}>
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
              </ToolbarWhite>
            </div>
        </div>
    </>
  );
}