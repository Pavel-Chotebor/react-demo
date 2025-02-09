import { type FC, useState } from "react";

export const Checkbox: FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <>
      <input type="checkbox" checked={isChecked} onChange={handleCheckbox} />
    </>
  );
};
