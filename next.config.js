const nextConfig = {
  // Handle trailing slashes consistently
  trailingSlash: false,
  
  // Ensure proper page extensions are handled
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  
  output: 'standalone',
  
  images: {
    domains: ['memate-website.s3.ap-southeast-2.amazonaws.com'],
    unoptimized: true,
  },
  
  /**
   * 
   * @returns handle redirects
   */
  async redirects() {
    return [
      {
        source: '/expense-categorisation-guide-australia',
        destination: '/news/expense-categorisation-guide-australia',
        permanent: true,
      },
      // Basic redirects
      {
        source: '/what-is-memate',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/data-single',
        destination: '/supplier-database',
        permanent: true,
      },
      {
        source: '/data-single/memate-enterprise-pty-limited',
        destination: '/supplier-database',
        permanent: true,
      },
      {
        source: '/data-single/safety-xpress-online',
        destination: '/supplier-database',
        permanent: true,
      },
      {
        source: '/internal-chat',
        destination: '/features/internal-communication-tools',
        permanent: true,
      },
      {
        source: '/features-news',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/feed',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/keep-your-teams-productivity-in-check-with-workforce-management-system',
        destination: '/news/keep-your-team-s-productivity-in-check-with-workforce-management-system',
        permanent: true,
      },
      {
        source: '/memate-for-advertising-agencies-streamlining-project-management-and-contractor-management',
        destination: '/news/optimize-operations-in-2024--harness-the-power-of-software-for-business-management',
        permanent: true,
      },
      {
        source: '/news/category/11',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/features/your-business-news-management',
        destination: '/features',
        permanent: true,
      },
      {
        source: '/thank-you-contact',
        destination: '/',
        permanent: true,
      },
      {
        source: '/terms-and-conditions',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/news/ideal-tools-for-smbs',
        destination: '/news/time-tracking--the-project-management-need-memate-is-ready-to-meet',
        permanent: true,
      },
      {
        source: '/404',
        destination: '/',
        permanent: true,
      },
      {
        source: '/news/top-business-process-management-software',
        destination: '/news/top-5-business-process-management-software-in-2022',
        permanent: true,
      },
      {
        source: '/task-management',
        destination: '/features/task-management-software',
        permanent: true,
      },     
      {
        source: '/news/business-process-software',
        destination: '/news/24-best-business-management-software-2023-update',
        permanent: true,
      }, 
      {
        source: '/news/business-management-software-2024',
        destination: '/news/streamline-your-operations-in-2024-with-the-best-business-management-software-solutions',
        permanent: true,
      }, 
      {
        source: '/news/business-process-management',
        destination: '/news/unlocking-efficiency--the-power-of-business-process-management-software',
        permanent: true,
      },
      {
        source: '/news/website-optimisation',
        destination: '/news/from-chaos-to-clarity-5-steps-to-organise-your-new-business-like-a-pro',
        permanent: true,
      },
      {
        source: '/news/top-crm-software',
        destination: '/news/empower-your-small-business-with-the-10-best-crm-solutions-in-australia-for-2023',
        permanent: true,
      },
      {
        source: '/news/software-for-business-growth',
        destination: '/news/24-best-business-management-software-2023-update',
        permanent: true,
      },
      {
        source: '/news/australian-business-solutions',
        destination: '/news/5-top-business-management-software-solutions-in-australia-2023',
        permanent: true,
      },
      {
        source: '/news/enhance-efficiency',
        destination: '/news/unlocking-efficiency--the-power-of-business-process-management-software',
        permanent: true,
      },
      {
        source: '/news/bpm-selection-criteria',
        destination: '/news/choosing-the-right-business-process-management-software-provider-in-2024',
        permanent: true,
      },
      {
        source: '/news/project-tracking-software',
        destination: '/news/revealed-top-4-project-management-systems-to-drive-profitability-in-2023',
        permanent: true,
      },
      {
        source: '/news/business-process-improvement',
        destination: '/news/how-memate-helped-improve-a-yacht-management-service',
        permanent: true,
      },
      {
        source: '/news/tags/',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/news/software-for-business-management',
        destination: '/news/optimize-operations-in-2024--harness-the-power-of-software-for-business-management',
        permanent: true,
      },
      {
        source: '/news/workflow-management-for-small-businesses',
        destination: '/news/time-tracking--the-project-management-need-memate-is-ready-to-meet',
        permanent: true,
      },
      {
        source: '/news/memate-features',
        destination: '/news/software-comparison-servicem8-vs-memate',
        permanent: true,
      },
      {
        source: '/news/small-business-management-software',
        destination: '/news/how-a-digital-agency-benefitted-from-memate',
        permanent: true,
      },
      {
        source: '/news/crm-for-small-businesses',
        destination: '/news/choosing-the-best-crm-for-small-business-in-australia',
        permanent: true,
      },
      {
        source: '/news/tags/efficiency-tools-for-smes',
        destination: '/news/why-smes-should-make-workflow-automation-the-focal-point-in-2023',
        permanent: true,
      },
      {
        source: '/news/tags/business-process-management',
        destination: '/news/from-lead-to-results-navigating-business-processes-with-memate',
        permanent: true,
      },
      {
        source: '/news/software-strategies-2024',
        destination: '/news/mastering-efficiency-how-to-effectively-manage-business-software-solutions',
        permanent: true,
      },
      {
        source: '/news/success-proof-business',
        destination: '/news/all-in-one-business-process-management-software-solutions-should-you-invest-in-it',
        permanent: true,
      },
      {
        source: '/news/enhance-customer-relationships',
        destination: '/news/empower-your-small-business-with-the-10-best-crm-solutions-in-australia-for-2023',
        permanent: true,
      },
      {
        source: '/news/2023-software-insights',
        destination: '/news/24-best-business-management-software-2023-update',
        permanent: true,
      },
      {
        source: '/news/process-optimization',
        destination: '/news/all-in-one-business-process-management-software-solutions--should-you-invest-in-it',
        permanent: true,
      },
      {
        source: '/news/automation-tools',
        destination: '/news/how-can-memate-support-your-remote-productivity',
        permanent: true,
      },
      {
        source: '/news/business-performance',
        destination: '/news/streamline-your-operations-in-2024-with-the-best-business-management-software-solutions',
        permanent: true,
      },
      {
        source: '/news/tags/process-optimization',
        destination: '/news/how-can-memate-support-your-remote-productivity',
        permanent: true,
      },
      {
        source: '/news/tags/enhance-customer-relationships',
        destination: '/news/empower-your-small-business-with-the-10-best-crm-solutions-in-australia-for-2023',
        permanent: true,
      },
      {
        source: '/news/progress-tracking-software',
        destination: '/news/time-tracking-the-project-management-need-memate-is-ready-to-meet',
        permanent: true,
      },
      {
        source: '/news/process-optimization-software',
        destination: '/news/the-future-of-business-process-management-software-solutions',
        permanent: true,
      },
      {
        source: '/news/business-productivity-tools',
        destination: '/news/elevate-efficiency-finding-the-right-software-for-business-management',
        permanent: true,
      },
      {
        source: '/news/startup-tips',
        destination: '/news/from-chaos-to-clarity-5-steps-to-organise-your-new-business-like-a-pro',
        permanent: true,
      },
      {
        source: '/news/business-efficiency',
        destination: '/news/top-5-business-management-software-2022',
        permanent: true,
      },
      {
        source: '/news/enhance-productivity',
        destination: '/news/why-smes-should-make-workflow-automation-the-focal-point-in-2023',
        permanent: true,
      },
      {
        source: '/news/best-project-management-software',
        destination: '/news/5-best-project-management-tools-in-australia-2023-2',
        permanent: true,
      },
      {
        source: '/news/effective-software-management',
        destination: '/news/mastering-efficiency-how-to-effectively-manage-business-software-solutions',
        permanent: true,
      },
      {
        source: '/news/manage-business-software',
        destination: '/news/mastering-efficiency-how-to-effectively-manage-business-software-solutions',
        permanent: true,
      },
      {
        source: '/news/customer-relationship-management-australia',
        destination: '/news/empower-your-small-business-with-the-10-best-crm-solutions-in-australia-for-2023',
        permanent: true,
      },
      {
        source: '/news/tags/business-software-trends',
        destination: '/news/24-best-business-management-software-2023-update',
        permanent: true,
      },
      {
        source: '/news/tags/shift-management-software',
        destination: '/news/introducing-showcase-a-new-interactive-design-community',
        permanent: true,
      },
      {
        source: '/news/scale-your-business',
        destination: '/news/why-smes-should-make-workflow-automation-the-focal-point-in-2023',
        permanent: true,
      },
      {
        source: '/news/workflow-enhancement',
        destination: '/news/how-can-memate-support-your-remote-productivity',
        permanent: true,
      },
      {
        source: '/news/tags/enhance-efficiency',
        destination: '/news/unlocking-efficiency-the-power-of-business-process-management-software',
        permanent: true,
      },
      {
        source: '/news/tags/streamline-business-processes',
        destination: '/news/what-makes-business-process-management-software-your-winning-wager',
        permanent: true,
      },
      {
        source: '/get-better-returns-in-2023-by-switching-to-a-project-management-software/',
        destination: '/news/get-better-returns-in-2023-by-switching-to-a-project-management-software',
        permanent: true,
      },
      {
        source: '/category/rel/feed/',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/fusion_tb_category/header/',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/business-process-management-software-2/feed/',
        destination: '/news/from-lead-to-results-navigating-business-processes-with-memate',
        permanent: true,
      },
      {
        source: '/time-tracking-the-project-management-need-memate-is-ready-to-meet/',
        destination: '/news/time-tracking-the-project-management-need-memate-is-ready-to-meet',
        permanent: true,
      },
      {
        source: '/streamline-your-operations-in-2024-with-the-best-business-management-software-solutions/feed/',
        destination: '/news/streamline-your-operations-in-2024-with-the-best-business-management-software-solutions',
        permanent: true,
      },
      {
        source: '/everything-you-need-to-know-about-the-impact-of-management-software-on-small-businesses/feed/',
        destination: '/news/everything-you-need-to-know-about-the-impact-of-management-software-on-small-businesses',
        permanent: true,
      },
      {
        source: '/5-top-business-management-software-solutions-in-australia-2023/feed/',
        destination: '/news/5-top-business-management-software-solutions-in-australia-2023',
        permanent: true,
      },
      {
        source: '/category/second/',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/memate-labels-have-exponentially-increased-productivity-and-organization-here-at-camerafix/feed/',
        destination: '/news/memate-labels-have-exponentially-increased-productivity-and-organization-here-at-camerafix',
        permanent: true,
      },
      {
        source: '/5-best-project-management-tools-in-australia-2023-2/feed/',
        destination: '/news/5-best-project-management-tools-in-australia-2023-2',
        permanent: true,
      },
      {
        source: '/unlocking-business-potential-in-2024-the-power-of-business-management-software-in-australia/feed/',
        destination: '/news/unlocking-business-potential-in-2024-the-power-of-business-management-software-in-australia',
        permanent: true,
      },
      {
        source: '/best-business-management-application-to-run-a-repair-business/feed/',
        destination: '/news/best-business-management-application-to-run-a-repair-business',
        permanent: true,
      },
      {
        source: '/top-5-business-management-software-2022/feed/',
        destination: '/news/top-5-business-management-software-2022',
        permanent: true,
      },
      {
        source: '/news/page/5/',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/testimonial/camera-fix/',
        destination: '/customer-stories/camera-fix',
        permanent: true,
      },
      {
        source: '/how-a-digital-agency-benefitted-from-memate/',
        destination: '/news/how-a-digital-agency-benefitted-from-memate',
        permanent: true,
      },
      {
        source: '/brand-information',
        destination: '/brand',
        permanent: true,
      },
      {
        source: '/how-memate-helped-improve-a-yacht-management-service/',
        destination: '/news/how-memate-helped-improve-a-yacht-management-service',
        permanent: true,
      },
      {
        source: '/creative-agencies',
        destination: '/industries/business-software-for-creative-agencies',
        permanent: true,
      },
      {
        source: '/job-approval',
        destination: '/features/job-approval-software',
        permanent: true,
      },
      {
        source: '/time-tracker',
        destination: '/features/time-tracking-tools',
        permanent: true,
      },
      {
        source: '/category/first/',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/time-sheet',
        destination: '/features/time-tracking-software',
        permanent: true,
      },
      {
        source: '/mastering-efficiency-how-to-effectively-manage-business-software-solutions/',
        destination: '/news/mastering-efficiency-how-to-effectively-manage-business-software-solutions',
        permanent: true,
      },
      {
        source: '/business-process-management-software-2/',
        destination: '/news/unlocking-efficiency-the-power-of-business-process-management-software',
        permanent: true,
      },
      {
        source: '/streamline-your-operations-choosing-the-right-business-management-software-in-australia/',
        destination: '/news/streamline-your-operations-choosing-the-right-business-management-software-in-australia',
        permanent: true,
      },
      {
        source: '/why-memate/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/introducing-showcase-a-new-interactive-design-community/',
        destination: '/news/introducing-showcase-a-new-interactive-design-community',
        permanent: true,
      },
      {
        source: '/signup/',
        destination: 'https://app.memate.com.au/onboarding',
        permanent: true,
      },
      {
        source: '/all-in-one-business-process-management-software-solutions-should-you-invest-in-it/',
        destination: '/news/all-in-one-business-process-management-software-solutions-should-you-invest-in-it',
        permanent: true,
      },
      {
        source: '/how-can-memate-support-your-remote-productivity/',
        destination: '/news/how-can-memate-support-your-remote-productivity',
        permanent: true,
      },
      {
        source: '/tag/business-process-management-software-companies/',
        destination: '/news/the-future-of-business-process-management-software-solutions',
        permanent: true,
      },
      {
        source: '/elevate-efficiency-finding-the-right-software-for-business-management/',
        destination: '/news/elevate-efficiency-finding-the-right-software-for-business-management',
        permanent: true,
      },
      {
        source: '/memate-for-digital-agencies-streamlining-quote-project-management-and-invoicing-in-one-place/',
        destination: '/news/memate-labels-have-exponentially-increased-productivity-and-organization-here-at-camerafix',
        permanent: true,
      },
      {
        source: '/requestdemo/set-new-password',
        destination: 'https://app.memate.com.au/requestdemo',
        permanent: true,
      },
      {
        source: '/streamline-your-operations-in-2024-with-the-best-business-management-software-solutions/',
        destination: '/news/streamline-your-operations-in-2024-with-the-best-business-management-software-solutions',
        permanent: true,
      },
      {
        source: '/requestdemoo',
        destination: 'https://app.memate.com.au/requestdemo',
        permanent: true,
      },
      {
        source: '/what-makes-business-process-management-software-your-winning-wager/',
        destination: '/news/what-makes-business-process-management-software-your-winning-wager',
        permanent: true,
      },
      {
        source: '/memate-faqs',
        destination: '/faqs',
        permanent: true,
      },
      {
        source: '/memate-for-marketing-agencies-unlocking-efficient-project-management-and-delegation/',
        destination: '/news/choosing-the-best-crm-for-small-business-in-australia',
        permanent: true,
      },
      {
        source: '/memate-for-designers-keeping-all-correspondence-in-one-place/',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/business-process-management-software-5-things-to-look-for/',
        destination: '/news/business-process-management-software-5-things-to-look-for',
        permanent: true,
      },
      {
        source: '/onborading',
        destination: 'https://app.memate.com.au/onboarding',
        permanent: true,
      },
      {
        source: '/5-signs-your-small-business-in-australia-needs-management-software/',
        destination: '/news/5-signs-your-small-business-in-australia-needs-management-software',
        permanent: true,
      },
      {
        source: '/tag/all-in-one-business-management-software/',
        destination: '/news/all-in-one-business-process-management-software-solutions-should-you-invest-in-it',
        permanent: true,
      },
      {
        source: '/tag/business-organisation-software/',
        destination: '/news/revealed-top-4-project-management-systems-to-drive-profitability-in-2023',
        permanent: true,
      },
      {
        source: '/business-process-management-software/',
        destination: '/features/project-management-software',
        permanent: true,
      },
      {
        source: '/product/desktop-admin/',
        destination: '/pricing',
        permanent: true,
      },
      // {
      //   source: '/careers/',
      //   destination: 'https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F78408530',
      //   permanent: true,
      // },
      {
        source: '/calendar',
        destination: '/features/calendar-timeline-management-software',
        permanent: true,
      },
      {
        source: '/shop/',
        destination: '/pricing',
        permanent: true,
      },
      {
        source: '/electronic-repair-specialists/',
        destination: '/industries/software-for-electronic-repair-businesses',
        permanent: true,
      },
      {
        source: '/wp-admin/admin-ajax.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/log-in/',
        destination: 'https://app.memate.com.au/login',
        permanent: true,
      },
      {
        source: '/calculators',
        destination: '/features/business-quote-calculator',
        permanent: true,
      },
      {
        source: '/profitability-and-budgeting',
        destination: '/features/profitability-and-budgeting-software',
        permanent: true,
      },
      {
        source: '/tag/small-business-management-software-australia/',
        destination: '/news/why-smes-should-make-workflow-automation-the-focal-point-in-2023',
        permanent: true,
      },
      {
        source: '/choosing-the-right-business-management-software-a-comprehensive-review/',
        destination: '/news/choosing-the-right-business-management-software-a-comprehensive-review',
        permanent: true,
      },
      {
        source: '/why-smes-should-make-workflow-automation-the-focal-point-in-2023/',
        destination: '/news/why-smes-should-make-workflow-automation-the-focal-point-in-2023',
        permanent: true,
      },
      {
        source: '/revolutionize-your-digital-agency-with-memate/',
        destination: '/news/revolutionize-your-digital-agency-with-memate',
        permanent: true,
      },
      {
        source: '/software-comparison-servicem8-vs-memate/',
        destination: '/news/software-comparison-servicem8-vs-memate',
        permanent: true,
      },
      {
        source: '/memate-labels-have-exponentially-increased-productivity-and-organization-here-at-camerafix/',
        destination: '/news/memate-labels-have-exponentially-increased-productivity-and-organization-here-at-camerafix',
        permanent: true,
      },
      {
        source: '/product-category/device/',
        destination: '/pricing',
        permanent: true,
      },
      {
        source: '/about-us/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/category/rel/',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/project-management-systems/',
        destination: '/news/revealed-top-4-project-management-systems-to-drive-profitability-in-2023',
        permanent: true,
      },
      {
        source: '/5-best-project-management-tools-in-australia-2023/',
        destination: '/news/5-best-project-management-tools-in-australia-2023-2',
        permanent: true,
      },
      {
        source: '/choosing-the-best-crm-for-small-business-in-australia/',
        destination: '/news/choosing-the-best-crm-for-small-business-in-australia',
        permanent: true,
      },
      {
        source: '/direct-debit-service-request-agreement/',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/add-company/',
        destination: '/add-your-company',
        permanent: true,
      },
      {
        source: '/what-is-memate/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/news/page/6/',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/news/page/3/',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/news/page/2/',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/tag/top-business-management-app-for-repairs/',
        destination: '/news/24-best-business-management-software-2023-update',
        permanent: true,
      },
      {
        source: '/statistic',
        destination: '/',
        permanent: true,
      },
      {
        source: '/4-project-management-systems-to-drive-profitability-in-2023/',
        destination: '/news/revealed--top-4-project-management-systems-to-drive-profitability-in-2023',
        permanent: true,
      },
      {
        source: '/5-best-project-management-tools-in-australia-2023/feed/',
        destination: '/news/5-best-project-management-tools-in-australia-2023-2',
        permanent: true,
      },
      {
        source: '/my-account/',
        destination: 'https://app.memate.com.au/requestdemo',
        permanent: true,
      },
      {
        source: '/news/page/4/',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/author/devthead-com-au/page/3/',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/author/devthead-com-au/page/4/',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/my-account/lost-password/',
        destination: 'https://app.memate.com.au/requestdemo',
        permanent: true,
      },
      {
        source: '/fusion_tb_category/footer/',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/tag/business-organisation-software/feed/',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/my-account/add-ons/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/software-comparison-servicem8-vs-memate/feed/',
        destination: '/memate-vs-servicem8',
        permanent: true,
      },
      {
        source: '/author/devthead-com-au/feed/',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/client-management',
        destination: '/features/client-management-software',
        permanent: true,
      },
      {
        source: '/construction',
        destination: '/industries/business-software-for-construction-industry',
        permanent: true,
      },
      {
        source: '/news/page/7/',
        destination: '/news',
        permanent: true,
      },


      // Pattern-based redirects
      {
        source: '/news/page/:page',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/author/:path*',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/category/:path*',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/tag/:path*',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/product-category/device/:path*',
        destination: '/pricing',
        permanent: true,
      },
      {
        source: '/:path*/feed',
        destination: '/news',
        permanent: true,
      },
    ];
  },
  
  /**
   * 
   * @returns handle 404 errors
   */
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: '/404',
        },
      ],
    };
  },
};

module.exports = nextConfig;