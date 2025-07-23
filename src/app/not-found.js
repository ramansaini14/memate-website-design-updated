'use client';

// import AppWrapper from '../components/AppWrapper';
import PageNotFound from '../components/error-page';
import Layout from '../layout';

export default function NotFound() {
  return (
    <Layout>
      <PageNotFound redirects={1} />
    </Layout>
  );
}
