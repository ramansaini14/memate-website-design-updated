import React from 'react'
import Layout from '../../layout';
import PageNotFound from '../../components/error-page';
const ErrorPage = ({num}) => {

  return (
    <Layout>
        <PageNotFound redirects={num}/>
    </Layout>
  )
}

export default ErrorPage;
