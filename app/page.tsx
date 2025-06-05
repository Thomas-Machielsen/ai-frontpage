"use client";

import { useState } from "react";

export default function Home() {
  const [users, setUsers] = useState("");
  const [scope, setScope] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FCF8F7] to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#B9FFB7]/10 to-[#5E43FF]/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#120B11] mb-6 leading-tight">
            Rethink Client Portals with AI
          </h1>
          <p className="text-xl md:text-2xl text-[#736F72] max-w-4xl mx-auto mb-12 leading-relaxed">
            Tailored, secure, effortless client experiences
            <br />
            powered by AI
          </p>
          <button className="bg-[#FF7535] hover:bg-[#FF7535]/90 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>

      {/* Before & After Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-[#120B11] text-center mb-16">
          Before & After
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          {/* Traditional Portal */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 relative">
            <h3 className="text-2xl font-semibold text-[#302A2F] mb-6">
              Traditional Client Portal
            </h3>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded-full"></div>
              <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded-full w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-2/3"></div>
            </div>
            <div className="absolute top-4 right-4 text-red-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center lg:justify-start">
            <div className="bg-[#5E43FF] text-white p-4 rounded-full">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </div>

          {/* AI-Enhanced Portal */}
          <div className="bg-gradient-to-br from-[#B9FFB7]/20 to-[#5E43FF]/20 rounded-2xl shadow-lg border border-[#B9FFB7]/30 p-8 relative">
            <h3 className="text-2xl font-semibold text-[#302A2F] mb-6">
              AI-Enhanced Portal
            </h3>
            <div className="space-y-4">
              <div className="h-4 bg-gradient-to-r from-[#B9FFB7] to-[#5E43FF] rounded-full"></div>
              <div className="h-4 bg-gradient-to-r from-[#B9FFB7] to-[#5E43FF] rounded-full w-4/5"></div>
              <div className="h-4 bg-gradient-to-r from-[#B9FFB7] to-[#5E43FF] rounded-full w-3/5"></div>
              <div className="h-4 bg-gradient-to-r from-[#B9FFB7] to-[#5E43FF] rounded-full w-3/4"></div>
            </div>
            <div className="absolute top-4 right-4 text-green-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Client Examples */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Client A */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <line
                  x1="10"
                  y1="10"
                  x2="90"
                  y2="90"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="90"
                  y1="10"
                  x2="10"
                  y2="90"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-[#302A2F] mb-4 relative z-10">
              Client A
            </h4>
            <div className="space-y-3 relative z-10">
              <div className="h-3 bg-gray-200 rounded-full"></div>
              <div className="h-3 bg-gray-200 rounded-full w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>
            </div>
          </div>

          {/* Client B */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
            <h4 className="text-xl font-semibold text-[#302A2F] mb-4">
              Client B
            </h4>
            <div className="space-y-3">
              <div className="h-3 bg-[#76A375] rounded-full"></div>
              <div className="h-3 bg-[#76A375] rounded-full w-4/5"></div>
              <div className="h-3 bg-[#76A375] rounded-full w-2/3"></div>
              <div className="h-3 bg-[#76A375] rounded-full w-1/2"></div>
            </div>
          </div>

          {/* Client C */}
          <div className="bg-gradient-to-br from-[#B9FFB7]/30 to-[#5E43FF]/30 rounded-xl shadow-md border border-[#B9FFB7]/50 p-6 relative">
            <div className="absolute top-4 right-4 bg-[#FF7535] text-white px-3 py-1 rounded-full text-sm font-semibold">
              +37%
            </div>
            <h4 className="text-xl font-semibold text-[#302A2F] mb-4">
              Client C
            </h4>
            <div className="space-y-3">
              <div className="h-3 bg-gradient-to-r from-[#B9FFB7] to-[#5E43FF] rounded-full"></div>
              <div className="h-3 bg-gradient-to-r from-[#B9FFB7] to-[#5E43FF] rounded-full w-5/6"></div>
              <div className="h-3 bg-gradient-to-r from-[#B9FFB7] to-[#5E43FF] rounded-full w-3/4"></div>
              <div className="h-3 bg-gradient-to-r from-[#B9FFB7] to-[#5E43FF] rounded-full w-2/3"></div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Explained Section */}
      <div className="bg-gradient-to-r from-[#5E43FF]/5 to-[#B9FFB7]/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 h-64 flex items-center justify-center">
              <div className="text-center text-[#736F72]">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-[#5E43FF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-lg">Interactive Portal Demo</p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#120B11] mb-8">
                AI Explained
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#5E43FF] rounded-full mt-3 flex-shrink-0"></div>
                  <div className="h-4 bg-[#736F72]/30 rounded-full flex-1"></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#5E43FF] rounded-full mt-3 flex-shrink-0"></div>
                  <div className="h-4 bg-[#736F72]/30 rounded-full flex-1 w-4/5"></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#5E43FF] rounded-full mt-3 flex-shrink-0"></div>
                  <div className="h-4 bg-[#736F72]/30 rounded-full flex-1 w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <h2 className="text-3xl font-bold text-[#120B11] text-center mb-8">
              Get Your Custom Solution
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#302A2F] mb-2">
                  Number of users
                </label>
                <select
                  value={users}
                  onChange={(e) => setUsers(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5E43FF] focus:border-[#5E43FF] text-[#302A2F]"
                >
                  <option value="">Select user count</option>
                  <option value="1-10">1-10 users</option>
                  <option value="11-50">11-50 users</option>
                  <option value="51-200">51-200 users</option>
                  <option value="200+">200+ users</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#302A2F] mb-2">
                  Estimated Scope
                </label>
                <input
                  type="text"
                  value={scope}
                  onChange={(e) => setScope(e.target.value)}
                  placeholder="Describe your project scope"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5E43FF] focus:border-[#5E43FF] text-[#302A2F] placeholder:text-[#736F72]"
                />
              </div>

              <button className="w-full bg-[#5E43FF] hover:bg-[#4430B8] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                Talk to a strategist
              </button>
            </div>

            <p className="text-sm text-[#736F72] text-center mt-6">
              Get a personalized consultation within 24 hours
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#302A2F] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#FCF8F7]">
            © 2024 Fresk. Transforming client experiences with AI.
          </p>
        </div>
      </div>
    </div>
  );
}
