import React from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            <Helmet>
                <title>Privacy Policy | MyJobPortal</title>
                <meta
                    name="description"
                    content="Learn how MyJobPortal collects, uses, and protects your personal information."
                />
            </Helmet>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#6A38C2] text-center sm:text-left">
                Privacy Policy
            </h1>

            <p className="mb-4 text-base sm:text-lg text-gray-700">
                At <strong>MyJobPortal</strong>, we value your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
            <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm sm:text-base">
                <li>Personal details (name, email, phone number)</li>
                <li>Resume and job preferences</li>
                <li>Login credentials</li>
                <li>Browsing behavior and analytics data</li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm sm:text-base">
                <li>To match you with relevant job opportunities</li>
                <li>To communicate updates, promotions, and job alerts</li>
                <li>To improve our platform's performance and features</li>
                <li>To comply with legal obligations</li>
            </ul>

            {/* Section 3 */}
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3">3. Data Security</h2>
            <p className="mb-4 text-sm sm:text-base text-gray-700">
                We implement strong security measures to protect your data from unauthorized access, loss, or misuse. However, no online system is completely secure, and we cannot guarantee absolute security.
            </p>

            {/* Section 4 */}
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3">4. Third-Party Sharing</h2>
            <p className="mb-4 text-sm sm:text-base text-gray-700">
                We do not sell or rent your personal data to third parties. We may share limited data with trusted partners for job matching and platform enhancement, under strict confidentiality agreements.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3">5. Your Rights</h2>
            <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm sm:text-base">
                <li>Access or update your information</li>
                <li>Request deletion of your account</li>
                <li>Opt-out of promotional communications</li>
            </ul>

            {/* Section 6 */}
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3">6. Changes to This Policy</h2>
            <p className="mb-4 text-sm sm:text-base text-gray-700">
                We may update this Privacy Policy from time to time. The updated version will be posted on this page with the revised date.
            </p>

            {/* Section 7 */}
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3">7. Contact Us</h2>
            <p className="text-sm sm:text-base text-gray-700">
                If you have any questions about our Privacy Policy, feel free to contact us at{' '}
                <a href="mailto:support@myjobportal.com" className="text-[#6A38C2] hover:underline">
                    support@myjobportal.com
                </a>
                .
            </p>
        </div>
    );
};

export default PrivacyPolicy;
