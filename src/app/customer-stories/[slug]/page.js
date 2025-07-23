'use client';

import AppWrapper from '../../../components/AppWrapper';
import CustomerStoriesPageSingle from '../../../page-components/customer-stories-single';

export default async function CustomerStorySlug({ params }) {
  const resolvedParams = await params;
  
  return (
    <AppWrapper>
      <CustomerStoriesPageSingle params={resolvedParams} />
    </AppWrapper>
  );
}
