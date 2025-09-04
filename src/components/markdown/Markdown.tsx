import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";

const Markdown = ({ children }: { children: ReactNode }) => {
  return <ReactMarkdown>{String(children)}</ReactMarkdown>;
};

export default Markdown;
