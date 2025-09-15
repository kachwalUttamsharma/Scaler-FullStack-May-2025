import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ pageNo, handlePrev, handleNext }) => {
  return (
    <div className="flex justify-center items-center bg-gray-700 text-white p-3 rounded-lg mt-4 gap-4">
      <button
        className=" text-white p-2 rounded-full bg-black/50"
        onClick={handlePrev}
        aria-label="Previous Page"
      >
        <ChevronLeft />
      </button>
      <div className="text-lg font-semibold mx-4">{pageNo}</div>
      <button
        className=" text-white p-2 rounded-full bg-black/50"
        onClick={handleNext}
        aria-label="Next Page"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
