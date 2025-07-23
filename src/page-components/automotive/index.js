import React from 'react'
import Layout from '../../layout'
import AutomotivePageContent from '../../components/automotive'
import { Helmet } from 'react-helmet-async'

const AutomotivePage = ({postsLatest}) => {
  return (
    <>
      <Helmet>
    <title>Automotive Workshop Software for Aussie Businesses | MeMate</title>
    <meta name="description" content="Run your auto repair shop or service business with MeMate — manage jobs, quotes, schedules, payments & more, all in one smart Aussie-built platform." />
    <meta property="og:title" content="Automotive Workshop Software for Aussie Businesses | MeMate" />
      <meta property="og:description" content="Run your auto repair shop or service business with MeMate — manage jobs, quotes, schedules, payments & more, all in one smart Aussie-built platform.
    " />
</Helmet>
    <Layout>
      <AutomotivePageContent postsLatestMainIndustry={postsLatest}/>
    </Layout>
    </>
  )
}

export default AutomotivePage
