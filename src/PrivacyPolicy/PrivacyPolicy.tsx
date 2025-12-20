import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="w-full  bg-black/40 text-gray-300 py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8 uppercase tracking-wide">
          Privacy Policy
        </h1>

        <div className="space-y-6 sm:space-y-8 text-sm sm:text-base leading-relaxed">
          {/* Introduction */}
          <section>
            <p className="text-justify sm:text-left mb-4">
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from www.blessedlightstudio.com (the "Site").
            </p>
          </section>

          {/* Personal Information We Collect */}
          <section>
            <h2 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 uppercase">
              Personal Information We Collect
            </h2>
            <p className="mb-3">
              When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as "Device Information."
            </p>
            <p className="mb-3 font-medium text-white">
              We collect Device Information using the following technologies:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4 mb-4">
              <li className="pl-2">
                <span className="font-medium text-white">"Cookies"</span> are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.
              </li>
              <li className="pl-2">
                <span className="font-medium text-white">"Log files"</span> track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
              </li>
              <li className="pl-2">
                <span className="font-medium text-white">"Web beacons," "tags," and "pixels"</span> are electronic files used to record information about how you browse the Site.
              </li>
            </ul>
            <p className="mb-3">
              Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number. We refer to this information as "Order Information."
            </p>
            <p>
              When we talk about "Personal Information" in this Privacy Policy, we are talking both about Device Information and Order Information.
            </p>
          </section>

          {/* How Do We Use Your Personal Information? */}
          <section>
            <h2 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 uppercase">
              How Do We Use Your Personal Information?
            </h2>
            <p className="mb-3">
              We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4 mb-4">
              <li className="pl-2">Communicate with you;</li>
              <li className="pl-2">Screen our orders for potential risk or fraud; and</li>
              <li className="pl-2">When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
            </ul>
            <p>
              We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
            </p>
          </section>

          {/* Sharing Your Personal Information */}
          <section>
            <h2 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 uppercase">
              Sharing Your Personal Information
            </h2>
            <p className="mb-3">
              We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store--you can read more about how Shopify uses your Personal Information here: https://www.shopify.com/legal/privacy. We also use Google Analytics to help us understand how our customers use the Site--you can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout.
            </p>
            <p className="mb-3">
              Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
            </p>
          </section>

          {/* Behavioural Advertising */}
          <section>
            <h2 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 uppercase">
              Behavioural Advertising
            </h2>
            <p className="mb-3">
              As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative's ("NAI") educational page at http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
            </p>
            <p className="mb-3 font-medium text-white">
              You can opt out of targeted advertising by:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4 mb-4">
              <li className="pl-2">FACEBOOK - https://www.facebook.com/settings/?tab=ads</li>
              <li className="pl-2">GOOGLE - https://www.google.com/settings/ads/anonymous</li>
              <li className="pl-2">BING - https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads</li>
            </ul>
            <p>
              Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance's opt-out portal at: http://optout.aboutads.info/.
            </p>
          </section>

          {/* Do Not Track */}
          <section>
            <h2 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 uppercase">
              Do Not Track
            </h2>
            <p className="text-justify sm:text-left">
              Please note that we do not alter our Site's data collection and use practices when we see a Do Not Track signal from your browser.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 uppercase">
              Your Rights
            </h2>
            <p className="mb-3">
              If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
            </p>
            <p>
              Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 uppercase">
              Data Retention
            </h2>
            <p className="text-justify sm:text-left">
              When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
            </p>
          </section>

          {/* Minors */}
          <section>
            <h2 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 uppercase">
              Minors
            </h2>
            <p className="text-justify sm:text-left">
              The Site is not intended for individuals under the age of 18.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 uppercase">
              Changes
            </h2>
            <p className="text-justify sm:text-left">
              We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 uppercase">
              Contact Us
            </h2>
            <p className="mb-3">
              For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at blessedlightstudio@gmail.com or by mail using the details provided below:
            </p>
            <div className="mt-3 space-y-1 bg-black/30 p-4 rounded-lg border border-gray-800">
              <p>
                <span className="font-medium text-white">Address:</span> 11911 Freedom Drive Suite 620, Reston, VA, 20190, United States
              </p>
            </div>
          </section>

          {/* California Residents (CCPA) */}
          <section>
            <h2 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 uppercase">
              California Residents (CCPA Compliance)
            </h2>
            <p className="mb-3">
              If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA).
            </p>
            
            <h3 className="text-sm sm:text-base font-semibold text-white mb-2 mt-4">
              Right to Know and Access
            </h3>
            <p className="mb-3">
              You have the right to request that we disclose certain information to you about our collection and use of your personal information over the past 12 months. Once we receive and confirm your verifiable consumer request, we will disclose to you:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4 mb-4">
              <li className="pl-2">The categories of personal information we collected about you.</li>
              <li className="pl-2">The categories of sources for the personal information we collected about you.</li>
              <li className="pl-2">Our business or commercial purpose for collecting or selling that personal information.</li>
              <li className="pl-2">The categories of third parties with whom we share that personal information.</li>
              <li className="pl-2">The specific pieces of personal information we collected about you.</li>
            </ul>

            <h3 className="text-sm sm:text-base font-semibold text-white mb-2 mt-4">
              Right to Delete
            </h3>
            <p className="mb-3">
              You have the right to request that we delete any of your personal information that we collected from you and retained, subject to certain exceptions. Once we receive and confirm your verifiable consumer request, we will delete (and direct our service providers to delete) your personal information from our records, unless an exception applies.
            </p>

            <h3 className="text-sm sm:text-base font-semibold text-white mb-2 mt-4">
              Right to Opt-Out of Sale
            </h3>
            <p className="mb-3">
              We do not sell personal information. However, if our practices change, we will update this Privacy Policy and provide you with the ability to opt-out of the sale of your personal information.
            </p>

            <h3 className="text-sm sm:text-base font-semibold text-white mb-2 mt-4">
              Right to Non-Discrimination
            </h3>
            <p className="mb-3">
              We will not discriminate against you for exercising any of your CCPA rights. Unless permitted by the CCPA, we will not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4 mb-4">
              <li className="pl-2">Deny you goods or services.</li>
              <li className="pl-2">Charge you different prices or rates for goods or services, including through granting discounts or other benefits, or imposing penalties.</li>
              <li className="pl-2">Provide you a different level or quality of goods or services.</li>
              <li className="pl-2">Suggest that you may receive a different price or rate for goods or services or a different level or quality of goods or services.</li>
            </ul>

            <h3 className="text-sm sm:text-base font-semibold text-white mb-2 mt-4">
              Exercising Your Rights
            </h3>
            <p className="mb-3">
              To exercise your rights described above, please submit a verifiable consumer request to us by either:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4 mb-4">
              <li className="pl-2">Emailing us at blessedlightstudio@gmail.com</li>
              <li className="pl-2">Calling us at the number provided in our contact section</li>
            </ul>
            <p className="mb-3">
              Only you, or a person registered with the California Secretary of State that you authorize to act on your behalf, may make a verifiable consumer request related to your personal information. You may also make a verifiable consumer request on behalf of your minor child.
            </p>
            <p className="mb-3">
              You may only make a verifiable consumer request for access or data portability twice within a 12-month period. The verifiable consumer request must:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4 mb-4">
              <li className="pl-2">Provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative.</li>
              <li className="pl-2">Describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it.</li>
            </ul>
            <p>
              We cannot respond to your request or provide you with personal information if we cannot verify your identity or authority to make the request and confirm the personal information relates to you. We will only use personal information provided in a verifiable consumer request to verify the requestor's identity or authority to make the request.
            </p>
          </section>

          {/* Virginia Residents (VCDPA) */}
          <section>
            <h2 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 uppercase">
              Virginia Residents (VCDPA Compliance)
            </h2>
            <p className="mb-3">
              If you are a Virginia resident, you have specific rights under the Virginia Consumer Data Protection Act (VCDPA).
            </p>
            
            <p className="mb-3 font-medium text-white">
              Your Virginia Privacy Rights include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4 mb-4">
              <li className="pl-2">
                <span className="font-medium text-white">Right to Access:</span> You may request confirmation of whether we are processing your personal data and access to such personal data.
              </li>
              <li className="pl-2">
                <span className="font-medium text-white">Right to Correct:</span> You may request correction of inaccuracies in your personal data, taking into account the nature of the personal data and the purposes of the processing.
              </li>
              <li className="pl-2">
                <span className="font-medium text-white">Right to Delete:</span> You may request deletion of personal data provided by or obtained about you.
              </li>
              <li className="pl-2">
                <span className="font-medium text-white">Right to Data Portability:</span> You may request a copy of your personal data in a portable and, to the extent technically feasible, readily usable format.
              </li>
              <li className="pl-2">
                <span className="font-medium text-white">Right to Opt-Out:</span> You may opt out of the processing of personal data for purposes of targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects.
              </li>
            </ul>

            <h3 className="text-sm sm:text-base font-semibold text-white mb-2 mt-4">
              Exercising Your Virginia Rights
            </h3>
            <p className="mb-3">
              To exercise these rights, please contact us at blessedlightstudio@gmail.com. We will respond to your request within 45 days. If we need additional time, we will inform you of the reason and extension period in writing.
            </p>
            
            <h3 className="text-sm sm:text-base font-semibold text-white mb-2 mt-4">
              Appeals Process
            </h3>
            <p>
              If we decline to take action regarding your request, you may appeal our decision by contacting us at blessedlightstudio@gmail.com and specifying you wish to appeal. Within 60 days of our receipt of your appeal, we will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions.
            </p>
          </section>

          {/* Footer Note */}
          <section className="pt-6 sm:pt-8 border-t border-gray-800">
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              By using our website and services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
              Last Updated: December 2024
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

