import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/memate-vs-servicem8";
import { Helmet } from "react-helmet-async";
const Services8Page = () => {
  return (
    <>
     <Helmet>
    <title>Client Management Software | CRM Tools for Small Businesses in Australia</title>
    <meta name="description" content="Streamline managing clients and prospective clients with MeMate’s cloud-based CRM software. 
      Designed for small businesses in Australia, our tools help organise your client database and improve relationships." />
    <meta property="og:title" content="Client Management Software | CRM Tools for Small Businesses in Australia" />
      <meta property="og:description" content="Streamline managing clients and prospective clients with MeMate’s cloud-based CRM software. 
      Designed for small businesses in Australia, our tools help organise your client database and improve relationships." />
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

export default Services8Page;
