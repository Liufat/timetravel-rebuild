import { useLocalStorage } from "../../hooks/useLocalStorage";
import { login } from "../../server/memberApi";

export const useMember = {
  login: async (formData) => {
    const data = await login(formData);
    if (data.success) {
      useLocalStorage.set("member", data.auth);
    }
    return data;
  },
};
