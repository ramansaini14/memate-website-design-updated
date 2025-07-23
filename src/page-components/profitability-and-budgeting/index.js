import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/profitability-and-budgeting";
import { Helmet } from "react-helmet-async";

const ProfitabilityAndBudgetingPage = () => {
  return (
    <>
      <Helmet>
    <title>Budgeting & Profitability Software for Aussie Businesses | MeMate</title>
    <meta name="description" content="See where you’re making money — and where you’re not. MeMate helps you budget smarter and track job profitability in real time." />
    <meta property="og:title" content="Budgeting & Profitability Software for Aussie Businesses | MeMate" />
      <meta property="og:description" content="See where you’re making money — and where you’re not. MeMate helps you budget smarter and track job profitability in real time.
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

export default ProfitabilityAndBudgetingPage;
