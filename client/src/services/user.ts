import axios from "axios";

class User {
  async authenticate(session: string) {
    const user = await axios.post("users/authenticate/user", session);
    return user;
  }
}

const userService = new User();

export default userService;