// import React from 'react';

// const PrivacyPolicy: React.FC = () => {
//   return (
//     <div className="w-full mx-auto bg-black/40 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="w-7xl mx-auto ">
//         <h1 className="text-2xl font-bold text-white mb-8 uppercase tracking-wide">
//           Privacy Policy
//         </h1>

//         <div className="space-y-8 text-sm leading-relaxed">
//           {/* Introduction */}
//           <section>
//             <p>
//               At Rhythm, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or make a purchase from us. By using our services, you consent to the practices described in this policy.
//             </p>
//           </section>

//           {/* Information We Collect */}
//           <section>
//             <h2 className="text-lg font-semibold text-white mb-4 uppercase">
//               Information We Collect
//             </h2>
//             <p className="mb-3">
//               We may collect various types of information when you interact with our website:
//             </p>
//             <ul className="list-disc list-inside space-y-2 ml-4">
//               <li>Personal Information: When you make a purchase or create an account, we collect your name, email address, shipping address, billing address, and payment information.</li>
//               <li>Usage Information: We gather data about how you navigate our website, including your IP address, browser type, pages visited, and the time spent on each page.</li>
//               <li>Cookies and Similar Technologies: We use cookies and similar tracking technologies to enhance your browsing experience and collect information about your preferences.</li>
//             </ul>
//           </section>

