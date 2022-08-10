import axios from "axios";
import * as React from "react";
import { FC, useEffect, useState } from "react";
import AddRepoForm from "./components/AddRepoForm";

const App: FC = () => {
  const [pageView, setPageView] = useState("Home");

  useEffect(() => {
    axios
      .get("/repo")
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Hello World</h1>
      <AddRepoForm />
    </>
  );
};

export default App;
