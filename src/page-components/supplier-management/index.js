import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/supplier-management";
import { Helmet } from "react-helmet-async";
const SupplierManagementPage = () => {
  return (
    <>
      <Helmet>
    <title>Manage Suppliers & Contractors Easily | MeMate Software</title>
    <meta name="description" content="Track and manage suppliers, contractors, and contacts in one place. MeMate helps Aussie businesses streamline communication and control." />
    <meta property="og:title" content="Manage Suppliers & Contractors Easily | MeMate Software" />
      <meta property="og:description" content="Track and manage suppliers, contractors, and contacts in one place. MeMate helps Aussie businesses streamline communication and control." />
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

export default SupplierManagementPage;
