import Navbar from "./navbar";
import { OverlaySidebar } from "./sidebar";
import { ThemeProvider } from "next-themes";
import Breadcrumbs from "./breadcrumbs";
import { useState } from "react";
import CommandPalette, { CommandCapture } from "./commandpalette";

const versions = ["v0.3.0", "v3.0.22", "v0.1.0", "v0.1.0-alpha"];

export default function Layout({ children }) {
  const [showMenubar, setShowMenubar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  CommandCapture(() => setShowSearch(true));

  return (
    <>
      <ThemeProvider defaultTheme="dark" attribute="class">
        <div className={"layout"}>
          <Navbar
            currentVersion={"v0.3.0"}
            versions={versions}
            set={setShowSearch}
          />
          <OverlaySidebar set={setShowMenubar} show={showMenubar} />
          <CommandPalette set={setShowSearch} show={showSearch} />
          <Breadcrumbs set={setShowMenubar} />
          <main>{children}</main>
        </div>
      </ThemeProvider>
    </>
  );
}
