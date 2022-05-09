import Navbar from "./navbar";
import { OverlaySidebar } from "./sidebar";
import { ThemeProvider } from "next-themes";
import Breadcrumbs from "./breadcrumbs";
import { useEffect, useState } from "react";
import CommandPalette from "./commandpalette";
import { Router } from "next/router";

export default function Layout(props) {
  const currentVersion = props.currentVersion;
  const versionOrder = props.versionOrder;
  const defaultVersion = props.defaultVersion;
  const defaultPages = props.defaultPages;
  const sectionOrder = props.sectionOrder;
  const currentSlug = props.currentSlug;
  const currentSection = props.currentSection;
  const docs = props.docs;

  const children = props.children;

  const [showMenubar, setShowMenubar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // CommandCapture(() => setShowSearch(true));

  useEffect(() => {
    const routeWatch = () => setShowMenubar(false) && setShowSearch(false);
    Router.events.on("routeChangeStart", routeWatch);
    return () => {
      Router.events.off("routeChangeStart", routeWatch);
    };
  }, []);

  return (
    <>
      <ThemeProvider defaultTheme="dark" attribute="class">
        <div className={"w-full flex items-center justify-center"}>
          <div className={"layout"}>
            <Navbar
                set={setShowSearch}
                currentVersion={currentVersion}
                versionOrder={versionOrder}
                defaultVersion={defaultVersion}
                defaultPages={defaultPages}
            />
            <OverlaySidebar
                set={setShowMenubar}
                show={showMenubar}
                defaultVersion={defaultVersion}
                sectionOrder={sectionOrder}
                currentVersion={currentVersion}
                currentSlug={currentSlug}
                currentSection={currentSection}
                docs={docs}
            />
            <CommandPalette set={setShowSearch} show={showSearch} />
            <Breadcrumbs
                currentSection={currentSection}
                currentSlug={currentSlug}
                set={setShowMenubar}
            />
            <main>{children}</main>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
