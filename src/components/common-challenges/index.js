import React from "react";
import Images from "../../assests/images";
import Image from "next/image";
import MetaLogo from "../../svg/MetaLogo";
import Note from "../../svg/Note";
import Supplier from "../../svg/Supplier";
import GraphIcon from "../../svg/GraphIcon";
import WorkIcon from "../../svg/WorkIcon";
import Calender from "../../svg/Calender";
import ShopIcon from "../../svg/ShopIcon";
import Empty from "../../svg/Empty";
import DashBoardIcon from "../../svg/DashBoardIcon";
import IconPople from "../../svg/IconPople";
import ApprovalIcon from "../../svg/ApprovalIcon";
import ProfileIcon from "../../svg/ProfileIcon";
import ExportTag from "../../svg/ExportTag";
import "./style.css";

const CommonChallenges = () => {
  return (
    <div className="common-box-wrapper">
      <div className="common-box1">
        <div className="challenges-text" data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="900"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom">
          <h3>Streamline Your Business <br/>and Enjoy Full Control</h3>
          <p>Track, analyze, and manage all your business activities in one clear, organized place.</p>
        </div>
        <div className="streamlineimggrid" data-aos="fade-up"
          data-aos-offset="50"  >
            <div className="gridboxstreamline item1"> 
               <Image
                            alt="MeMate brand assets"
                            src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/streamline-img22.jpg'}
                            width={400}
                            height={300}
                            quality={85}
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                            style={{ width: "100%", height: "auto" }}
                          />
             {/* <img src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/streamline-img22.jpg'} alt="MeMate brand assets" loading="lazy"/> */}
              <h4>A system designed for complete <br/> control over business activities</h4>
            </div>
            <div className="gridboxstreamline item2"> 
               <Image
                            alt="MeMate logo download"
                            src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/streamline-img21-min.jpg'}
                            width={400}
                            height={300}
                            quality={85}
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                            style={{ width: "100%", height: "auto" }}
                          />
             {/* <img src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/streamline-img21-min.jpg'} alt="	MeMate logo download" loading="lazy"/> */}
               <h4>Track Every Expense and Time <br/> Allocated to Your Projects</h4>
            </div>
            <div className="gridboxstreamline item3"> 
              <Image
                            alt="business software brand kit"
                            src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/streamline-img23-min.jpg'}
                            width={400}
                            height={300}
                            quality={85}
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                            style={{ width: "100%", height: "auto" }}
                          />
             {/* <img src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/streamline-img23-min.jpg'} alt="business software brand kit" loading="lazy"/> */}
              <h4>See and predict unprofitable <br/> business activities.</h4>
            </div>
            <div className="gridboxstreamline item4"> 
               <Image
                            alt="MeMate branding guidelines"
                            src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/streamline-img24-min.jpg'}
                            width={400}
                            height={300}
                            quality={85}
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                            style={{ width: "100%", height: "auto" }}
                          />
             {/* <img src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/streamline-img24-min.jpg'} alt="MeMate branding guidelines" loading="lazy"/> */}
                <h4>Overcome scaling challenges <br/> caused by manual processes </h4>
            </div>
          </div>
        {/* <div className="control-main-sec" data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom">
          <div className="me-meta-card">
            <div className="max-cont-width">
              <div className="met-points" >
                <p className="memateMetaLogo">
                <MetaLogo/>
                </p>
                <Image className="main-bg-img" src={Images.cardBg} alt="cardBg" width={400} height={300} quality={85}/>
                <div className="me-meta-image">
                  <p className="card-text">
                    Establish comprehensive control within the company 24/7 from
                    any point in the world.
                  </p>
                </div>
              </div>
              <div className="internal-control ">
                <div className="internal-control-content">
                  <div className="control-text">
                    <p>A System Designed for <strong>Complete Control Over Business</strong> Activities</p>
                  </div>
                  <div className="icons">
                    <div className="user-prof">
                      <ProfileIcon/>
                    </div>
                    <div className="user-prof">
                      <ExportTag/>
                    </div>
                    <div className="user-prof">
                      <Note/>
                    </div>
                    <div className="user-prof">
                      <Supplier/>
                    </div>
                    <div className="user-prof">
                      <GraphIcon/>
                    </div>
                    <div className="user-prof">
                      <WorkIcon/>
                    </div>
                    <div className="user-prof">
                      <Calender/>
                    </div>
                    <div className="user-prof">
                      <ShopIcon/>
                    </div>
                    <div className="user-prof">
                      <Empty/>
                    </div>
                    <div className="user-prof">
                      <DashBoardIcon/>
                    </div>
                    <div className="user-prof">
                      <IconPople/>
                    </div>
                    <div className="user-prof">
                      <ApprovalIcon/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="predict-side">
              <div className="activities-text">
                <p>
                See <strong className="strongText"> and predict unprofitable </strong>{" "}
                  business activities.
                </p>
              </div>
              <div className="business-profile">
                <Image className="image-business" src={Images.busprofile} alt="busprofile" width={120} height={120} quality={85}/>
                <Image className="mask-business" src={Images.mask} alt="mask" width={150} height={150} quality={85}/>
                <Image className="graph-business" src={Images.graphBuss} alt="graphBuss" width={200} height={150} quality={85}/>
              </div>
            </div>
          </div>
          <div className="project-profitability project-profitability-space" data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="1030"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom">
            <div className="inner-text">
              <div className="inner-text-container">
              <p className="heading-flex"><span className="spanTextMQ">Track Every Expense</span> <br/></p><p>&nbsp;and Time Allocated to Your Projects</p>
              </div>
            </div>
          </div>
          <div className="real-time" data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-duration="1040"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom">
            <div className="gain-time ">
              <Image className="graph-number" src={Images.graphAndNum} alt="graphAndNum" width={300} height={200} quality={85}/>
            </div>
            <div className="overcome-pro ">
              <div className="overcome-pro-content">
              <p className="overcomePara">
                Overcome scaling challenges <span className="paraText">caused by manual
                processes</span>
              </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CommonChallenges;
