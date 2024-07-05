// Accordion.jsx
import React, { useState } from "react";

const Accordion = ({ children }) => {
  const [activeId, setActiveId] = useState(null);

  const toggleItem = (id) => {
    if (activeId === id) {
      setActiveId(null); // Если клик по уже открытому элементу, закрываем его
    } else {
      setActiveId(id); // Иначе открываем новый элемент и закрываем предыдущий
    }
  };

  return (
    <div className="accordion" data-accordion="collapse">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isOpen: child.props.id === activeId,
          toggleItem: () => toggleItem(child.props.id),
        })
      )}
    </div>
  );
};

export default Accordion;
