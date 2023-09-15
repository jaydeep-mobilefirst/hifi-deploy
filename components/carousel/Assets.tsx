import { useState, useEffect } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import Link from 'next/link';
import Image from 'next/image';

// const [set, setSet] = useState<string>('assets');

const Assets = () => {

  return (
    <>
      <div className='img-carousel'>
        <div className='img-track assets'>
          <Image alt="usdc" src='./assets/usdc.png' width={50} height={50} />
          <Image alt="usdt" src='./assets/usdt.png' width={50} height={50} />
          <Image alt="btc" src='./assets/btc.png' width={50} height={50} />
          <Image alt="eth" src='./assets/eth.png' width={50} height={50} />
          <Image alt="link" src='./assets/link.png' width={50} height={50} />
          <Image alt="avax" src='./assets/avax.png' width={50} height={50} />
          <Image alt="ftm" src='./assets/ftm.png' width={50} height={50} />
          <Image alt="algo" src='./assets/algo.png' width={50} height={50} />
          <Image alt="uni" src='./assets/uni.png' width={50} height={50} />
          <Image alt="matic" src='./assets/matic.png' width={50} height={50} />
          <Image alt="dot" src='./assets/dot.png' width={50} height={50} />
          <Image alt="yearn" src='./assets/yearn.png' width={50} height={50} />
          <Image alt="ada" src='./assets/ada.png' width={50} height={50} />
          <Image alt="sushi" src='./assets/sushi.png' width={50} height={50} />
          <Image alt="sol" src='./assets/sol.png' width={50} height={50} />
          <Image alt="sand" src='./assets/sand.png' width={50} height={50} />
          <Image alt="rvn" src='./assets/rvn.png' width={50} height={50} />
          <Image alt="aave" src='./assets/aave.png' width={50} height={50} />
          <Image alt="bat" src='./assets/bat.png' width={50} height={50} />
          <Image alt="pax" src='./assets/pax.png' width={50} height={50} />
          <Image alt="mob" src='./assets/mob.png' width={50} height={50} />
          <Image alt="mkr" src='./assets/mkr.png' width={50} height={50} />
          <Image alt="gal" src='./assets/gal.png' width={50} height={50} />
          <Image alt="ltc" src='./assets/ltc.png' width={50} height={50} />
          <Image alt="gusd" src='./assets/gusd.png' width={50} height={50} />
          <Image alt="dai" src='./assets/dai.png' width={50} height={50} />
          <Image alt="near" src='./assets/near.png' width={50} height={50} />
          <Image alt="fil" src='./assets/fil.png' width={50} height={50} />
          <Image alt="doge" src='./assets/doge.png' width={50} height={50} />
          <Image alt="comp" src='./assets/comp.png' width={50} height={50} />

          <Image alt="usdc" src='./assets/usdc.png' width={50} height={50} />
          <Image alt="usdt" src='./assets/usdt.png' width={50} height={50} />
          <Image alt="btc" src='./assets/btc.png' width={50} height={50} />
          <Image alt="eth" src='./assets/eth.png' width={50} height={50} />
          <Image alt="link" src='./assets/link.png' width={50} height={50} />
          <Image alt="avax" src='./assets/avax.png' width={50} height={50} />
          <Image alt="ftm" src='./assets/ftm.png' width={50} height={50} />
          <Image alt="algo" src='./assets/algo.png' width={50} height={50} />
          <Image alt="uni" src='./assets/uni.png' width={50} height={50} />
          <Image alt="matic" src='./assets/matic.png' width={50} height={50} />
           <Image alt="dot" src='./assets/dot.png' width={50} height={50} />
          <Image alt="yearn" src='./assets/yearn.png' width={50} height={50} />
          <Image alt="ada" src='./assets/ada.png' width={50} height={50} />
          <Image alt="sushi" src='./assets/sushi.png' width={50} height={50} />
          <Image alt="sol" src='./assets/sol.png' width={50} height={50} />
          <Image alt="sand" src='./assets/sand.png' width={50} height={50} />
          <Image alt="rvn" src='./assets/rvn.png' width={50} height={50} />
          <Image alt="aave" src='./assets/aave.png' width={50} height={50} />
          <Image alt="bat" src='./assets/bat.png' width={50} height={50} />
          <Image alt="pax" src='./assets/pax.png' width={50} height={50} />
          <Image alt="mob" src='./assets/mob.png' width={50} height={50} />
          <Image alt="mkr" src='./assets/mkr.png' width={50} height={50} />
          <Image alt="gal" src='./assets/gal.png' width={50} height={50} />
          <Image alt="ltc" src='./assets/ltc.png' width={50} height={50} />
          <Image alt="gusd" src='./assets/gusd.png' width={50} height={50} />
          <Image alt="dai" src='./assets/dai.png' width={50} height={50} />
          <Image alt="near" src='./assets/near.png' width={50} height={50} />
          <Image alt="fil" src='./assets/fil.png' width={50} height={50} />
          <Image alt="doge" src='./assets/doge.png' width={50} height={50} />
          <Image alt="comp" src='./assets/comp.png' width={50} height={50} />

          </div>
        </div>
    </>
  );
}

export default Assets; 