import './style.css';
import style from './difference-module.module.scss';
import Link from 'next/link';
import TronRequestADemo from '../../../layout/hover-button/TronRequestADemo';
import ComparisonTabs from './comparison-tabs';
import CenterMode from '../../find-one-all/CenterMode';
const SalesComponentFeature = () => {
  return (
    <div className='sales-component-feature-wrapper'>
      <div className='sales-component-feature' data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="600"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        {/* <h2>Memate</h2> */}
        <span className='gradientAnimenate'>the difference</span>
       
      </div>
      <div className="sales-feature-wrapper">

      <div className={style.sectionService8}>
      <div className={style.gridService8L}>
        <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/media/serviem8-logo.png' alt='Services M8' />
      <h4>What’s ServiceM8 Good For?</h4>
      <p>ServiceM8 is suitable for plumbers and tradespeople who need to quickly provide quotes, send invoices while on location, and track the jobs of other team members. 
    </p>
      <p>It is relatively easy to use and flexible, making it ideal for businesses that need to handle tasks on-site efficiently.
    </p>
        </div>
        <div className={style.gridService8R}>
        <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/media/servicesm8-map.png' alt='Services M8 map' />
        </div>
        </div>
        <div className={style.sectionvsCompaire}>
               <span>vs</span>
          </div>
      <div className={style.sectionService8Gradient}>
      <div className={style.gridService8L}>
        <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg' alt='Services M8' />
      <h4>What’s MeMate
      Good For?</h4>
      <p>MeMate, on the other hand, is designed to be run from an office environment. It offers features for quoting, invoicing, and project management, with the ability to assign and track jobs for employees and contractors. </p>
      <p>Although it is less flexible in terms of on-the-go usage, meMate provides a more structured and secure system, enabling managers to maintain a strict workflow.</p>
        </div>
        <div className={style.gridService8R}>
        <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/media/servicesm8-ser.png' alt='Services M8 Services' />
        </div>
        </div>


      <div className={style.sectionMoreBenifit}>
      <div className={style.head}>
        <h3>More benefits to switching to MeMate</h3>
        </div>
      <div className={style.gridList}>
      <ul>
        <li className={style.List01}>
          <div className={style.box}>
          <h4 className='fontSSMD FS28'>Switching</h4>
          <h2 className='fontSBD FS48'>is easy</h2>
          <p>Our team is here to help you transition smoothly by migrating your existing data to meMate. If you’re considering the switch, let us know, and we’ll support you every step of the way.</p>
          </div>
        </li>
        <li className={style.List02}>
        <div className={style.box}>
          
          </div>
        </li>
        <li className={style.List03}>
        <div className={style.box}>
         
          </div>
        </li>
        <li className={style.List04}>
        <div className={style.box}>
          <h4 className='fontSBD FS48'>Service M8</h4>
          <h2 className='fontSSMD FS28'>Alternative</h2>
          <p>Our team is here to help you transition smoothly by migrating your existing data to meMate. If you’re considering the switch, let us know, and we’ll support you every step of the way.</p>
          </div>
        </li>
      </ul>
      </div>
      </div>

      <div className={style.sectionService8grey}>
      <div className={style.gridService8L}>
      <h4>In short</h4>
      <p>If you need a quick quoting solution you can use on the go, ServiceM8 is the way to go. However, if you have a manager who processes requests, allocates tasks to contractors, replies to customers, provides quotes, and manages projects, meMate is the software for you.</p>
      <div className="request-btn request-btn-leftq">
        <Link href='/' target="_blank" className="nav-btn--get-started navbar-link"><TronRequestADemo text="See all features" /></Link>
      </div>
        </div>
        <div className={style.gridService8R}>
        <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/media/inshort.png' alt='Services inshort' />
        </div>
        </div>

        <div className={style.sectionCompareWrap}>
       
        <div className={`sales-component-feature ${style.gradi}`}
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="600"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom">
           <h3>Compare</h3>
        <span className='gradientAnimenate'>MeMate vs ServiceM8</span>
       <p>Choosing software is about finding the right balance between functionality and a simple, intuitive interface.</p>
      </div>
        <ComparisonTabs />
        </div>
        <div className={style.sectionSwapWrap}>
        <h2>Swap Multiple Tools for <br></br><span>meMate</span> and <span>Save Money</span></h2>
        <div className={style.sectionSwapWrapBg}>
        <div className={style.sectionSwapL}>
          <p><img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/media/pricing-cardLT.png' alt='pricingcard' /></p>
          &nbsp;
          <p> <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/media/group469444LB.png' alt='group469444' /></p>

        </div>
        <div className={style.sectionSwapM}>
           <span>vs</span>
        </div>
        <div className={style.sectionSwapR}>
        <p><img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/media/group469446RT.png' alt='group469446' /></p>
        &nbsp;
        <p><img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/media/group469445RB.png' alt='group469445' /></p>
        </div>
        </div>
        </div>



        <div className={style.sectionOurBenefit}>
        <div className={style.sectionBenefitHead}>
            <h2>Our Benefits</h2>
            <p>When you choose MeMate over Service M8, you’ll have the features you need to manage sales, projects and people long-term, without needing expensive add-ons. You’ll thank yourself later.</p>
          </div>
          <div className={style.sectionBenefitFlex}>
            <ul>
              <li>
                <div className={`${style.iconStyle} ${style.iconStyle1}`}>
                <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/media/Profitability-Management_+1.svg' alt='Profitability' />
                </div>
                <h4>Tax deductible 
                for business use</h4>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle2}`}>
                <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/media/logout-icon.svg' alt='logout' />
                </div>
                <h4>Freedome to cancel
                anytime</h4>
              </li>
              <li>
              <div className={`${style.iconStyle} ${style.iconStyle3}`}>
                <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/media/shield-tick.svg' alt='shield' />
                </div>
                <h4>Secure and safe
                cloud storage</h4>
              </li>
            </ul>

            </div>
          </div>
          <div className={style.sectionFindOneApplication}>
             <CenterMode />
          </div>
    </div>
    </div>
  )
}

export default SalesComponentFeature;
