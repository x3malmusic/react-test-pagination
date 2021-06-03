import { all } from "redux-saga/effects";
import photosSagas from "./photos";

function* rootSaga() {
  return yield all([...photosSagas]);
}

export default rootSaga;