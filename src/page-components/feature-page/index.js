import Layout from "../../layout";
import { Helmet } from 'react-helmet-async';
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/sale";

const FeaturePage = () => {
  return (
    <>
     <Helmet>
    <title>Sales Management Software for Aussie Businesses | MeMate</title>
    <meta name="description" content="Manage leads, quotes, and deals in one spot. MeMate’s sales management software helps Aussie businesses stay organised and close faster." />
    <meta property="og:title" content="Sales Management Software for Aussie Businesses | MeMate" />
      <meta property="og:description" content="Manage leads, quotes, and deals in one spot. MeMate’s sales management software helps Aussie businesses stay organised and close faster." />
    </Helmet>
    <Layout> 
       <div className="bgshadowwrapper">
      <SalesComponent />
      <SalesComponentFeature />
      <SmartInvestment />
      <QuestionAnswer />
 </div>
    </Layout>
    </>
  );
};

export default FeaturePage;
