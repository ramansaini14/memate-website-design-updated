import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/communication";
import { Helmet } from "react-helmet-async";

const CommunicationPage = () => {
  return (
    <>
      <Helmet>
    <title>Keep Your Team in Sync | MeMate Communication Tools</title>
    <meta name="description" content="No more scattered messages. Keep team chats, tasks and updates in one place — MeMate makes internal communication easy for small businesses." />
    <meta property="og:title" content="Keep Your Team in Sync | MeMate Communication Tools" />
      <meta property="og:description" content="No more scattered messages. Keep team chats, tasks and updates in one place — MeMate makes internal communication easy for small businesses.
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
