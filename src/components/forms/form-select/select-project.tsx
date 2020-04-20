import React, { useState, useEffect } from "react";
import ApiService from "../../../services/api-service";

interface ISelectProjectProps {
  projectIdValue: string;
  HandleChangeProject: (selected: React.FormEvent<HTMLSelectElement>) => void;
}

export interface IProjectMin {
  id: string;
  title: string;
}

const SelectProject = (props: ISelectProjectProps) => {
  const [projects, setProjects] = useState([{ id: "", title: "Загрузка данных" }]);

  const apiService = new ApiService();
  const LoadData = async () => {
    const res: IProjectMin[] = await apiService.getAllProjectsMin();
    setProjects(res);
  };

  useEffect((): void => {
    console.log("gg");
    LoadData();
    // eslint-disable-next-line
  }, []);
  return (
    <select
      className="form-project__inputs__select"
      value={props.projectIdValue}
      onChange={props.HandleChangeProject}
    >
      <option value="" hidden>
        Выберите проект
      </option>
      {projects.map((data) => {
        return (
          <option key={data.id} value={data.id}>
            {data.title}
          </option>
        );
      })}
    </select>
  );
};

export default SelectProject;
