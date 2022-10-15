import * as React from "react";
import Tab from "./Tab";

interface Props {
  tab: number;
  toggleTab: (tab: number) => void;
}

const Tabs = ({ toggleTab, tab }: Props) => (
  <div className="row row-cols-2  gx-3 text-center">
    <Tab
      {...{
        tabNumber: 0,
        toggleTab,
        tab,
        nameForMobile: "Movies",
        nameForPc: "Search in Movies",
        checkFor: 0,
      }}
    />
    <Tab
      {...{
        tabNumber: 1,
        toggleTab,
        tab,
        nameForMobile: "Tv Shows",
        nameForPc: "Search in Tv Shows",
        checkFor: 1,
      }}
    />
  </div>
);

export default Tabs;
