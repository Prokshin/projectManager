import React, { useState, useEffect } from "react";

import "./form-category.css";
import ApiService from "../../services/api-service";

interface ICategoryInputsProps {
  nameValue: string;
  HandleChangeName: (event: React.FormEvent<HTMLInputElement>) => void;
  descriptionValue: string;
  HandleChangeDescription: (event: React.FormEvent<HTMLInputElement>) => void;
  projectIdValue: string;
  HandleChangeProject: (selected: React.FormEvent<HTMLSelectElement>) => void;
}

interface IProjects {
  id: string;
  name: string;
}

const CategoryInputs = (props: ICategoryInputsProps) => {
  const [projects, setProjects] = useState([
    { id: "", name: "Загрузка данных" }
  ]);

  const apiService = new ApiService();
  const LoadData = async () => {
    const res: IProjects[] = await apiService.getAllProjectsMin();
    setProjects(res);
  };

  useEffect((): void => {
    LoadData();
  }, [projects]);

  return (
    <div className="form-project__inputs">
      <select
        className="form-project__inputs__select"
        value={props.projectIdValue}
        onChange={props.HandleChangeProject}
      >
        <option value="" hidden>
          Выберите проект
        </option>
        {projects.map(data => {
          return (
            <option key={data.id} value={data.id}>
              {data.name}
            </option>
          );
        })}
      </select>
      <div className="form-project__inputs__block">
        <p className="form-project__inputs__label">Название</p>
        <input
          value={props.nameValue}
          onChange={props.HandleChangeName}
          className="form-project__inputs__input"
        />
      </div>

      <p className="form-project__inputs__label">Описание</p>
      <input
        value={props.descriptionValue}
        onChange={props.HandleChangeDescription}
        className="form-project__inputs__input"
      />
    </div>
  );
};

export default CategoryInputs;
