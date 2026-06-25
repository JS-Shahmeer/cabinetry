import React, { useEffect } from "react";
import SiteNavbar from "./SiteNavbar";
import SiteFooter from "./SiteFooter";

export default function PageLayout({ children, title, description }) {
  React.useEffect(() => {
    if (title) document.title = `${title} | Southern Accent Cabinetry`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) meta.setAttribute("content", description);
    window.scrollTo(0, 0);
  }, [title, description]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar />
      <main className="pt-[72px] overflow-x-clip">{children}</main>
      <SiteFooter />
    </div>
  );
}