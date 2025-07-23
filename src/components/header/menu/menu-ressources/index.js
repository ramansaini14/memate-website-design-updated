import React from "react";
import './style.css';
import Link from "next/link";
import { usePathname } from "next/navigation";
const MenuRessources = () => {
  const pathname = usePathname();
  return (
    <div className="menu-feature-wrapper">
      <div className="menu-feature-wrapper-upper-res">
        <div className="menu-feature-management">
        <p className="menu-feature-text"><Link href="/resources" className={` ${pathname === "/resources" ? "navbar-item-active" : ""}`}>Resources & tools</Link></p>
          <div className="menu-management-features">
            <div className="menu-client-management">
              <Link href="/supplier-database" className={` ${pathname === "/supplier-database" ? "navbar-item-active" : ""}`}> <p className="clinet-management-text icon-hide">Supplier Database</p></Link>
            </div>
          </div>
        
          <div className="menu-management-feature">
            <div className="menu-client-management">
            <Link href="/knowledge-base" className={` ${pathname === "/knowledge-base" ? "navbar-item-active" : ""}`}> <p className="clinet-management-text icon-hide">Knowledge Base</p></Link>
            </div>
          </div>
          <div className="menu-management-feature">
            <div className="menu-client-management">
            <Link href="/brand" className={` ${pathname === "/brand" ? "navbar-item-active" : ""}`}> <p className="clinet-management-text icon-hide">Brand</p></Link>
            </div>
          </div>
          {/* <div className="menu-management-feature">
            <div className="menu-client-management">
              <Link to="/delete-request" className={` ${location.pathname === "/delete-request" ? "navbar-item-active" : ""}`}> <p className="clinet-management-text icon-hide">Delete Request</p></Link>
            </div>
          </div> */}
        </div>
        <div className="menu-feature-management">
          <p className="menu-feature-text">Memate wiki</p>
          <div className="menu-management-features">
            <div className="menu-client-management">
              <Link href="/memate-wiki" className={` ${pathname === "/memate-wiki" ? "navbar-item-active" : ""}`}> <p className="clinet-management-text icon-hide">Memate Wiki</p></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuRessources;
