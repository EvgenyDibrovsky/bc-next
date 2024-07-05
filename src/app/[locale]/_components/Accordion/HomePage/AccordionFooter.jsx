// App.jsx
import React from "react";
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";

const AccordionFooter = () => {
  return (
    <div className="AccordionFooter">
      <Accordion>
        <AccordionItem id="item1" title="What is Flowbite?">
          <p>Flowbite is an open-source library of interactive components built on top of Tailwind CSS.</p>
        </AccordionItem>
        <AccordionItem id="item2" title="Is there a Figma file available?">
          <p>Yes, Flowbite was first conceptualized and designed using the Figma software.</p>
        </AccordionItem>
        <AccordionItem id="item3" title="What are the differences between Flowbite and Tailwind UI?">
          <p>Flowbite is an open-source library of interactive components built on top of Tailwind CSS.</p>
        </AccordionItem>
        <AccordionItem id="item4" title="What are the differences between Flowbite and Tailwind UI?">
          <p>The main difference is that Flowbite is open source and Tailwind UI is a paid product.</p>
        </AccordionItem>
        <AccordionItem id="item5" title="What are the differences between Flowbite and Tailwind UI?">
          <p>The main difference is that Flowbite is open source and Tailwind UI is a paid product.</p>
        </AccordionItem>
        <AccordionItem id="item6" title="Is there a Figma file available?">
          <p>The main difference is that Flowbite is open source and Tailwind UI is a paid product.</p>
          <p>The main difference is that Flowbite is open source and Tailwind UI is a paid product.</p>
          <p>The main difference is that Flowbite is open source and Tailwind UI is a paid product.</p>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionFooter;
