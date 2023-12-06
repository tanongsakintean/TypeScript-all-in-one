import { ReactElement } from "react";

type HeadingProps = {
  title: string;
};

const Heading = ({ title }: HeadingProps): ReactElement => {
  // ReactElement => react convert to javascript object
  return <h1>{title}</h1>;
};

export default Heading;
