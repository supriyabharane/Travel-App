"use client";

import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const Checkbox = ({ checked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <button
      type="button"
      className={`h-4 w-4 rounded border ${
        isChecked ? "border-rose-500 bg-rose-500 text-white" : "border-gray-300 bg-white"
      }`}
      onClick={handleChange}
      role="checkbox"
      aria-checked={isChecked}
    >
      {isChecked && <CheckIcon className="h-3 w-3" />}
    </button>
  );
};

export default Checkbox;
