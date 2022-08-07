import { createContext, useState } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

interface AuthInterface {
  email: string;
  jwt: string;
}

const AuthContext = createContext({
  login: {
    email: "",
    jwt: "",
  },
  reToken: (props: AuthInterface) => {},
});

const AuthProvider = ({ children }: Props): JSX.Element => {
  const [login, setAuth] = useState<AuthInterface>({
    email: "",
    jwt: "",
  });
  const reToken = (props: AuthInterface): void => {
    setAuth(props);
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        reToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
