

import style from './about.module.scss';
import './about.style.css';
import Images from "../../assests/images";
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import Linkdin from '../../svg/Linkdin';
const AboutMemateComponent = () => {


  return (
    <>
    <Helmet>
    <title>About MeMate | Simplifying Business Management for Australian SMEs</title>
    <meta name="description" content="Discover MeMate’s mission to empower Australian small and medium businesses with integrated CRM, ERP, and project management tools in one platform." />
    <meta property="og:title" content="About MeMate | Simplifying Business Management for Australian SMEs" />
      <meta property="og:description" content="Discover MeMate’s mission to empower Australian small and medium businesses with integrated CRM, ERP, and project management tools in one platform." />
</Helmet>
    <div id="aboutPage">
    
      <div className={`${style.aboutBanner} ${style.mainContaner}`} data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <h1>More Business. Less Busyness.</h1>
     <h2>companies</h2>
     <p>MeMate is a user-friendly, all-in-one business management software. It gives you real-time insights into your company’s performance, helps speed up operations, reduces mistakes, and keeps all your business records in one place.</p>
     <p>With MeMate, managing your business becomes simpler and more effective, preparing you for the future.</p>
      </div>
      <div className={`${style.centerHeadPages}`} data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
         <h3>Discover</h3>
         <span className='gradientAnimenate weightAndFamily'>our story</span>
      </div>
      <div className={`${style.gridflexWrap}`} data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className={`${style.gridflexGrid} ${style.gradientGrid}`} style={{ width: '590px' }}>
         <h2><span>Our</span>history</h2>
         <p>We began developing what would become meMate long before it was named. Initially, we operated in a completely different industry, unrelated to SaaS or any software systems. However, from its earliest stages, we recognised a clear need for a robust system that would allow our managers to provide quotes based on the precise use of labor and materials rather than their own perceptions, which could be influenced by experience, mood, or personal relationships with customers. Existing tools like Excel and accounting software were too complex and inflexible for this essential function. </p>
         <p>More complicated solutions from Oracle or SAP were extremely expensive for the small businesses we were part of at that time.</p>
      </div>
      <div className={`${style.gridflexGrid} ${style.mob_img} `} style={{ backgroundImage: `url(${Images.aboutBgGrid})`, width: '590px',    borderRadius: '30px' }}>       
      </div>
      </div>
      <div className={`${style.gridflexWrap} ${style.gridSecondWrap} ${style.marginTopGap}`} data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className={`${style.gridflexGrid} ${style.mob_img}`} style={{ backgroundImage: `url(${Images.aboutBgGrid1})`, width: '502px',    borderRadius: '30px' }}>
      </div>
      <div className={`${style.gridflexGrid} ${style.gradientDGrid}`} style={{ width: '682px'}}>
        <h2><span>Perpetually</span>refining our tool</h2>
        <p>Over eight years, we added, tested, and refined multiple options and features in the software, which we believe help owners run their businesses. We developed it to address every issue we faced during this time. More than four years ago, we decided to offer this system to commercial users in Australia, as we truly believe that we can provide the assistance businesses need to run small and medium-sized operations effectively. </p>
        <p>By helping them, we are confident that it will reduce the number of businesses going into administration, prevent operational insolvency, and demonstrate a simple way to run a business with a clear structure that is beneficial for all parties: owners, management, employees, and contractors.</p>
      </div>
      </div>


      <div className={`${style.fullflexWrap} `} data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className={`${style.gridflexGrid}`}>
      <div className={`${style.gridTextGrid}`}>
      <h2><span>Proud to be</span>australian</h2>
        <p>Here is how meMate was born and developed every day, with Australian Business Owners in mind and the fate of digital operations for the most vulnerable yet most important business segments in the economy—Australian small and mid-sized businesses.</p>
      
      </div>
      </div>
      <div className={`${style.gridflexGrid} ${style.Deecran}`} style={{ backgroundImage: `url(${Images.captureDeecran}) ` ,width:'600px', height: '474px',}}>
       
      </div>
      </div>


      <div className={`${style.centerHeadPages} ${style.centerHeadF}`} data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="3000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
         <h3>Meet the memate team</h3>
      </div>
      <div className={`${style.teamflexWrap} `} data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="3500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className={`${style.gridflexGrid}`}>
      <div className={`${style.imageGrid}`} style={{ background: `url(https://res.cloudinary.com/dn0jqjad3/image/upload/v1748323734/Max_Narelik_sijznv.jpg) `}}>
       
      </div>
      <div className={style.detailBox}>
      <h4>Max Narelik</h4>
      <p>Director</p>
       <div className={style.socialTeam}>
        <Link href="/" target="_blank" rel="noopener noreferrer">  
       <Linkdin />
       </Link>
      </div>
      </div>
      </div>
      
      <div className={`${style.gridflexGrid}`}>
      <div className={`${style.imageGrid}`} style={{ background: `#E9E9E9 `}}>
       
      </div>
    <div className={style.detailBox}>
      
    <h4>Anuj Nagpal </h4>
    <p>Head of Development Team</p>
    <div className={style.socialTeam}>
        <Link href="/" target="_blank" rel="noopener noreferrer">  
       <Linkdin />
       </Link>
      </div>
    </div>
      </div>
      
      <div className={`${style.gridflexGrid}`}>
      <div className={`${style.imageGrid}`} style={{ background: `url(https://res.cloudinary.com/dn0jqjad3/image/upload/v1748323734/Belmin_Salkica_gges7y.jpg) `}}>
       
      </div>
      <div className={style.detailBox}>
      <h4>Belmin Salkica</h4>
      <p>Head of Design</p>
      <div className={style.socialTeam}>
        <Link href="/" target="_blank" rel="noopener noreferrer">  
       <Linkdin />
       </Link>
      </div>
      </div>
      </div>
      
      <div className={`${style.gridflexGrid}`}>
      <div className={`${style.imageGrid}`} style={{ background: `#E9E9E9 `}}>
       
      </div>
      <div className={style.detailBox}>
      <h4>Sergey Autonuke </h4>
      <p>Senior Developer</p>
       <div className={style.socialTeam}>
        <Link href="/" target="_blank" rel="noopener noreferrer">  
       <Linkdin />
       </Link>
      </div>
      </div>
      </div>

      </div>
     <div className={style.centerHeadJourney}>
      <div className={`${style.centerHeadPages} ${style.centerHeadSpace}`} data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="4000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
         <h3>The Journey to Creating meMate</h3>
         <p>Why We’re Doing It: The Mission Behind meMate</p>
      </div>
      <div className={`${style.centerHeadMiddlePara1}`} data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="4500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
         <p>Before we started with meMate, we were searching for a management platform that could offer a robust, streamlined process that couldn’t be altered by management to cover up mistakes and would display real-time data. We needed a system that could track the number of projects in progress, their budgets, and real-time expenses for each project. Additionally, we wanted software that would motivate contractors and make their work more organised, easier, and more accountable. However, we couldn’t find such a solution, so we decided to create our own—a software designed specifically for Australian business owners, contractors, and employees. It’s simple yet capable of handling everything you need.</p>
      <p>That was some time ago, and while we’ve faced multiple challenges along the way, we remain committed to creating a simple, affordable system that leverages the latest technology to help Australian business owners.</p>
      <p>This is our greater goal: we believe that business owners are the ones who make Australia special—people who aren’t afraid to take responsibility, who create new services and products that help our country prosper. Our ultimate goal is to make a difference by creating a system that significantly improves and simplifies business management, reducing losses and unprofitable activities.</p>
      
      </div>
      </div>
    </div>
    </>
  );
};

export default AboutMemateComponent;
