import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { injectScript } from "@module-federation/nextjs-mf/utils";

// import RemoteHeader from "../components/RemoteHeader";
// import RemoteFooter from "../components/RemoteFooter";
// import RemoteCustomLink from "../components/RemoteCustomLink";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import CustomLink from "../components/CustomLink";
// import CusomCounter from "../components/CustomCounter";
// import RemoteCustomCounter from "../components/RemoteCustomCounter";

// injectScript({
//   global: "host",
//   url: "http://localhost:3000/_next/static/chunks/remoteEntry.js",
// }).then((remoteContainer) => {
//   remoteContainer.get("./CustomCounter");
// });

const RemoteCustomCounter = dynamic(() => import("host/CustomCounter"), {
  ssr: false,
});

const RemoteCustomLink = dynamic(() => import("host/CustomLink"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <RemoteCustomCounter />
      {/* <RemoteHeader /> */}
      <div>This is content</div>
      <RemoteCustomLink>remote testing</RemoteCustomLink>
      {/* <RemoteCustomCounter /> */}
      {/* <RemoteFooter /> */}
    </>
  );
}
