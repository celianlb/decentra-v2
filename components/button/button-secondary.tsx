export default function ButtonSecondary({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="bg-white px-4 py-2 text-[16px] rounded-full w-fit text-dark-purple font-mansfield font-semibold hover:bg-dark-purple/80 hover:text-white transition-all duration-300 cursor-pointer">
      {children}
    </button>
  );
}
