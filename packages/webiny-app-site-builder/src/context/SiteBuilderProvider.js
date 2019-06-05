import React from "react";
import { SiteBuilderContextProvider } from "./SiteBuilderContext";

export default function SiteBuilderProvider({ children, ...props }) {
    return <SiteBuilderContextProvider {...props}>{children}</SiteBuilderContextProvider>;
}
