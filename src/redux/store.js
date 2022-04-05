import { createStore } from "redux";
import List from "./reducer";
import {composeWithDevTools} from 'redux-devtools-extension'

const compose = composeWithDevTools()
const store = createStore(List,compose)
export default store