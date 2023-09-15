import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { Button } from "./primitives/Button";
import Image from "next/image";
import Exit_Icon from "./SVG/Exit_Icon";
import { useRouter } from "next/router";
import Link from "next/link";
import Hifibridge_Icon from "./SVG/hifibridge_icon";

export const Toolbar = (props: any) => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1025px)");
  const router = useRouter();

  const redirectLink = () => {
    router.push("/auth/Signin");
  }

  if (isDesktop) {
    return (
      <div className="Toolbar">
        <div className="ToolbarInner">
          <div className="AppName">
            <Link href="/">
              <Hifibridge_Icon />
            </Link>
          </div>
          <div className="ToolbarMenu">{props.children}</div>
          <div className="ButtonGroup Right">
            <div className="LineBtn">
              <div className="ButtonWrap dark">
                <div>
                  <button onClick={redirectLink} className="">Log In</button>
                </div>
              </div>
            </div>
            <div className="AppBtn">
              <button>
                <Link target="blank" href="/signup">
                  Get Started for Free
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="Toolbar">
          <div className="ToolbarInner">
            <div className="AppName">
              <Link href="/">
                <Image
                  src="../img/brand-logo.png"
                  height="50"
                  width="50"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="ToolbarMenu">
              <div className="MenuHamburger">
                <Button onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}>
                  <Image
                    src="./icons/menu-icon.svg"
                    height="40"
                    width="40"
                    alt="Menu"
                  />
                </Button>
              </div>
            </div>

            <div
              className="ToolbarMenuBackdrop"
              onClick={() => setBurgerMenuOpen(false)}
              style={{ visibility: burgerMenuOpen ? "visible" : "hidden" }}
            >
              {burgerMenuOpen && (
                <div
                  className="ToolbarMenuBox"
                  style={{ visibility: burgerMenuOpen ? "visible" : "hidden" }}
                >
                  <div className="MenuClose">
                    <Button onClick={() => setBurgerMenuOpen(false)}>
                      <Exit_Icon />
                    </Button>
                  </div>
                  {props.children}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
};
