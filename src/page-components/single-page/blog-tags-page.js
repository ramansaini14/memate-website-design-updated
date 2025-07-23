import Layout from "../../layout";
import React from "react";
import NewsTagsComponents from "../../components/single-page/news-tags";
const BlogTagPage = ({postsSingle,postsLatest}) => {

  return (
    <Layout>
      <NewsTagsComponents postsSingle={postsSingle} postsLatest={postsLatest} />
    </Layout>
  );
};
export default BlogTagPage;
