export type ThemeNameType = 'dark' | 'red' | 'some' | 'green'

const initState = {
    theme : 'some'
};

export type InitialStateType = typeof initState

export const themeReducer = (state = initState, action: CombinedThemeActionType): InitialStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return { ...state, theme : action.value };
        }
        default: return state;
    }
};

export type ChangeThemeType = {
    type : 'CHANGE-THEME'
    value : ThemeNameType
}

export type CombinedThemeActionType = ChangeThemeType

export const changeThemeAC = (value : ThemeNameType): ChangeThemeType => ({ type : "CHANGE-THEME", value}); // fix any