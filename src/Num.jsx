import { useSelector, useDispatch } from "react-redux";
import { incrementNum, decrementNum, resetNum, incrementByFive, decrementByFive } from "./redux/reducers/car";

const Num = () => {
    const dispatch = useDispatch();
    const cars = useSelector(store => store.car.cars);
    const num = useSelector(s => s.car.num);

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={() => dispatch(incrementNum())}>+</button>
            <button onClick={() => dispatch(decrementNum())}>-</button>
            <button onClick={() => dispatch(resetNum())}>reset</button>
            <button onClick={() => dispatch(incrementByFive())}>+5</button>
            <button onClick={() => dispatch(decrementByFive())}>-5</button>

            {cars.map((item, index) => (
                <h1 key={index}>{item.model}</h1>
            ))}
        </div>
    );
};

export default Num;
