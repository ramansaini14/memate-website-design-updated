import React from 'react'
import Layout from '../../layout'
import IndustryPageContent from '../../components/industry'
import { Helmet } from 'react-helmet-async'

const IndustryPage = ({postsLatest}) => {

 
  return (
    <>
      <Helmet>
    <title>Agency Management Software for Creative Teams | MeMate</title>
    <meta name="description" content="MeMate helps creative agencies manage projects, quotes, time tracking and team tasks — all in one platform. Aussie-built agency management software." />
    <meta property="og:title" content="Agency Management Software for Creative Teams | MeMate" />
      <meta property="og:description" content="MeMate helps creative agencies manage projects, quotes, time tracking and team tasks — all in one platform. Aussie-built agency management software.
    " />
</Helmet>
    <Layout>
      <div className="bgshadowwrapper">
      <IndustryPageContent postsLatestMainIndustry={postsLatest}/>
      </div>
    </Layout>
    </>
  )
}

export default IndustryPage
