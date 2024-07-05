// FooterTabItem.jsx
import React from "react";

const FooterTabItem = ({ id, activeTab, setActiveTab, children }) => {
  const isActive = id === activeTab ? "active" : "";

  return (
    <button className={`footer-tab-item ${isActive}`} onClick={() => setActiveTab(id)}>
      {children}
    </button>
  );
};

export default FooterTabItem;
