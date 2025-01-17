import { useDispatch } from "react-redux";
import { addCar } from "./redux/reducers/car";

const Btn = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>{
                dispatch(addCar({model: 'Nissan GTR R35', year: 2015}))
            }}>add car</button>
        </div>
    );
}

export default Btn;