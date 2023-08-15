import { Button } from "antd/es/radio";

const tabList = ["Home", "About", "Services"];

const Tabs = () => {
  return (
    <div>
      {tabList?.map((tab) => (
        <Button className="mx-2 rounded-lg">{tab}</Button>
      ))}
    </div>
  );
};

export default Tabs;
