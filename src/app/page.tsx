'use client';

import { useEffect, useState } from "react";
import Head from "next/head";

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
    <main className="min-h-screen pb-20 bg-[url('/Background1.jpg')] bg-cover bg-center flex flex-col items-center text-black">
      <Head>
        <title>Bend Roots Landscaping</title>
        <meta name="description" content="Professional landscaping services in Bend, Oregon." />
        <meta name="reply-to" content="info@bendrootslandscaping.com" />
      </Head>

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
            <h3 className="text-green-700 font-bold text-xl mb-2">Lawn Mowing + Blowing</h3>
            <ul className="list-disc list-inside">
              <li>Up to 2,000 sq ft – $55</li>
              <li>2,000 – 4,000 sq ft – $75</li>
              <li>4,000 – 6,000 sq ft – $95</li>
              <li>6,000 – 8,000 sq ft – $115</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-green-700 font-bold text-xl mb-2">Weeding</h3>
            <ul className="list-disc list-inside">
              <li>Light (up to 2 hrs) – $65</li>
              <li>Moderate (2–4 hrs) – $100</li>
              <li>Heavy/Overgrown – Custom quote</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-green-700 font-bold text-xl mb-2">Yard Clean-Up</h3>
            <ul className="list-disc list-inside">
              <li>Small (up to 3,999 sq ft) – $120</li>
              <li>Medium (4,000–7,999 sq ft) – $190</li>
              <li>Large (8,000+ sq ft) – $250+</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-green-700 font-bold text-xl mb-2">Monthly Maintenance Plans</h3>
            <ul className="list-disc list-inside">
              <li>Basic (Biweekly) – $130/month</li>
              <li>Standard (Weekly Mow & Blow) – $260/month</li>
              <li>Premium (Weekly + Weeding) – $340/month</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="font-bold">
            Call or Text:{" "}
            <a href="tel:3073892796" className="text-green-700 underline">307-389-2796</a>
          </p>
          <p className="text-sm text-gray-600 italic mt-1">
            Email: <a href="mailto:info@bendrootslandscaping.com" className="text-green-700 underline">info@bendrootslandscaping.com</a>
          </p>
        </div>
      </section>

      <section className="mt-10 px-4 py-8 w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 text-left">
          {[
            { quote: "Absolutely amazing service! My yard has never looked better.", name: "Sarah M." },
            { quote: "Reliable, fast, and affordable. Highly recommended!", name: "Jason T." },
            { quote: "They transformed my backyard into a beautiful, usable space.", name: "Emily R." },
            { quote: "Best landscaping crew in town — hands down.", name: "Michael B." },
            { quote: "5 stars all around. Professional, friendly, and efficient!", name: "Lindsey K." },
          ].map((t, i) => (
            <div key={i} className="bg-white/90 p-4 rounded-xl shadow-sm text-sm italic">
              “{t.quote}”
              <p className="mt-2 text-right text-gray-700 not-italic font-medium">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section text-center p-6 bg-white shadow-md rounded-xl max-w-xl mx-auto my-10">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700">
          Have a question or need a quote? Reach out anytime!
        </p>
        <p className="mt-4 text-blue-600 font-medium">
          <a href="mailto:info@bendrootslandscaping.com">
            info@bendrootslandscaping.com
          </a>
        </p>
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
