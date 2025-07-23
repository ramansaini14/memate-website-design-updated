import "./style.css";
import React, { useState, useEffect, useRef } from "react"; 
import { Helmet } from 'react-helmet-async';
import { Link, animateScroll as scroll } from "react-scroll";
import StickyBox from "react-sticky-box";

const knowledgeData = [
  {
    id: 1,
    name: "Overview",
    description: `
      <p class='sqsRHFont'>These terms and conditions (Terms) apply to your use of meMate. By purchasing a Subscription Plan or using meMate, you agree to be bound by these Terms. These Terms are a binding contract between us and you.</p>
      <p class='sqsRHFont'>Read these Terms carefully as they outline your legal rights and obligations.</p>
      <p class='sqsRHFont'>Words that are capitalised have defined meanings. You can find a list of defined words and their meanings in the Glossary at the end of this document.</p>
      <p class='sqsRHFont'>When you sign up for a Subscription Plan, you sign up on a rolling monthly basis. You can terminate or cancel your Subscription Plan by following the instructions in section 8.2(a).</p>
      <p class='sqsRHFont'>We might make changes to our Terms, Subscription Plans or Fees from time to time. See section 6 for information about when we will let you know about changes, and what rights you have if we make changes.</p>  
    `,
    children: [],
  },
  {
    id: 2,
    name: "1. Subscribing to and using meMate",

    description: `
    <p><strong class='sqsSBHFont'>1.1 These Terms apply to meMate</strong></p>
    <p class='sqsRHFont'>We agree to supply, and you agree to use, meMate in accordance with these Terms.</p>
    <p><strong class='sqsSBHFont'>1.2 Subscription Plans</strong></p>
   
    <p class='sqsRHFont'>We currently offer Subscription Plans for meMate to new customers in either Australia or New Zealand.</p>
    <p  class='sqsRHFont'>A description of your Subscription Plan, including any Product and support inclusions or limitations, was disclosed to you before you signed up for the Subscription Plan initially.</p>
    <p><strong  class='sqsSBHFont'>1.3 Your responsibilities</strong></p>
    <p class='sqsRHFont'>Do’s and Don’ts</p>
    <p class='sqsRHFont'>As a Subscriber, you must:</p>
    <ul class='listMargin'>
     <li class='sqsRHFont'>Provide current contact details. You must ensure that we have your up-to-date contact details.</li>
     <li class='sqsRHFont'>Control access under your Subscription Plan and ensure your User list remains up-to-date. You control who has access to meMate under your Subscription Plan and which Users can view and modify your Subscriber Data.</li>
     <li class='sqsRHFont'>Pay Fees. If you are responsible for paying Fees for your Subscription Plan, you must comply with the obligations set out in section 7. You are liable for any Fees accrued by Users you grant certain permissions to (for example, any Administrator, Accountant/Bookkeeper, or Payroll users you appoint). </li>
     <li class='sqsRHFont'>Provide accurate data. You are responsible for verifying the accuracy and completeness of any Subscriber Data (including Payroll Data) that you or your Users input into meMate. </li>
     <li class='sqsRHFont'>Backup Data. There is an inherent risk of data loss with any technology. You should regularly backup your records and Subscriber Data.</li>
     <li class='sqsRHFont'>Keep your own records. You should retain a copy of your business and financial records (including invoices, receipts, business reports, and Subscriber Data).</li>
     <li class='sqsRHFont'>Comply with Applicable Law. It is your responsibility to comply with Applicable Law, including retaining records for Tax Law and Employment Law compliance purposes. If your Subscription Plan is terminated or canceled, you should extract your Subscriber Data in its entirety as soon as possible by following the instructions set out in section 8.3(d). </li>
     <li class='sqsRHFont'>Make sure that meMate is right for you. Product features and functionality may change over time. Your needs may also evolve. This means that meMate may not be, or may not remain, suitable for your needs. You must assess the ongoing suitability of your Subscription Plan and meMate to meet your needs.</li>
    </ul>
   
    <p class='sqsRHFont'>As either a Subscriber or User, you must:</p>
    
    <ulclass='listMargin'>
     <li class='sqsRHFont'>Keep your username and password secure and confidential. You should never:</li>
     <li class='sqsRHFont'>Tell anyone your username and password.</li>
     <li class='sqsRHFont'>Let anyone else, whether acting as your agent or not, access meMate using your username and password.</li>
   </ul>
    
   
   <p class='sqsRHFont'>You should be particularly careful when accessing meMate from a public computer or over public Wi-Fi.</p>
   <p class='sqsRHFont'>If you think anyone else might know your login credentials, you should reset the affected password in meMate or contact us without delay to arrange a password reset.</p>
   <p class='sqsRHFont'>When accessing meMate as either a Subscriber or User, you must not:</p>
    <ul class='spacingClass listMargin'>
     <li class='sqsRHFont'>Use meMate in a way that contravenes any Applicable Law or violates a third party’s legal rights.</li>
     <li class='sqsRHFont'>Interfere with the operation of meMate.</li>
     <li class='sqsRHFont'>Sell, commercialise, lease, loan, or otherwise distribute meMate to third parties.</li>
     <li class='sqsRHFont'>Reverse-engineer, decompile, or otherwise attempt to discover source code, formulae, or processes in respect of the software behind meMate.</li>
     <li class='sqsRHFont'>Copy, reproduce, alter, modify, create derivative works, or publicly display any part of any meMate content (except in respect of Subscriber Data or where we have given you prior written consent).</li>
     <li class='sqsRHFont'>Use meMate in any way which is harmful, threatening, abusive, vulgar, obscene, or otherwise objectionable.</li>
     <li class='sqsRHFont'>Upload any material (including pdf. and .jpg files) into meMate that:</li>
     <li class='sqsRHFont'>Contains Personal Information of any individual without that individual’s express or implied consent.</li>
     <li class='sqsRHFont'>Infringes the Intellectual Property Rights of any third party.</li>
     <li class='sqsRHFont'>Directly or indirectly introduce, or permit the introduction into meMate of, any software viruses or other malicious computer code, files, or programs, or in any other manner whatsoever corrupt, interrupt, destroy or limit the functionality of meMate.</li>
     <li class='sqsRHFont'>Use meMate to send “spam” or otherwise make available any offering that violates these Terms.</li>
     <li class='sqsRHFont'>Remove, modify, or tamper with any copyright, acknowledgment, attribution, trademark, warning, disclaimer, regulatory, or legal notice or link that is incorporated into meMate.</li>
     <li class='sqsRHFont'>Act in a manner that is verbally or physically abusive, threatening or amounts to bullying or harassment of any of our employees, contractors, or agents (including our customer support teams).</li>
   </ul>
   <p><strong class='sqsSBHFont '>1.4 Product Support</strong></p>
   
   <p class='sqsRHFont'>Contact our customer support team for Australia or New Zealand using the contact information set out on our website.</p>
   <p class='sqsRHFont'>Support is also available via our Help Centre, Community forum, or online chat.</p>
   <p class='sqsRHFont'>Our customer support team will only respond to communications from you (if you are the Subscriber) or nominated Users with the right permissions. For security reasons, our customer support team will not respond to instructions or requests from your other Employees.</p>
   <p><strong class='sqsSBHFont'>1.5 Disruption</strong></p>
   
   <p class='sqsRHFont'>meMate may be disrupted during certain periods due to circumstances or events beyond our reasonable control, including as a result of:</p>
   <ul class='listMargin'>
     <li class='sqsRHFont'>Internet service provider or telecommunications unavailability, interruption, delay, bottleneck, failure or fault.</li>
     <li class='sqsRHFont'>Negligent, malicious, or willful acts or omissions of third parties.</li>
     <li class='sqsRHFont'>Maintenance or repairs carried out by any third party in respect of any of the systems used in connection with providing meMate or Other Applications.</li>
     <li class='sqsRHFont spacingClass'>Services provided by third parties ceasing or becoming unavailable.</li>
   </ul>
   <p><strong class='sqsSBHFont'>1.6 System maintenance</strong></p>
   <p class='sqsRHFont'>meMate may also be disrupted during certain periods due to system maintenance or repairs. Where meMate is unavailable because of system maintenance or repairs, we will notify you beforehand except in cases where urgent system maintenance or repairs are needed to maintain critical Product functionality or security. Updates about system downtime are also posted on our website.</p>
   
   
   `,
    children: [],
  },
  {
    id: 3,
    name: "2. Other Applications",
    description: `
   <p><strong class='sqsSBHFont'>2.1 Other Applications may be suitable for use in conjunction with meMate. </strong></p>
   <p class='sqsRHFont'>Other Applications are offered by third parties and may be subject to their own terms of use. For example, you may be required to pay fees to a third party, in addition to the Fees you pay to us for meMate or for the use of Premium Features.</p>
   <p><strong class='sqsSBHFont'>2.2 Access to Subscriber Data</strong></p>
   <p class='sqsRHFont'>If you install or enable any Other Application for use with meMate, you consent to us allowing the Other Application to access your Subscriber Data as required to enable meMate and the Other Application to operate together. Any exchange of data or other interaction between you and the Other Application provider is between you and them. We are not responsible or liable for any disclosure, modification, or deletion of your Subscriber Data as a result of any access to meMate by the Other Application provider (except to the extent caused or contributed to by a breach of Applicable Law or these Terms by us or a Third Party acting on our instructions).</p>
    `,
    children: [],
  },
  {
    id: 4,
    name: "3. Data Feeds",

    description: `
    <p><strong class='sqsSBHFont'>3.1 How do Data Feeds work? </strong></p>
    <p class='sqsRHFont'>Data Feeds (including bank feeds) work by you authorising a Data Supplier to provide us (and your Professional Partner, if applicable) with Imported Data. A Data Supplier might require you to give a hard copy authority form to set up the Data Feed.</p>
    <p class='sqsRHFont'>Use of Data Feeds may be subject to additional terms imposed by the Data Supplier.</p>
    <p class='sqsRHFont'>Users may only use Data Feeds for the Subscriber’s transaction accounts. Users cannot use Data Feeds for a third-party account that is not the Subscriber’s account.</p>
       <p><strong class='sqsSBHFont'>3.2 Data Suppliers</strong></p>
       <ul class='listMargin'>
           <li class='sqsRHFont'>May be paid a commission or fee for providing us with your Imported Data. </li>
           <li class='sqsRHFont'>May not be under any obligation to provide us with your Imported Data and may have a right to stop doing so at any time without notice to either you or us.</li>
           <li class='sqsRHFont'>Are not a party to any agency, partnership, or joint venture relationship with us.</li>
       </ul>
       <p><strong class='sqsSBHFont'>3.3 How you can end your use of Data Feeds</strong></p>
      
       
       <p class='sqsRHFont'>If you wish to terminate or cancel your Data Feeds but continue to use meMate, you must advise the Data Supplier in writing, and confirm how long the Data Supplier will take to process the termination or cancellation. For example, the Data Supplier may require at least 14 days to terminate or cancel the Data Feeds.</p>
   <p><strong class='sqsSBHFont'>3.4 When Data Suppliers can terminate or cancel your Data Feeds</strong></p>
   <p class='sqsRHFont'>Data Suppliers may have a right to terminate or cancel your Data Feeds at any time, for any reason (unless they have agreed otherwise with you in writing).</p>
   <p class='sqsRHFont'>Your Data Feeds will be automatically terminated or canceled when your Subscription Plan is terminated or canceled.</p>
 <p><strong class='sqsSBHFont'>3.5 Fees for Data Feeds</strong></p>
 <p class='sqsRHFont'>If Data Suppliers charge you any fees related to your Data Feeds or associated accounts, as a Subscriber, you are responsible for and must pay those fees in addition to any Fees which must be paid to us for meMate, or for the use of Premium Features. If you do not make required payments to the Data Supplier by the due date for payment, they may not allow us to provide the Data Feeds to you.</p>

    `,
    children: [],
  },
  {
    id:5,
    name: "4. meMate Premium Features",

    description: `
    <p><strong class='sqsSBHFont'>4.1 You may be required to comply with additional terms of use if you (or your Users) use Premium Features. Any additional Fees that apply for the use of other Premium Features.</strong></p>
    <p class='sqsRHFont'>If the Premium Features you use include online invoice payments, these terms and conditions and fees and charges apply.</p>
    <p><strong class='sqsSBHFont'>4.2 meMate Work</strong></p>
    <p class='sqsRHFont'>This section applies if you make the meMate Work app available to your Employees and Contractors.</p>
    <p class='sqsRHFont'>(a) Giving access to Employees</p>
    <p class='sqsRHFont'>You can manage your Employees’ access by following these steps for meMate Work.</p>
    <p class='sqsRHFont'>(b) Responsibility</p>
    <p class='sqsRHFont'>As a Subscriber, you must:</p>
    <ul class='listMargin'> 
    <li class='sqsRHFont'>
Ensure that you and your Users enter the correct email addresses for your Employees on the ‘Employee Details’ screen.
    </li>
    <li class='sqsRHFont'>
Verify the accuracy of any data entered into the app by your Employees or Users, from within meMate.
    </li>
    <li class='sqsRHFont'>
Use reasonable commercial endeavours to ensure your Employees keep their usernames and passwords secure and confidential.
    </li>
    <li class='sqsRHFont'>
Regulate your Employees’ access to the app (for example, by restricting an Employee’s access once they are no longer employed by you so they can only access their payslips).
    </li>
    <li class='sqsRHFont'>
Ensure departing Employees download their payslips before they leave their employment with you.
    </li>

    </ul>
       <p><strong class='sqsSBHFont'>4.3 Other meMate Apps</strong></p>
       
       <p class='sqsRHFont'>If you use another meMate app, like the meMate Capture app, additional terms may apply. These terms will be presented to you when you download the relevant app.</p>
    `,
    children: [],
  },
  {
    id: 6,
    name: "5. Data, IP, and Privacy",

    description: `
    <p><strong  class='sqsSBHFont'>5.1 What you own: Subscriber Data</strong></p>
    <p class='sqsRHFont'>(a) Ownership of Subscriber Data </p>
    <p class='sqsRHFont'>As the Subscriber, you (and, if applicable, your third-party licensors) own your Subscriber Data. </p>
    <p class='sqsRHFont'>(b) Licence to Subscriber Data</p>
    <p class='sqsRHFont'>As the Subscriber, you grant to us a non-exclusive and royalty-free licence to use the Subscriber Data:</p>
    <ul class='listMargin'>
      <li class='sqsRHFont'>To enable us to perform our obligations under these Terms.</li>
      <li class='sqsRHFont'>To develop and improve our products and services.</li>
      <li class='sqsRHFont'>To identify, develop, and deliver other functionality, products, and services that may be of interest to you.</li>
      <li class='sqsRHFont'>For other purposes to which you expressly consent from time to time.</li>
    </ul>
 <p class='sqsRHFont'>You warrant that you have obtained any necessary consents and have all necessary rights to grant us the licence to Subscriber Data under section 5.1(b).</p>
 <p class='sqsRHFont'>(d) Accuracy and completeness of Subscriber Data</p>
 <p class='sqsRHFont'>Your Subscriber Data is entered by you and your Users. You are responsible for verifying and maintaining the accuracy of your Subscriber Data.</p>
 <p class='sqsRHFont'>(e) Use of anonymised or aggregated data</p>
 <p class='sqsRHFont'>As the Subscriber, you grant to us a royalty-free and irrevocable licence to use anonymised or aggregated data that we create or derive from your Subscriber Data in perpetuity for any purpose, provided that such anonymised or aggregated data does not contain any Personal Information.</p>
<p><strong class='sqsSBHFont'>5.2 What we own: our IP</strong></p>
<p class='sqsRHFont'>(a) Ownership of our Intellectual Property Rights</p>
<p class='sqsRHFont'>We (and our licensors, where applicable) own meMate, including but not limited to software, source code, object code, and our templates, documents, marketing material, trademarks, business names, logos, trading styles, get-up, processes, methodologies, and any of our other Intellectual Property Rights.</p>
<p class='sqsRHFont'>(b) Licence to use meMate</p>
<p class='sqsRHFont'>Subject to payment of the Fees, we grant you as the Subscriber and your Users a non-exclusive, revocable, and non-transferable licence to use meMate in the way that we authorise. This licence continues until the end of the Data Extraction Period described in section 8.3(d), after your Subscription Plan is terminated or canceled in accordance with these Terms.</p>
<p><strong class='sqsSBHFont'>5.3 Confidentiality</strong></p>
<p class='sqsRHFont'>Each party must take reasonable steps to secure and keep secure any Confidential Information belonging to the other party which is in its possession, custody, or control and must not disclose it to any third party except where permitted under these Terms.</p>
<p class='sqsRHFont'>This section 5.3 does not apply to Confidential Information which a party is required to disclose under Applicable Law, pursuant to any order, direction or request made by any court of competent jurisdiction, regulatory body, or Government Agency, or under the rules of any recognised stock exchange.</p>
<p><strong class='sqsSBHFont'>5.4 Data security</strong></p>

<p class='sqsRHFont'>(a) We must take reasonable precautions to prevent a Security Breach in relation to the Subscriber Data.</p>
<p class='sqsRHFont'>(b) Each party must promptly notify the other party if it becomes aware of an Eligible Data Breach of Subscriber Data as required under the Privacy Act.</p>
<p><strong class='sqsSBHFont'>5.5 Collection, disclosure, and use of Personal Information</strong></p>
<p class='sqsRHFont'>We collect, hold, use, and disclose Personal Information in accordance with these Terms, our Privacy Policy, and Applicable Law.</p>
<p class='sqsRHFont'>Privacy consent</p>
<p class='sqsRHFont'>You consent to us collecting, holding, using, and disclosing your Personal Information in accordance with these Terms, our Privacy Policy, and Applicable Law.</p>
<p class='sqsRHFont'>You must obtain all necessary consents and provide all necessary notices in accordance with Applicable Laws about privacy (including the Privacy Act) in relation to any Personal Information you supply to us in connection with meMate, Premium Features, your Subscription Plan or these Terms, including from your Users and you must ensure that the consents are sufficient to enable us to collect, hold, use, and disclose the Personal Information in the manner contemplated in these Terms, our Privacy Policy, and as otherwise required by Applicable Law.</p>

    `,
    children: [],
  },
  {
    id: 7,
    name: "6. Changes to these terms, meMate, or Fees",

    description: `
   <p><strong class='sqsSBHFont'>6.1 Changes to these Terms</strong></p>
   
   
   <p class='sqsRHFont'>We may change these Terms by giving you written notice. If the changes are significant or are likely to have a detrimental impact on you, we will give you written notice at least 30 days before the changes take effect. We will act reasonably in exercising our right to change these Terms.</p>
  <p><strong class='sqsSBHFont'>6.2 Changes to the functionality of meMate or your Subscription Plan</strong></p>
  <p class='sqsRHFont'>(a) We may change meMate or your Subscription Plan, including by: adding, removing, or discontinuing product features or Premium Features; changing the inclusions or limitations in our product or support tiers; or updating or modifying meMate to enhance its functionality, performance, security, or compatibility.</p>
  <p class='sqsRHFont'>(b) If the changes are likely to have a detrimental impact on how you use meMate, we will give you written notice at least 30 days before the changes take effect.</p>
<p><strong class='sqsSBHFont'>6.3 Changes to Fees</strong></p>

<p class='sqsRHFont'>We may change the amount of any Fee, introduce a new Fee, and/or change the circumstances in which, or frequency with which, a Fee is payable. We will give you written</p>
<p><strong class='sqsSBHFont'>6.4 Discontinuing meMate</strong></p>

<p class='sqsRHFont'>(a) If we discontinue the development, maintenance, or sale of meMate in either Australia or New Zealand and we make subscriptions for any substantially similar product(s) available for sale generally to customers at the time in the relevant jurisdiction, we may propose to migrate you to a substantially similar product. We will give you written notice at least 60 days before any proposed migration and we will give you a reasonable opportunity to opt out of any proposed migration. If you do not opt out before the effective date of the migration, we will automatically migrate your Subscriber Data and transfer your Subscription Plan to a substantially similar product. We will act reasonably in making any migration under this section 6.4.</p>
<p class='sqsRHFont'>(b) If we discontinue the development, maintenance, or sale of meMate in either Australia or New Zealand, and do not make subscriptions for any substantially similar product(s) available for sale generally to customers at that time, we will give you written notice at least 60 days before the effective date of discontinuation of your meMate service so that you can arrange for replacement product(s) or service(s).</p>
<p><strong class='sqsSBHFont'>6.5 Your rights if we make changes</strong></p>

<p class='sqsRHFont'>(a) Without limiting your rights under section 8.2(a), if we make changes under sections 6.1, 6.2(b), 6.3, or 6.4, you have a right to terminate your Subscription Plan before the changes take effect. You can terminate your Subscription Plan by contacting our customer support team for Australia or New Zealand. Termination will take effect at the end of your current subscription period (or on another date agreed with you). If you exercise your right to terminate or cancel your Subscription Plan in accordance with this section 6.5(a), you will be entitled to receive a refund for any Fees you prepaid for the period after the termination or cancellation takes effect. Alternatively, you can upgrade or downgrade your Subscription Plan as set out in section 1.3.</p>

    `,
    children: [],
  },
  {
    id: 8,
    name: "7. Fees and Payment",

    description: `
   <p><strong class='sqsSBHFont'>7.1 This section applies to you, as a Subscriber, if you are responsible for paying all or part of the Fees for your Subscription Plan.</strong></p>
   
      <p class='sqsRHFont'>You will be responsible for paying the Fees unless another person (such as a Professional Partner) is responsible for paying the Fees. If they stop paying us, you will need to pay the Fees to continue using meMate, in compliance with this section 7.</p>
      <p><strong class='sqsSBHFont'>7.2 Fees payable under your Subscription Plan</strong></p>
      <p class='sqsRHFont'>When you select your Subscription Plan, you will be informed of the pricing, product tier inclusions, and limitations which are relevant to your Subscription Plan.</p>
      <p class='sqsRHFont'>All Subscription Plans include access to a base subscription, the use of which incurs a fixed monthly Subscription Fee and, depending on your plan, may include access to Premium Features, the use of which incurs additional fees and charges.</p>
      <p class='sqsRHFont'>If the Premium Features you use include online invoice payments, these terms and conditions and fees and charges apply.</p>
      <p class='sqsRHFont'>Your monthly invoice will consist of a fixed monthly Subscription Fee which is charged in advance of the applicable subscription period and (if applicable) any variable Pay-Per-Use Fees or Fees for Premium Features which are charged in arrears.</p>
<p><strong class='sqsSBHFont'>7.3 Free Trial</strong></p>

<p class='sqsRHFont'>We may make meMate available to new subscribers for a free trial period (Trial). Unless otherwise stated, Premium Features are not included in the Trial offer. If you use Premium Features during your Trial, Fees may apply to those Premium Features. Unless you terminate or cancel your Subscription Plan during the Trial, it will automatically rollover to a paid Subscription Plan at the end of your Trial and you will be required to pay us the Fees described in the Subscription Plan while your subscription remains active. By providing us with your credit card or other payment details and signing electronically to confirm that you agree to the Direct Debit Authority, you authorise us to deduct the Fees payable to us in respect of your use of meMate after the end of the Trial.</p>
<p><strong class='sqsSBHFont'>7.4 Payment Terms</strong></p>

<p class='sqsRHFont'>If you are responsible for paying the Fees for your Subscription Plan, you must provide us with a direct debit authority in accordance with section 7.5 and pay Fees by the due date stated on the relevant invoice (unless otherwise agreed with you). Your fixed monthly Subscription Fee is payable in advance, within 7 days of receipt of your invoice. Different payment terms may apply to the use of Premium Features and will be specified in the relevant product terms and conditions.</p>
<p><strong class='sqsSBHFont'>7.5 Direct Debit</strong></p>

<p class='sqsRHFont'>(a) Direct Debit Authority</p>
<p class='sqsRHFont'>As a Subscriber, you authorise us to deduct the Fees payable to us in respect of your use of meMate by providing us with your credit card or other payment details and signing electronically to confirm that you agree to the Direct Debit Authority. If your Direct Debit Authority is canceled or withdrawn, you must provide us with a replacement direct debit authority (unless we agree to another payment method).</p>
<p class='sqsRHFont'>(b) Recurring Payments</p>
<p class='sqsRHFont'>When you purchase a Subscription Plan, you agree that you are authorising recurring payments, and payments will be made to us by the method and at the recurring intervals you have agreed to, until the end of the month in which the Subscription Plan is terminated or canceled.</p>
<p class='sqsRHFont'>(c) Processing Fee payments</p>
<p class='sqsRHFont'>Debiting of Fees will ordinarily occur on the invoice due date (but may occur at other times if permitted under your Direct Debit Authority). If you are responsible for paying the Fees for your Subscription Plan, we will provide you with a monthly invoice detailing the Fees that will be debited from your account.</p>
<p class='sqsRHFont'>Your first base subscription payment for meMate may be pro-rated for the appropriate number of days until the end of that month.</p>
<p class='sqsRHFont'>You can view Premium Feature usage charges (including Pay-Per-Use Fees) at any time via “My Account”. Online invoice payment fees and charges are available via the online invoice payments portal.</p>
<p class='sqsRHFont'>As a Subscriber, it is your responsibility to ensure that you have sufficient credit or funds available in your nominated credit card or bank account to cover your monthly payment, and that your credit card or account details are up to date.</p>
<p class='sqsRHFont'>If we cannot debit your Fees from your credit card or bank account, we will notify you that your account has fallen into arrears and may attempt to re-draw up to 3 further times before the direct debit is considered to be dishonoured.</p>
<p class='sqsRHFont'>You are responsible for paying any dishonour fee(s) charged by your financial institution.</p>
<p class='sqsRHFont'>As a Subscriber, you can update your payment details at any time via “Manage my product” within the “My Account” dashboard. Following any update, you authorise us to continue to charge the applicable credit card or bank account, including for any outstanding Fees accrued by you or your Users in connection with your use of meMate.</p>
<p class='sqsRHFont'>(d) Late payment</p>
<p class='sqsRHFont'>If undisputed Fees remain unpaid for a period of 30 days after you receive a written notice from us requiring you to pay the outstanding Fees, we may suspend or terminate your Subscription Plan in accordance with section 8.2(b).</p>
<p class='sqsRHFont'>(e) If there has been a problem</p>
<p class='sqsRHFont'>If you believe there has been an error in debiting your credit card or bank account, you should notify us immediately at accounts@meMate.com so that we can resolve your query promptly. If your credit card or bank account has been incorrectly debited by more than it should have been, we will arrange a refund of the incorrect debit. If there is a genuine dispute about an amount that was debited from your account, and you have notified us about the dispute, we will hold the amount on trust for you pending the outcome of a dispute resolution process. If there is a genuine dispute about an amount due for payment that has not been debited from your account, and you have notified us about the dispute, we will not debit the disputed amount until after the outcome of a dispute resolution process.</p>
<p><strong class='sqsSBHFont'>7.6 Goods and services tax (GST)</strong></p>
<p class='sqsRHFont'>All Fees are subject to GST. If a Fee is stated as being GST inclusive, then it already includes the GST. If a Fee does not say it is GST inclusive, then we will add GST to the amount.</p>




    `,
    children: [],
  },
  {
    id: 9,
    name: "8. Term and Termination",

    description: `
   <p><strong class='sqsSBHFont'>8.1 Automatic renewal</strong></p>

   <p class='sqsRHFont'>When you sign up for a Subscription Plan, you sign up on a rolling monthly basis. Your Subscription Plan will automatically renew at the end of the current one-month subscription period for a further one-month period unless your Subscription Plan is terminated in accordance with these Terms. You are required to give us notice at least 10 days before the end of your current subscription period if you do not want to renew your Subscription Plan, to give us sufficient time to process your request.</p>
      <p><strong class='sqsSBHFont'>8.2 Termination</strong></p>
      <p class='sqsRHFont'>(a) How can you terminate or cancel your subscription?</p>
      <p class='sqsRHFont'>For any reason</p>
      <p class='sqsRHFont'>As a Subscriber, you can terminate or cancel your Subscription Plan for any reason, or no reason, by notifying us at least 10 days before the renewal of your monthly Subscription Plan, so that we have sufficient time to process your request. This can be done from within the “My Products” page of your “My Account” dashboard or by contacting our customer support team for Australia or New Zealand. The effective date of termination or cancellation will be the last day of the current subscription period (or, if you notify us less than 10 days before the end of the month, the following subscription period). If your Subscription Plan is terminated or canceled, you and your Users will continue to have access to your Subscription Plan until the end of your billing period and the end of the Data Extraction Period described in section 8.3(d).</p>
      <p class='sqsRHFont'>We do not provide refunds or credits for any partial subscription periods unless expressly set out in these Terms, where otherwise required under Applicable Law, or otherwise agreed with you.</p>
      <p class='sqsRHFont'>For our breach</p>
      <p class='sqsRHFont'>As a Subscriber, you can terminate or cancel your Subscription Plan by providing notice if we fail to remedy a material breach of these Terms within 10 days of you giving us notice of the breach in writing.</p>
      <p class='sqsRHFont'>If we make changes</p>
      <p class='sqsRHFont'>Section 6.5(a) sets out your right to terminate or cancel your Subscription Plan in certain circumstances where we notify you that we intend to make changes to these Terms, your Fees, meMate, or your Subscription Plan.</p>
      <p class='sqsRHFont'>If we suspend performance of our obligations</p>
      <p class='sqsRHFont'>If we suspend the performance of our obligations under these Terms, you have a right, during the period of suspension, to terminate or cancel your Subscription Plan immediately upon notice to us.</p>
      <p class='sqsRHFont'>(b) How can we suspend, terminate, or cancel your Subscription?</p>
      <p class='sqsRHFont'>For any reason</p>
      <p class='sqsRHFont'>We can terminate or cancel your Subscription Plan for any reason by providing you with at least 60 days’ written notice.</p>
      <p class='sqsRHFont'>For your breach</p>
      <p class='sqsRHFont'>We can suspend, terminate, or cancel your Subscription Plan by providing written notice if you fail to remedy a material breach of these Terms within 10 days after we give you written notice of the breach, including without limitation where:</p>
   <ul class='listMargin'>
   <li class='sqsRHFont'>Fees are overdue; or</li>
   <li class='sqsRHFont'>There is a change in who owns or controls the Subscriber where we were not notified in advance about the change in ownership or control, and the new owners have failed to satisfy our reasonable identity and credit check requirements or failed to provide information that we reasonably require to make changes to the Subscriber’s account.</li>

   </ul>
  
   <p class='sqsRHFont'>Immediately</p>
   <p class='sqsRHFont'>We can suspend your Subscription Plan immediately (and will notify you as soon as we reasonably can) if we believe it is reasonably necessary either to protect the security of meMate or the Subscriber Data or any critical meMate functionality. We will lift any suspension as soon as we reasonably can after resolution of the issue(s) giving rise to the suspension.</p>
   <p class='sqsRHFont'>We can suspend, terminate, or cancel your Subscription Plan immediately upon written notice to you (and will notify you as soon as we reasonably can) if:</p>
   <ul class='listMargin'>
   <li class='sqsRHFont'>As a Subscriber, you cease to be able to pay all your debts as they fall due, become insolvent, go into liquidation or administration, bankruptcy, or such other similar arrangement with creditors, or cease to carry on business (subject to any stay requirements under Applicable Law);</li>
   <li class='sqsRHFont'>There is a change in who owns or controls the Subscriber where we were not notified in advance about the change in ownership or control, and the new owners have failed to satisfy our reasonable identity and credit check requirements or failed to provide information that we reasonably require to make changes to the Subscriber’s account.</li>
   <li class='sqsRHFont'>A change to any Third Party arrangement necessary for meMate renders the ongoing operation of meMate substantially unworkable or non-functional, despite us making reasonable efforts to ensure the ongoing operation of meMate; or </li>
   <li class='sqsRHFont'>The actions of a regulator or a change in Applicable Law or regulation makes the ongoing operation of meMate substantially unworkable or non-functional.</li>
   </ul>
<p><strong class='sqsSBHFont'>8.3 What happens on Termination or cancellation of your Subscription Plan?</strong></p>
<p class='sqsRHFont'>(a) End of your Subscription Plan</p>
<p class='sqsRHFont'>Unless otherwise specified in these Terms or mutually agreed with you in writing, termination or cancellation of your Subscription Plan is effective on the last date of your current subscription period. After termination or cancellation of your Subscription Plan is effective:</p>

 <ul class='listMargin'>
   <li class='sqsRHFont'>	You and your Users must cease use of meMate; and</li>
   <li class='sqsRHFont'>	You and any Users (including Employees) will only be able to access </li>
   </ul>
   <p class='sqsRHFont'>Subscriber Data for the Data Extraction Period described in section 8.3(d) and may not have access to Subscriber Data after the Data Extraction Period ends.</p>
<p class='sqsRHFont'>(b) Payment of Fees still owing</p>
<p class='sqsRHFont'>After termination or cancellation of your Subscription Plan, you must pay any Fees that are due and payable to us (including any variable Pay-Per-Use Fees or Fees for use of Premium Features) up to the date of termination or cancellation of your Subscription Plan.</p>
<p class='sqsRHFont'>(c) Continuation of limitations on liability</p>
<p class='sqsRHFont'>Any limitations on liability that apply under these Terms continue after termination or cancellation of your Subscription Plan.</p>
<p class='sqsRHFont'>(d) Accessing archived Subscriber Data after termination or cancellation of your Subscription Plan</p>
<p class='sqsRHFont'>We strongly recommend that, as a Subscriber, you extract your Subscriber Data for compliance and archive purposes either before termination or cancellation of your Subscription Plan or as soon as possible following termination or cancellation of your Subscription Plan. Failure to extract and retain your Subscriber Data may result in you being unable to comply with your record retention obligations under Applicable Law (including Tax Law and Employment Law). You acknowledge and agree that:</p>
<ul class='listMargin'>
<li class='sqsRHFont'>You will have 30 days from the effective date of termination or cancellation of your Subscription Plan to extract your Subscriber Data from meMate (Data Extraction Period) for no additional charge.</li>
<li class='sqsRHFont'>The Data Extraction Period also applies to Employees who may need to access their payslips using meMate YourPay.</li>
<li class='sqsRHFont'>After the Data Extraction Period, you and your Users (including your Employees and, if applicable, Professional Partner) will not have any further guaranteed access to meMate or your Subscriber Data.</li>
<li class='sqsRHFont'>If you need to access your archived Subscriber Data records after the end of your Data Extraction Period, contact us in Australia or New Zealand. Access to archived Subscriber Data may be subject to additional fees and charges and require that you have an active Subscription Plan to view the records. We cannot guarantee that we will be able to recover your historical Subscriber Data, which is why you should keep your own records and copies of Subscriber Data. We may delete Subscriber Data after the Data Extraction Period in accordance with our data retention policies.</li>

</ul>





    `,
    children: [],
  },
  {
    id: 10,
    name: "9. Liability, Warranties, and Indemnities",

    description: `
  <p><strong class='sqsSBHFont'>9.1 Limits to our liability</strong></p>

 
  <p class='sqsRHFont'>Our liability to you for any breach by us of these Terms is, if permitted by the Australian Consumer Law (ACL), Consumer Guarantee Act 1993 (NZ CGA), and/or Fair Trading Act 1986 (NZ FTA) (as applicable), limited to:</p>
  <ul class='listMargin'>
<li class='sqsRHFont'>The resupply of meMate or the service (as applicable); or</li>
<li class='sqsRHFont'>The cost of resupplying meMate or the service (as applicable),</li>

  </ul>
 
  <p class='sqsRHFont'>in respect of which the breach occurred, and otherwise will be limited to the maximum extent permitted by Applicable Law.</p>
   <p><strong class='sqsSBHFont'>9.2 Where the Australian Consumer Law applies</strong></p>
   <p class='sqsRHFont'>(a) Our goods and services come with guarantees that cannot be excluded under the Australian Consumer Law. For major failures with the service, you are entitled:</p>
   <ul class='listMargin'>
<li class='sqsRHFont'>To cancel your service contract with us; and</li>
<li class='sqsRHFont'>To a refund for the unused portion, or to compensation for its reduced value.</li>

  </ul>
   
  <p class='sqsRHFont'>You are also entitled to choose a refund or replacement for major failures with goods. If a failure with the goods or a service does not amount to a major failure, you are entitled to have the failure rectified in a reasonable time. If this is not done, you are entitled to a refund for the goods and to cancel the contract for the service and obtain a refund of any unused portion. You are also entitled to be compensated for any other reasonably foreseeable loss or damage from a failure in the goods or service.</p>
<p class='sqsRHFont'>(b) These Terms do not exclude, restrict, or modify the application of any part of the ACL, or the exercise of any right or remedy conferred by the ACL.</p>
  <p><strong class='sqsSBHFont'>9.3 Where the New Zealand Consumer Guarantee Act and Fair Trading Act would otherwise apply</strong></p>
  <p class='sqsRHFont'>(a) For the purposes of section 5D of the NZ FTA and section 43 of the NZ CGA:</p>
<ul class='listMargin'>
<li class='sqsRHFont'>The goods and services provided to you under or in connection with these Terms are being provided and acquired in trade;</li>
<li class='sqsRHFont'>If the NZ FTA and/or NZ CGA applies to any goods or services supplied to you under or in connection with these Terms, the parties agree to contract out of the NZ CGA and sections 9, 12A, and 13 of the NZ FTA; and </li>
<li class='sqsRHFont'>All representations, conditions, warranties, and terms that would otherwise be expressed or implied in these Terms by general law, statute, or custom are expressly excluded (to the extent that such representations, conditions, warranties, and terms can be excluded at law).</li>
  </ul>
  <p class='sqsRHFont'>(b) Except as specified in section 9.3(a), these Terms do not exclude, restrict, or modify the application of any part of the NZ CGA or NZ FTA, or the exercise of any right or remedy conferred by the NZ CGA or NZ FTA.</p>
<p><strong class='sqsSBHFont'>9.4 When we will not be liable to you</strong></p>
<p class='sqsRHFont'>To the maximum extent permitted under Applicable Law and subject to sections 9.2 and 9.3, we are not responsible or liable to you for</p>
<ul class='listMargin'>
<li class='sqsRHFont'>The contents of the Subscriber Data;</li>
<li class='sqsRHFont'>Any Loss or Claim relating to provision or use of the Subscriber Data, Imported Data, Payroll Data, Exported Data, or system data made available through meMate; </li>
<li class='sqsRHFont'>Any Loss or Claim relating to the operation of Third Party applications or the actions or inaction of Third Parties, Other Application providers or other persons (including those which may be negligent or unauthorised) relating to meMate; </li>
<li class='sqsRHFont'>Any Loss or Claim arising from a failure by you, as the Subscriber, or your Users to maintain archive records of your Subscriber Data; or</li>
<li class='sqsRHFont'>If you are a user of meMate YourPay, any Loss or Claim incurred by you in connection with the submission of inaccurate or incomplete timesheet information by your Employees;</li>
</ul>
<p class='sqsRHFont'>except to the extent caused or contributed to by a breach of Applicable Law or breach of these Terms by us or any Third Party acting on our instructions.</p>
<p><strong class='sqsSBHFont'>9.5 We indemnify you for IP Claims</strong></p>

<p class='sqsRHFont'>Subject to you complying with this section 9.5, we indemnify you from and against any Loss or Claim incurred by you arising directly from or in direct connection with a claim by a third party that meMate or its use infringes the Intellectual Property Rights of that third party (“IP Claim”). If an IP Claim is made against you, you must promptly notify us of the IP Claim and give us the right to defend and settle the IP Claim. We will not settle an IP Claim without your prior consent (such consent not to be unreasonably withheld or delayed). You must provide reasonable assistance with our defense of the IP claim. The indemnity in this section 9.5 will not apply to the extent that the IP Claim arises or results from your (or your Users’) access or use of meMate in a manner prohibited by us in writing or in breach of these Terms.</p>
<p><strong class='sqsSBHFont'>9.6 You indemnify us for third-party claims relating to your use of meMate</strong></p>

<p class='sqsRHFont'>You indemnify us against any Loss or Claim we incur directly from or in direct connection with a third-party claim or action against us relating to your (and your Users’) use of meMate.</p>
<p><strong class='sqsSBHFont'>9.7 Limitation of Liability</strong></p>

<p class='sqsRHFont'>(a) Liability cap</p>
<p class='sqsRHFont'>In no event will either party’s aggregate cumulative liability (whether in contract, tort, negligence, statute, or otherwise) exceed an amount equal to the Fees paid by you to us during the 12-month period preceding the event or occurrence giving rise to such liability.</p>
<p class='sqsRHFont'>This limitation does not apply to liability:</p>
<ul class='listMargin'>
<li class='sqsRHFont'>That cannot be excluded or limited under Applicable Law;</li>
<li class='sqsRHFont'>Arising out of or in connection with sections 9.2—9.3 and 9.5—9.6; or</li>
<li class='sqsRHFont'>Arising out of or in connection with a party’s gross negligence, fraud, or willful misconduct.</li>
</ul>
<p class='sqsRHFont'>(b) Consequential loss excluded</p>
<p class='sqsRHFont'>In no event will either party be liable for any consequential, incidental, indirect, special, exemplary, or punitive damages, losses, or expenses (including but not limited to business interruption, loss of data, lost business, loss of revenue, or lost profits) even if it has been advised of the possibility of such damages.</p>
<p><strong class='sqsSBHFont'>9.8 Proportionate liability</strong></p>

<p class='sqsRHFont'>To the extent permissible under Applicable Law, each party’s liability under these Terms (including under an indemnity) is reduced proportionately to the extent that such liability is caused or contributed to by the breach of these Terms or the wrongful, unlawful, or negligent act or omission of the other party or its directors, officers, employees, agents, or subcontractors.</p>
<p><strong class='sqsSBHFont'>9.9 Duty to mitigate</strong></p>
<p class='sqsRHFont'>Each party must use all reasonable endeavours to mitigate its Losses.</p>



    `,
    children: [],
  },
  {
    id: 11,
    name: "10. General Terms",

    description: `
    <p><strong class='sqsSBHFont'>10.1 Notices</strong></p>
   
    <p class='sqsRHFont'>Where we are required to give you written notice under these Terms, we can give notice either via email or in-product notification.</p>
 <p><strong class='sqsSBHFont'>10.2 Entire agreement</strong></p>

 <p class='sqsRHFont'>These Terms and the documents incorporated by reference, including any Fee increases notified to you, supersede any previous written agreements between us in connection with meMate.</p>
 <p><strong class='sqsSBHFont'>10.3 What happens if some of these Terms can’t operate?</strong></p>

 <p class='sqsRHFont'>If any part of these Terms is void, unenforceable, or illegal in a jurisdiction, that part does not apply in that jurisdiction. However, the remainder of the Terms continue in operation in that jurisdiction, and the validity or enforceability of the remainder of these Terms is not affected.</p>
 <p><strong class='sqsSBHFont'>10.4 No waiver</strong></p>
 
 <p class='sqsRHFont'>If a party does not insist on strict performance of any part of these Terms, that waiver will not be deemed to be a waiver of a subsequent breach of these Terms.</p>
<p><strong class='sqsSBHFont'>10.5 Assignment by you</strong></p>

<p class='sqsRHFont'>You can assign, novate, and otherwise transfer your rights and/or obligations under these Terms to an affiliated entity, subject to your account being up to date and the incoming subscriber completing such transfer forms as we may reasonably require (including completing any necessary identity or verification checks). If you wish to transfer your Subscription Plan and Subscriber Data to someone else, contact our customer support team for Australia or New Zealand, and we will guide you through the process of having your Subscription Plan and Subscriber Data transferred. Any purported assignment, novation, or transfer that does not follow our prescribed process is invalid, and you remain responsible for your obligations under these Terms.</p>
<p><strong class='sqsSBHFont'>10.6 Assignment by us</strong></p>

<p class='sqsRHFont'>We may assign, novate, or otherwise transfer our rights and/or obligations under these Terms to any of our affiliated entities, or to any entity that acquires all or substantially all of our business or assets related to meMate, and we will give you written notice of any such assignment, novation, or transfer.</p>
<p><strong class='sqsSBHFont'>10.7 Which laws apply to the Terms?</strong></p>

<p class='sqsRHFont'>If you reside in New Zealand, or your business is registered in New Zealand, these Terms are governed by the laws in force in New Zealand, and the parties submit to the non-exclusive jurisdiction of the courts of New Zealand. Otherwise, these Terms are governed and construed by the laws of the state of Victoria, Australia, and the parties submit to the non-exclusive jurisdiction of the courts of the state of Victoria, Australia.</p>
<p><strong class='sqsSBHFont'>10.8 Disputes and Customer Complaints</strong></p>

<p class='sqsRHFont'>As a Subscriber, you’re responsible for resolving any disputes with your Users. If you have any questions, complaints, or claims that you wish to raise with us, you can contact us in Australia or New Zealand. Most disagreements can be resolved informally and efficiently within our customer resolutions team.</p>


    `,
    children: [],
  },
  {
    id: 12,
    name: "11. Glossary",

    description: `
    <p><strong class='sqsSBHFont'>11.1 Definitions</strong></p>
    <p class='sqsRHFont'>The following expressions have the following meanings:</p>
    <p class='sqsRHFont'>Applicable Law means all laws, rules, and regulations in force from time to time in New Zealand (if you reside in New Zealand or your business is registered in New Zealand) or Australia (in all other cases).</p>
    <p class='sqsRHFont'>Confidential Information means, in respect of a party, information belonging or relating to that party that is submitted or disclosed by that party to the other party in connection with your use of meMate that is not generally available to the public (other than by reason of a breach of these Terms by the other party) and: (i) at the time of disclosure, is identified by the first party as being confidential; or (ii) which the other party knows, or ought reasonably to be expected to know, is confidential to that first party.</p>
    <p class='sqsRHFont'>Data Feed means a data feed from a Data Supplier or Other Application authorised by you. It includes bank feeds, invoice feeds, and supplier feeds.</p>
    <p class='sqsRHFont'>Data Supplier means an organisation authorised by you to supply us with Imported Data. This might include your bank, a customer, a third-party software provider, or a supplier.</p>
    <p class='sqsRHFont'>Direct Debit Authority means the direct debit authority signed by you for payment of the Fees.</p>
    <p class='sqsRHFont'>Eligible Data Breach means that term as defined in the Privacy Act.</p>
    <p class='sqsRHFont'>Employees means employees of the Subscriber.</p>
    <p class='sqsRHFont'>Employment Law means all laws regulating employment in Australia (if you or your employees reside in Australia, or your business is registered in Australia) or New Zealand (if you or your employees reside in New Zealand, or your business is registered in New Zealand).</p>
    <p class='sqsRHFont'>Exported Data means data exported, extracted, or transmitted from meMate to a storage destination or organisation nominated by you. It includes data transmitted to Other Applications and exported data files.</p>
    <p class='sqsRHFont'>Fees means those fees relating to your Subscription Plan as disclosed to you when you initially signed up; or as disclosed to you when you upgraded or downgraded your plan; and any changes to those fees as communicated to you in accordance with these Terms.</p>
    <p class='sqsRHFont'>Fees include fixed monthly subscription fees and variable Pay-Per-Use Fees and fees for the use of Premium Features. If the Premium Features you use include online invoice payments, these terms and conditions and fees and charges apply.</p>
    <p class='sqsRHFont'>Imported Data means data that is imported or transmitted into meMate from a Data Supplier or Other Application authorised by you.</p>
    <p class='sqsRHFont'>Intellectual Property Rights means all present and future intellectual property rights, including patents, copyright, designs, trademarks, know-how, and moral rights.</p>
    <p class='sqsRHFont'>Loss or Claim means any loss, liability, claim, action, proceeding, damage, compensation, cost, or expense (including all reasonable legal costs and expenses), including liability in tort.</p>
    <p class='sqsRHFont'>meMate means any and all of the services, features, and functionality comprising the product ‘meMate’ which we make available from time to time. This includes the specific meMate base product as well as meMate Payroll, the meMate YourPay app, meMate Capture app, meMate Invoice app, Data Feeds within meMate, and any other Premium Features.</p>
    <p class='sqsRHFont'>Other Application means any application or service offered by a third party to integrate and be used in conjunction with meMate.</p>
    <p class='sqsRHFont'>Pay-Per-Use Fees means fees for Premium Features that incur variable charges when used.</p>
    <p class='sqsRHFont'>Payroll Data means the Subscriber payroll information that you input into meMate.</p>
    <p class='sqsRHFont'>Personal Information means that term as defined in the Privacy Act. This includes information about an identifiable individual.</p>
    <p class='sqsRHFont'>Premium Features means any Premium Features we make available from time to time, as described on our website.</p>
    <p class='sqsRHFont'>Privacy Act means the Privacy Act 1988 (Cth) as amended or replaced from time to time (if you or your employees or customers reside or are located in Australia or your business is registered in Australia) or the Privacy Act 2020 (NZ) as amended or replaced from time to time (if you or your employees or customers reside in or are located in New Zealand or your business is registered in New Zealand).</p>
    <p class='sqsRHFont'>Professional Partner means a person who provides bookkeeping, accounting, or similar services to the Subscriber, and who may be appointed as a User.</p>
    <p class='sqsRHFont'>Security Breach means unauthorised access to or alteration of the Subscriber Data.</p>
    <p class='sqsRHFont'>Subscriber means the business that subscribes to meMate. A Subscriber may be a sole trader, partnership, company, trustee acting on behalf of a trust, or another type of organisation or entity.</p>
    <p class='sqsRHFont'>Subscriber Data means data, information, text, graphics, images, or works of authorship of any kind (including Imported Data and Payroll Data), information (including Personal Information) and other materials entered or uploaded by you, Users, or a Data Supplier (as applicable) into meMate.</p>
    <p class='sqsRHFont'>Subscription Plan means any Subscription Plan for meMate we make available from time to time, as described on our website.</p>
    <p class='sqsRHFont'>Tax Laws means: (if you reside in Australia or your business is registered in Australia) A New Tax System (Goods and Services) Act 1999 (Cth) and the Taxation Administration Act 1953 (Cth) or similar laws and any binding regulation, ruling, or direction issued by the Australian Taxation Office as amended or replaced from time to time; or (if you reside in New Zealand or your business is registered in New Zealand) the Goods and Services Tax Act 1985 (NZ) and the Tax Administration Act 1994 (NZ) or similar laws and any binding regulation, ruling, or direction issued by the Inland Revenue Department of New Zealand as amended or replaced from time to time.</p>
    <p class='sqsRHFont'>Third Party means any person we have engaged to help us provide meMate. This includes any other service providers engaged by us to assist in the delivery, maintenance, and administration of meMate. In the case of Data Feeds, any Data Supplier that you authorize to provide Imported Data to us is also a Third Party under these Terms.</p>
    <p class='sqsRHFont'>User means a person authorised by the Subscriber to use meMate (including Employees and Professional Partners).</p>
    <p class='sqsRHFont'>We, us, and our means meMate Enterprise Pty Limited (ACN 654 081 482) of Level 1, Jones St, Ultimo, NSW 2007, Australia </p>
    <p class='sqsRHFont'>You and your means the Subscriber and/or User, as the context requires.</p>
    <p class='sqsRHFont'>Last updated: Aug  2024</p>
 
    `,
    children: [],
  },
];

