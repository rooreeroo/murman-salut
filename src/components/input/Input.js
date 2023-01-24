import React from "react";
import { useState } from "react";
import "./Input.css";

export function Input(props) {
  const { placeholder, type = "text", inputId, initValue, className, length } = props;

  const [value, setValue] = useState(initValue);

  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      id={inputId}
      onChange={(e) => setValue(e.target.value)}
      required={true}
      minLength={length || 2}
    />
  );
}
