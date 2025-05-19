import React from 'react';

const TermsOfServices = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6 text-[#6A38C2]">Terms of Service</h1>

      <p className="mb-4">
        Welcome to <strong>MyJobPortal</strong>. By accessing or using our platform, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Use of the Platform</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>You must be at least 18 years old to use our services.</li>
        <li>You agree to provide accurate, current, and complete information during registration and job applications.</li>
        <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. User Conduct</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Do not post false, misleading, or fraudulent information.</li>
        <li>Do not use our platform for any unlawful purposes or to harass others.</li>
        <li>Do not attempt to gain unauthorized access to our systems or data.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Job Listings</h2>
      <p className="mb-4">
        MyJobPortal does not guarantee the authenticity or availability of any job listed on the site. Users are encouraged to do their due diligence before engaging with any employer.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Intellectual Property</h2>
      <p className="mb-4">
        All content on MyJobPortal, including text, logos, graphics, and software, is the property of MyJobPortal or its licensors and is protected by intellectual property laws.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate your access to the platform at any time for violating these terms or engaging in conduct that harms the platform or its users.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Limitation of Liability</h2>
      <p className="mb-4">
        MyJobPortal shall not be liable for any direct, indirect, or incidental damages resulting from the use or inability to use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Modifications</h2>
      <p className="mb-4">
        We may revise these terms from time to time. Continued use of the platform after such changes constitutes your acceptance of the new terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact Us</h2>
      <p>
        If you have any questions regarding these Terms of Service, please contact us at{' '}
        <a href="mailto:support@myjobportal.com" className="text-[#6A38C2] hover:underline">
          support@myjobportal.com
        </a>.
      </p>
    </div>
  );
};

export default TermsOfServices;

