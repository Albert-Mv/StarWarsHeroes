import React, { FC } from "react";

interface IEditableField {
  name: string;
  value: string;
  isEditable: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditableField: FC<IEditableField> = React.memo((props: IEditableField) => {
  const { name, value, onChange, isEditable } = props;

  return (
    <div>
      <span>{`${name}: `}</span>
      {isEditable ? (
        <input value={value} onChange={onChange} />
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
});

export default EditableField;
