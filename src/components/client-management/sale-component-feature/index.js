import CMDynamic from './agile-pipeline-management';
import CMIntuitive from './crm-sales-tool';
import CMSmart from './pipeline-tool';
import CMIntelligent from './sales-management';
import CMWise from './sales-process-optimization';
import './style.css';
const SalesComponentFeature = () => {
  return (
    <div className='sales-component-feature-wrapperF'>
      <div className='sales-component-featureF' data-aos="fade-up"
      data-aos-offset="50"
      data-aos-delay="50"
      data-aos-duration="600"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom">
        <h2>Memate</h2>
        <span className='gradientAnimenate'>features</span>
      </div>
      <div className="sales-feature-wrapperF">
          <CMIntelligent/>
          <CMIntuitive/>
          <CMSmart/>
          <CMWise/>
          <CMDynamic/>
        </div>
    </div>
  )
}

export default SalesComponentFeature;
