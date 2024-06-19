import { context } from "./Context";

const ContextProvider = ({ children,value }) => {
    return (
        <context.Provider value={value}>
            {children}
        </context.Provider>
    )
}

export default ContextProvider;