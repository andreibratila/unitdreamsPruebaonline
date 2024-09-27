export const TextMoving = ({
  children,
  lenghtText,
}: Readonly<{
  children: React.ReactNode;
  lenghtText: number;
}>) => {
  return (
    <div className="overflow-hidden flex items-center justify-center bg-[#2cd3cb] min-h-[40px] h-[3vw]  font-semibold">
      <div className="relative w-full overflow-hidden">
        <div className="flex whitespace-nowrap animate-moveText w-max">
          {Array.from({ length: lenghtText }, (_, i) => (
            <div
              className="flex items-center gap-[1vw] flex-shrink-0 mr-[1vw]  text-nav "
              key={i}
            >
              {children}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
