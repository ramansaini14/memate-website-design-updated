import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/time-tracker";
import { Helmet } from "react-helmet-async";

const TimeTrackerPage = () => {
  return (
    <>
     <Helmet>
    <title>Time Tracking Software for Aussie Teams | MeMate</title>
    <meta name="description" content="Track time, log hours and simplify timesheets. MeMate’s time tracking software helps Aussie businesses manage jobs and staff without the paperwork." />
    <meta property="og:title" content="Time Tracking Software for Aussie Teams | MeMate" />
      <meta property="og:description" content="Track time, log hours and simplify timesheets. MeMate’s time tracking software helps Aussie businesses manage jobs and staff without the paperwork.
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

export default TimeTrackerPage;
