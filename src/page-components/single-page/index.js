import Layout from "../../layout";
import React from "react";
import Single from "../../components/single-page";

const SinglePage = ({posts, postsLatest, slug, ...otherProps}) => {

  return (
    <Layout>
      <Single 
        postsSingle={posts} 
        postsLatest={postsLatest}
        slug={slug}
        {...otherProps}
      />
    </Layout>
  );
};
export default SinglePage;