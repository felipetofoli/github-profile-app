import { call, put, takeLatest } from "redux-saga/effects";
import Constants from "../constants";
import * as ServiceConfig from "../../services/ServiceConfig";
import { changeUser, resetUser } from "./UserCreators";

export const ERROR_MESSAGE = {
    GenericError: "Oops... Error.",
    UserNotFound: "Username not found",
};
export function* fetchUser(action) {
    const { payload } = action;

    try {
        const response = yield call(ServiceConfig.get, { url: payload });

        const responseUser = {
            username: response.login,
            name: response.name,
            avatar: response.avatar_url,
            publicReposQuantity: response.public_repos,
        };

        yield put(changeUser(responseUser));

    } catch (err) {                
        yield put(resetUser());
        let errorMessage = ERROR_MESSAGE.GenericError;
        if (err.response.status === 404)
            errorMessage = ERROR_MESSAGE.UserNotFound;
        alert(errorMessage);
    }
}

export default function* userRegister () {
    yield takeLatest(Constants.User.Fetch, fetchUser); // Verify this takeLatest
}