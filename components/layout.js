import Navbar from "./navbar";
import { OverlaySidebar } from "./sidebar";
import { ThemeProvider } from "next-themes";
import Breadcrumbs from "./breadcrumbs";
import { useState } from "react";
import CommandPalette, { CommandCapture } from "./commandpalette";

export default function Layout(props) {
  const [showMenubar, setShowMenubar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  CommandCapture(() => setShowSearch(true));

  return (
    <>
      <ThemeProvider defaultTheme="dark" attribute="class">
        <div className={"layout"}>
          <Navbar
            currentVersion={props.version}
            versions={props.versions}
            defaultPages={props.defaultPages}
            defaultVersion={props.config.defaultVersion}
            set={setShowSearch}
          />
          <OverlaySidebar
            set={setShowMenubar}
            show={showMenubar}
            sections={props.sections}
          />
          <CommandPalette set={setShowSearch} show={showSearch} />
          <Breadcrumbs set={setShowMenubar} />
          <main>{props.children}</main>
        </div>
      </ThemeProvider>
    </>
  );
}
