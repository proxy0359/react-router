import MainNavigation from "./MainNavigation";
import { Outlet } from "react-router-dom";

function RootLayout({ children }) {
  return (
    <>
      <MainNavigation />
      <main>
        {children}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
