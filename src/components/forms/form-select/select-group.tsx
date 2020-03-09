import React, { useState, useEffect } from "react";
import ApiService from "../../../services/api-service";

interface ISelectGroupProps {
  projectIdValue: string;
  categoryIdValue: string;
  groupIdValue: string;
  HandleChangeGroup: (selected: React.FormEvent<HTMLSelectElement>) => void;
}

interface IGroup {
  id: string;
  name: string;
}

const SelectGroup = (props: ISelectGroupProps) => {
  const [groups, setGroups] = useState([{ id: "", name: "" }]);

  useEffect((): void => {
    if (props.categoryIdValue !== "") {
      const LoadData = async () => {
        const apiService = new ApiService();
        const res: IGroup[] = await apiService.getGroupMin(props.categoryIdValue);
        setGroups(res);
      };
      LoadData();
    }
  }, [props.categoryIdValue]);
  return (
    <select
      className="form-project__inputs__select"
      value={props.groupIdValue}
      onChange={props.HandleChangeGroup}
    >
      <option value="" hidden>
        Выберите категорию
      </option>
      {groups.map(data => {
        return (
          <option key={data.id} value={data.id}>
            {data.name}
          </option>
        );
      })}
    </select>
  );
};

export default SelectGroup;
