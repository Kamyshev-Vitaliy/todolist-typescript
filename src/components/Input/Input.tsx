import {ChangeEvent, FC, useState} from "react";

export const Input: FC = () => {

  const [title, setTitle] = useState<string>('');

  const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  }

  return (
    <div>
      <input value={title}
             onChange={onChangeInputValue}
      />
    </div>
  );
}