import { call, put, takeLatest } from "redux-saga/effects";
import Constants from "../constants";
import * as ServiceConfig from "../../services/ServiceConfig";
import { changeUser, resetUser } from "./UserCreators";

function* fetchUser(action) {
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
        // todo: improve error handling
        console.log("error: " + err);
        yield put(resetUser());
        if (err.response.status === 404) alert("Username not found");
        else alert("error");
    }
}

export default function* userRegister () {
    yield takeLatest(Constants.User.Fetch, fetchUser); // Verify this takeLatest
}