import { useSelector } from "react-redux";
import type { RootState } from "../store";
import {useEffect} from "react"

const Test = () => {
    const { A } = useSelector((state: RootState) => state.menuReducer);

    useEffect(()=>{console.log(A)},[A])


    return (
        <>
            <input value={A} />
        </>
    );
};

export default Test;
