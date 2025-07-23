import React from 'react'
import Layout from '../../layout';
import IndustriesComponent from '../../components/industries';
import { Helmet } from 'react-helmet-async';
const IndustriesPage = () => {
  return (
    <>
      <Helmet>
    <title>Built for Every Industry | MeMate Business Tools by Sector</title>
    <meta name="description" content="From tradies to agencies, MeMate supports industries across Australia with all-in-one business management software — tailored to how you work." />
    <meta property="og:title" content="Built for Every Industry | MeMate Business Tools by Sector" />
      <meta property="og:description" content="From tradies to agencies, MeMate supports industries across Australia with all-in-one business management software — tailored to how you work.
    " />
</Helmet>
    <Layout>
      <div className="bgshadowwrapper">
        <IndustriesComponent/>
        </div>
    </Layout>
    </>
  )
}

export default IndustriesPage;
