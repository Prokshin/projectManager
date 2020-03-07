import React, { useState, useEffect } from "react";

import ApiService from "../../services/api-service";

interface ICategoryInputsProps {
  nameValue: string;
  HandleChangeName: (event: React.FormEvent<HTMLInputElement>) => void;
  descriptionValue: string;
  HandleChangeDescription: (event: React.FormEvent<HTMLInputElement>) => void;
  projectIdValue: string;
  HandleChangeProject: (selected: React.FormEvent<HTMLSelectElement>) => void;
  categoryIdValue: string;
  HandleChangeCategory: (selected: React.FormEvent<HTMLSelectElement>) => void;
}

interface ISelectData {
  id: string;
  name: string;
}

const TaskInputs = (props: ICategoryInputsProps) => {
  const [projectc, setProjectc] = useState([{ id: "", name: "Загрузка данных" }]);

  const [category, setCategory] = useState([{ id: "", name: "Загрузка данных" }]);

  const apiService = new ApiService();

  const LoadCategories = async (id: string) => {
    const res: ISelectData[] = await apiService.getCategoriesMin(id);
    setCategory(res);
  };

  useEffect((): void => {
    const apiService_ = new ApiService();
    const LoadProject = async () => {
      const res: ISelectData[] = await apiService_.getAllProjectsMin();
      setProjectc(res);
    };
    LoadProject();
  }, [projectc]);

  const handle = async (e: React.FormEvent<HTMLSelectElement>) => {
    props.HandleChangeProject(e);
    await LoadCategories(e.currentTarget.value);
  };
  return (
    <div className="form-project__inputs">
      <select className="form-project__inputs__select" value={props.projectIdValue} onChange={handle}>
        <option value="" hidden>
          Выберите проект
        </option>
        {projectc.map(data => {
          return (
            <option key={data.id} value={data.id}>
              {data.name}
            </option>
          );
        })}
      </select>
      <select
        className="form-project__inputs__select"
        value={props.categoryIdValue}
        onChange={props.HandleChangeCategory}
      >
        <option value="" hidden>
          Выберите категорию
        </option>
        {category.map(data => {
          return (
            <option key={data.id} value={data.id}>
              {data.name}
            </option>
          );
        })}
      </select>
      <div className="form-project__inputs__block">
        <p className="form-project__inputs__label">Название</p>
        <input value={props.nameValue} onChange={props.HandleChangeName} className="form-project__inputs__input" />
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

export default TaskInputs;
