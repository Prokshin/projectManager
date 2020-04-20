import React, { useState, useEffect } from "react";
import ApiService from "../../../services/api-service";

interface ISelectGroupProps {
  projectIdValue: string;
  categoryIdValue: string;
  groupIdValue: string;
  HandleChangeGroup: (selected: React.FormEvent<HTMLSelectElement>) => void;
}

export interface IGroupMin {
  id: string;
  title: string;
}

const SelectGroup = (props: ISelectGroupProps) => {
  const { projectIdValue, categoryIdValue, groupIdValue, HandleChangeGroup } = props;
  const [groups, setGroups] = useState([{ id: "", title: "" }]);

  useEffect((): void => {
    if (categoryIdValue !== "") {
      const LoadData = async () => {
        const apiService = new ApiService();
        const res: IGroupMin[] = await apiService.getGroupMin(projectIdValue, categoryIdValue);
        setGroups(res);
      };
      LoadData();
    }
  }, [categoryIdValue, projectIdValue]);
  return (
    <select
      className="form-project__inputs__select"
      value={groupIdValue}
      onChange={HandleChangeGroup}
    >
      <option value="" hidden>
        Выберите категорию
      </option>
      {groups.map((data) => {
        return (
          <option key={data.id} value={data.id}>
            {data.title}
          </option>
        );
      })}
    </select>
  );
};

export default SelectGroup;
