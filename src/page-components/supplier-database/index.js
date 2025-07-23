import React from "react";
import Layout from "../../layout";
import SupplierDatabase from "../../components/supplier-database";

const SupplierDatabasePage = () => {
  return (
    <Layout>
      <div className="bgshadowwrapper">
        <SupplierDatabase />
      </div>
    </Layout>
  );
};

export default SupplierDatabasePage;
