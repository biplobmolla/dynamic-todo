import { Button, Input, Select } from "antd";
import { PRIORITIES } from "../constants";

const InputField = ({
  task,
  setTask,
  handleInputChange,
  handleSelectChange,
  handleSubmit,
}: any) => {
  return (
    <div className="flex items-center">
      <Input
        className="my-3 border-b-8 border-blue-500"
        value={task.name}
        onChange={handleInputChange}
      />
      <Select
        className="mx-2"
        defaultValue={PRIORITIES[0]}
        style={{ width: 120 }}
        onChange={handleSelectChange}
        options={PRIORITIES}
      />
      <Button className="ml-2 bg-blue-700 text-white" onClick={handleSubmit}>
        Add
      </Button>
    </div>
  );
};

export default InputField;
