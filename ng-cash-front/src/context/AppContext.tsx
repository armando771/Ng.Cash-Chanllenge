import { createContext, useState } from "react";


interface UserProps {
    username: string | null;
    accountId: number;
    balance: number
}

interface ITest {
    user: UserProps;
    setUser(value: UserProps): void;
}

export const AppContext = createContext({} as ITest);

const AppProvider = ({ children }: any) => {

    const [user, setUser] = useState<UserProps>({ } as UserProps);
    

    const context = {
        user,
        setUser
    };

return (
    <AppContext.Provider value={context}>
        { children }
    </AppContext.Provider>
)

};

export default AppProvider;
