
export declare namespace General {
  type ValueUnit = number
}

export declare namespace Redux {
  interface RootState {
    settings: {
      value: General.ValueUnit
    }
  }

  type Reducers = { [key in keyof RootState]: any }
}

export declare namespace Actions {
  interface List {
    value: {
      type: "VALUE"
      payload: General.ValueUnit
    }
  }

  type All = List[keyof List]
  type Type = List[keyof List]["type"]
}