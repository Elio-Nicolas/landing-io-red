export default function Logo() {
  return (
    <div className="flex items-center gap-2 text-white leading-none">
      <img
        src="/logos.svg"
        alt="IORed"
        className="h-[1em] w-auto block"
      />

      <span className="font-semibold tracking-wide">
        IORed
      </span>
    </div>
  );
}
