import React from "react";

interface ICategoryInputsProps {
  nameValue: string;
  HandleChangeName: (event: React.FormEvent<HTMLInputElement>) => void;
  descriptionValue: string;
  HandleChangeDescription: (event: React.FormEvent<HTMLInputElement>) => void;
}

const GroupInputs = (props: ICategoryInputsProps) => {
  return (
    <>
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
    </>
  );
};

export default GroupInputs;
