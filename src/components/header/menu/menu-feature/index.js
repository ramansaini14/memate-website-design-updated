import React from "react";
import "./style.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ClientManagementSVG from "../../../../svg/ClientManagementSVG";
import SupplierManagementSVG from "../../../../svg/SupplierManagementSVG";
import SalesPipelineSVG from "../../../../svg/SalesPipelineSVG";
import ProjectManagementSVG from "../../../../svg/ProjectManagementSVG";
import ReportsSVG from "../../../../svg/ReportsSVG";
import ProfitabilityAndBudgetingSVG from "../../../../svg/ProfitabilityAndBudgetingSVG";
import EmployeeManagementSVG from "../../../../svg/EmployeeManagementSVG";
import ContractorSVG from "../../../../svg/ContractorSVG";
import InternalChat from "../../../../svg/InternalChat";
import TimeSheetSVG from "../../../../svg/TimeSheetSVG";
// import NewsSVG from "../../../../svg/NewsSVG";
import TaskManagementSVG from "../../../../svg/TaskManagementSVG";
import CommunicationSVG from "../../../../svg/CommunicationSVG";
import SchedulingSVG from "../../../../svg/SchedulingSVG";
import InvoicingSVG from "../../../../svg/InvoicingSVG";
import StatigicSVG from "../../../../svg/StatigicSVG";
import ScheduleJobsSVG from "../../../../svg/ScheduleJobsSVG";
import JobsAndTimeTrackerSVG from "../../../../svg/JobsAndTimeTrackerSVG";
import JobApprovalSVG from "../../../../svg/JobApprovalSVG";
import CalenderSVG from "../../../../svg/CalenderSVG";
import MultilocationIconSVG from "../../../../svg/MultilocationIconSVG";
import CalculatorSVG from "../../../../svg/CalculatorSVG";
const MenuFeature = () => {
  const location = usePathname();
  return (

    <div className="menu-feature-wrapper">
      <div className="menu-feature-wrapper-upper">
          <div className="menu-feature-management">
            <p className="menu-feature-text">MANAGEMENT</p>
              <div className="menu-management-features">
                <div className="menu-client-management">
                  {/* <img src={menuImages.clientManagement}/> */}
                  <ClientManagementSVG/>
                  <Link href="/features/client-management-software" className={` ${location === "/features/client-management-software" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon01">Client Management</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  {/* <img src={menuImages.supplierManagement}/> */}
                  <SupplierManagementSVG/>
                  <Link href="/features/supplier-management-software" className={` ${location === "/features/supplier-management-software" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon02">Supplier Management</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  {/* <img src={menuImages.salesPipeline}/> */}
                  <SalesPipelineSVG/>
                  <Link href="/features/sales-management-tools" className={` ${location === "/features/sales-management-tools" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon03">Sales Pipeline</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  {/* <img src={menuImages.projectManagement}/> */}
                  <ProjectManagementSVG/>
                  <Link href="/features/project-management-software" className={` ${location === "/features/project-management-software" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon04">Project Management</p></Link>
                </div>
              </div>
          </div>
          <div className="menu-feature-management">
            <p className="menu-feature-text">PRODUCTIVITY</p>
              <div className="menu-management-features">
                <div className="menu-client-management" >
                  {/* <img src={menuImages.reports} style={{marginTop:"4px"}}/> */}
                  <ReportsSVG/>
                  <Link href="/features/business-reporting-tools" className={` ${location === "/features/business-reporting-tools" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon05">Reports</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  {/* <img src={menuImages.profitAndBudget}/> */}
                  <ProfitabilityAndBudgetingSVG/>
                  <Link href="/features/profitability-and-budgeting-software" className={` ${location === "/features/profitability-and-budgeting-software" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon06">Profitability & Budgeting</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                {/* <img src={menuImages.emplyManage}/> */}
                <EmployeeManagementSVG/>
                  <Link href="/features/employee-management-tools" className={` ${location === "/features/employee-management-tools" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon07">Employee Management</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  {/* <img src={menuImages.contractor}/> */}
                  <ContractorSVG/>
                  <Link href="/features/contractor-management-software" className={` ${location === "/features/contractor-management-software" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon08">Contractor</p></Link>
               
                </div>
              </div>
          </div>
          <div className="menu-feature-management" style={{marginRight:"10px"}}>
            <p className="menu-feature-text">FUNCTIONALITY</p>
              <div className="menu-management-features">
                <div className="menu-client-management">
                  {/* <img src={menuImages.internalChat}/> */}
                  <InternalChat/>
                  <Link href="/features/internal-communication-tools" className={` ${location === "/features/internal-communication-tools" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon09">Internal chat</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  {/* <img src={menuImages.timeSheet}/> */}
                  <TimeSheetSVG/>
                  <Link href="/features/time-tracking-software" className={` ${location === "/features/time-tracking-software" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon001">Time Sheet</p></Link>
               
                </div>
              </div>

              {/* <div className="menu-management-feature">
                <div className="menu-client-management">
                
                  <NewsSVG/>
                  <Link to="/features/your-business-news-management" className={` ${location.pathname === "/features/your-business-news-management" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon002">Features News</p></Link>
                </div>
              </div> */}

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  {/* <img src={menuImages.taskManagement}/> */}
                  <TaskManagementSVG/>
                  <Link href="/features/task-management-software" className={` ${location === "/features/task-management-software" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon003">Task Management</p></Link>
                </div>
              </div>
          </div>
      </div>
     <div className="menu-feature-wrapper-lower">
     <div className="menu-feature-management">
            <p className="menu-feature-text">TECHNOLOGY</p>
              <div className="menu-management-features">
                <div className="menu-client-management iconManageSize">
                  {/* <img src={menuImages.communicationIcon}/> */}
                  <CommunicationSVG/>
                  <Link href="/features/team-communication-tools" className={` ${location === "/features/team-communication-tools" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon004">Communication</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  {/* <img src={menuImages.schduling}/> */}
                  <SchedulingSVG/>
                  <Link href="/features/job-scheduling-software" className={` ${location === "/features/job-scheduling-software" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon005">Scheduling</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  {/* <img src={menuImages.invoicing}/> */}
                  <InvoicingSVG/>
                  <Link href="/features/invoicing-software" className={` ${location === "/features/invoicing-software" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon006">Invoicing</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management iconManageSize">
                  {/* <img src={menuImages.statistics}/> */}
                  <StatigicSVG/>
                  <Link href="/features/business-statistics-tools" className={` ${location === "/features/business-statistics-tools" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon007">Statistic</p></Link>
                </div>
              </div>

              
          </div>
          <div className="menu-feature-management">
            <p className="menu-feature-text">Collaboration</p>
              <div className="menu-management-features">
                <div className="menu-client-management" >
                  {/* <img src={menuImages.jobSchdule} style={{marginTop:"4px"}}/> */}
                  <ScheduleJobsSVG/>
                  <Link href="/features/job-management-software" className={` ${location === "/features/job-management-software" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon008">Schedule Jobs</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  {/* <img src={menuImages.jobHouly} style={{marginTop:"4px"}}/> */}
                  <JobsAndTimeTrackerSVG/>
                  <Link href="/features/time-tracking-tools" className={` ${location === "/features/time-tracking-tools" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon009">Fixed  or time tracker</p></Link>
                </div>
              </div>

              <div className="menu-management-feature">
                <div className="menu-client-management">
                  {/* <img src={menuImages.jobApproval}/> */}
                  <JobApprovalSVG/>
                  <Link href="/features/job-approval-software" className={` ${location === "/features/job-approval-software" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon011">Job approval</p></Link>
                </div>
              </div>
              <div className="menu-management-feature">
                <div className="menu-client-management">
                  {/* <img src={menuImages.MultiLocation}/> */}
                  <MultilocationIconSVG/>
                  <Link href="/features/multi-location-management" className={` ${location === "/features/multi-location-management" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon012">Multi Location</p></Link>
                </div>
              </div>
          </div>
          <div className="menu-feature-management" style={{marginRight:"4px"}}>
            <p className="menu-feature-text">VALUE</p>
              <div className="menu-management-features">
                <div className="menu-client-management ">
                  {/* <img src={menuImages.calendar}/> */}
                  <CalenderSVG/>
                  <Link href="/features/calendar-timeline-management-software" className={` ${location === "/features/calendar-timeline-management-software" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon013">Calendar</p></Link>
                </div>
              </div>
              <div className="menu-management-feature">
                <div className="menu-client-management iconManageSize iconManageSizeF">
                  {/* <img src={menuImages.Calculators}/> */}
                  <CalculatorSVG/>
                  <Link href="/features/business-quote-calculator" className={` ${location === "/features/business-quote-calculator" ? "navbar-item-active" : ""}`}><p className="clinet-management-text bgicons icon014">Calculators</p></Link>
                </div>
              </div>
             
          </div>
     </div>
    </div>
  );
};

export default MenuFeature;
