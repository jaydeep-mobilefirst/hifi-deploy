import { useState } from "react";
import MainHeaderWhite from "./headerwhite";
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "next/image";
import Link from 'next/link';
import {Footer} from '../components/Footer';


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
    <main className="Terms">
      <div>
        <MainHeaderWhite 
          title="Terms of Service │ HIFI Bridge"
          image="https://hifibridge.com/thumb/hifibridge_thumb.png" 
          description="Payments Infrastructure for the Future of the Internet"
          social="Payments Infrastructure for the Future of the Internet"
          domain="hifibridge.com"
          url="https://hifibridge.com/" />
      </div>

      <section>
        <div className="LegalHero">
          <h1><span className="">Terms And Conditions</span></h1>
          <p>
          As used in these Terms & Conditions, “HiFi Bridge” means HiFi Bridge Inc. and its in-application and web experiences with its family of wholly owned subsidiaries. These Terms and Conditions are in addition to any other agreements between you and HiFi Bridge, including any customer or account agreements and any other agreements that govern your use of software, products, goods, services, content, tools, and information provided by such HiFi Bridge subsidiary(ies).                
          </p>
        </div>
      </section>

      <section className="LegalSectionWrap">
        <div className="LegalSection">
          <h6>Section 01</h6>
          <h3>General</h3>
          <div className="legal-box">
           <h4>
            The HiFi Bridge website and mobile application (collectively, the “Service”) may include or make available certain content (the “Content”).
            </h4>
            <p>
            Content includes, without limitation: (1) account positions, balances, transactions, confirmations, and order history; (2) general news and information, commentary, research reports, educational material and information and data concerning the financial markets, securities and other subjects; (3) market data such as quotations for securities transactions and/or last sale information for completed securities transactions reported in accordance with federal securities regulations; (4) financial and investment interactive tools, such as alerts or calculators; (5) tax preparation, bill payment and account management tools; (6) company names, logos, product and service names, trade names, trademarks and services marks (collectively, “Marks”) owned by HiFi Bridge, and Marks owned by Third Party Providers (defined below); and (7) any other information, content, services, or software. Certain Content is furnished by third parties (each, a “Third-Party Provider” and collectively, the “Third-Party Providers”). Such Content (“Third Party Content”) includes, without limitation, any information, content, service or software made available by or through social media websites, blogs, wikis, online conferences, telecasts, podcasts, and other forums (collectively, the “Forums”). Third Party Content may be available through framed areas or through hyperlinks to the Third-Party Providers’ websites.          
            </p>
          </div>
        </div>
      </section>
      <section className="LegalSectionWrap Grey">
        <div className="LegalSection">
          <h6>Section 02</h6>
          <h3>Acceptance of Terms</h3>
          <div className="legal-box">
           <h4>
           Acceptance of Terms and Conditions By using the Service and the Content, you agree to follow and be bound by these Terms and Conditions, including the policies referenced herein.
            </h4>
            <p>
            Customers of HiFi Bridge Financial, HiFi Bridge Securities, and HiFi Bridge Crypto are granted additional levels of access to the website and their relationship with HiFi Bridge is governed by additional agreements and terms of use, such as the Customer Agreement that governs their account(s).
            </p>
          </div>
        </div>
      </section>

      <section className="LegalSectionWrap">
        <div className="LegalSection">
          <h6>Section 03</h6>
          <h3>Disclaimer and Limitations of Liability</h3>
          <div className="legal-box">
           <h4>
           The Content and the Service are provided on an “as is” and “as available” basis.
            </h4>
            <p>
             To the fullest extent permitted under applicable law, HiFi Bridge and the Third-Party Providers expressly disclaim all warranties of any kind with respect to the Content and the Service, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose and non-infringement. Neither HiFi Bridge nor Third-Party Providers guarantee the accuracy, timeliness, completeness or usefulness of any Content. You agree to use the Content and the Service only at your own risk. Neither HiFi Bridge nor the Third-Party Providers explicitly or implicitly endorse or approve any Third Party Content. Third Party Content is provided for informational purposes only. Rhfv2.420160108 The Content is not intended to provide financial, legal, tax or investment advice or recommendations, unless specifically identified as an individualized recommendation in writing. You are solely responsible for determining whether any self-directed investment, investment strategy or related transaction is appropriate for you based on your personal investment objectives, financial circumstances and risk tolerance. You should consult your legal or tax professional regarding your specific situation. HiFi Bridge AND THE THIRD-PARTY PROVIDERS WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, REVENUE, INCOME, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES (EVEN IF HiFi Bridge OR ANY THIRD-PARTY PROVIDER HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), RESULTING FROM: (1) THE USE OF OR THE INABILITY TO USE THE CONTENT OR THE SERVICE; (2) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES RESULTING FROM ANY GOODS, DATA, INFORMATION OR SERVICES PURCHASED OR OBTAINED OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO, THROUGH OR FROM THE SERVICE; (3) ACCESS TO OR ALTERATION OF YOUR ACCOUNT, TRANSMISSIONS OR DATA DUE TO YOUR CONDUCT, INACTION OR NEGLIGENCE; OR (4) ANY OTHER MATTER RELATING TO THE CONTENT OR THE SERVICE.
            </p>
          </div>
        </div>
      </section>
      <section className="LegalSectionWrap Grey">
        <div className="LegalSection">
          <h6>Section 04</h6>
          <h3>Self-Directed Accounts</h3>
          <div className="legal-box">
           <h4>
           HiFi Bridge Financial provides self-directed investors with discount services and, unless clearly identified in writing to you as an individualized recommendation, HiFi Bridge Financial does not make recommendations or offer investment advice of any kind.
            </h4>
            <p>
            As a self-directed investor, you are solely responsible for evaluating the merits and risks associated with the use of any Content provided through the Service before making any decisions based on such Content. You agree not to hold HiFi Bridge or any Third-Party Provider liable for any possible claim for damages arising from any self-directed decision you make based on the Content or other information made available to you through the Service or any ThirdParty Provider websites. Past performance data should not be construed as indicative of future results.
            </p>
          </div>
        </div>
      </section>

      <section className="LegalSectionWrap">
        <div className="LegalSection">
          <h6>Section 05</h6>
          <h3>U.S. Residents Only</h3>
          <div className="legal-box">
           <h4>
           The Content and the Service are intended for United States residents only.
            </h4>
            <p>
            They shall not be considered a solicitation to any person in any jurisdiction where such solicitation would be illegal.
            </p>
          </div>
        </div>
      </section>
      <section className="LegalSectionWrap Grey">
        <div className="LegalSection">
          <h6>Section 06</h6>
          <h3>Content Posted</h3>
          <div className="legal-box">
           <h4>
           Service is published as of its stated date or, if no date is stated, the date of first posting.
            </h4>
            <p>
            Neither HiFi Bridge nor the Third-Party Providers have undertaken any duty to update any such information. HiFi Bridge does not prepare, edit, or endorse Third Party Content. HiFi Bridge does not guarantee the accuracy, timeliness, completeness or usefulness of Third Party Content, and is not responsible or liable for any content, advertising, products, or other materials on or available from third party sites. You will not hold HiFi Bridge and/or any Third-Party Provider liable in any way for (a) any inaccuracy of, error or delay in, or omission of the Content; or (b) any loss or damage arising from or occasioned by i) any error or delay in the transmission of such Content; ii) interruption in any such Content due either to any negligent act or omission by any party to any “force majeure” (e.g., flood, extraordinary weather Rhfv2.420160108 Rhfv2.420160108 conditions, earthquake or other act of God, fire, war, insurrection, riot, labor dispute, accident, action of government, communications or power failure, equipment or software malfunction), or iii) to any other cause beyond the reasonable control of HiFi Bridge and/or Third-Party Provider, or iv) non-performance. Any price quotes may be delayed 20 minutes or longer, according to the rules and regulations applicable to exchanges and Third-Party Providers. Neither HiFi Bridge nor the Third-Party Providers make any representations, warranties or other guarantees as to the accuracy or timeliness of any price quotes. Neither HiFi Bridge nor the Third-Party Providers make any representations, warranties or other guarantees as to the present or future value or suitability of any sale, trade or other transaction involving any particular security or any other investment. Content is provided exclusively for personal and noncommercial access and use. No part of the Service or Content may be copied, reproduced, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted or distributed in any way (including “mirroring”) to any other computer, server, web site or other medium for publication or distribution or for any commercial enterprise, without HiFi Bridge’s express prior written consent. You acknowledge that HiFi Bridge is the sole owner of HiFi Bridge Marks and that other Marks are the property of their respective owners. You agree that you will not use any Marks for any purpose without the prior express written consent of the respective owners.
            </p>
          </div>
        </div>
      </section>

      <section className="LegalSectionWrap">
        <div className="LegalSection">
          <h6>Section 07</h6>
          <h3>Termination; Modification</h3>
          <div className="legal-box">
           <h4>
           You agree that, without notice, HiFi Bridge may terminate these Terms and Conditions, or suspend your access to the Service or the Content, with or without cause at any time and effective immediately.
            </h4>
            <p>
            These Terms and Conditions will terminate immediately without notice from HiFi Bridge if you, in HiFi Bridge’s sole discretion, fail to comply with any provision of these Terms and Conditions. HiFi Bridge shall not be liable to you or any third party for the termination or suspension of the Service or the Content, or any claims related to such termination or suspension. HiFi Bridge and/or the Third-Party Providers may discontinue or modify the Content, or any portion thereof, at any time. You release and agree to indemnify and hold harmless HiFi Bridge, and the Third-Party Providers, for any loss or damages arising from or relating to such discontinuation or modification.
            </p>
          </div>
        </div>
      </section>
      <section className="LegalSectionWrap Grey">
        <div className="LegalSection">
          <h6>Section 08</h6>
          <h3>Communications</h3>
          <div className="legal-box">
           <h4>
           By using the Service or the Content, you consent to any form of recording and retention of any communication, information and data exchanged between you and HiFi Bridge or its representatives or agents.
            </h4>
            <p>
              All communications made at or through the Forums are public. Reliance on any Third Party Content available on or through the Forums is at your own risk. When discussing a particular company, stock or security in the Forums, you agree to reveal any ownership interest in such company, stock or security. Without limitation, you agree not to do any of the following: a) upload, post, transmit or otherwise make available any Content that is unlawful, harmful, threatening, abusive, harassing, tortuous, defamatory, vulgar, obscene, libelous, invasive of another's privacy (including, but not limited to, any address, email, phone number, or any other contact information without the written consent of the owner of such information), hateful, or racially, ethnically or otherwise objectionable; b) harm minors in any way; c) impersonate any person or entity, including, but not limited to, (i) a HiFi Bridge or Third-Party Provider manager, employee, agent, or representative or (ii) forum leader, guide or host; d) falsely state or otherwise misrepresent your affiliation with any person or entity; e) forge headers or otherwise manipulate identifiers in order to disguise the origin of any material; f) upload, post or otherwise transmit any material that you do not have a right to transmit under any law or under contractual or fiduciary relationships (such as inside information, proprietary and confidential information learned or disclosed as part of employment relationships or under nondisclosure agreements); g) upload, post or otherwise transmit any material that infringes any patent, trademark, trade secret, copyright, rights of privacy or publicity, or other proprietary rights of any party; h) upload, post, or transmit unsolicited commercial email or “SPAM,” including, but not limited to, unethical marketing, advertising, or any other practice that is in any way connected with SPAM, such as: (1) sending mass email to recipients who haven't requested email from you or with a fake return address; (2) promoting a site with inappropriate links, titles, or descriptions; or (3) promoting any site by posting multiple submissions in forums that are identical; i) upload, post or otherwise transmit any material that contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications equipment; j) interfere with or disrupt the Service or servers or networks connected to the Service, or disobey any requirements, procedures, policies or regulations of networks connected to the Service; k) intentionally or unintentionally violate any applicable local, state, national or international law, including, but not limited to, regulations promulgated by the U.S. Securities and Exchange Commission, any rules of any national or other securities exchange, and any regulations having the force of law; l) “stalk” or otherwise harass another; m) collect or store personal data about other users of the Service; n) promote or provide instructional information about illegal activities, promote physical harm or injury against any group or individual, or promote any act of cruelty; o) promote, offer for sale or sell any security or item, good or service that i) violates any applicable federal, state, or local law or regulation, ii) you do not have full power and authority under all relevant laws and regulations to offer and sell, including all necessary licenses and authorizations, or iii) HiFi Bridge or the Third-Party Providers determine, in their sole discretion, is inappropriate for sale; p) use the Forums as a forwarding service to another website; or q) access or otherwise use the Forums in any unlawful manner, for any unlawful purpose or in violation of these Terms and Conditions.
            </p>
          </div>
        </div>
      </section>

      <section className="LegalSectionWrap">
        <div className="LegalSection">
          <h6>Section 09</h6>
          <h3>External Links</h3>
          <div className="legal-box">
           <h4>
           HiFi Bridge and/or the Third-Party Providers may provide links to other websites or resources.
            </h4>
            <p>
            Because neither HiFi Bridge or the Third-Party Providers have any control over such sites and resources, you acknowledge and agree that neither HiFi Bridge nor the Third-Party Providers are responsible for the availability of such external sites or resources. HiFi Bridge and the Third-Party Providers do not endorse and are not liable for any content, advertising, products, or other materials on or available through such sites or resources. You further acknowledge and agree that neither HiFi Bridge nor the Third-Party Providers shall be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such site or resource.
            </p>
          </div>
        </div>
      </section>
      <section className="LegalSectionWrap Grey">
        <div className="LegalSection">
          <h6>Section 10</h6>
          <h3>Applicable Policies</h3>
          <div className="legal-box">
           <h4>
           In addition to these Terms and Conditions, your access to and use of the Content and the Service is subject to HiFi Bridge’s then-current policies relating to the Content and the Service, including, without limitation, Rhfv2.420160108 the HiFi Bridge Privacy Policy available on the Service.
            </h4>
            <p>
            You agree to be bound by these policies and all other HiFi Bridge policies applicable to the access and use of the Content and the Service. By using the Service, you are consenting to have your personal data transferred to and processed by HiFi Bridge and its affiliates. As part of providing you the Service, HiFi Bridge may need to provide you with certain communications, such as service announcements and administrative messages. These communications are considered part of the Service, which you may not be able to opt-out from receiving.
            </p>
          </div>
        </div>
      </section>

      <section className="LegalSectionWrap">
        <div className="LegalSection">
          <h6>Section 11</h6>
          <h3>Indemnification</h3>
          <div className="legal-box">
            <p>
            You will indemnify and hold harmless HiFi Bridge and the Third-Party Providers, and the officers, directors, agents, partners, employees, licensors, distributors, and representatives of HiFi Bridge and the Third-Party Providers, from and against any and all claims, demands, actions, causes of action, suits, proceedings, losses, damages, costs, and expenses, including reasonable attorneys' fees, arising from or relating to your access and/or use of, or interaction with the Content (including, without limitation, Third Party Content), or any act, error, or omission of your use of your account or any user of your account, in connection therewith, including, but not limited to, matters relating to incorrect, incomplete, or misleading information; libel; invasion of privacy; infringement of a copyright, trade name, trademark, service mark, or other intellectual property; any defective product or any injury or damage to person or property caused by any products sold or otherwise distributed through or in connection with the Service; or violation of any applicable law.
            </p>
          </div>
        </div>
      </section>
      <section className="LegalSectionWrap Grey">
        <div className="LegalSection">
          <h6>Section 12</h6>
          <h3>Revisions</h3>
          <div className="legal-box">
           <h4>
           HiFi Bridge may at any time revise these Terms and Conditions by updating this document.
            </h4>
            <p>
            You agree to be bound by subsequent revisions and agree to review these Terms and Conditions periodically for changes. The most updated version of this document will be available for your review under the “HiFi Bridge Terms and Conditions” link that appears on the HiFi Bridge website and mobile application.
            </p>
          </div>
        </div>
      </section>

      <section className="LegalSectionWrap">
        <div className="LegalSection">
          <h6>Section 13</h6>
          <h3>Applicable Law and Venue; Severability</h3>
          <div className="legal-box">
           <h4>
           You agree that these Terms and Conditions shall be governed by and interpreted in accordance with the laws of the State of California, without giving effect to principles of conflicts of law.
            </h4>
            <p>
            Any legal action or proceeding arising under these Terms and Conditions will be brought exclusively in courts located in Santa Clara County, California, and you hereby irrevocably consent to the personal jurisdiction and venue therein. If any provision of these Terms and Conditions is deemed unlawful, void or for any reason unenforceable, then that provision will be deemed severable from these Terms and Conditions and will not affect the validity and enforceability of the remaining provisions.
            </p>
          </div>
        </div>
      </section>





 

      <Footer />

    

    </main>
  );
}


