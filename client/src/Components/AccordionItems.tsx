import React from 'react'
import chevron from "../../public/chevron-down.svg";
import { AccordionItem as Item } from "@szhsin/react-accordion";

interface IAccordionItems {
    header: string;
    children: React.ReactNode;
}

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <img
          className={`ml-auto transition-transform duration-200 ease-out ${
            isEnter && "rotate-180"
          }`}
          src={chevron}
          alt="Chevron"
        />
      </>
    )}
    className="border-b"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-4 text-left hover:bg-slate-100 ${
          isEnter && "bg-slate-200"
        }`
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out"
    }}
    panelProps={{ className: "p-4" }}
  />
);


function AccordionItems({header, children}: Readonly<IAccordionItems>) {
  return (
    <AccordionItem header={header}>
        {children}
    </AccordionItem>
)
}

export default AccordionItems