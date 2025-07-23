import AgilePipeLineManagement from './agile-pipeline-management';
import CRMSalesTool from './crm-sales-tool';
import PipeLineTool from './pipeline-tool';
import SalesManagement from './sales-management';
import SalesProcessOptimiation from './sales-process-optimization';
import './style.css';
const SalesComponentFeature = () => {
  return (
    <div className='sales-component-feature-wrapper'>
      <div className='sales-component-feature'>
        <h2>Memate</h2>
        <span className='gradientAnimenate'>features</span>
      </div>
      <div className="sales-feature-wrapper">
         <SalesManagement/>
          <CRMSalesTool/>
          <PipeLineTool/>
          <SalesProcessOptimiation/>
          <AgilePipeLineManagement/>
        </div>
    </div>
  )
}

export default SalesComponentFeature;
