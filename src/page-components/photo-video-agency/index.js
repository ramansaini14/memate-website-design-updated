import React from 'react'
import Layout from '../../layout'
import PhotoPageContent from '../../components/photo-video-agency'
import { Helmet } from 'react-helmet-async'

const PhotoPage = ({postsLatest}) => {
  return (
    <>
      <Helmet>
    <title>Studio Management Software for Photo & Video Teams | MeMate</title>
    <meta name="description" content="All-in-one software for photo and video agencies. Manage shoots, quotes, schedules, clients, and invoices — no more chaos across tools." />
    <meta property="og:title" content="Studio Management Software for Photo & Video Teams | MeMate" />
      <meta property="og:description" content="All-in-one software for photo and video agencies. Manage shoots, quotes, schedules, clients, and invoices — no more chaos across tools.
    " />
</Helmet>
    <Layout>
      <PhotoPageContent postsLatestMainIndustry={postsLatest}/>
    </Layout>
    </>
  )
}

export default PhotoPage
