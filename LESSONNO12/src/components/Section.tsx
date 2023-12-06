import { ReactNode } from "react";

// type SectionProps = {
//   title?: string;
//   children: ReactNode; /// ReactNode is for JSX , ReactElement
// };

interface SectionProps {
  title?: string;
  children: ReactNode;
}

// export const Section: React.FC<{ children: ReactNode; title: string }> = ({ children, title, }) => { /// can use React.FC only have children react old

export const Section = ({
  children,
  title = "My Subheading",
}: SectionProps) => {
  /// can use React.FC only have children for react 18
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};
