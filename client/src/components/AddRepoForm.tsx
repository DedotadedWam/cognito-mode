import axios from "axios";
import * as React from "react";
import { FC } from "react";
import { useForm } from "react-hook-form";

interface FormInputInterface {
  username: string;
  repo: string;
  type: string;
}

const AddRepoForm: FC = () => {
  const { register, handleSubmit } = useForm<FormInputInterface>();
  const onSubmit = (data: FormInputInterface): void => {
    console.log(data);
    axios
      .post("/repo/add", data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Username:
        <input defaultValue="DedotadedWam" {...register("username")} />
      </label>
      <label>
        Repository Name:
        <input {...register("repo")} />
      </label>
      <label>
        Project Type:
        <input {...register("type")} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddRepoForm;
