import * as React from "react";
import { FC, useState } from "react";
import AddRepoForm from "./components/AddRepoForm";

const App: FC = () => {
  const [pageView, setPageView] = useState("Home");

  return (
    <>
      <h1>Hello World</h1>
      <AddRepoForm />
    </>
  );
};

export default App;
