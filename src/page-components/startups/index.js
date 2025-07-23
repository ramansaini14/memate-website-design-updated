import React from 'react'
import Layout from '../../layout'
import StartupsPageContent from '../../components/startups'
import { Helmet } from 'react-helmet-async'

const StartupsPage = ({postsLatest}) => {
  return (
    <>
      <Helmet>
    <title>Startup Business Management Software | MeMate Australia</title>
    <meta name="description" content="Run your startup smarter with MeMate — CRM, project tools, quotes, invoicing & team management in one Aussie-built platform. Less busy-work, more growth." />
    <meta property="og:title" content="Startup Business Management Software | MeMate Australia" />
      <meta property="og:description" content="Run your startup smarter with MeMate — CRM, project tools, quotes, invoicing & team management in one Aussie-built platform. Less busy-work, more growth.
    " />
</Helmet>
    <Layout>
      <StartupsPageContent postsLatestMainIndustry={postsLatest}/>
    </Layout>
    </>
  )
}

export default StartupsPage