const MiddleSection = () => {
  const [knowledge, setKnowledge] = useState([]);
  const [activeItem, setActiveItem] = useState(knowledgeData[0]?.id);
  const observerRef = useRef(null);
  const initialized = useRef(false);  
  useEffect(() => {
    setKnowledge(knowledgeData);
  }, []);

  useEffect(() => {
    if (knowledge.length === 0) return;

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id.split('-')[1];
          setActiveItem(Number(id));
          
          if (initialized.current) {
            // window.history.replaceState(null, null, `#section-${id}`);
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0.2
    });

    const headings = document.querySelectorAll('.kb-section-heading2F');
    headings.forEach(heading => observerRef.current.observe(heading));

    requestAnimationFrame(() => {
      const firstVisible = Array.from(headings).find(heading => {
        const rect = heading.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.5;
      });
      
      setActiveItem(firstVisible ? 
        Number(firstVisible.id.split('-')[1]) : 
        knowledgeData[0].id
      );
      initialized.current = true;
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [knowledge]);



  // const handleClick = (id) => {
  //   setActiveItem(id);
  // };

  return (
    <>
    <Helmet>
    <title>Terms of Use: Guidelines for Using MeMate</title>
    <meta property="og:title" content="Terms of Use: Guidelines for Using MeMate" />
      <meta property="og:description" content="Check the terms of use for MeMate services. Understand your rights and responsibilities when using our platform for a seamless experience." />
  </Helmet>
     <div className="kb-wrapper">
        <div className="kb-left-wrappermm kb-left-wrappermain kb-tos-wrapperF">
          <StickyBox offsetTop={100} offsetBottom={0}>
          {knowledge.map((item) => (
            <ul className="kb-listF" key={item.id}>
              <li className={`kb-list-itemF ${activeItem === item.id ? 'kb-list-item-activeF' : ''}`}>
                <Link
                  to={`section-${item.id}`}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onSetActive={() => setActiveItem(item.id)}
                >
                  <span>{item.name}</span>
                </Link>
              </li>
            </ul>
          ))}
          </StickyBox>
        </div>

        <div className="kb-right-wrapperM">
          {knowledge.map((item) => (
            <div className="kb-right-sectionF" key={item.id}>
              <h2 className="kb-section-heading2F" id={`section-${item.id}`}>
                {item.name}
              </h2>
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MiddleSection;
