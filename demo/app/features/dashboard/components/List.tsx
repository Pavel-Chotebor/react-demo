import type { FC } from "react";

interface Props {
  items: string[];
}

// array methods
// find, filter, reduce, join

export const List: FC<Props> = ({ items }) => {
  // returns first item
  const find = items.find((item) => item === "1");

  // returns more items
  const filter = items.filter((item) => !!item);

  //returns string
  const join = items.join("&");

  // return array from string
  const split = "1&2&3".split("&");

  // acc - final value, current item in array
  const reduce = [1, 2, 3, 4, 5].reduce((acc, current) => acc + current, 0);

  return (
    <>
      <h1>items</h1>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};
