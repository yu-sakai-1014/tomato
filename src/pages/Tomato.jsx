import { useHistory } from "react-router-dom";

export const Tomato = (props) => {
  const history = useHistory();
  const onClickBack = () => {
    history.goBack();
  };
  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-center items-center">
      <div>トマトページ</div>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
