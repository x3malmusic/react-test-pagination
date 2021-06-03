import {
  GET_PHOTOS
} from "./types";

export const getPhotos = (albumId) => ({
  type: GET_PHOTOS,
  payload: albumId,
});


