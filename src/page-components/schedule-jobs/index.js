import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/schedule-jobs";
import { Helmet } from "react-helmet-async";

const CommunicationPage = () => {
  return (
    <>
     <Helmet>
    <title>Schedule, Assign & Track Jobs | Job Management with MeMate</title>
    <meta name="description" content="Assign, schedule and track jobs with ease. MeMate’s job management software helps Aussie businesses stay on top of every task, team and deadline." />
    <meta property="og:title" content="Schedule, Assign & Track Jobs | Job Management with MeMate" />
      <meta property="og:description" content="Assign, schedule and track jobs with ease. MeMate’s job management software helps Aussie businesses stay on top of every task, team and deadline.
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

export default CommunicationPage;