//           {/* How We Use Your Information */}
//           <section>
//             <h2 className="text-lg font-semibold text-white mb-4 uppercase">
//               How We Use Your Information
//             </h2>
//             <p className="mb-3">
//               We use the information we collect for various purposes, including:
//             </p>
//             <ul className="list-disc list-inside space-y-2 ml-4">
//               <li>Processing and fulfilling your orders.</li>
//               <li>Communicating with you about your orders, inquiries, and updates.</li>
//               <li>Personalizing your shopping experience and showing you relevant products.</li>
//               <li>Improving our website's functionality and user experience.</li>
//               <li>Sending you promotional materials and marketing communications (you can opt-out at any time).</li>
//               <li>Detecting and preventing fraud or unauthorized activities.</li>
//             </ul>
//           </section>

//           {/* Information Sharing and Disclosure */}
//           <section>
//             <h2 className="text-lg font-semibold text-white mb-4 uppercase">
//               Information Sharing and Disclosure
//             </h2>
//             <p className="mb-3">
//               We may share your information with third parties in the following circumstances:
//             </p>
//             <ul className="list-disc list-inside space-y-2 ml-4">
//               <li>Service Providers: We may share your data with trusted third-party service providers who assist us in operating our website, processing payments, and delivering orders.</li>
//               <li>Legal Compliance: We may disclose your information if required by law, government request, or to protect our rights, privacy, safety, or property.</li>
//               <li>Business Transfers: In the event of a merger, acquisition, or sale of all or part of our business, your information may be transferred to the acquiring entity.</li>
//             </ul>
//           </section>

//           {/* Data Security */}
//           <section>
//             <h2 className="text-lg font-semibold text-white mb-4 uppercase">
//               Data Security
//             </h2>
//             <p>
//               We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no data transmission over the internet or electronic storage method is entirely secure, and we cannot guarantee absolute security.
//             </p>
//           </section>

//           {/* Your Choices */}
//           <section>
//             <h2 className="text-lg font-semibold text-white mb-4 uppercase">
//               Your Choices
//             </h2>
//             <p className="mb-3">
//               You have certain rights and choices regarding your personal information:
//             </p>
//             <ul className="list-disc list-inside space-y-2 ml-4">
//               <li>Access and Correction: You can access and update your account information at any time by logging into your account.</li>
//               <li>Marketing Communications: You can opt-out of receiving promotional emails by following the unsubscribe instructions provided in the emails.</li>
//               <li>Cookies: You can manage your cookie preferences through your browser settings.</li>
//             </ul>
//           </section>

//           {/* Children's Privacy */}
//           <section>
//             <h2 className="text-lg font-semibold text-white mb-4 uppercase">
//               Children's Privacy
//             </h2>
//             <p>
//               Our website is not intended for children under the age of 13. We do not knowingly collect or solicit personal information from children. If you believe we have collected information from a child, please contact us, and we will take appropriate action.
//             </p>
//           </section>

//           {/* Changes to this Privacy Policy */}
//           <section>
//             <h2 className="text-lg font-semibold text-white mb-4 uppercase">
//               Changes to this Privacy Policy
//             </h2>
//             <p>
//               We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
//             </p>
//           </section>

//           {/* Contact Us */}
//           <section>
//             <h2 className="text-lg font-semibold text-white mb-4 uppercase">
//               Contact Us
//             </h2>
//             <p>
//               If you have any questions, concerns, or requests related to this Privacy Policy or our data practices, please contact us at:
//             </p>
//             <p className="mt-3">
//               Email: info@rhythm.com<br />
//               Phone: +1 (555) 123-4567<br />
//               Address: 123 Rhythm Street, Fashion City, FC 12345
//             </p>
//           </section>

//           {/* Footer Note */}
//           <section className="pt-8 border-t border-gray-800">
//             <p className="text-xs text-gray-500">
//               By using our website and services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms. Thank you for trusting Rhythm with your personal information.
//             </p>
//             <p className="text-xs text-gray-500 mt-4">
//               Last Updated: November 2024
//             </p>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrivacyPolicy;