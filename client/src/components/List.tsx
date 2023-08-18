import { Button, Empty, Input, Select } from "antd";
import { useEffect } from "react";
import { MENUS, PRIORITIES } from "../constants";

const List = ({
  className,
  fetchTasks,
  modifiedTasks,
  handleUpdate,
  editOn,
  setEditOn,
  setCurrentPriority,
  setCurrentStatus,
  currentTask,
  currentId,
  setCurrentId,
  setCurrentTask,
  handleDelete,
}: any) => {
  useEffect(() => {
    fetchTasks();
  }, []);

  function capitalizeString(str: string) {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }

  const handlePriorityChange = (value: string) => {
    setCurrentPriority(value);
  };

  const handleStatusChange = (value: string) => {
    setCurrentStatus(value);
  };

  const handleEdit = (idx: number) => {
    setEditOn(true);
    setCurrentId(modifiedTasks[idx]._id);
    setCurrentTask(modifiedTasks[idx].name);
  };
  return (
    <div>
      {modifiedTasks?.length ? (
        <table className={`${className} border-2 w-full`}>
          <tr className="border-2">
            <th className="text-center">ID</th>
            <th className="text-center">Name</th>
            <th className="text-center">Priority</th>
            <th className="text-center">Status</th>
            <th className="text-center">Action</th>
          </tr>
          {modifiedTasks?.map((task: any, idx: number) => (
            <tr className="border-2" key={idx}>
              <td className="border-2 text-center">{idx + 1}</td>
              {editOn && currentId === task._id ? (
                <Input
                  value={currentTask}
                  onChange={(e: any) => setCurrentTask(e.target.value)}
                />
              ) : (
                <td className="border-2 px-1 font-semibold">{task.name}</td>
              )}
              <td className="text-center border-2">
                {editOn && currentId === task._id ? (
                  <Select
                    defaultValue={task.priority}
                    style={{ width: 120 }}
                    onChange={handlePriorityChange}
                    options={PRIORITIES}
                  />
                ) : (
                  capitalizeString(task.priority)
                )}
              </td>
              <td className="text-center border-2">
                {editOn && currentId === task._id ? (
                  <Select
                    defaultValue={task.status}
                    style={{ width: 120 }}
                    onChange={handleStatusChange}
                    options={MENUS}
                  />
                ) : (
                  capitalizeString(task.status)
                )}
              </td>
              <td className="flex items-center py-1 border-2 justify-center">
                {editOn && currentId === task._id ? (
                  <Button
                    className="mr-2 bg-gray-500 text-white"
                    onClick={() => handleUpdate(task._id)}
                  >
                    Update
                  </Button>
                ) : (
                  <Button
                    className="mr-2 bg-gray-500 text-white"
                    onClick={() => handleEdit(idx)}
                  >
                    Edit
                  </Button>
                )}
                <Button
                  className="bg-red-700 text-white"
                  onClick={() => handleDelete(task?._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </table>
      ) : (
        <div className="py-14">
          <Empty />
        </div>
      )}
    </div>
  );
};

export default List;
