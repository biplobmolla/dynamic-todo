import { Button } from "antd/es/radio";
import { MENUS } from "../constants";

const Tabs = ({ selectedTab, setSelectedTab }: any) => {
  const handleClick = (tab: any) => {
    setSelectedTab(tab.value);
  };
  return (
    <div>
      {MENUS?.map((tab) => (
        <Button
          key={tab.value}
          className={`mx-2 rounded-lg ${
            tab.value === selectedTab
              ? "bg-green-700 text-white"
              : "bg-transparent text-black"
          } hover:bg-green-700 hover:text-white`}
          onClick={() => handleClick(tab)}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
};

export default Tabs;
