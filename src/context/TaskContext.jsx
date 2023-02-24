import { createContext } from "react";

export const TaskContent = createContext();

let x = 20;

export function ProviderTaskContext(props) {
  return (
    <TaskContent.Provider value={x}>{props.children}</TaskContent.Provider>
  );
}
