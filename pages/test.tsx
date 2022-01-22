import type { NextPage } from "next";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";

const Test: NextPage = () => {
  const { A } = useSelector((state: RootState) => state.menuReducer);

  return (
    <>
      <input defaultValue={A} />
    </>
  );
};

export default Test;
