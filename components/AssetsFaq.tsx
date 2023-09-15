import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Link from 'next/link';
import Image from 'next/image';
import Collapsible from 'react-collapsible';

const AssetsFaq = () => {

    return (
        <>
        
        <div className="FaqBlocks">
          <div className='FaqBlockAccordions'>
            <Collapsible triggerTagName="h3" trigger="How do deposits and withdrawals work?">
                <p>
                All fiat assets are supported for institutional deposits and withdrawals. We currently do not support fiat deposits and withdrawals from retail end users. All crypto assets support withdrawals for retail end users.                        
                </p>
            </Collapsible>
            <Collapsible triggerTagName="h3" trigger="Is there support for New York customers?">
                <p>
                Although NYDFS categorizes assets support into Approved for Custody and Approved for Listing, HiFi Bridge will only support assets that meet both the criteria for custody and listing. As a result, there may be assets that are available for one or the other according to NYDFS, which we will not support for Participants in NY.                        
                </p>
            </Collapsible>
          </div>
        </div>

        </>
    );
};


export { AssetsFaq };