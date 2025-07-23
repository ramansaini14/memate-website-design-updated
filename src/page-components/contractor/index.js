import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/contractor";
import { Helmet } from "react-helmet-async";

const ContractorPage = () => {
  return (
    <>
      <Helmet>
    <title>Contractor Management Software for Aussie Businesses | MeMate</title>
    <meta name="description" content="Assign jobs, track progress and manage contractors all in one place. MeMate’s contractor management software is built for Aussie service businesses." />
    <meta property="og:title" content="Contractor Management Software for Aussie Businesses | MeMate" />
      <meta property="og:description" content="Assign jobs, track progress and manage contractors all in one place. MeMate’s contractor management software is built for Aussie service businesses." />
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

export default ContractorPage;
