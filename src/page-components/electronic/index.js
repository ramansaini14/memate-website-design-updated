import React from 'react'
import Layout from '../../layout'
import ElectronicPageContent from '../../components/electronic'
import { Helmet } from 'react-helmet-async'

const ElectronicPage = ({postsLatest}) => {
  return (
    <>
      <Helmet>
    <title>Repair Shop Management Software for Electronics Businesses | MeMate</title>
    <meta name="description" content="Run your electronics repair business with MeMate — quote jobs, track repairs, manage customers and stay organised with our all-in-one software." />
    <meta property="og:title" content="Repair Shop Management Software for Electronics Businesses | MeMate" />
      <meta property="og:description" content="Run your electronics repair business with MeMate — quote jobs, track repairs, manage customers and stay organised with our all-in-one software.
    " />
</Helmet>
    <Layout>
      <ElectronicPageContent postsLatestMainIndustry={postsLatest}/>
    </Layout>
    </>
  )
}

export default ElectronicPage
