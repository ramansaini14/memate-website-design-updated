'use client';

import AppWrapper from '../../../../components/AppWrapper';
import BlogTagPage from '../../../../page-components/single-page/blog-tags-page';

export default function BlogTag({ params }) {
  return (
    <AppWrapper>
      <BlogTagPage slug={params.slug} />
    </AppWrapper>
  );
}