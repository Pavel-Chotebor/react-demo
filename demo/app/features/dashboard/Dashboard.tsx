import { type FC, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Counter } from "./components/Counter";
import { Input } from "./components/Input";
import { List } from "./components/List";
import { Checkbox } from "./components/Checkbox";
import { useCustomLogging } from "./hooks/useCustomLogging";
import { useCounter } from "./hooks/useCounter";

// events
// arrays and mapping
// if else
// functions

// TODO: typescript basic, arrays method, JS algo

const items = ["1", "1", "2"];

export const Dashboard: FC = () => {
  // custom hooks
  const { counterValue, increment, decrement } = useCounter();
  useCustomLogging();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "20rem",
      }}
    >
      {counterValue}
      <div>
        <Navbar />
        <Counter
          onIncrement={increment}
          onDecrement={() => decrement("decrement")}
        />
        <Input />
        <List items={items} />
        <Checkbox />
      </div>
    </div>
  );
};
