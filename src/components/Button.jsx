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
      ${
        props.isMenu &&
        "px-8 py-2 font-extrabold text-xs bg-menu text-black-2 hover:bg-menu-hover"
      } rounded-lg transition-all duration-300 cursor-pointer`}
    >
      {props.children}
    </button>
  );
}
