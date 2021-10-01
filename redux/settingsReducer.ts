import {Redux, Actions} from "../types"

const initialState: Redux.RootState["settings"] = {
  value: 0
}

export const settingsReducer = (
  state = initialState,
  action: Actions.List["value"]
): Redux.RootState["settings"] =>
  action.type === "VALUE"
    ? { ...state, value: action.payload }
    : state