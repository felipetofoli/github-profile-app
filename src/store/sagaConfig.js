import { all, call, spawn } from "redux-saga/effects";

import UserSaga from "./User/UserSaga";

const sagas = [UserSaga];

export default function* SagaConfig() {
    yield all(
        sagas.map((saga) =>
            spawn(function* () {
                while (true) {
                    try {
                        yield call(saga);
                        break;
                    } catch (error) {
                        // eslint-disable-next-line no-console
                        console.log(error);
                    }
                }
            })
        )
    );
}