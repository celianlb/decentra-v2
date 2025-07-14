export default function ButtonMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="bg-ultraviolet-900 text-[16px] px-4 py-2 rounded-full w-fit text-white font-mansfield font-semibold  hover:bg-ultraviolet-800 hover:text-dark-purple transition-all duration-300 cursor-pointer">
      {children}
    </button>
  );
}
