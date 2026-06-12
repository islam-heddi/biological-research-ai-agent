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
      <div className="flex w-full items-center gap-3 text-white">
        <span className="text-base font-semibold">{header}</span>
        <img
          className={`ml-auto h-4 w-4 shrink-0 transition-transform duration-200 ease-out ${
            isEnter ? "rotate-180" : ""
          }`}
          src={chevron}
          alt="Chevron"
        />
      </div>
    )}
    className="overflow-hidden rounded-[24px] border border-white/10 bg-[#0e1628]/90 shadow-[0_18px_60px_-42px_rgba(17,255,0,0.75)]"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full items-center gap-3 rounded-[24px] px-5 py-4 text-left transition duration-200 ease-out ${
          isEnter ? "bg-white/5" : "bg-transparent"
        } hover:bg-white/5`
    }}
    contentProps={{
      className: "transition-[height] duration-300 ease-out"
    }}
    panelProps={{ className: "px-5 pb-5 pt-0 text-slate-300" }}
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