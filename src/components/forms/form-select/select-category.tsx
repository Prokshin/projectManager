import React, { useState, useEffect } from "react";
import ApiService from "../../../services/api-service";

interface ISelectProjectProps {
  projectIdValue: string;
  categoryIdValue: string;
  HandleChangeCategory: (selected: React.FormEvent<HTMLSelectElement>) => void;
}

interface ICategory {
  id: string;
  name: string;
}

const SelectCategory = (props: ISelectProjectProps) => {
  const [categories, setCategory] = useState([{ id: "", name: "" }]);

  useEffect((): void => {
    const LoadData = async () => {
      const apiService = new ApiService();
      const res: ICategory[] = await apiService.getCategoriesMin(props.projectIdValue);
      setCategory(res);
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
      {categories.map(category => {
        return (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        );
      })}
    </select>
  );
};

export default SelectCategory;
