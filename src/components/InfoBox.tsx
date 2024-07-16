/** @format */

import { type ReactNode } from "react";

export interface InfoBoxProps {
  mode: "hint" | "warning";
  severity?: "low" | "medium" | "high";
  children: ReactNode;
}

const InfoBox = ({ mode, severity = "medium", children }: InfoBoxProps) => {
  if (mode === "hint") {
    return (
      <aside className='infobox infobox-hint'>
        <p>{children}</p>
      </aside>
    );
  }

  if (mode === "warning") {
    return (
      <aside className={`infobox infobox-warning warning--${severity}`}>
        <h2>Warning</h2>
        <p>{children}</p>
      </aside>
    );
  }
};

export default InfoBox;
