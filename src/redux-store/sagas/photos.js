import { takeLatest, put } from "redux-saga/effects";
import { GET_PHOTOS, SET_PHOTOS } from "../actions/types";
import { getPhotos } from "../../services/api";

const getPhotosSaga = function* ({ payload }) {
  const photos = yield getPhotos(payload);
  yield put({ type: SET_PHOTOS, payload: photos })
};

const photosSagas = [takeLatest(GET_PHOTOS, getPhotosSaga)];

export default photosSagas