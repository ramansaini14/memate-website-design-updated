import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/project-management";
import { Helmet } from "react-helmet-async";

const ProjectManagementPage = () => {
  return (
    <>
      <Helmet>
    <title>Project Management Software for Aussie Businesses | MeMate</title>
    <meta name="description" content="Manage business projects, tasks and teams with ease. MeMate’s project management software is built for Australian small and medium-sized businesses." />
    <meta property="og:title" content="Project Management Software for Aussie Businesses | MeMate" />
      <meta property="og:description" content="Manage business projects, tasks and teams with ease. MeMate’s project management software is built for Australian small and medium-sized businesses." />
</Helmet>
    <Layout>
      <div className="project-management-banner">
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
