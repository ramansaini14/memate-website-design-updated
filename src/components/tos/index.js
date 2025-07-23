import "./style.css";
import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link, animateScroll as scroll } from "react-scroll";
import StickyBox from "react-sticky-box";


const knowledgeData = [
  {
    id: 1,
    name: "meMate Terms of Use",
    description: `
      <p className='paraTextTos'>Our terms of use outline the agreement between you and meMate. They detail our commitment as your service provider and your responsibilities as our valued customer.</p>
    `,
    children: [],
  },
  {
    id: 2,
    name: "Introduction",

    description: `
    <p className='paraTextTos'>
    Welcome to meMate! We’re thrilled to have you join us. Before you begin using meMate, we ask that you review and accept these terms. We’ve aimed to make everything clear and jargon-free, so you’ll know exactly what we expect from you and what you can expect from us.</p>

    <p className='paraTextTos'>
  To make this process easier, we’ve included summary paragraphs at the start of each section to give you a quick overview.
  </p>
    <p className='paraTextTos'>
These terms cover your legal rights and obligations, so please read them carefully. If you find that you can’t agree to our terms, unfortunately, you won’t be able to use our services.
  </p>
    <p className='paraTextTos'>
Should you have any questions or comments after reading, please reach out to us via meMate Central. We’re here to help and look forward to assisting you.
</p>
    <p className='paraTextTos'>
Last updated on 31 July 2024. We’ve updated these terms to ensure greater clarity and transparency and to better align with our business practices. The updates also include specific requirements for subscribers in our partner program, designed to ensure their clients have appropriate subscription access rights.
</p>
    `,
    children: [],
  },
  {
    id: 3,
    name: "Joining and Using meMate",
    description: `
    <p className='paraTextTos'>In this section we explain how to subscribe to meMate and use our services. When you see a word in bold, it will have the same corresponding meaning every time it’s used within these terms.
    </p>
    <ol className='listMargin'>
    
      <li>
      <strong className='sqsSBHFont'>You and meMate</strong>
      <p className='paraTextTos '>
      When we say you or your, we mean both you and any entity or firm you’re authorised to represent. When we say meMate, we, our or us, 
      we’re talking about the meMate entity you contract with and pay fees to based on the edition of the meMate product you’re using.
      </p>
      </li>
      <li>
      <strong className='sqsSBHFont'>Our Services</strong>
      <p className='paraTextTos '>
      Our services consist of all the services we provide now or in the future, including our online and mobile accounting and project managing and financial products.
      </p>
      </li>
      <li>
      <strong className='sqsSBHFont'>Creating a Subscription</strong>
      <p className='paraTextTos '>
     When you create a subscription to use our services and accept these terms, you become a subscriber. 
     If you’re the subscriber, you’re the one responsible for paying for your subscription.
      </p>
      </li>
      <li>
      <strong className='sqsSBHFont'>People Invited to Use meMate</strong>
      <p className='paraTextTos '>
 An invited user is a person other than the subscriber who has been invited to use our services through a subscription. 
 If you’re an invited user, you must also accept these terms to use our services.
      </p>
      </li>
      <li>
      <strong className='sqsSBHFont'>User Roles and Access:</strong>
      <p className='paraTextTos '>
As a subscriber inviting others into a subscription, you should understand the permissions you’re granting to invited users. 
Check out information about user roles and levels of access on meMate.
      </p>
      </li>
      <li>
      <strong className='sqsSBHFont'>Partner Program</strong>
      <p className='paraTextTos '>
If you participate in our partner program, read our additional partner terms.
      </p>
      </li>
      <li>
      <strong className='sqsSBHFont'>Online Payments</strong>
      <p className='paraTextTos '>
If you are located in one of the regions set out in the additional online payments terms and you choose to connect 
Stripe to your subscription (so you can accept online payments from 
customers through your meMate invoices), read our additional online payments terms.
      </p>
      </li>
      <li>
      <strong className='sqsSBHFont'>The Right to Use Our Services</strong>
      <p className='paraTextTos '>
Whether you’re a subscriber or an invited user, we grant you the right to use our services (based on your subscription type, your user role and the 
level of access you’ve been granted) for as long as the subscriber continues to pay for the subscription, until the subscription is terminated, 
or – if you’re an invited user – until your access is revoked.
      </p>
      </li>
      <li>
      <strong className='sqsSBHFont'>Subscriber Role</strong>
      <p className='paraTextTos '>
     As a subscriber, you take responsibility for fully controlling how your subscription is managed and who can access it. It’s quite a big deal! For example:
     <ul className='listMargin' type='disc'>
      <li className='paraTextTos '>You can transfer a subscription.</li>
      <li className='paraTextTos '>You control access to a subscription. You decide who’s invited to use our services you’ve subscribed to and what kind of access the invited user has. You can change or stop that access at any time.</li>
      <li className='paraTextTos '>You’re responsible for resolving any disputes with any invited users over access to your subscription. You can find out more about disputes over access on meMate Central. If you participate in our partner program and act as the subscriber on behalf of your client, we may reasonably direct you to provide your client with read-only access to the subscription in accordance with the additional partner terms.</li>
      <li className='paraTextTos '>You’re responsible for all your invited users’ activity.</li>
     </ul>
      </p>
      </li>
      <li>
      <strong className='sqsSBHFont'>Rules</strong>
      <p className='paraTextTos '>
     Whatever your role, when you use meMate you agree to follow the rules in section 46. Please read them and make sure you understand what you should and shouldn’t do.
      </p>
      </li>
      <li>
      <strong className='sqsSBHFont'>Your Responsibilities</strong>
      <p className='paraTextTos '>You promise that you’ll keep your information (including a current email address) up to date. You’re responsible for providing true, accurate and complete information and for verifying the accuracy of any information that you use from our services for your legal, tax and compliance obligations. You’re also responsible for protecting your username and password from getting stolen or misused. </p>
      <p className='paraTextTos '>Our service has minimum password standards but you will ensure that passwords are very strong and not easily guessable. The stronger the password the better! For more on security generally, check out the security section below.</p>
      </li>
      <li>
      <strong className='sqsSBHFont'>When We Introduce New or Revised Services</strong>
      <p className='paraTextTos '>Since we’re always thinking about how to make meMate the best it can be – seriously, we’ve got teams dedicated to it – we regularly expand our services. For new or updated services, there might be additional terms. We’ll let you know what those terms are before you start using those services.</p>
      </li>
      <li>
      <strong className='sqsSBHFont'>What We Own</strong>
      <p className='paraTextTos '>We own everything we’ve put into our services unless otherwise stated and excluding content owned by others. This includes rights in the design, compilation, and look and feel of our services. It also includes rights in all copyrighted works, trademarks, designs, inventions, and other intellectual property. You agree not to copy, distribute, modify or make derivative works of any of our content or use any of our intellectual property rights in any way not expressly permitted by us.</p>
      </li>
 
   `,
    children: [],
  },
  {
    id: 4,
    name: "Pricing",

    description: `
    <p className='paraTextTos'>Unless you’re in a free trial or other offer period, you’ll need to pay for a subscription based on the pricing of your selected plan. The pricing details and other terms of your subscription are explained when you select your plan. This section is for the subscriber, not an invited user.</p>
    <ol className='listMargin'>
      <li>
        <strong className='sqsSBHFont'>Trial Subscriptions</strong>
        <p className='paraTextTos '>When you first sign up, you can opt for a free trial, based on the terms specified at the time. If you choose to continue using our services after the trial, you’ll be billed when you add your billing details into our services, explained in more detail in the pricing plan and on meMate.</p>
        <p className='paraTextTos '>If you choose not to continue using our services following a trial, you may delete your organisation.</p>
      </li>
      <li>
        <strong className='sqsSBHFont'>meMate Pricing Plans</strong>
        <p className='paraTextTos '>Your use of our services generally requires you to pay a monthly subscription fee based on your subscription type (the subscription fee). The pricing plan consists of the subscription and subscription fees we offered you, including invoicing, payment, auto-renewal, and cancellation terms. </p>
        <p className='paraTextTos '>The pricing plan may vary by region and includes information set out in the offer details and pricing page. We may update or amend the pricing plan from time to time. The terms of the pricing plan form part of these terms. As with any other changes to our terms, changes to the pricing plan won’t apply retrospectively and, if we make changes and you’re a subscriber, we’ll make every effort to let you know (take a look at section 66 to see how and when we’ll notify you).</p>
        <p className='paraTextTos '>Check out how to change pricing plans on meMate. Depending on your region, subscription fees may be inclusive or exclusive of transactional taxes where relevant (like VAT and GST), as reflected in the pricing plan.</p>
      </li>
      <li>
        <strong className='sqsSBHFont'>Taxes for Your Use of Our Services</strong>
        <p className='paraTextTos '>You’re responsible for paying all other external fees and taxes associated with your use of our services wherever levied. Your responsibility includes withholding tax if it applies, unless we already process that withholding tax. We may collect geographical location information to determine your location, which may be used for tax purposes. This means location information you give us must be accurate for tax residency purposes.</p>
      </li>
      <li>
        <strong className='sqsSBHFont'>Additional Services</strong>
        <p className='paraTextTos '>Depending on where you’re based and how you use our services, you may be able to take advantage of additional services that meMate offers. These might incur an additional fee that we’ll let you know about when you sign up for those services.</p>
      </li>
      <li>
        <strong className='sqsSBHFont'>Importance of Timely Payments </strong>
        <p className='paraTextTos '>In order to continue accessing our services, you need to make timely payments based on the pricing plan you selected. To avoid delayed or missed payments, please make sure we have accurate payment information. If we don’t receive timely payments, we may suspend access to your subscription until the payment is made.</p>
        <p className='paraTextTos '>Data Use and Privacy</p>
        <p className='paraTextTos '>meMate uses your data to provide our services to you. Our privacy notice is an important part of these terms and describes in more detail how we deal with personal data, like your name and email address.</p>
      </li>
      <li>
        <strong className='sqsSBHFont'>Use of Data</strong>
        <p className='paraTextTos '>In order to continue accessing our services, you need to make timely payments based on the pricing plan you selected. To avoid delayed or missed payments, please make sure we have accurate payment information. If we don’t receive timely payments, we may suspend access to your subscription until the payment is made.</p>
        <p className='paraTextTos '>When you enter or upload your data into our services, we don’t own that data but you grant us a license to use, copy, transmit, store, analyse, and back up all data you submit to us through our services, including personal data of yourself and others, to: enable you to use our services; allow us to improve, develop and protect our services; create new services; communicate with you about your subscription; send you information we think may be of interest to you based on your marketing preferences; and disclose to third party service providers and partners to enable and support such purposes.</p>
      </li>
      <li>
        <strong className='sqsSBHFont'>Use of Your Own Personal Data</strong>
        <p className='paraTextTos '>We respect your privacy and take data protection seriously. In addition to these terms, our privacy notice sets out in detail how we process your own personal data that you enter into meMate, like your name and email address.</p>
      </li>
      <li>
        <strong className='sqsSBHFont'>Use of Personal Data You Enter About Others</strong>
        <p className='paraTextTos '>Depending on where your contacts are based, our data processing terms may also apply to the personal data of others (such as your customers, suppliers, and employees) that you enter into meMate.</p>
      </li>
      <li>
        <strong className='sqsSBHFont'>Anonymised Statistical Data</strong>
        <p className='paraTextTos '>When you use our services, we may create anonymised statistical data from your data and usage of our services, including through aggregation. Once anonymised, we may use it for our own purposes, such as to provide and improve our services, to develop new services or product offerings, to identify business trends, and for other uses we communicate to you.</p>
      </li>
      <li>
        <strong className='sqsSBHFont'>Data Breach Notifications</strong>
        <p className='paraTextTos '>Where there has been unauthorised access to personal data that you’ve entered into meMate, we’ll let you know and, where possible, give you information about what has happened. Depending on the nature of the unauthorised access, and the location of your affected contacts, you may be required to assess whether the unauthorised access must be reported to the contact and/or a relevant authority. We think you’re best placed to make this decision, because you’ll have the most knowledge about the personal data you have entered in your meMate subscription.</p>
        <p className='paraTextTos '>Confidential Information</p>
        <p className='paraTextTos '>We take reasonable precautions to protect your confidential information and expect that you’ll do the same for ours.</p>
      </li>
      <li>
        <strong className='sqsSBHFont'>Keeping It Confidential</strong>
        <p className='paraTextTos '>While using our services, you may share confidential information with us, and you may become aware of confidential information about us. You and we both agree to take reasonable steps to protect the other party’s confidential information from being accessed by unauthorised individuals. You or we may share each other’s confidential information with legal or regulatory authorities if required to do so.</p>
        <p className='paraTextTos '>Security</p>
        <p className='paraTextTos '>We take security seriously and you should too! To help protect our services and your data, we offer added security features such as multi-factor authentication.</p>
      </li>
      <li>
        <strong className='sqsSBHFont'>Security Safeguards</strong>
        <p className='paraTextTos '>We’ve invested in technical, physical, and administrative safeguards to do our part to help keep your data safe and secure. Read more about these measures on the security page on our website. While we’ve taken steps to help protect your data, no method of electronic storage is completely secure and we cannot guarantee absolute security. We may notify you if we have reason to believe that someone has accessed (or may be able to access) your account without authorisation and we may also restrict access to certain parts of our services until you verify that access was by an authorised user.</p>
      </li>
      <li>
        <strong className='sqsSBHFont'>Account Security Features</strong>
        <p className='paraTextTos '>We may introduce security features to make your account more secure, such as multi-factor authentication. Depending on where you are in the world or what services you’re using, we may require you to adopt some of these features. Where we make the use of security features optional, you’re responsible (meaning we’re not liable) for any consequences of not using those features. We strongly encourage you to use all optional security features.</p>
      </li>
      <li>
        <strong className='sqsSBHFont'>Playing Your Part to Secure Your Data</strong>
        <p className='paraTextTos '>You have an important part to play by keeping your login details secure, not letting any other person use them, and by making sure you have strong security on your own systems. If you realise there’s been any unauthorised use of your password or any breach of security to your account or email address linked to your account, you need to let us know immediately. You also agree not to use free-form fields in any of meMate’s systems or services to store personal data (unless it’s a field explicitly asking for personal data - like a first name or a last name), credit card details, tax identifiers, or bank account details. More information on how to keep your data secure is available in our small business guides and on meMate Central.</p>
      </li>
      <li>
        <strong className='sqsSBHFont'>Apps and Third-Party Products</strong>
        <p className='paraTextTos '>To help make your meMate experience even better, the meMate ecosystem includes apps and other products and services made available by trusted partners through the meMate App Store.</p>
      </li>
      <li>
        <strong className='sqsSBHFont'>Other Services</strong>
        <p className='paraTextTos '>Some of our services, such as our mobile apps or the multi-currency functionality, are available through other companies’ services, such as The Apple App Store. These companies may have additional terms that apply to you.</p>
      </li>
      <li>
        <strong className='sqsSBHFont'>Third-Party Products</strong>
        <p className='paraTextTos '>Along with the use of our services, you may use data, services, and apps from other companies (third-party products), for example, those we make available in the meMate App Store. Any third party providing a third-party product is a provider and is independent of us, so be aware that a provider may also charge you fees in addition to what you pay us.</p>
      </li>
      <li>
        <strong className='sqsSBHFont'>meMate App Store</strong>
        <p className='paraTextTos '>Depending on your region, you may be able to purchase our services or third-party products through the meMate App Store. When you connect your subscription to an app, you’re responsible for paying all fees and taxes associated with your use of that app. Any fees will be shown to you before you purchase an app. You authorise us to process these payments for you using the payment method you provide to us. Learn more about the meMate App Store, including how to manage your connected apps, on meMate Central.</p>
      </li>
      <li>
        <strong className='sqsSBHFont'>Service-Related Changes</strong>
        <p className='paraTextTos '>You agree that we can make changes to our services, including modifications or additions. We’ll notify you about any material changes, but unless they’re fundamental to how our services are provided, we may not be required to notify you of minor changes. You also agree that our terms may change, and if we make any significant changes, we’ll notify you.</p>
      </li>
      <li>
        <strong className='sqsSBHFont'>Changing Our Services</strong>
        <p className='paraTextTos '>We’re constantly improving our services and may make changes to them from time to time. These changes could include updates to features, product additions or removals, or changes to pricing. We’ll make reasonable efforts to let you know about significant changes. Check out how we keep you informed about changes in the way our services work or pricing through our support channels.</p>
      </li>
      <li>
        <strong className='sqsSBHFont'>Limiting Services</strong>
        <p className='paraTextTos '>While we’re always working to make our services better, we may occasionally have to suspend or limit some of our services, either for maintenance or due to unforeseen circumstances. In such cases, we’ll notify you in advance as much as possible.</p>
      </li>
    `
},

  {
    id: 5,
    name: "Termination",

    description: `
    <p className='paraTextTos'>You can easily terminate your subscription with one month’s written notice. We may terminate your subscription as well with the same notice. If you violate these terms, we may terminate your subscription immediately in accordance with section 50. If your subscription is terminated, no refund is due to you, but rest assured you’ll only pay for services that have been provided to you.</p>
<ol className='listMargin'>
<li>
<strong className='sqsSBHFont'>Subscription Period</strong>
<p className='paraTextTos '>Your subscription continues for the period covered by the subscription fee paid or payable.</p>

</li>
<li>
<strong className='sqsSBHFont'>Automatic Renewal</strong>
<p className='paraTextTos '>At the end of each billing period, these terms automatically continue for a further period of the same duration as the previous one, provided you continue to pay the subscription fee in accordance with the pricing plan.</p>

</li>
<li>
<strong className='sqsSBHFont'>Termination by You</strong>
<p className='paraTextTos '>
You may choose to terminate your subscription at any time by providing meMate with one month’s written notice in advance. You’ll still need to pay all relevant subscription fees up to and including the day of termination. For more information, check out how to cancel a subscription on meMate Central.

</p>

</li>
<li>
<strong className='sqsSBHFont'>Termination by meMate</strong>
<p className='paraTextTos '>
meMate may choose to terminate your subscription at any time by providing you with one month’s written notice in advance. meMate may also terminate or suspend your subscription or access to all or any data immediately if:
<ul className='listMargin' type='disc'>
   <li className='paraTextTos'>You breach any of these terms and do not remedy the breach within 14 days after receiving notice of the breach,</li>
   <li className='paraTextTos'>You breach any of these terms and the breach cannot be remedied, or</li>
   <li className='paraTextTos'>You or your business become insolvent, your business goes into liquidation or has a receiver or manager appointed over any of its assets, you become insolvent or make any arrangement with your creditors, or become subject to any similar insolvency event in any jurisdiction.</li>
   <li className='paraTextTos'>If you fail to pay subscription fees, we will take reasonable steps to notify you of the failure. Subject to the processing and payment timing of your bank or credit or debit card provider:</li>
   <li className='paraTextTos'>If you do not pay within 7 days of the date on which the subscription fees became due and payable, meMate may suspend your subscription, and</li>
   <li className='paraTextTos'>If you do not pay within 14 days from the date on which the subscription fees became due and payable, meMate may terminate your subscription.</li>
   <li className='paraTextTos'>In this case, you can reactivate your subscription by paying any outstanding subscription fees in full.</li>
</ul>


</p>

</li>
<li>
<strong className='sqsSBHFont'>No Refunds</strong>
<p className='paraTextTos '>
Subject to section 60, no refund is due to you if you terminate your subscription or meMate terminates it in accordance with these terms.

</p>

</li>
<li>
<strong className='sqsSBHFont'>Retention of Your Data</strong>
<p className='paraTextTos '>
Once a subscription is terminated by you or us, it is archived and the data submitted or created by you is no longer available to you. We retain it for a period of time consistent with our data retention policy, during which, as a subscriber, you can reactivate your subscription and once again access your data by paying the subscription fees. Find out more about reactivating your meMate subscription on meMate Central. We retain data in case you need it as part of your record retention obligations, but you can get in touch with us to have your data removed completely if you wish.
</p>

</li>

<h4 className='kb-section-heading' style="margin-left: -15px;">Liability and Indemnity</h4>
<p className='paraTextTos '>This section is important as it outlines liability terms between us and both subscribers and invited users, so we urge you to read it closely and in full.</p>
<ol className='listMargin'>
<li>
<strong className='sqsSBHFont'>You Indemnify Us</strong>
<p className='paraTextTos '>
You indemnify us against all losses, costs (including legal costs), expenses, demands or liability that we incur arising out of, or in connection with, a third-party claim against us arising from your use of our services or any third-party product, except for losses arising from:
<ol className='listMargin'>
   <li className='paraTextTos'>A breach of these terms by meMate, its employees, contractors or agents, or</li>
   <li className='paraTextTos'>Any gross negligence, wilful misconduct, fraud or material error that was solely the responsibility of meMate, its employees, contractors or agents.</li>
   <li className='paraTextTos'>For this indemnity, meMate will take reasonable mitigation measures where possible.</li>
</ol>


</p>

</li>
<li>
<strong className='sqsSBHFont'>Disclaimer of Warranties</strong>
<p className='paraTextTos'>
Our services and all third-party products are made available to you on an “as is” basis. Subject to the exclusion in section 60 and the rights you have under the laws in the country where you live, we disclaim all warranties, express or implied, including any implied warranties of non-infringement, merchantability and fitness for a particular purpose.

</p>

</li>
<li>
<strong className='sqsSBHFont'>Limitation of Liability</strong>
<p className='paraTextTos'>
Our liability to you in connection with our services or these terms, in contract, tort (including negligence) or otherwise, is limited as follows:
<ul className='listMargin'>
   <li className='paraTextTos'>We have no liability arising from your use of our services for any loss of revenue or profit, loss of goodwill, loss of customers, loss of capital, loss of anticipated savings, legal, tax or accounting compliance issues, damage to reputation, loss in connection with any other contract, or indirect, consequential, incidental, punitive, exemplary or special loss, damage or expense.</li>
   <li className='paraTextTos'>For loss or corruption of your data, our liability will be limited to taking reasonable steps to try and recover that data from our available backups.</li>
   <li className='paraTextTos'>Our total aggregate liability to you in any circumstances is limited to the total amount you paid us for your subscription in the 12 months immediately preceding the date on which the claim giving rise to the liability arose.</li>
   <li className='paraTextTos'> Regardless of the above, our liability to you will not be limited if we aren’t legally allowed to limit it. Some examples of this might be if your loss came from our gross negligence, fraud or wilful misconduct.</li>
</ul>
</p>

</li>

<h4 className='paraTextTos'>Disputes</h4>
<p className='paraTextTos'>This section outlines how disputes may be resolved.</p>
<li>
<strong className='sqsSBHFont'>Dispute Resolution:</strong>
<p className='paraTextTos'>
Most of your concerns can be resolved quickly and to everyone’s satisfaction by contacting our support team by scrolling to the bottom of any support article on meMate Central. If we’re unable to resolve your complaint to your satisfaction (or if we haven’t been able to resolve a dispute we have with you after attempting to do so informally), you and we agree to resolve those disputes through binding arbitration or small claims court instead of in courts of general jurisdiction. If it’s allowed by the laws in the country where we provide our services to you, you and we agree that any dispute must be brought in the parties’ individual capacity and not as a plaintiff or class member in any purported class or representative proceeding. You’re solely responsible for resolving disputes between you and any other subscriber or invited user.
</p>

</li>
<li>
<strong className='sqsSBHFont'>Important Housekeeping</strong>
<p className='paraTextTos'>
Here we set out some additional terms. Take a read as they cover important issues.

</p>

</li>
<li>
<strong className='sqsSBHFont'>No Professional Advice</strong>
<p className='paraTextTos'>
Just to be clear, meMate isn’t a professional services firm of any sort, and isn’t in the business of giving any kind of professional advice. We may provide you with information we think might be useful in running a small business, but this should not be seen as a substitute for professional advice and we aren’t liable for your use of the information in that way.
</p>

</li>
<li>
<strong className='sqsSBHFont'>Events Outside Our Control</strong>
<p className='paraTextTos'>
We do our best to control the controllable. We aren’t liable to you for any failure or delay in performance of any of our obligations under these terms arising out of any event or circumstance beyond our reasonable control.
</p>

</li>
<li>
<strong className='sqsSBHFont'>Notices</strong>
<p className='paraTextTos'>
Any notice you send to meMate must be sent to me@meMate.com.au Any notices we send to you will be sent to the email address you’ve provided us through your subscription.
</p>

</li>
<li>
<strong className='sqsSBHFont'>Exclusion </strong>
<p className='paraTextTos'>
If you reside in those countries, your country’s non-excludable guarantees still apply – these terms do not exclude, restrict or modify them. Except for non-excludable guarantees and other rights you have that we cannot exclude, we’re bound only by the express promises made in these terms. Our liability for breach of a non-excludable guarantee is limited, at our option, to either replacing or paying the cost of replacing the relevant service (unless the non-excludable guarantee says otherwise).
</p>

</li>
<li>
<strong className='sqsSBHFont'>Export Limitations</strong>
<p className='paraTextTos'>
You must not use our services in violation of any export or trade embargo laws that apply to you.
</p>

</li>
<li>
<strong className='sqsSBHFont'>Excluded Terms</strong>
<p className='paraTextTos'>
The terms of the United Nations Convention on Contracts for the Sale of Goods and the Uniform Computer Information Transactions Act (UCITA) do not apply to these terms.
</p>

</li>
<li>
<strong className='sqsSBHFont'>Blocking Your Access, Disabling Your Subscription, or Refusing to Process a Payment</strong>
<p className='paraTextTos'>
 As our sites are global, different laws may apply in different countries that restrict our relationship with you. We may block your access, terminate your subscription, or refuse to process a payment if we reasonably believe there’s a risk - like a potential breach of a law or regulation - associated with you, your company, your subscription, or a payment. Examples of where we might do this include transactions where the payment is from a sanctioned person or country; or where we reasonably believe there is a legal or regulatory risk or a risk of loss being suffered by us or our customers or partners. You promise that you’re not located in a sanctioned country and are not on a sanctioned persons list. We may also block users from a country if we can’t receive payments from that country. You should check what payment methods are available in your country for making payments. We may take any of these actions without notice.
</p>

</li>
<li>
<strong className='sqsSBHFont'>Relationship Between the Parties</strong>
<p className='paraTextTos'>
Nothing in these terms is to be construed as constituting a partnership, joint venture, employment or agency relationship between you and us, or between you and any other subscriber or invited user.
 </p>

</li>
<li>
<strong className='sqsSBHFont'>Transfer of These Terms</strong>
<p className='paraTextTos'>
meMate may transfer these terms - or any of our rights or obligations in these terms - to another entity as it deems appropriate. Where the transfer relates to meMate or a big part of meMate being sold to a third party or merged with a third party, we will give you written notice of that. A subscriber can transfer a subscription to a new subscriber in accordance with section 9.
</p>

</li>
<li>
<strong className='sqsSBHFont'>Changes to These Terms</strong>
<p className='paraTextTos'>
We sometimes will decide to change these terms of use. But don’t worry, changes won’t apply retrospectively and, if we make changes, we’ll make every effort to let you know. You can keep track of changes to our terms by referring to the version and the date last updated at the top of the terms. We will reasonably endeavour to provide you with 60 days’ notice of material changes before they become effective, unless we need to make immediate changes for reasons we don’t have control over. When we notify you, we’ll do it by email or by posting a visible notice through our services. If meMate decides in its reasonable discretion that a change isn’t material, we may not notify you. If you find a modified term unacceptable, you may terminate your subscription by giving the standard advance notice to meMate.

</p>

</li>
<li>
<strong className='sqsSBHFont'>Enforcement of Terms</strong>
<p className='paraTextTos'>
If there’s any part of these terms that either one of us is unable to enforce, we’ll ignore that part but everything else will remain enforceable.
</p>

</li>
<li>
<strong className='sqsSBHFont'>Interpretation</strong>
<p className='paraTextTos'>
Words like ‘include’ and ‘including’ are not words of limitation and where anything is within our discretion we mean our sole discretion.
</p>

</li>
<li>
<strong className='sqsSBHFont'>meMate Contracting Entities; Law and Venue</strong>
<p className='paraTextTos'>
Our contracting entities are listed below along with what law and venue apply in any dispute between you and us. meMate entities are the companies controlled by or under common control with meMate Enterprise Limited
</p>
<p className='paraTextTos'>
We appreciate you taking the time to read our terms and conditions. By understanding these terms, you’re helping us provide you with the best possible service. Welcome to the meMate family, where managing your business is made smarter, simpler, and more efficient. If you have any questions or need assistance, our support team is always here to help. Let’s achieve great things together!
</p>
<p className='sqsSBHFont'>
Thank you for choosing meMate.</p>

</li>
</ol>
    `,
    children: [],
  },
];

