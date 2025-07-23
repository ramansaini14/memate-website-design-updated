import "./request-to-edit.css";
import "../style.css";
import React, { useState, useEffect } from "react";
import { Dialog } from "primereact/dialog";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import Select from "react-select";
import ReCAPTCHA from "react-google-recaptcha";
import {
  RequestToEditData,
  industriesListing,
  fetchServicesByIndustryId,
} from "../../../api/supplierApi";
import WhiteButtonBammer from "../../../layout/hover-button/WhiteButtonBammer";
import Link from "next/link";
import CustomUpload from "../custom-upload";

const RequestToEdit = ({ supplierData }) => {
  const [visible, setVisible] = useState(false);
  const [industryOptions, setIndustryOptions] = useState([]);
  const [servicesOptions, setServicesOptions] = useState([]);
  const [error, setError] = useState("");
  const [upload_file, setUploadFile] = useState(null);
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...supplierData,
      industry: null,
      supplied_services: [],
    },
  });

  useEffect(() => {
     const initLogo = async () => {
    if (supplierData?.upload_url && !upload_file) {
      try {
        const response = await fetch(supplierData.upload_url);
        const blob = await response.blob();
        const filename = supplierData.upload_url.split("/").pop();
        const file = new File([blob], filename, { type: blob.type });
        setUploadFile(file); // ✅ Now it's a real File object
      } catch (err) {
        console.error("Failed to convert logo URL to File", err);
      }
    }
  };
    if (supplierData) {
      reset({
        ...supplierData,
        industry: supplierData.supplier_industries_id
          ? {
              label: supplierData.industry,
              value: supplierData.supplier_industries_id,
            }
          : null,
        supplied_services: supplierData.supplier_services_id
          ? supplierData.supplier_services_id
              .split(",")
              .map((id) => ({ label: `Service ${id}`, value: parseInt(id) }))
          : [],
      });
      initLogo();
    }
  }, [supplierData]);

  useEffect(() => {
    const fetchAndSetIndustries = async () => {
      const industryList = await industriesListing();
      const formattedOptions = industryList.map((item) => ({
        label: item.title,
        value: item.id,
      }));
      setIndustryOptions(formattedOptions);

      if (supplierData) {
        const selectedIndustry = formattedOptions.find(
          (opt) => opt.value === Number(supplierData.supplier_industries_id)
        );
        const serviceIds = supplierData.supplier_services_id
          ? supplierData.supplier_services_id.split(",").map((id) => ({
              label: `Service ${id}`,
              value: parseInt(id),
            }))
          : [];

        reset({
          ...supplierData,
          industry: selectedIndustry || null,
          supplied_services: serviceIds,
        });

        if (selectedIndustry) {
          const services = await fetchServicesByIndustryId(
            selectedIndustry.value
          );
          setServicesOptions(
            services.map((s) => ({
              label: s.title,
              value: s.id,
            }))
          );
        }
      }
    };

    fetchAndSetIndustries();
  }, [supplierData, reset]);


  const onSubmit = async (data) => {
    
    const requestData = {
      supplier_id: supplierData?.supplier_id || supplierData?.id,
      cname: data.cname,
      email: data.email,
      pnumber: data.pnumber,
      abn: data.abn,
      website: data.website,
      state: data.state,
      streetaddress: data.streetaddress,
      city: data.city,
      country: data.country,
      postcode: data.postcode,
      description: data.discription,
      supplier_industries_id: data.industry?.value,
      supplier_services_id: data.supplied_services
        .map((s) => s.value)
        .join(","),
         logo: upload_file,
    };
console.log('requestData: ', requestData);
    try {
      const response = await RequestToEditData(requestData);
      console.log("Success:", response);
      // navigation("/thank-you"); // This line was removed as per the edit hint
      // setTimeout(() => { // This line was removed as per the edit hint
      //   navigation(-2); // This line was removed as per the edit hint
      // }, 2000); // This line was removed as per the edit hint
      setVisible(false);
    } catch (error) {
      console.error("API Error:", error);
      alert("Failed to send edit request");
    }
  };

  const footerContent = (
    <div className="flexWrapBoxE">
      <button
        className="borderbuttonStyle firstBut"
        onClick={() => setVisible(false)}
      >
        Cancel
      </button>
      <button className="darkbuttonStyle" onClick={handleSubmit(onSubmit)}>
        Send
      </button>
    </div>
  );

  const HeaderContent = (
    <div className="flexWrapBoxc requestCallback">
      <h1>Request to Edit</h1>
    </div>
  );

  const customStyles = {
    control: (base) => ({
      ...base,
      border: "1px solid #D0D5DD",
      borderRadius: "4px",
      minHeight: "38px",
    }),
  };

  return (
    <>
      <div className="requestEditBut">
        {/* <span onClick={() => setVisible(true)} ><WhiteButtonBammer text="Request to Edit"/></span> */}
        <div className="request-btn">
          <button
            onClick={() => setVisible(true)}
            className="nav-btn--get-started  navbar-link"
            style={{ border: 'none', background: 'none', cursor: 'pointer' }}
          >
            <WhiteButtonBammer text="Request to Edit" />
          </button>
        </div>
      </div>
      <Dialog
        visible={visible}
        style={{ width: "848px" }}
        className="requestsendModel"
        onHide={() => setVisible(false)}
        footer={footerContent}
        header={HeaderContent}
      >
        <div
          className={`uploadEditWrap supplierAddCompany supplierRequestEdit `}
        >
          <div className={`supplierAddform `}>
            <div className="requestsendForm">
              <div className="flexWrapGrid">
                <CustomUpload
                  upload_file={upload_file}
                  setUploadFile={setUploadFile}
                  existingImage={supplierData?.upload_url}
                />
              </div>
              <div className="flexWrapGrid">
                <div className="marginbotton">
                  <label htmlFor="cname">Company Name *</label>
                  <Controller
                    name="cname"
                    control={control}
                    render={({ field }) => (
                      <input
                        placeholder="Enter Company Name"
                        id="cname"
                        {...field}
                      />
                    )}
                  />
                  {errors.cname && (
                    <p className="error-message">{errors.cname.message}</p>
                  )}
                </div>
                <div className="marginbotton">
                  <label htmlFor="email">Company Email *</label>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <input
                        placeholder="company@email.com"
                        id="email"
                        {...field}
                      />
                    )}
                  />
                  {errors.email && (
                    <p className="error-message">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="flexWrapGrid">
                <div
                  className={`marginbotton phoneNumberData`}
                >
                  <label>Phone number</label>
                  <Controller
                    name="pnumber"
                    control={control}
                    render={({ field }) => (
                      <PhoneInput
                        defaultCountry="AU"
                        value={field.value}
                        className="phoneInput phoneInputFU"
                        containerClass="countrySelector"
                        placeholder="+61"
                        onChange={field.onChange}
                      />
                    )}
                  />
                  {errors.pnumber && (
                    <p className="error-message">{errors.pnumber.message}</p>
                  )}
                </div>
                <div className="marginbotton">
                  <label htmlFor="abn">ABN</label>
                  <Controller
                    name="abn"
                    control={control}
                    render={({ field }) => (
                      <input placeholder="32 635 443 221" id="abn" {...field} />
                    )}
                  />
                  {errors.abn && (
                    <p className="error-message">{errors.abn.message}</p>
                  )}
                </div>
              </div>

              <div className="flexWrapGrid">
                <div className="marginbotton">
                  <label htmlFor="industry">Industries</label>
                  <Controller
                    name="industry"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={industryOptions}
                        styles={customStyles}
                        placeholder="Select an industry..."
                        isSearchable
                        onChange={async (selected) => {
                          field.onChange(selected);
                          const services = await fetchServicesByIndustryId(
                            selected.value
                          );

                          const formatted = services.map((s) => ({
                            label: s.label,
                            value: s.value,
                          }));
                          setServicesOptions(formatted);
                          setValue("supplied_services", []);
                        }}
                        components={{ IndicatorSeparator: () => null }}
                      />
                    )}
                  />
                  {errors.industry && (
                    <p className="error-message">{errors.industry.message}</p>
                  )}
                </div>
                <div className="marginbotton">
                  <label htmlFor="supplied_services">
                    Services
                  </label>
                  <Controller
                    name="supplied_services"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={servicesOptions}
                        styles={customStyles}
                        isMulti
                        placeholder="Select Services"
                        components={{ IndicatorSeparator: () => null }}
                      />
                    )}
                  />
                  {errors.supplied_services && (
                    <p className="error-message">
                      {errors.supplied_services.message}
                    </p>
                  )}
                </div>
              </div>
             <div className="flexWrapGrid">
              <div className="marginbotton">
                <label htmlFor="discription">About Company</label>
                <Controller
                  name="discription"
                  control={control}
                  render={({ field }) => (
                    <textarea
                      placeholder="Enter about company"
                      id="description"
                      {...field}
                      rows={6}
                      style={{
                        width: "100%",
                        padding: "10px",
                        border: "1px solid #D0D5DD",
                      }}
                    />
                  )}
                />
              </div></div>

             

              <div className="flexWrapGrid" >
                <div className="marginbotton">
                  <label htmlFor="streetaddress">Street Address</label>
                  <Controller
                    name="streetaddress"
                    control={control}
                    render={({ field }) => (
                      <textarea
                        placeholder="Enter Street Address"
                        id="streetaddress"
                        {...field}
                        rows={3}
                        style={{
                          width: "100%",
                          padding: "10px",
                          border: "1px solid #D0D5DD",
                        }}
                      />
                    )}
                  />
                </div>
              </div>
             <div className="flexWrapGrid">
               <div className="marginbotton">
                  <label htmlFor="website">Website</label>
                  <Controller
                    name="website"
                    control={control}
                    render={({ field }) => (
                      <input
                        placeholder="www.example.com"
                        id="website"
                        {...field}
                      />
                    )}
                  />
                </div></div>

               <div className="flexWrapGrid">
                <div className="marginbotton">
                  <label htmlFor="country">Country</label>
                  <Controller
                    name="country"
                    control={control}
                    render={({ field }) => (
                      <input
                        placeholder="Enter Country"
                        id="country"
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className="marginbotton">
                  <label htmlFor="state">State</label>
                  <Controller
                    name="state"
                    control={control}
                    render={({ field }) => (
                      <input placeholder="Enter State" id="state" {...field} />
                    )}
                  />
                </div>
              </div>

              <div className="flexWrapGrid">
                <div className="marginbotton">
                  <label htmlFor="city">City / Suburb</label>
                  <Controller
                    name="city"
                    control={control}
                    render={({ field }) => (
                      <input placeholder="Enter City" id="city" {...field} />
                    )}
                  />
                </div>
                <div className="marginbotton">
                  <label htmlFor="postcode">Post Code</label>
                  <Controller
                    name="postcode"
                    control={control}
                    render={({ field }) => (
                      <input
                        placeholder="Enter Post Code"
                        id="postcode"
                        {...field}
                      />
                    )}
                  />
                </div>
              </div>

              <div className="marginbotton">
                <ReCAPTCHA
              sitekey="6LfAwdMqAAAAAFtI7SUPXKb1ew7C0jUYRvxDqjpS"
              onChange={(value) => console.log("Captcha:", value)}
            />
                {error && <p style={{ color: "red" }}>{error}</p>}
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default RequestToEdit;
