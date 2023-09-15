import React from 'react';
import Wallets from "../carousel/Wallets"
import Assets from "../carousel/Assets"
import Networks from "../carousel/Networks"

type SetType = 'wallets' | 'assets' | 'networks';

type Props = {
  set: SetType;
};

const ImgCarousel: React.FC<Props> = ({ set }) => {

  const renderImages = () => {
    switch (set) {
      case 'wallets':
        return <Wallets />;
      case 'assets':
        return <Assets />;
      case 'networks':
        return <Networks />;
      default:
        return <Wallets />;
    }
  };

  return (
    <div>
      
      {renderImages()}

    </div>

  );
}

export default ImgCarousel; 


