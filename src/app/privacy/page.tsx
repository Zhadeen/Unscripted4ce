import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Unscripted Designs",
  description: "Privacy Policy for Unscripted Designs.",
};

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-32 pb-24 lg:px-8 min-h-screen">
      <h1 className="mb-4 text-4xl font-bold md:text-5xl uppercase tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        Privacy Policy
      </h1>
      <p className="mb-12 text-sm text-text/50 uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>
        Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      </p>

      <div className="space-y-8 text-text/80 leading-relaxed md:text-lg" style={{ fontFamily: "var(--font-body)" }}>
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-text uppercase tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>1. Information We Collect</h2>
          <p>
            When you engage with Unscripted Designs, we may collect personal information such as your name, email address, phone number, and project details. This information is typically collected directly from you when you use our contact forms, sign up for our newsletter, or communicate with us regarding our services.
          </p>
        </section>
        
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-text uppercase tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>2. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-inside list-disc space-y-2 ml-4">
            <li>Provide, operate, and maintain our services.</li>
            <li>Communicate with you regarding project updates, proposals, and support.</li>
            <li>Send you newsletters or marketing materials, provided you have opted in.</li>
            <li>Analyze and improve the user experience on our website.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-text uppercase tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>3. Information Sharing</h2>
          <p>
            We respect your privacy and do not sell, trade, or rent your personal information to third parties. We may share generic aggregated demographic information not linked to any personal identification information with our business partners and trusted affiliates.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-text uppercase tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>4. Data Security</h2>
          <p>
            We implement appropriate data collection, storage, and processing practices, as well as security measures, to protect against unauthorized access, alteration, disclosure, or destruction of your personal information and data stored on our site.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-text uppercase tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at: <a href="mailto:Hayatudeen.m.bello@gmail.com" className="text-accent hover:underline transition-colors font-medium">Hayatudeen.m.bello@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
