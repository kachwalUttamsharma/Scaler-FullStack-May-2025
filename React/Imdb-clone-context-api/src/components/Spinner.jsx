import React from "react";
import { LoaderCircle } from "lucide-react";

const Spinner = () => {
  return (
    <div className="fixed top-1/2 left-1/2">
      <LoaderCircle
        color="oklch(62.3% 0.214 259.815)"
        strokeWidth={2}
        size={64}
      />
    </div>
  );
};

export default Spinner;
