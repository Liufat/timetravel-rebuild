export const useLocalStorage = {
  set: (title, content) => {
    localStorage.setItem(title, JSON.stringify(content));
  },
  get: (title) => {
    const content = JSON.parse(localStorage.getItem(title));
    return content;
  },
  remove: (title) => {
    localStorage.removeItem(title);
  },
};
