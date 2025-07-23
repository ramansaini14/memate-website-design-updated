import Layout from "../../layout";
import React from "react";
import CategoryComponents from '../../components/single-page/category-page'
const CategoryPage = ({postsSingle,postsLatest,PostsCategories}) => {

  return (
    <Layout>
      <CategoryComponents postsSingle={postsSingle}  postsLatest={postsLatest} />
    </Layout>
  );
};
export default CategoryPage;
