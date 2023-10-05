import React from "react";

export default function Company() {
  return (
    <div className="w-full lg:px-20 py-5">

      <h2 className="text-4xl font-bold my-10 text-center">Welcome to Suyog – Your Partner in IT Excellence</h2>
    <div className="flex box-border mx-auto justify-evenly lg:flex-row-reverse flex-col">
      <img
        src="https://www.legalbites.in/wp-content/uploads/2016/09/Company_picture.jpg"
        alt="image"
        className="w-11/12 lg:h-[45vh] m-auto lg:w-1/3 shadow-lg shadow-gray-500 lg:rotate-12 border border-gray-200 rounded-lg"
      />
      <div className="my-5 w-11/12 lg:w-1/2">
        <p>
          At Suyog, we believe in the transformative power of technology. Our
          mission is simple yet profound: to provide our customers with the
          highest quality IT services and solutions that empower their
          businesses to thrive in the digital age. With a relentless commitment
          to innovation, precision, and customer satisfaction, Suyog stands as
          your trusted partner in the world of Information Technology.
        </p>
        <p>
          In the ever-evolving IT landscape, staying ahead requires more than
          just keeping up – it demands excellence. That's where Suyog comes in.
          Our team of dedicated professionals, armed with the latest tools and
          industry insights, is ready to tackle your IT challenges head-on.
          Whether you're seeking software development, cybersecurity solutions,
          IT consulting, or cloud services, Suyog is here to deliver results
          that exceed your expectations.
        </p>
        <p>
          We understand that every business is unique, which is why we tailor
          our services to your specific needs. Your success is our success, and
          we're committed to walking this transformative IT journey with you.
          Join us at Suyog, where excellence is not just a goal; it's our way of
          doing business.
        </p>
        <q className="font-bold">
          Explore our services, and let's embark on a journey towards IT
          excellence together.
        </q>
      </div>
    </div>
    </div>
  );
}
