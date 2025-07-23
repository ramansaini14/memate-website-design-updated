import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;
  const queryString = url.search;
  const pathWithQuery = pathname + queryString;

// 301 redirects
  const redirects = {
    '/what-is-memate': '/about',
    '/data-single': '/supplier-database',
    '/data-single/memate-enterprise-pty-limited': '/supplier-database',
    '/data-single/safety-xpress-online': '/supplier-database',
    '/internal-chat': '/features/internal-communication-tools',
    '/features-news': '/news',
    '/feed': '/news',
    '/keep-your-teams-productivity-in-check-with-workforce-management-system': '/news/keep-your-team-s-productivity-in-check-with-workforce-management-system',
    '/memate-for-advertising-agencies-streamlining-project-management-and-contractor-management': '/news/optimize-operations-in-2024--harness-the-power-of-software-for-business-management',
    '/news/category/11': '/news',
    '/features/your-business-news-management': '/features',
    '/thank-you-contact': '/',
    '/terms-and-conditions': '/terms',
    '/news/ideal-tools-for-smbs': '/news/time-tracking--the-project-management-need-memate-is-ready-to-meet',
    '/404': '/',
    '/news/top-business-process-management-software': '/news/top-5-business-process-management-software-in-2022',
    '/task-management': '/features/task-management-software',
    '/news/business-process-software': '/news/24-best-business-management-software-2023-update',
    '/news/business-management-software-2024': '/news/streamline-your-operations-in-2024-with-the-best-business-management-software-solutions',
    '/news/business-process-management': '/news/unlocking-efficiency--the-power-of-business-process-management-software',
    '/news/website-optimisation': '/news/from-chaos-to-clarity-5-steps-to-organise-your-new-business-like-a-pro',
    '/news/top-crm-software': '/news/empower-your-small-business-with-the-10-best-crm-solutions-in-australia-for-2023',
    '/news/software-for-business-growth': '/news/24-best-business-management-software-2023-update',
    '/news/australian-business-solutions': '/news/5-top-business-management-software-solutions-in-australia-2023',
    '/news/enhance-efficiency': '/news/unlocking-efficiency--the-power-of-business-process-management-software',
    '/news/bmp-selection-criteria': '/news/choosing-the-right-business-process-management-software-provider-in-2024',
    '/news/project-tracking-software': '/news/revealed--top-4-project-management-systems-to-drive-profitability-in-2023',
    '/news/business-process-improvement': '/news/how-memate-helped-improve-a-yacht-management-service',
    '/news/tags/': '/news',
    '/news/software-for-business-management': '/news/optimize-operations-in-2024--harness-the-power-of-software-for-business-management',
    '/news/workflow-management-for-small-businesses': '/news/time-tracking--the-project-management-need-memate-is-ready-to-meet',
    '/news/memate-features': '/news/software-comparison-servicem8-vs-memate',
    '/news/small-business-management-software': '/news/how-a-digital-agency-benefitted-from-memate',
    '/news/crm-for-small-businesses': '/news/choosing-the-best-crm-for-small-business-in-australia',
    '/news/tags/efficiency-tools-for-smes': '/news/why-smes-should-make-workflow-automation-the-focal-point-in-2023',
    '/news/tags/business-process-management': '/news/from-lead-to-results--navigating-business-processes-with-memate',
    '/news/software-strategies-2024': '/news/mastering-efficiency-how-to-effectively-manage-business-software-solutions',
    '/news/success-proof-business': '/news/all-in-one-business-process-management-software-solutions--should-you-invest-in-it',
    '/news/enhance-customer-relationships': '/news/empower-your-small-business-with-the-10-best-crm-solutions-in-australia-for-2023',
    '/news/2023-software-insights': '/news/24-best-business-management-software-2023-update',
    '/news/process-optimization': '/news/all-in-one-business-process-management-software-solutions--should-you-invest-in-it',
    '/news/automation-tools': '/news/how-can-memate-support-your-remote-productivity',
    '/news/business-performance': '/news/streamline-your-operations-in-2024-with-the-best-business-management-software-solutions',
    '/news/tags/process-optimization': '/news/how-can-memate-support-your-remote-productivity',
    '/news/tags/enhance-customer-relationships': '/news/empower-your-small-business-with-the-10-best-crm-solutions-in-australia-for-2023',
    '/news/progress-tracking-software': '/news/time-tracking--the-project-management-need-memate-is-ready-to-meet',
    '/news/process-optimization-software': '/news/the-future-of-business-process-management-software-solutions',
    '/news/business-productivity-tools': '/news/elevate-efficiency-finding-the-right-software-for-business-management',
    '/news/startup-tips': '/news/from-chaos-to-clarity-5-steps-to-organise-your-new-business-like-a-pro',
    '/news/business-efficiency': '/news/top-5-business-management-software-2022',
    '/news/enhance-productivity': '/news/why-smes-should-make-workflow-automation-the-focal-point-in-2023',
    '/news/best-project-management-software': '/news/5-best-project-management-tools-in-australia-2023-2',
    '/news/effective-software-management': '/news/mastering-efficiency-how-to-effectively-manage-business-software-solutions',
    '/news/manage-business-software': '/news/mastering-efficiency-how-to-effectively-manage-business-software-solutions',
    '/news/customer-relationship-management-australia': '/news/empower-your-small-business-with-the-10-best-crm-solutions-in-australia-for-2023',
    '/news/tags/business-software-trends': '/news/24-best-business-management-software-2023-update',
    '/news/tags/shift-management-software': '/news/introducing-showcase--a-new-interactive-design-community',
    '/news/scale-your-business': '/news/why-smes-should-make-workflow-automation-the-focal-point-in-2023',
    '/news/workflow-enhancement': '/news/how-can-memate-support-your-remote-productivity',
    '/news/tags/enhance-efficiency': '/news/unlocking-efficiency--the-power-of-business-process-management-software',
    '/news/tags/streamline-business-processes': '/news/what-makes-business-process-management-software-your-winning-wager',
    '/get-better-returns-in-2023-by-switching-to-a-project-management-software/': '/news/get-better-returns-in-2023-by-switching-to-a-project-management-software',
    '/category/rel/feed/': '/news',
    '/fusion_tb_category/header/': '/news',
    '/business-process-management-software-2/feed/': '/news/from-lead-to-results--navigating-business-processes-with-memate',
    '/time-tracking-the-project-management-need-memate-is-ready-to-meet/': '/news/time-tracking--the-project-management-need-memate-is-ready-to-meet',
    '/streamline-your-operations-in-2024-with-the-best-business-management-software-solutions/feed/': '/news/streamline-your-operations-in-2024-with-the-best-business-management-software-solutions',
    '/everything-you-need-to-know-about-the-impact-of-management-software-on-small-businesses/feed/': '/news/everything-you-need-to-know-about-the-impact-of-management-software-on-small-businesses',
    '/5-top-business-management-software-solutions-in-australia-2023/feed/': '/news/5-top-business-management-software-solutions-in-australia-2023',
    '/category/second/': '/news',
    '/memate-labels-have-exponentially-increased-productivity-and-organization-here-at-camerafix/feed/': '/news/memate-labels-have-exponentially-increased-productivity-and-organization-here-at-camerafix',
    '/5-best-project-management-tools-in-australia-2023-2/feed/': '/news/5-best-project-management-tools-in-australia-2023-2',
    '/unlocking-business-potential-in-2024-the-power-of-business-management-software-in-australia/feed/': '/news/unlocking-business-potential-in-2024-the-power-of-business-management-software-in-australia',
    '/best-business-management-application-to-run-a-repair-business/feed/': '/news/best-business-management-application-to-run-a-repair-business',
    '/top-5-business-management-software-2022/feed/': '/news/top-5-business-management-software-2022',
    '/news/page/5/': '/news',
    '/testimonial/camera-fix/': '/customer-stories/camera-fix',
    '/how-a-digital-agency-benefitted-from-memate/': '/news/how-a-digital-agency-benefitted-from-memate',
    'brand-information': '/brand',
    '/how-memate-helped-improve-a-yacht-management-service/': '/news/how-memate-helped-improve-a-yacht-management-service',
    '/creative-agencies': '/industries/business-software-for-creative-agencies',
    '/job-approval': '/features/job-approval-software',
    '/time-tracker': '/features/time-tracking-tools',
    '/category/first/': '/news',
    '/time-sheet': '/features/time-tracking-software',
    '/mastering-efficiency-how-to-effectively-manage-business-software-solutions/': '/news/mastering-efficiency-how-to-effectively-manage-business-software-solutions',
    '/business-process-management-software-2/': '/news/unlocking-efficiency--the-power-of-business-process-management-software',
    '/streamline-your-operations-choosing-the-right-business-management-software-in-australia/': '/news/streamline-your-operations--choosing-the-right-business-management-software-in-australia',
    '/why-memate/': '/about',
    '/introducing-showcase-a-new-interactive-design-community/': '/news/introducing-showcase--a-new-interactive-design-community',
    '/signup/': 'https://app.memate.com.au/onboarding',
    '/all-in-one-business-process-management-software-solutions-should-you-invest-in-it/': '/news/all-in-one-business-process-management-software-solutions--should-you-invest-in-it',
    '/how-can-memate-support-your-remote-productivity/': '/news/how-can-memate-support-your-remote-productivity',
    '/tag/business-process-management-software-companies/': '/news/the-future-of-business-process-management-software-solutions',
    '/elevate-efficiency-finding-the-right-software-for-business-management/': '/news/elevate-efficiency-finding-the-right-software-for-business-management',
    '/memate-for-digital-agencies-streamlining-quote-project-management-and-invoicing-in-one-place/': '/news/memate-labels-have-exponentially-increased-productivity-and-organization-here-at-camerafix',
    'requestdemo/set-new-password': 'https://app.memate.com.au/requestdemo',
    '/streamline-your-operations-in-2024-with-the-best-business-management-software-solutions/': '/news/streamline-your-operations-in-2024-with-the-best-business-management-software-solutions',
    '/requestdemoo': 'https://app.memate.com.au/requestdemo',
    '/what-makes-business-process-management-software-your-winning-wager/': '/news/what-makes-business-process-management-software-your-winning-wager',
    'memate-faqs': '/faqs',
    '/memate-for-marketing-agencies-unlocking-efficient-project-management-and-delegation/': '/news/choosing-the-best-crm-for-small-business-in-australia',
    '/memate-for-designers-keeping-all-correspondence-in-one-place/': '/news',
    '/business-process-management-software-5-things-to-look-for/': '/news/business-process-management-software-5-things-to-look-for',
    '/onborading': 'https://app.memate.com.au/onboarding',
    '/5-signs-your-small-business-in-australia-needs-management-software/': '/news/5-signs-your-small-business-in-australia-needs-management-software',
    '/tag/all-in-one-business-management-software/': '/news/all-in-one-business-process-management-software-solutions--should-you-invest-in-it',
    '/tag/business-organisation-software/': '/news/revealed--top-4-project-management-systems-to-drive-profitability-in-2023',
    '/business-process-management-software/': '/features/project-management-software',
    '/product/desktop-admin/': '/pricing',
    '/careers/': 'https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F78408530',
    '/calendar': '/features/calendar-timeline-management-software',
    '/shop/': '/pricing',
    '/electronic-repair-specialists/': '/industries/software-for-electronic-repair-businesses',
    '/wp-admin/admin-ajax.php': '/',
    '/log-in/': 'https://app.memate.com.au/login',
    '/calculators': '/features/business-quote-calculator',
    '/profitability-and-budgeting': '/features/profitability-and-budgeting-software',
    '/tag/small-business-management-software-australia/': '/news/why-smes-should-make-workflow-automation-the-focal-point-in-2023',
    '/choosing-the-right-business-management-software-a-comprehensive-review/': '/news/choosing-the-right-business-management-software--a-comprehensive-review',
    '/why-smes-should-make-workflow-automation-the-focal-point-in-2023/': '/news/why-smes-should-make-workflow-automation-the-focal-point-in-2023',
    '/revolutionize-your-digital-agency-with-memate/': '/news/revolutionize-your-digital-agency-with-memate',
    '/software-comparison-servicem8-vs-memate/': '/news/software-comparison-servicem8-vs-memate',
    '/memate-labels-have-exponentially-increased-productivity-and-organization-here-at-camerafix/': '/news/memate-labels-have-exponentially-increased-productivity-and-organization-here-at-camerafix',
    '/product-category/device/': '/pricing',
    '/about-us/': '/about',
    '/category/rel/': '/news',
    '/project-management-systems/': '/news/revealed--top-4-project-management-systems-to-drive-profitability-in-2023',
    '/5-best-project-management-tools-in-australia-2023/': '/news/5-best-project-management-tools-in-australia-2023-2',
    '/choosing-the-best-crm-for-small-business-in-australia/': '/news/choosing-the-best-crm-for-small-business-in-australia',
    '/direct-debit-service-request-agreement/': '/terms',
    '/add-company/': '/add-your-company',
    '/what-is-memate/': '/about',
    '/news/page/6/': '/news',
    '/news/page/3/': '/news',
    '/news/page/2/': '/news',
    '/tag/top-business-management-app-for-repairs/': '/news/24-best-business-management-software-2023-update',
    '/statistic': '/',
    '/4-project-management-systems-to-drive-profitability-in-2023/': '/news/revealed--top-4-project-management-systems-to-drive-profitability-in-2023',
    '/5-best-project-management-tools-in-australia-2023/feed/': '/news/5-best-project-management-tools-in-australia-2023-2',
    '/my-account/': 'https://app.memate.com.au/requestdemo',
    '/news/page/4/': '/news',
    '/author/devthead-com-au/page/3/': '/news',
    '/author/devthead-com-au/page/4/': '/news',
    '/my-account/lost-password/': 'https://app.memate.com.au/requestdemo',
    '/fusion_tb_category/footer/': '/news',
    '/tag/business-organisation-software/feed/': '/news',
    '/my-account/add-ons/': '/',
    '/software-comparison-servicem8-vs-memate/feed/': '/memate-vs-servicem8',
    '/author/devthead-com-au/feed/': '/news',
    '/client-management': '/features/client-management-software',
    '/construction': '/industries/business-software-for-construction-industry',
    '/news/page/7/': '/news'
  };

  // Query parameter redirects
  const queryRedirects = {
    '/product-category/device/?add-to-cart=1574': '/pricing',
    '/product-category/device/?add-to-cart=1573': '/pricing',
    '/product-category/device/?product_orderby=date&product_count=36': '/pricing',
    '/product-category/device/?product_orderby=date&product_count=24': '/pricing',
    '/product-category/device/?product_orderby=name&product_count=24': '/pricing',
    '/product-category/device/?product_orderby=popularity': '/pricing',
    '/product-category/device/?product_orderby=rating': '/pricing',
    '/product-category/device/?product_orderby=name': '/pricing',
    '/product-category/device/?product_count=36': '/pricing',
    '/product-category/device/?product_count=24&product_view=grid': '/',
    '/get-better-returns-in-2023-by-switching-to-a-project-management-software?ref=aftership': '/news/get-better-returns-in-2023-by-switching-to-a-project-management-software'
  };

  // Check query parameter redirects first
  if (queryRedirects[pathWithQuery]) {
    const destination = queryRedirects[pathWithQuery];
    if (destination.startsWith('http')) {
      return NextResponse.redirect(destination, 301);
    }
    url.pathname = destination;
    url.search = '';
    return NextResponse.redirect(url, 301);
  }

  // Check if the current pathname matches any redirect
  if (redirects[pathname]) {
    const destination = redirects[pathname];
    
    // Check if it's an external redirect
    if (destination.startsWith('http')) {
      return NextResponse.redirect(destination, 301);
    }
    
    // Internal redirect
    url.pathname = destination;
    return NextResponse.redirect(url, 301);
  }

  // Handle pagination redirects
  if (pathname.match(/^\/news\/page\/\d+\/$/)) {
    url.pathname = '/news';
    return NextResponse.redirect(url, 301);
  }

  // Handle author page redirects
  if (pathname.match(/^\/author\/.*$/)) {
    url.pathname = '/news';
    return NextResponse.redirect(url, 301);
  }

  // Handle category redirects
  if (pathname.match(/^\/category\/.*$/)) {
    url.pathname = '/news';
    return NextResponse.redirect(url, 301);
  }

  // Handle tag redirects not covered above
  if (pathname.match(/^\/tag\/.*$/)) {
    url.pathname = '/news';
    return NextResponse.redirect(url, 301);
  }

  // Handle product category redirects with various query parameters
  if (pathname.startsWith('/product-category/device/')) {
    url.pathname = '/pricing';
    url.search = '';
    return NextResponse.redirect(url, 301);
  }

  // Handle feed redirects
  if (pathname.endsWith('/feed/') || pathname.endsWith('/feed')) {
    const basePath = pathname.replace(/\/feed\/?$/, '');
    if (basePath === '' || basePath === '/') {
      url.pathname = '/news';
    } else {
      url.pathname = basePath.startsWith('/news') ? basePath : `/news${basePath}`;
    }
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
