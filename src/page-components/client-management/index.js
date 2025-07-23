import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/client-management";
import { Helmet } from "react-helmet-async";
const ClientPage = () => {
  return (
    <>
     <Helmet>
    <title>Client Management Software for Aussie Businesses | MeMate</title>
    <meta name="description" content="Manage clients, contacts, and communications in one place. MeMate’s all-in-one client management software is built for Australian businesses." />
    <meta property="og:title" content="Client Management Software for Aussie Businesses | MeMate" />
      <meta property="og:description" content="Manage clients, contacts, and communications in one place. MeMate’s all-in-one client management software is built for Australian businesses." />
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

export default ClientPage;
