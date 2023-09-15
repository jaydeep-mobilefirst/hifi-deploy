import { useState, useEffect } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import Link from 'next/link';
import Image from 'next/image';

// const [set, setSet] = useState<string>('networks');

const Networks = () => {

  return (
    <>
  <div className='img-carousel'>
    <div className='img-track assets'>
      <Image alt="btc" src='./assets/btc.png' width={50} height={50} />
      <Image alt="eth" src='./assets/eth.png' width={50} height={50} />
      <Image alt="avax" src='./assets/avax.png' width={50} height={50} />
      <Image alt="ftm" src='./assets/ftm.png' width={50} height={50} />
      <Image alt="algo" src='./assets/algo.png' width={50} height={50} />
      <Image alt="dot" src='./assets/dot.png' width={50} height={50} />
      <Image alt="ada" src='./assets/ada.png' width={50} height={50} />
      <Image alt="sol" src='./assets/sol.png' width={50} height={50} />
      <Image alt="rvn" src='./assets/rvn.png' width={50} height={50} />
      <Image alt="ltc" src='./assets/ltc.png' width={50} height={50} />
      <Image alt="doge" src='./assets/doge.png' width={50} height={50} />
      <Image alt="atom" src='./assets/atom.png' width={50} height={50} />
      <Image alt="near" src='./assets/near.png' width={50} height={50} />
      <Image alt="fil" src='./assets/fil.png' width={50} height={50} />

      <Image alt="btc" src='./assets/btc.png' width={50} height={50} />
      <Image alt="eth" src='./assets/eth.png' width={50} height={50} />
      <Image alt="avax" src='./assets/avax.png' width={50} height={50} />
      <Image alt="ftm" src='./assets/ftm.png' width={50} height={50} />
      <Image alt="algo" src='./assets/algo.png' width={50} height={50} />
      <Image alt="dot" src='./assets/dot.png' width={50} height={50} />
      <Image alt="ada" src='./assets/ada.png' width={50} height={50} />
      <Image alt="sol" src='./assets/sol.png' width={50} height={50} />
      <Image alt="rvn" src='./assets/rvn.png' width={50} height={50} />
      <Image alt="ltc" src='./assets/ltc.png' width={50} height={50} />
      <Image alt="doge" src='./assets/doge.png' width={50} height={50} />
      <Image alt="atom" src='./assets/atom.png' width={50} height={50} />
      <Image alt="near" src='./assets/near.png' width={50} height={50} />
      <Image alt="fil" src='./assets/fil.png' width={50} height={50} />
    </div>
  </div>
    </>
  );
}

export default Networks; 