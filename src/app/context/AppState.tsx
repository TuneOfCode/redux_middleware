import AppContext from "./AppContext";
import { useContextSelector } from "./hooks";

export const reducers = (state: any, action: any) => {
    switch (action.type) {
        case "toogle-redirect":
            console.log("state: ", state);
            console.log("Payload: ", action.payload);
            return {
                ...state,
                isRedirect: action?.payload
            }
        default:
            return state
    }
}

const AppState = (props: any) => {
    const state = useContextSelector()
    return (
        <AppContext.Provider value={{ isRedirect: state?.isRedirect }}>
            {props?.children}
        </AppContext.Provider>
    );
};

export default AppState;