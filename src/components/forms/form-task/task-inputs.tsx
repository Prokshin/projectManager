import React from "react";
import { DatePicker } from 'antd';

interface ITaskInputsProps {
  nameValue: string;
  HandleChangeName: (event: React.FormEvent<HTMLInputElement>) => void;
  descriptionValue: string;
  HandleChangeDescription: (event: React.FormEvent<HTMLInputElement>) => void;
  textValue: string;
  HandleChangeText: (event: React.FormEvent<HTMLTextAreaElement>) => void;
  HandleChangeDate: (event: any) => void;
}
const TaskInputs = (props: ITaskInputsProps) => {
  const { nameValue, descriptionValue, textValue } = props;
  const { HandleChangeName, HandleChangeDescription, HandleChangeText, HandleChangeDate } = props;
  return (
    <>
      <div className="form-project__inputs__block">
        <p className="form-project__inputs__label">Название</p>
        <input
          value={nameValue}
          onChange={HandleChangeName}
          className="form-project__inputs__input"
        />
      </div>
      <div className="form-project__inputs__block">
        <p className="form-project__inputs__label">Описание</p>
        <input
          value={descriptionValue}
          onChange={HandleChangeDescription}
          className="form-project__inputs__input"
        />
      </div>
      <DatePicker onChange={HandleChangeDate} />
      <div className="form-project__inputs__block">
        <p className="form-project__inputs__label">Текст задачи</p>
        <textarea
          value={textValue}
          onChange={HandleChangeText}
          className="form-project__inputs__input"
        />
      </div>
    </>
  );
};

export default TaskInputs;
