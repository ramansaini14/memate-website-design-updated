import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/job-approval";
import { Helmet } from "react-helmet-async";

const JobApprovalPage = () => {
  return (
    <>
     <Helmet>
    <title>Get Jobs Signed Off Faster | MeMate Job Approval Tools</title>
    <meta name="description" content="Track job progress, get sign-offs, and keep everyone accountable. MeMate’s job approval software helps Aussie teams close the loop — no paperwork needed." />
    <meta property="og:title" content="Get Jobs Signed Off Faster | MeMate Job Approval Tools" />
      <meta property="og:description" content="Track job progress, get sign-offs, and keep everyone accountable. MeMate’s job approval software helps Aussie teams close the loop — no paperwork needed.
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

export default JobApprovalPage;
