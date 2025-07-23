import Layout from "../../layout";
import React from "react";
import CustomerStories from "../../components/customer-stories";
const CustomerStoriesPage = () => {


  return (
    <Layout>
      <div className="bgshadowwrapper">
     <CustomerStories />
     </div>
    </Layout>
  );
};
export default CustomerStoriesPage;