const TOS = () => {

const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";

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
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id.split("-")[1];
          setActiveItem(Number(id));

          if (initialized.current) {
            // window.history.replaceState(null, null, `#section-${id}`);
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "-30% 0px -40% 0px",
      threshold: 0.2,
    });

    const headings = document.querySelectorAll(".kb-section-headingF");
    headings.forEach((heading) => observerRef.current.observe(heading));

    requestAnimationFrame(() => {
      const firstVisible = Array.from(headings).find((heading) => {
        const rect = heading.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.5;
      });

      setActiveItem(
        firstVisible
          ? Number(firstVisible.id.split("-")[1])
          : knowledgeData[0].id
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
        <title>Terms of Use | MeMate Business Software Australia</title>
        <meta
          name="description"
          content="View the terms of use for MeMate — Australia’s business management software platform. Review your rights, responsibilities and platform access terms."
        />
        <meta
          property="og:title"
          content="Terms of Use | MeMate Business Software Australia"
        />
        <meta
          property="og:description"
          content="View the terms of use for MeMate — Australia’s business management software platform. Review your rights, responsibilities and platform access terms."
        />
      </Helmet>
   <div className="conditionWrrapperF">
                <div className="pageBreadcrumbs">
                     <ul>
                       <li>Home</li>/<li> <Link className="MainPageLink" href="/terms-and-conditions"> Terms of use</Link></li>
                     </ul>
                     <Link href="https://memate.com.au/" className="backButStories"><img src={arrowIconBack} alt="Arrow" /> Back</Link>
                   </div>
           <div className="tmsheadF">
            <p className="tos-section-headingF" id="section1">
              memate
            </p>
           <h1 className="blackH1Tag">Terms of Use</h1>
        </div>
        </div>



      <div className="kb-wrapper">
        <div className="kb-left-wrapperm kb-left-wrappermain kb-tos-wrapperF">
          <StickyBox offsetTop={100} offsetBottom={0}>
          {knowledge.map((item) => (
            <ul className="kb-listF" key={item.id}>
              <li
                className={`kb-list-itemF ${
                  activeItem === item.id ? "kb-list-item-activeF" : ""
                }`}
              >
                <Link
                  to={`section-${item.id}`}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onSetActive={() => setActiveItem(item.id)}
                >
                 <span> {item.name}</span>
                </Link>
              </li>
            </ul>
          ))}
          </StickyBox>
        </div>

        <div className="kb-right-wrapperM">
          {knowledge.map((item) => (
            <div className="kb-right-sectionF" key={item.id}>
              <h2 className="kb-section-headingF" id={`section-${item.id}`}>
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

export default TOS;
