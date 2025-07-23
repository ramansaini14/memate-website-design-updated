import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/reports";
import { Helmet } from "react-helmet-async";

const ReportsPage = () => {
  return (
    <>
      <Helmet>
    <title>Track Your Business Performance | Reporting Tools by MeMate</title>
    <meta name="description" content="Get real-time business insights, track performance, and stay on top of finances. MeMate’s reporting software is built for Aussie small and medium businesses." />
    <meta property="og:title" content="Track Your Business Performance | Reporting Tools by MeMate" />
      <meta property="og:description" content="Get real-time business insights, track performance, and stay on top of finances. MeMate’s reporting software is built for Aussie small and medium businesses.
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

export default ReportsPage;
