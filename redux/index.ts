import { Redux } from "../types"
import { combineReducers } from "redux"
import { settingsReducer } from "./settingsReducer"

const reducers: Redux.Reducers = {
  settings: settingsReducer,
}

export const rootReducer = combineReducers(reducers)