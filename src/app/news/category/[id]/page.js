'use client';

import AppWrapper from '../../../../components/AppWrapper';
import CategoryPage from '../../../../page-components/single-page/category-page';

export default function BlogCategory({ params }) {
  return (
    <AppWrapper>
      <CategoryPage categoryId={params.id} />
    </AppWrapper>
  );
}