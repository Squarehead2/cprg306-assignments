import { AuthContextProvider } from "./_util/auth-context";

const Layout = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default Layout;
