import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/multi-location";
import { Helmet } from "react-helmet-async";

const JobApprovalPage = () => {
  return (
    <>
     <Helmet>
    <title>Multi-Location Management Software | MeMate</title>
    <meta name="description" content="One platform to manage all your business locations, staff and jobs. MeMate keeps your operations connected across sites." />
    <meta property="og:title" content="Multi-Location Management Software | MeMate" />
      <meta property="og:description" content="One platform to manage all your business locations, staff and jobs. MeMate keeps your operations connected across sites." />
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

export default JobApprovalPage;
