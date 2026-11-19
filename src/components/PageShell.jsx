import { useEffect } from "react";

export default function PageShell({ title, html }) {
  useEffect(() => { document.title = title; }, [title]);
  return <div className="page" dangerouslySetInnerHTML={{ __html: html }} />;
}
