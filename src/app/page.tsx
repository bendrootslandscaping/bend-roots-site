'use client';

import { useEffect, useState } from "react";

export default function Home() {
  const images = ["/lawn1.jpg", "/lawn2.jpg", "/lawn3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen pb-20 bg-[url('/Background1.jpg')] bg-cover bg-center bg-fixed flex flex-col items-center text-black">
      <header className="w-full bg-white shadow-md py-6 flex flex-col items-center">
        <img
          src="/Bend_Roots_Landscaping_Logo.jpg"
          alt="Bend Roots Logo"
          className="h-36 md:h-44 mb-2"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 tracking-wide">
          Bend Roots Landscaping
        </h1>
      </header>

      <section className="bg-white/70 backdrop-blur-md rounded-2xl mt-10 px-6 py-8 max-w-6xl w-full text-center shadow-lg">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-green-700 font-bold text-xl mb-2">
              Lawn Mowing + Blowing <span className="text-sm italic text-gray-500">(One-Time Service)</span>
            </h3>
            <ul className="list-disc list-inside">
              <li>Up to 1,999 sq ft – $55</li>
              <li>2,000 – 3,999 sq ft – $75</li>
              <li>4,000 – 5,999 sq ft – $95</li>
              <li>6,000 – 8,000 sq ft – $115</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-green-700 font-bold text-xl mb-2">
              Weeding <span className="text-sm italic text-gray-500">(One-Time Service)</span>
            </h3>
            <ul className="list-disc list-inside">
              <li>Light (up to 2 hrs) – $65</li>
              <li>Moderate (2–4 hrs) – $100</li>
              <li>Heavy/Overgrown – Custom quote</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-green-700 font-bold text-xl mb-2">
              Yard Clean-Up <span className="text-sm italic text-gray-500">(One-Time Service)</span>
            </h3>
            <ul className="list-disc list-inside">
              <li>Small (up to 3,999 sq ft) – $120</li>
              <li>Medium (4,000–7,999 sq ft) – $190</li>
              <li>Large (8,000+ sq ft) – $250+</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-green-700 font-bold text-xl mb-2">
              Monthly Maintenance Plans <span className="text-sm italic text-gray-500">(Up to 3,999 sq ft)</span>
            </h3>
            <ul className="list-disc list-inside">
              <li>Basic (Biweekly) – $130/month</li>
              <li>Standard (Weekly Mow & Blow) – $260/month</li>
              <li>Premium (Weekly + Weeding) – $340/month</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-green-700 font-bold text-xl mb-2">
              Additional Maintenance Services <span className="text-sm italic text-gray-500">(No LCB License Required)</span>
            </h3>
            <ul className="list-disc list-inside">
              <li>Leaf and debris cleanup</li>
              <li>Shrub, hedge, and small tree pruning (under 10 ft)</li>
              <li>Mulch and bark dust application</li>
              <li>Fertilizer application (organic or granular only)</li>
              <li>Trimming ground cover</li>
              <li>Pressure washing hard surfaces</li>
              <li>Snow removal</li>
            </ul>
          </div>

        </div>

        <div className="mt-6 text-center">
          <p className="font-bold">
            Call or Text: {" "}
            <a href="tel:3073892796" className="text-green-700 underline">
              307-389-2796
            </a>
          </p>
          <p className="text-sm text-gray-600 italic mt-1">
            Email: <a href="mailto:info@bendrootslandscaping.com" className="text-green-700 underline">info@bendrootslandscaping.com</a>
          </p>
        </div>
      </section>

      <section className="mt-10 px-4 py-8 w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 text-left">
          {[ 
            {
              quote: "Absolutely amazing service! My yard has never looked better.",
              name: "Sarah M.",
            },
            {
              quote: "Reliable, fast, and affordable. Highly recommended!",
              name: "Jason T.",
            },
            {
              quote: "They transformed my backyard into a beautiful, usable space.",
              name: "Emily R.",
            },
            {
              quote: "Best landscaping crew in town — hands down.",
              name: "Michael B.",
            },
            {
              quote: "5 stars all around. Professional, friendly, and efficient!",
              name: "Lindsey K.",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white/90 p-4 rounded-xl shadow-sm text-sm italic"
            >
              “{t.quote}”
              <p className="mt-2 text-right text-gray-700 not-italic font-medium">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 px-4 py-10 w-full max-w-2xl text-center bg-green-50 rounded-xl shadow-md">
        <h2 className="text-3xl font-extrabold text-green-800 mb-4">Request a Free Quote</h2>
        <p className="text-base text-gray-800 mb-6">
          Let us know what your property needs — and we’ll reach out with an estimate quickly.
        </p>
        <form
          action="https://formspree.io/f/xjkrdpzr"
          method="POST"
          className="bg-white p-6 rounded-xl shadow space-y-4 text-left"
        >
          <div>
            <label className="block font-semibold text-sm">Name</label>
            <input type="text" name="name" required placeholder="Your full name" className="w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div>
            <label className="block font-semibold text-sm">Address</label>
            <input type="text" name="address" placeholder="Your address" className="w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div>
            <label className="block font-semibold text-sm">Email</label>
            <input type="email" name="email" required placeholder="Your email address" className="w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div>
            <label className="block font-semibold text-sm">Phone Number</label>
            <input type="tel" name="phone" placeholder="Your phone number" className="w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div>
            <label className="block font-semibold text-sm">Describe your project</label>
            <textarea name="message" required placeholder="Services needed, square footage, etc." className="w-full border border-gray-300 rounded-md p-2" rows={4}></textarea>
          </div>
          <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition">
            Submit Request
          </button>
        </form>
      </section>

      <section className="w-full max-w-4xl mt-10 aspect-video relative rounded-xl shadow-lg overflow-hidden">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`slideshow-${idx}`}
            className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ${
              idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </section>
    </main>
  );
}
