import { runSaga } from "redux-saga";
import { userMock } from "../../../mocks/user/user.mock";
import Constants from "../../constants";
import { changeUser, fetchUser, resetUser } from "../UserCreators";
import { ERROR_MESSAGE, fetchUser as fetchUserSaga } from "../UserSaga";
import * as ServiceConfig from "../../../services/ServiceConfig";

describe("UserSaga", () => {
  jest.spyOn(window, "alert").mockImplementation(() => {});
  describe("fetchUser", () => {
    it(`should call ${Constants.User.Set} when gets user information`, async () => {
      const dispatch = jest.fn();

      jest.spyOn(ServiceConfig, "get").mockResolvedValue({
        login: userMock.username,
        name: userMock.name,
        avatar_url: userMock.avatar,
        public_repos: userMock.publicReposQuantity,
      });

      await runSaga(
        { dispatch },
        fetchUserSaga,
        fetch(userMock.name)
      ).toPromise();

      expect(dispatch).toHaveBeenLastCalledWith(changeUser(userMock));
    });

    it(`should call ${Constants.User.Reset} when fails to get user information`, async () => {
      const dispatch = jest.fn();

      jest.spyOn(ServiceConfig, "get").mockRejectedValue({
        response: {
          status: 500,
          type: "error",
        },
      });

      await runSaga(
        { dispatch },
        fetchUserSaga,
        fetchUser(userMock.name)
      ).toPromise();

      expect(dispatch).toHaveBeenCalledWith(resetUser());
    });

    it(`should call ${Constants.User.Reset} and show User not found when getting 404 error`, async () => {
      const dispatch = jest.fn();

      jest.spyOn(ServiceConfig, "get").mockRejectedValue({
        response: {
          status: 404,
          type: "error",
        },
      });

      await runSaga(
        { dispatch },
        fetchUserSaga,
        fetchUser(userMock.name)
      ).toPromise();

      expect(dispatch).toHaveBeenCalledWith(resetUser());
      expect(window.alert).toHaveBeenCalledWith(ERROR_MESSAGE.UserNotFound);
    });
  });
});
