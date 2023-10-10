import { useDispatch,useSelector,TypedUseSelectorHook} from "react-redux";
import { AppDispatch } from "../store/store";



const useAppDispatch=()=> useDispatch<AppDispatch>();
const useAppSelector:TypedUseSelectorHook<RootState>= useSelector;