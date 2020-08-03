import streamsURL from "../apis/steams";
import history from "../history"
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  DELETE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
} from "./actionTypes";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth
    const response = await streamsURL.post("/streams", {...formValues, userId});

    dispatch({ type: CREATE_STREAM, payload: response.data });
    history.push('/')
};


export const fetchStreams = () => {
  return async (dispatch) => {
    const response = await streamsURL.get("/streams");

    dispatch({ type: FETCH_STREAMS, payload: response.data });
  };
};

export const fetchStream = (streamId) => {
  return async (dispatch) => {
    const response = await streamsURL.get(`/streams/${streamId}`);

    dispatch({ type: FETCH_STREAM, payload: response.data });
  };
};

export const editStream = (streamId, formUpdate) => {

  return async (dispatch, getState) => {
    const { userId } = getState().auth

    const response = await streamsURL.patch(`/streams/${streamId}`, formUpdate);

    dispatch({ type: EDIT_STREAM, payload: response.data });
    history.push('/')

  };
};

export const deleteStream = (streamId) => {
  return async (dispatch) => {
    const response = await streamsURL.delete(`/streams/${streamId}`);

    dispatch({ type: DELETE_STREAM, payload: streamId });
    history.push('/')

  };
};
