import PaletteCard from "../components/PaletteCard";

const PalettePage = () => {
  const brandPalette = {
    title: "Primary Colors",
    description:
      "Core brand colors for Fresk digital agency, featuring vibrant greens, blues, and orange accents.",
    colors: [
      {
        name: "Green",
        hex: "#B9FFB7",
        rgb: "rgb(185, 255, 183)",
        usage: "Primary",
      },
      {
        name: "Green - Dimmed",
        hex: "#76A375",
        rgb: "rgb(118, 163, 117)",
        usage: "Secondary",
      },
      {
        name: "Green - bright",
        hex: "#D6E9C3",
        rgb: "rgb(214, 233, 195)",
        usage: "Accent",
      },
      {
        name: "Orange",
        hex: "#FF7535",
        rgb: "rgb(255, 117, 53)",
        usage: "CTA",
      },
      {
        name: "Blue",
        hex: "#5E43FF",
        rgb: "rgb(94, 67, 255)",
        usage: "Primary",
      },
      {
        name: "Blue - Dimmed",
        hex: "#4430B8",
        rgb: "rgb(68, 48, 184)",
        usage: "Secondary",
      },
    ],
  };

  const neutralPalette = {
    title: "Neutral Tones",
    description:
      "Supporting neutral colors for text, backgrounds, and subtle UI elements.",
    colors: [
      {
        name: "White",
        hex: "#FFFFFF",
        rgb: "rgb(255, 255, 255)",
        usage: "Background",
      },
      {
        name: "Snow",
        hex: "#FCF8F7",
        rgb: "rgb(252, 248, 247)",
        usage: "Background",
      },
      {
        name: "Sonic Silver",
        hex: "#736F72",
        rgb: "rgb(115, 111, 114)",
        usage: "Text",
      },
      {
        name: "Raisin Black",
        hex: "#302A2F",
        rgb: "rgb(48, 42, 47)",
        usage: "Text",
      },
      {
        name: "Xiketic",
        hex: "#120B11",
        rgb: "rgb(18, 11, 17)",
        usage: "Headings",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Fresk Design System
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive color palette designed for digital excellence.
              Each color has been carefully selected to create beautiful,
              accessible, and professional digital experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PaletteCard {...brandPalette} />
          <PaletteCard {...neutralPalette} />
        </div>

        {/* Typography Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Typography System
          </h2>

          {/* Headings */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Headings
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-8">
                <span className="text-sm text-gray-500 w-16 flex-shrink-0 font-mono">
                  H1
                </span>
                <h1 className="text-4xl font-bold text-gray-900 flex-1">
                  The quick brown fox jumps over the lazy dog
                </h1>
                <span className="text-xs text-gray-400 w-20 text-right font-mono">
                  48px
                </span>
              </div>
              <div className="flex items-center gap-8">
                <span className="text-sm text-gray-500 w-16 flex-shrink-0 font-mono">
                  H2
                </span>
                <h2 className="text-3xl font-bold text-gray-900 flex-1">
                  The quick brown fox jumps over the lazy dog
                </h2>
                <span className="text-xs text-gray-400 w-20 text-right font-mono">
                  36px
                </span>
              </div>
              <div className="flex items-center gap-8">
                <span className="text-sm text-gray-500 w-16 flex-shrink-0 font-mono">
                  H3
                </span>
                <h3 className="text-2xl font-semibold text-gray-900 flex-1">
                  The quick brown fox jumps over the lazy dog
                </h3>
                <span className="text-xs text-gray-400 w-20 text-right font-mono">
                  24px
                </span>
              </div>
              <div className="flex items-center gap-8">
                <span className="text-sm text-gray-500 w-16 flex-shrink-0 font-mono">
                  H4
                </span>
                <h4 className="text-xl font-semibold text-gray-900 flex-1">
                  The quick brown fox jumps over the lazy dog
                </h4>
                <span className="text-xs text-gray-400 w-20 text-right font-mono">
                  20px
                </span>
              </div>
              <div className="flex items-center gap-8">
                <span className="text-sm text-gray-500 w-16 flex-shrink-0 font-mono">
                  H5
                </span>
                <h5 className="text-lg font-medium text-gray-900 flex-1">
                  The quick brown fox jumps over the lazy dog
                </h5>
                <span className="text-xs text-gray-400 w-20 text-right font-mono">
                  18px
                </span>
              </div>
              <div className="flex items-center gap-8">
                <span className="text-sm text-gray-500 w-16 flex-shrink-0 font-mono">
                  H6
                </span>
                <h6 className="text-base font-medium text-gray-900 flex-1">
                  The quick brown fox jumps over the lazy dog
                </h6>
                <span className="text-xs text-gray-400 w-20 text-right font-mono">
                  16px
                </span>
              </div>
            </div>
          </div>

          {/* Body Text */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Body Text
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Large Body
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    18px / 28px
                  </span>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Regular Body
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    16px / 24px
                  </span>
                </div>
                <p className="text-base text-gray-700 leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Small Body
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    14px / 20px
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
              </div>
            </div>
          </div>

          {/* Font Weights & Styles */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Font Weights
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-base font-light text-gray-700">
                    Light (300)
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    font-light
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base font-normal text-gray-700">
                    Regular (400)
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    font-normal
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium text-gray-700">
                    Medium (500)
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    font-medium
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-gray-700">
                    Semibold (600)
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    font-semibold
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-gray-700">
                    Bold (700)
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    font-bold
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Special Styles
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-gray-500 block mb-1">
                    Caption
                  </span>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    CAPTION TEXT STYLE
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-500 block mb-1">
                    Monospace
                  </span>
                  <p className="text-sm font-mono text-gray-700">
                    function helloWorld() {}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-500 block mb-1">Link</span>
                  <a
                    href="#"
                    className="text-sm text-blue-600 hover:text-blue-800 underline"
                  >
                    This is a link style
                  </a>
                </div>
                <div>
                  <span className="text-sm text-gray-500 block mb-1">
                    Emphasized
                  </span>
                  <p className="text-sm">
                    <em className="text-gray-700">This text is emphasized</em>
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-500 block mb-1">
                    Strong
                  </span>
                  <p className="text-sm">
                    <strong className="text-gray-900">
                      This text is strong
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Example */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Typography in Context
            </h3>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Building Digital Excellence at Fresk
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We craft exceptional digital experiences that combine beautiful
                design with cutting-edge technology. Our approach focuses on
                user-centered solutions that drive real business results.
              </p>
              <p className="text-base text-gray-600 leading-normal mb-4">
                From initial concept to final deployment, we work closely with
                our clients to understand their unique challenges and goals. Our
                team of designers and developers brings years of experience in
                creating scalable, maintainable solutions.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  Learn More
                </span>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  View Our Portfolio →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Usage Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Accessibility
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All color combinations meet WCAG 2.1 AA standards for contrast
                ratios. Primary text colors provide at least 4.5:1 contrast
                against their backgrounds.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Implementation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                These colors are available as CSS custom properties and Tailwind
                CSS classes. Click any color value to copy it to your clipboard
                for immediate use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PalettePage;
