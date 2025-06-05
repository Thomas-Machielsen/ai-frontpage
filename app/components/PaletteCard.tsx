"use client";
import React from "react";

export interface ColorSwatch {
  name: string;
  hex: string;
  rgb: string;
  usage: string;
}

export interface PaletteCardProps {
  title: string;
  description: string;
  colors: ColorSwatch[];
  className?: string;
}

const PaletteCard: React.FC<PaletteCardProps> = ({
  title,
  description,
  colors,
  className = "",
}) => {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div
      className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-50">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Color Swatches */}
      <div className="p-6">
        <div className="grid gap-4">
          {colors.map((color, index) => (
            <div key={index} className="flex items-center gap-4 group">
              {/* Color Circle */}
              <div className="relative">
                <div
                  className="w-12 h-12 rounded-full border-2 border-gray-200 cursor-pointer group-hover:scale-110 transition-transform duration-200 shadow-sm"
                  style={{ backgroundColor: color.hex }}
                  onClick={() => copyToClipboard(color.hex)}
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <svg
                    className="w-2 h-2 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path>
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path>
                  </svg>
                </div>
              </div>

              {/* Color Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h4 className="font-medium text-gray-900">{color.name}</h4>
                  <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-md">
                    {color.usage}
                  </span>
                </div>
                <div className="flex gap-4 text-sm text-gray-600">
                  <button
                    onClick={() => copyToClipboard(color.hex)}
                    className="hover:text-gray-900 transition-colors font-mono"
                  >
                    {color.hex}
                  </button>
                  <button
                    onClick={() => copyToClipboard(color.rgb)}
                    className="hover:text-gray-900 transition-colors font-mono"
                  >
                    {color.rgb}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">Click any color to copy</span>
          <div className="flex gap-2">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-6 h-6 rounded border border-gray-200"
                style={{ backgroundColor: color.hex }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaletteCard;
