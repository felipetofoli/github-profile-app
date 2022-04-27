import Constants from "../../constants";
import UserReducer, {
  changeUser,
  INITIAL_STATE,
  resetUser,
} from "../UserCreators";
import { userMock } from "../../../mocks/user/user.mock";

describe("UserCreators", () => {
  describe("UserReducer", () => {
    it("sould match the initial state", () => {
      const state = UserReducer(undefined, {});
      expect(state).toStrictEqual(INITIAL_STATE);
    });
    it(`should match the ${Constants.User.Set} state`, () => {
      const state = UserReducer(undefined, changeUser(userMock));
      expect(state).toStrictEqual({ ...INITIAL_STATE, ...userMock });
    });
  });
  it(`should match the ${Constants.Reset} state`, () => {
    const state = UserReducer(undefined, resetUser());
    expect(state).toStrictEqual(INITIAL_STATE);
  });
});
