// FooterTab.jsx
import React, { useState } from "react";

const FooterTab = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.id);

  return (
    <div className="footer-tabs">
      <div className="tabs">{React.Children.map(children, (child) => React.cloneElement(child, { activeTab, setActiveTab }))}</div>
      <div className="tab-content">
        {React.Children.map(
          children,
          (child) =>
            // Фильтруем и отображаем только активный контент
            child.props.id === activeTab && child.props.children
        )}
      </div>
    </div>
  );
};

export default FooterTab;

// Пример использования
//  <FooterTab>
//    <FooterTabItem id="tab1" title="Tab 1">
//      1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, praesentium tenetur, tempore quam veritatis ipsa perspiciatis atque nostrum enim dolorem quae commodi vero est esse molestiae
//      iste molestias nihil optio.
//    </FooterTabItem>
//    <FooterTabItem id="tab2" title="Tab 2">
//      2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, praesentium tenetur, tempore quam veritatis ipsa perspiciatis atque nostrum enim dolorem quae commodi vero est esse molestiae
//      iste molestias nihil optio.
//    </FooterTabItem>
//    <FooterTabItem id="tab3" title="Tab 3">
//      3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, praesentium tenetur, tempore quam veritatis ipsa perspiciatis atque nostrum enim dolorem quae commodi vero est esse molestiae
//      iste molestias nihil optio.
//    </FooterTabItem>
//  </FooterTab>;
