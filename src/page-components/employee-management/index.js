import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/employee-management";
import { Helmet } from "react-helmet-async";

const EmployeeManagementPage = () => {
  return (
    <>
      <Helmet>
    <title>Employee Management Software for Aussie Teams | MeMate</title>
    <meta name="description" content="Roster, schedule and manage your team in one place. MeMate’s employee management software is built for Aussie businesses that want less admin, more control." />
    <meta property="og:title" content="Employee Management Software for Aussie Teams | MeMate" />
      <meta property="og:description" content="Roster, schedule and manage your team in one place. MeMate’s employee management software is built for Aussie businesses that want less admin, more control.
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

export default EmployeeManagementPage;
