import { type FC } from "react";

// Props is convention
interface Props {
  onIncrement: () => void;
  onDecrement: (info: string) => void;
}

// Props destructuring
export const Counter: FC<Props> = ({ onIncrement, onDecrement }) => {
  const getApi = () => "mock api response";

  return (
    <div>
      <div>
        <button onClick={() => onDecrement("decrement")}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
      {getApi()}
    </div>
  );
};
