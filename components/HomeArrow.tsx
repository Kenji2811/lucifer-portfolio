export default function HomeArrow({
  direction = "up-right",
}: {
  direction?: "up-right" | "down-right" | "down";
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={`home-arrow home-arrow--${direction}`}
    >
      <path
        d="M10 38 38 10M10 10h28v28"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
