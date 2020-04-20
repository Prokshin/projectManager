import React, { useState, useEffect } from "react";
import ApiService from "../../../services/api-service";

interface ISelectProjectProps {
  projectIdValue: string;
  categoryIdValue: string;
  HandleChangeCategory: (selected: React.FormEvent<HTMLSelectElement>) => void;
}

export interface ICategoryMin {
  id: string;
  title: string;
}

const SelectCategory = (props: ISelectProjectProps) => {
  const [categories, setCategory] = useState([{ id: "", title: "" }]);

  useEffect((): void => {
    const LoadData = async () => {
      const apiService = new ApiService();
      const res: ICategoryMin[] = await apiService.getCategoriesMin(props.projectIdValue);
      if (res) {
        setCategory(res);
      }
    };
    LoadData();
  }, [props.projectIdValue]);
  return (
    <select
      className="form-project__inputs__select"
      value={props.categoryIdValue}
      onChange={props.HandleChangeCategory}
    >
      <option value="" hidden>
        Выберите категорию a
      </option>
      {categories.map((category) => {
        return (
          <option key={category.id} value={category.id}>
            {category.title}
          </option>
        );
      })}
    </select>
  );
};

export default SelectCategory;
