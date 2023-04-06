import React from "react";

const Shimmer = ({ col }: { col: number }) => {
  const arrayEmpty = new Array(col).fill("a");
  return (
    <div>
      {arrayEmpty.map(() => (
        <div className="w-full line loading-shimmer min-w-full bg-[332E59] min-h-[60px] rounded-2xl mb-4" />
      ))}
    </div>
  );
};

export default Shimmer;
