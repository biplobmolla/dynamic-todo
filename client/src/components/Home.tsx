import { useState } from "react";
import InputField from "./InputField";
import List from "./List";
import Tabs from "./Tabs";
import tasksServices from "../services/task";

const Home = () => {
  const [task, setTask] = useState<any>({});
  const [tasks, setTasks] = useState<any>([]);
  const [editOn, setEditOn] = useState<boolean>(false);
  const [currentTask, setCurrentTask] = useState("");
  const [currentId, setCurrentId] = useState<number>();
  const [currentPriority, setCurrentPriority] = useState<string>();

  const fetchTasks = async () => {
    try {
      const data = await tasksServices.get();
      console.log(data);
      setTasks(data.data);
    } catch (err: any) {
      console.log({ message: err.message });
    }
  };

  const refetch = async () => {
    await fetchTasks();
  };

  const handleInputChange = (e: any) => {
    setTask({ ...task, name: e.target.value });
  };
  const handleSelectChange = (value: any) => {
    setTask({ ...task, priority: value });
  };
  const handleSubmit = async () => {
    setTask({ ...task, name: "" });
    try {
      const res = await tasksServices.save(task);
      console.log(res);
      refetch();
    } catch (err: any) {
      console.log({ message: err.message });
    }
  };

  const handleUpdate = async (id: number) => {
    try {
      const data = await tasksServices.update(id, {
        name: currentTask,
        priority: currentPriority,
      });
      console.log(data);
      refetch();
      setEditOn(false);
    } catch (err: any) {
      console.log({ message: err.message });
    }
  };

  const handleDelete = async (id: number) => {
    const res = window.confirm("Are you sure you want delete this task?");
    if (res) {
      try {
        const data = await tasksServices.delete(id);
        console.log(data);
        refetch();
      } catch (err: any) {
        console.log({ message: err.message });
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-6xl font-bold my-1">Todo</h2>
      <InputField
        task={task}
        setTask={setTask}
        handleInputChange={handleInputChange}
        handleSelectChange={handleSelectChange}
        handleSubmit={handleSubmit}
      />
      <Tabs />
      <List
        className="mt-5"
        fetchTasks={fetchTasks}
        tasks={tasks}
        setTasks={setTasks}
        handleUpdate={handleUpdate}
        editOn={editOn}
        setEditOn={setEditOn}
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
        currentId={currentId}
        setCurrentId={setCurrentId}
        currentPriority={currentPriority}
        setCurrentPriority={setCurrentPriority}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
