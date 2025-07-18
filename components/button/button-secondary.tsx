export default function ButtonSecondary({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-white px-4 py-2 text-[16px] rounded-full w-fit text-dark-purple font-mansfield font-semibold hover:bg-dark-purple/80 hover:border-white border border-transparent hover:text-white transition-all duration-300 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
