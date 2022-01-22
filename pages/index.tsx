import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { setA } from "../store/reducers/menuReducer";
import type { RootState } from "../store";
import Test from "../components/test";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { A } = useSelector((state: RootState) => state.menuReducer);

  return (
    <>
      <input
        type="number"
        className="form-control"
        name="width"
        min="1"
        max="200"
        defaultValue={A}
        onChange={(e) => dispatch(setA(e.target.value))}
      />
        <Test/>
    </>
  );
};

export default Home;
