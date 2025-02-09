import { type FC, useState } from "react";

export const Input: FC = () => {
  const [value, setValue] = useState("");

  // runs every char change
  const handleChange = (event: any) => {
    console.log("e ", event);
    setValue(event.target.value);
  };

  return (
    <>
      <input value={value} onChange={handleChange} />
      {value}
    </>
  );
};
