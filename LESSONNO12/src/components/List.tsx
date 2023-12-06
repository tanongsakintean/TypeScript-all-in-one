import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

const List = <T,>({ items, render }: ListProps<T>) => {
  // use ',' for tell typescript <T> is not tag in JSX
  return (
    <ul>
      {items.map((item, i) => {
        return <li key={i}>{render(item)}</li>;
      })}
    </ul>
  );
};

export default List;
