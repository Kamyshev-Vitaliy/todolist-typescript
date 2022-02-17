import {FC} from "react";

type ButtonPropsType = {
  name: string,
  buttonCallBack: () => void,
}

export const Button: FC<ButtonPropsType> = ({name, buttonCallBack}) => {

  const onClickHandler = () => {
    buttonCallBack();
  }

  return (
    <div>
      <button onClick={onClickHandler}>{name}</button>
    </div>
  );
}