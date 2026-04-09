import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Unscripted Designs",
  description: "Terms of Service for Unscripted Designs.",
};

export default function TermsOfService() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-32 pb-24 lg:px-8 min-h-screen">
      <h1 className="mb-4 text-4xl font-bold md:text-5xl uppercase tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        Terms of Service
      </h1>
      <p className="mb-12 text-sm text-text/50 uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>
        Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      </p>

      <div className="space-y-8 text-text/80 leading-relaxed md:text-lg" style={{ fontFamily: "var(--font-body)" }}>
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-text uppercase tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>1. Agreement to Terms</h2>
          <p>
            By accessing or using the website and services provided by Unscripted Designs, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our website or use our services.
          </p>
        </section>
        
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-text uppercase tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>2. Intellectual Property Rights</h2>
          <p>
            Other than the content you own, under these terms, Unscripted Designs and/or its licensors own all the intellectual property rights and materials contained in this website. You are granted a limited license only for purposes of viewing the material contained on this website. All design work, mockups, and final assets delivered as part of our services belong to the respective client upon full payment, as detailed in individual project contracts.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-text uppercase tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>3. Restrictions</h2>
          <p className="mb-4">You are specifically restricted from all of the following:</p>
          <ul className="list-inside list-disc space-y-2 ml-4">
            <li>Publishing any website material in any other media without proper attribution.</li>
            <li>Selling, sublicensing, and/or otherwise commercializing any website material.</li>
            <li>Using this website in any way that is or may be damaging to this website.</li>
            <li>Using this website in any way that impacts user access to this website.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-text uppercase tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>4. No Warranties</h2>
          <p>
            This website is provided "as is," with all faults, and Unscripted Designs expresses no representations or warranties, of any kind related to this website or the materials contained on this website.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-text uppercase tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>5. Modifications</h2>
          <p>
            Unscripted Designs reserves the right to revise these terms at any time as it sees fit, and by using this website you are expected to review these terms on a regular basis.
          </p>
        </section>
      </div>
    </div>
  );
}
