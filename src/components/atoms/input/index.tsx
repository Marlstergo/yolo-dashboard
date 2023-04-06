import React from "react";

interface Prop {
  label: string;
  value: string;
  name: string;
  placeholder: string;
  onChange: Function;
}

const Input = ({ label, name, onChange, placeholder,value }: Prop) => {
  return (
    <div className="flex flex-col mb-3">
      <label className="capitalise mb-2">{label} :</label>
      <input
        value={value}
        name={name}
        placeholder={placeholder}
        type="text"
        className="bg-[#332E59] border-none outline-none focus:outline-none focus:ring-0  rounded-2xl items-center p-4 h-[52px] w-full"
        onChange={(e) => {
          onChange(e);
        }}
      />
    </div>
  );
};

export default Input;
