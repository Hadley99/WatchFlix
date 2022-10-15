import * as React from "react";

interface Props {
  tab: number;
  tabNumber: number;
  toggleTab: (tab: number) => void;
  nameForPc: string;
  nameForMobile: string;
  checkFor: number;
}
const Tab = ({
  tab,
  toggleTab,
  nameForMobile,
  nameForPc,
  tabNumber,
  checkFor,
}: Props) => (
  <div className="col">
    <div
      className={tab === checkFor ? "my-3 tab rounded" : "rounded my-3"}
      onClick={() => toggleTab(tabNumber)}
    >
      <div>
        <h5 className="text-decoration-none d-md-none d-block m-0  py-2 ">
          {nameForMobile}
        </h5>
        <h5 className="text-decoration-none d-md-block d-none m-0  py-2">
          {nameForPc}
        </h5>
      </div>
    </div>
  </div>
);

export default Tab;
