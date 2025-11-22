import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className=" bg-black/40 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto ">
        <h1 className="text-2xl font-bold text-white mb-8 uppercase tracking-wide">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-sm leading-relaxed">
          {/* Introduction */}
          <section>
            <p>
              At Rhythm, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or make a purchase from us. By using our services, you consent to the practices described in this policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 uppercase">
              Information We Collect
            </h2>
            <p className="mb-3">
              We may collect various types of information when you interact with our website:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Personal Information: When you make a purchase or create an account, we collect your name, email address, shipping address, billing address, and payment information.</li>
              <li>Usage Information: We gather data about how you navigate our website, including your IP address, browser type, pages visited, and the time spent on each page.</li>
              <li>Cookies and Similar Technologies: We use cookies and similar tracking technologies to enhance your browsing experience and collect information about your preferences.</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 uppercase">
              How We Use Your Information
            </h2>
            <p className="mb-3">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Processing and fulfilling your orders.</li>
              <li>Communicating with you about your orders, inquiries, and updates.</li>
              <li>Personalizing your shopping experience and showing you relevant products.</li>
              <li>Improving our website's functionality and user experience.</li>
              <li>Sending you promotional materials and marketing communications (you can opt-out at any time).</li>
              <li>Detecting and preventing fraud or unauthorized activities.</li>
            </ul>
          </section>

          {/* Information Sharing and Disclosure */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 uppercase">
              Information Sharing and Disclosure
            </h2>
            <p className="mb-3">
              We may share your information with third parties in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Service Providers: We may share your data with trusted third-party service providers who assist us in operating our website, processing payments, and delivering orders.</li>
              <li>Legal Compliance: We may disclose your information if required by law, government request, or to protect our rights, privacy, safety, or property.</li>
              <li>Business Transfers: In the event of a merger, acquisition, or sale of all or part of our business, your information may be transferred to the acquiring entity.</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 uppercase">
              Data Security
            </h2>
            <p>
              We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no data transmission over the internet or electronic storage method is entirely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Your Choices */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 uppercase">
              Your Choices
            </h2>
            <p className="mb-3">
              You have certain rights and choices regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access and Correction: You can access and update your account information at any time by logging into your account.</li>
              <li>Marketing Communications: You can opt-out of receiving promotional emails by following the unsubscribe instructions provided in the emails.</li>
              <li>Cookies: You can manage your cookie preferences through your browser settings.</li>
            </ul>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 uppercase">
              Children's Privacy
            </h2>
            <p>
              Our website is not intended for children under the age of 13. We do not knowingly collect or solicit personal information from children. If you believe we have collected information from a child, please contact us, and we will take appropriate action.
            </p>
          </section>

          {/* Changes to this Privacy Policy */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 uppercase">
              Changes to this Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 uppercase">
              Contact Us
            </h2>
            <p>
              If you have any questions, concerns, or requests related to this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="mt-3">
              Email: info@rhythm.com<br />
              Phone: +1 (555) 123-4567<br />
              Address: 123 Rhythm Street, Fashion City, FC 12345
            </p>
          </section>

          {/* Footer Note */}
          <section className="pt-8 border-t border-gray-800">
            <p className="text-xs text-gray-500">
              By using our website and services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms. Thank you for trusting Rhythm with your personal information.
            </p>
            <p className="text-xs text-gray-500 mt-4">
              Last Updated: November 2024
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;