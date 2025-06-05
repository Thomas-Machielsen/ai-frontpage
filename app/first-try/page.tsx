import "../global/palette.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-slate-900">
                  fresk.digital
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#features"
                  className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Features
                </a>
                <a
                  href="#services"
                  className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
              Revolutionize Your Business with
              <span className="text-blue-600 block">AI-Powered Solutions</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Transform your operations, enhance productivity, and unlock new
              possibilities with cutting-edge artificial intelligence tailored
              for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                Get Started Today
              </button>
              <button className="border border-slate-300 text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-50 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover how our AI solutions can transform every aspect of your
              business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Lightning Fast Processing
              </h3>
              <p className="text-slate-600">
                Process massive amounts of data in seconds with our advanced AI
                algorithms and cloud infrastructure.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Intelligent Automation
              </h3>
              <p className="text-slate-600">
                Automate complex workflows and decision-making processes with
                smart AI that learns and adapts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Advanced Analytics
              </h3>
              <p className="text-slate-600">
                Gain deep insights into your business with AI-powered analytics
                and predictive modeling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive AI solutions designed to meet your specific business
              requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-semibold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    AI Strategy & Consulting
                  </h3>
                  <p className="text-slate-600">
                    Expert guidance to develop and implement AI strategies that
                    align with your business goals and objectives.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-semibold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Custom AI Development
                  </h3>
                  <p className="text-slate-600">
                    Bespoke AI solutions built from the ground up to address
                    your unique challenges and requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-semibold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    AI Integration & Support
                  </h3>
                  <p className="text-slate-600">
                    Seamless integration of AI tools into your existing systems
                    with ongoing support and optimization.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-slate-600 mb-6">
                Join hundreds of companies already leveraging AI to drive
                growth, efficiency, and innovation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">
                    Free consultation & assessment
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">
                    30-day money-back guarantee
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">24/7 technical support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Start Your AI Journey Today
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Don&apos;t let your competitors get ahead. Transform your business
            with AI solutions that deliver real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border border-slate-600 text-slate-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                fresk.digital
              </h3>
              <p className="text-slate-600 mb-4">
                Empowering businesses with cutting-edge AI solutions that drive
                growth, efficiency, and innovation.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-slate-600">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-600">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-600">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-4">
                Services
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li>
                  <a href="#" className="hover:text-slate-900">
                    AI Consulting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Custom Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Integration
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-4">
                Company
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li>
                  <a href="#" className="hover:text-slate-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 mt-8 pt-8 text-center text-slate-600">
            <p>&copy; 2024 fresk.digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
