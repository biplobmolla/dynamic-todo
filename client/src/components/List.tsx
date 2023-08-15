import { Button, Input, Select } from "antd";
import { useEffect, useState } from "react";
import tasksServices from "../services/task";
import { PRIORITIES } from "../constants";

const List = ({
  className,
  fetchTasks,
  tasks,
  setTasks,
  handleUpdate,
  editOn,
  setEditOn,
  setCurrentPriority,
  currentPriority,
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

  const handleChange = (value: string) => {
    setCurrentPriority(value);
  };

  const handleEdit = (idx: number) => {
    setEditOn(true);
    setCurrentId(tasks[idx]._id);
    setCurrentTask(tasks[idx].name);
  };
  return (
    <table className={`${className} border-2 w-full`}>
      <tr className="border-2">
        <th className="text-center">ID</th>
        <th className="text-center">Name</th>
        <th className="text-center">Priority</th>
        <th className="text-center">Action</th>
      </tr>
      {tasks?.map((task: any, idx: number) => (
        <tr className="border-2">
          <td className="border-2 text-center">{idx + 1}</td>
          {editOn && currentId === task._id ? (
            <Input
              value={currentTask}
              onChange={(e: any) => setCurrentTask(e.target.value)}
            />
          ) : (
            <td className="border-2 px-1 font-semibold">{task.name}</td>
          )}
          <td className="text-center">
            {editOn && currentId === task._id ? (
              <Select
                defaultValue={task.priority}
                style={{ width: 120 }}
                onChange={handleChange}
                options={PRIORITIES}
              />
            ) : (
              capitalizeString(task.priority)
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
  );
};

export default List;