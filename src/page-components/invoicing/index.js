import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/invoicing";
import { Helmet } from "react-helmet-async";

const ProjectManagementPage = () => {
  return (
    <>
      <Helmet>
    <title>Invoicing Software for Your Business | MeMate</title>
    <meta name="description" content="Create and send invoices in seconds. Aussie-made invoicing software to help you run your business — simple, automated, and all-in-one." />
    <meta property="og:title" content="Invoicing Software for Your Business | MeMate" />
      <meta property="og:description" content="Create and send invoices in seconds. Aussie-made invoicing software to help you run your business — simple, automated, and all-in-one.
    " />
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

export default ProjectManagementPage;
