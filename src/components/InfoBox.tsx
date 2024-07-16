/** @format */

import { ReactNode } from "react";

export interface InfoBoxProps {
  mode: "hint" | "warning";
  children: ReactNode;
}

const InfoBox = ({ children, mode }: InfoBoxProps) => {
  if (mode === "hint") {
    return (
      <aside className='infobox infobox-hint'>
        <p>{children}</p>
      </aside>
    );
  }

  if (mode === "warning") {
    return (
      <aside className='infobox infobox-warning warning--medium'>
        <h2>Warning</h2>
        <p>{children}</p>
      </aside>
    );
  }
};

export default InfoBox;
