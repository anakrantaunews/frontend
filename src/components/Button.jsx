import React from "react";

export default function Button(props) {
  return (
    <button
      type={props.type}
      className={`inline-block
      ${props.className && props.className} 
      ${
        props.isPrimary &&
        "px-6 py-3 font-semibold text-base bg-primary text-black-2 hover:bg-primary-hover"
      } 
      rounded-lg transition-all duration-300 cursor-pointer`}
    >
      {props.children}
    </button>
  );
}
