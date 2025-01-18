import { useDispatch } from "react-redux";
import { addCar } from "./redux/reducers/car";

const Btn = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>{
                dispatch(addCar({model: 'Matiz', year: 2015}))
            }}>add car</button>
        </div>
    );
}

export default Btn;