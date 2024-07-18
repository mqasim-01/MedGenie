import React from 'react';

function ContactSection() {
  return (
    <section className="body-font relative text-gray-600">
      <div className="container mx-auto flex flex-wrap px-5 py-24 sm:flex-nowrap">
        <div className="relative flex items-end justify-start overflow-hidden rounded-lg bg-gray-300 p-10 sm:mr-10 md:w-1/2 lg:w-2/3">
          <iframe
            title="map"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.7207286712633!2d72.78412297554667!3d33.74203697327538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa77a34e5ba2f%3A0xba887e5fc9f9c4ee!2sComsats%20University%20Islamabad%2C%20Wah%20Campus!5e0!3m2!1sen!2s!4v1721286283738!5m2!1sen!2s"
            allowFullScreen
          ></iframe>
          <div className="relative flex flex-wrap rounded bg-white py-6 shadow-md">
            <div className="px-6 lg:w-1/2">
              <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">ADDRESS</h2>
              <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
            </div>
            <div className="mt-4 px-6 lg:mt-0 lg:w-1/2">
              <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">EMAIL</h2>
              <a href="mailto:example@email.com" className="leading-relaxed text-indigo-500">example@email.com</a>
              <h2 className="title-font mt-4 text-xs font-semibold tracking-widest text-gray-900">PHONE</h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex w-full flex-col bg-white md:ml-auto md:mt-0 md:w-1/2 md:py-8 lg:w-1/3">
          <h2 className="title-font mb-1 text-lg font-medium text-gray-900">Feedback</h2>
          <p className="mb-5 leading-relaxed text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
          <div className="relative mb-4">
            <label htmlFor="name" className="text-sm leading-7 text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="text-sm leading-7 text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="text-sm leading-7 text-gray-600">Message</label>
            <textarea
              id="message"
              name="message"
              className="h-32 w-full resize-none rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            ></textarea>
          </div>
          <button className="rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">Submit</button>
          <p className="mt-3 text-xs text-gray-500">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
