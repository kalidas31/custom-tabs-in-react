import { useState } from "react";

export default function Tabs({ tabscontent, onchange }) {
  const [currenttabindex, setcurrenttabindex] = useState(0);
  function handleclick(getcurrentindex) {
    setcurrenttabindex(getcurrentindex);
    onchange(getcurrentindex);
  }
  return (
    <div className="wrapper">
      <div className="heading">
        {tabscontent.map((tabitem, index) => (
          <div
            className={`tab-item ${currenttabindex === index ? "active" : " "}`}
            onClick={() => handleclick(index)}
            key={tabitem.label}
          >
            <span className="label">{tabitem.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabscontent[currenttabindex] && tabscontent[currenttabindex].content}
      </div>
    </div>
  );
}
