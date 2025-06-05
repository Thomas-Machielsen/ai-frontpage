interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({
  className = "",
  width = 200,
  height = 120,
}: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* fresk. text */}
      <text
        x="10"
        y="45"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="42"
        fontWeight="400"
        fill="#302A2F"
        letterSpacing="-0.02em"
      >
        fresk.
      </text>

      {/* digital text */}
      <text
        x="10"
        y="85"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="42"
        fontWeight="400"
        fill="#302A2F"
        letterSpacing="-0.02em"
      >
        digital
      </text>
    </svg>
  );
}
