import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-16 grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
          <div className="col-span-full lg:col-span-2">
            {/* Logo */}
            <div className="mb-4 lg:-mt-2">
              <a href="/" className="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl" aria-label="logo">
                MedGenie
              </a>
            </div>
            {/* Filler text */}
            <p className="mb-6 text-gray-500 sm:pr-8">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
          </div>

          {/* Products */}
          <FooterSection title="Products">
            <FooterLink href="#" text="Overview" />
            <FooterLink href="#" text="Solutions" />
            <FooterLink href="#" text="Pricing" />
            <FooterLink href="#" text="Customers" />
          </FooterSection>

          {/* Company */}
          <FooterSection title="Company">
            <FooterLink href="#" text="About" />
            <FooterLink href="#" text="Investor Relations" />
            <FooterLink href="#" text="Jobs" />
            <FooterLink href="#" text="Press" />
            <FooterLink href="#" text="Blog" />
          </FooterSection>

          {/* Support */}
          <FooterSection title="Support">
            <FooterLink href="#" text="Contact" />
            <FooterLink href="#" text="Documentation" />
            <FooterLink href="#" text="Chat" />
            <FooterLink href="#" text="FAQ" />
          </FooterSection>

          {/* Legal */}
          <FooterSection title="Legal">
            <FooterLink href="#" text="Terms of Service" />
            <FooterLink href="#" text="Privacy Policy" />
            <FooterLink href="#" text="Cookie settings" />
          </FooterSection>
        </div>

        {/* Copyright */}
        <div className="border-t py-8 text-center text-sm text-gray-400">© 2024 - Present MedGenie. All rights reserved.</div>
      </footer>
    </div>
  );
};

// Component for each section of links
const FooterSection = ({ title, children }) => {
  return (
    <div>
      <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">{title}</div>
      <nav className="flex flex-col gap-4">
        {children}
      </nav>
    </div>
  );
};

// Component for each individual link
const FooterLink = ({ href, text }) => {
  return (
    <div>
      <a href={href} className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">{text}</a>
    </div>
  );
};

export default Footer;
