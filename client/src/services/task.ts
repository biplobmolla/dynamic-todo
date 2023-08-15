import axios from "axios";

class tasks {
  async get() {
    return await axios.get("/tasks");
  }
  async save(payload: any) {
    return await axios.post("/tasks/create", payload);
  }
  async update(id: number, payload: any) {
    return await axios.put(`/tasks/update/${id}`, payload);
  }
  async delete(id: number) {
    return await axios.delete(`/tasks/delete/${id}`);
  }
}

const tasksServices = new tasks();

export default tasksServices;
