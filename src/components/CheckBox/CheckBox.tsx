import {ChangeEvent, FC} from "react";

type CheckBoxPropsType = {
  checkBoxCallBack: (event: ChangeEvent<HTMLInputElement>) => void,
}

export const CheckBox: FC<CheckBoxPropsType> = (props) => {

  const onClickChangeChecked = (event: ChangeEvent<HTMLInputElement>) => {
    props.checkBoxCallBack(event);
  }

  return (
    <div>
      <input type="checkbox"
             onChange={onClickChangeChecked}
      />
    </div>
  );
}