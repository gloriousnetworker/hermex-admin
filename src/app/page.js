'use client'; // Mark as a client component

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

export default function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // GSAP animation for the bar chart SVG while loading
    if (loading) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to('.chart-bar', {
        scaleY: 1.3,
        transformOrigin: 'bottom',
        duration: 0.8,
        ease: 'power1.inOut',
      });
    }
  }, [loading]);

  return (
    <div className="min-h-screen bg-[#1F2937] flex flex-col justify-center items-center text-white">
      <div className="px-4 text-center">
        {/* Main Heading */}
        <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeInDown">
          BI Insights
        </h1>
        <p className="text-xl max-w-2xl mx-auto mb-8 animate__animated animate__fadeInDown animate__delay-1s">
          Transforming Data Into Actionable Insights
        </p>

        {/* Animated Data Visualization SVG */}
        <div className="flex justify-center items-center mb-8 animate__animated animate__fadeInUp animate__delay-1s">
          {loading ? (
            <svg
              className="w-32 h-32"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Three bars representing a simple bar chart */}
              <rect
                className="chart-bar"
                x="15"
                y="40"
                width="10"
                height="40"
                fill="#3B82F6"
              />
              <rect
                className="chart-bar"
                x="40"
                y="30"
                width="10"
                height="50"
                fill="#3B82F6"
              />
              <rect
                className="chart-bar"
                x="65"
                y="50"
                width="10"
                height="30"
                fill="#3B82F6"
              />
            </svg>
          ) : (
            <svg
              className="w-32 h-32"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Final static bar chart when loading is complete */}
              <rect x="15" y="40" width="10" height="40" fill="#3B82F6" />
              <rect x="40" y="30" width="10" height="50" fill="#3B82F6" />
              <rect x="65" y="50" width="10" height="30" fill="#3B82F6" />
            </svg>
          )}
        </div>

        {/* Status Message */}
        {loading ? (
          <p className="text-lg font-semibold animate__animated animate__fadeInUp animate__delay-1_5s">
            Loading Data...
          </p>
        ) : (
          <p className="text-lg font-semibold animate__animated animate__fadeInUp animate__delay-1_5s">
            Welcome to your Dashboard
          </p>
        )}

        {/* Additional Information */}
        <div className="mt-8 animate__animated animate__fadeInUp animate__delay-2s">
          <h2 className="text-2xl font-bold mb-2">Building a smarter business</h2>
          <p className="text-md opacity-80">
            Our platform delivers real-time insights, interactive charts, and detailed analytics to help you make informed decisions.
          </p>
        </div>

        {/* Loading Dots Animation */}
        {loading && (
          <div className="flex justify-center mt-6 space-x-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-150" />
            <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-300" />
          </div>
        )}
      </div>
    </div>
  );
}
