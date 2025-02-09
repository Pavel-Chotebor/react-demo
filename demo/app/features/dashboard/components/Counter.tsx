import { type FC, useEffect } from "react";

// Props is convention
interface Props {
  onIncrement: () => void;
  onDecrement: (info: string) => void;
}

// Props desctructuring
export const Counter: FC<Props> = ({ onIncrement, onDecrement }) => {
  const getApi = () => "mock api response";

  return (
    <>
      <button onClick={() => onDecrement("decrement")}>-</button>
      <button onClick={onIncrement}>+</button>
      {getApi()}
    </>
  );
};
