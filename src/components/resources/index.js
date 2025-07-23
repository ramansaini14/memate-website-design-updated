

import "./style.css";
import style from './resources.module.scss';
import { Helmet } from "react-helmet-async";
import Link from "next/link";

const ResourcesComponent = () => {
  return (
    <> 
     <Helmet>
    <title>Resources | Business Management Guides & Tools by meMate</title>
    <meta name="description" content="Access MeMate’s library of resources, including business management guides, CRM tutorials, and workflow automation tips. 
      Empower your Australian small business with expert tools and advice" />
    <meta property="og:title" content="Resources | Business Management Guides & Tools by meMate" />
      <meta property="og:description" content="Access MeMate’s library of resources, including business management guides, CRM tutorials, and workflow automation tips. 
      Empower your Australian small business with expert tools and advice
    " />
</Helmet>
    <div className={`${style.mainMenuPages} ${style.ResourcesPages}`}>

<div className={`sales-component-wrapper salesfeaturesWrapper ${style.mainHeadTitle}`}>
         <h1 className="h1tagsseo h1tagsseof fontWeight">Technology from the future, solving today’s problems.</h1>
          <h2>resources</h2>
          <span>
          Here are meMate’s main features to help you quickly understand if it will be suitable for your<br/> business.
          </span>
           <h4 className={style.h4Heading}>Explore Resources for Business Management and CRM Solutions</h4>
        </div>





    <div className={style.mainGridWrap}>
      <h2>Resources and Tools</h2>
      <div className={style.mainGridwtapFlex}>
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
       <div className={style.itemText}>
       <Link href="/supplier-database"><h3>Supplier Database</h3></Link>
       </div>
       </div>{/* Item Box */}
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
       <div className={style.itemText}>
       <Link href="/delete-request"><h3>Delete Request</h3></Link>
       </div>
       </div>{/* Item Box */}
       </div>
    </div>
    <div className={style.mainGridWrap}>
      <h2>Memate Manual</h2>
      <div className={style.mainGridwtapFlex}>
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
       <div className={style.itemText}>
       <Link href="/knowledge-base"> <h3>Knowledge Database</h3></Link>
       </div>
       </div>{/* Item Box */}
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
       <div className={style.itemText}>
       <Link href="/memate-brand"><h3>meMate Brand</h3></Link>
       </div>
       </div>{/* Item Box */}
       </div>
    </div>
    <div className={style.mainGridWrap}>
      <h2>Business Support</h2>
      <div className={style.mainGridwtapFlex}>
      <div className={`itemFlex ${style.itemFlex}`}>{/* Item Box */}
       <div className={style.itemText}>
       <Link href="/memate-wiki"> <h3>Memate Wiki</h3></Link>
       </div>
       </div>{/* Item Box */}
       </div>
    </div>
    </div>

    </>
  );
};

export default ResourcesComponent;
