import React from "react";

export default function InputWithLabel({
  label,
  placeholder,
  value,
  name,
  onChange,
  inputId,
  required,
  type,
}) {
  return (
    <div>
      <label
        className="block font-bold text-base text-black-2 mb-2"
        htmlFor={inputId}
      >
        {label}
      </label>
      <input
        type={type}
        className="appearance-none border border-black-3 rounded-xl w-full py-2 px-4 text-gray-2 focus:outline-none"
        id={inputId}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
      />
    </div>
  );
}
