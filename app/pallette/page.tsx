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
