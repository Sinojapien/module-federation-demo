import React from "react";

const useDynamicScript = (url) => {
  const [ready, setReady] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    if (!url) {
      return;
    }

    const element = document.createElement("script");
    element.src = url;
    element.type = "text/javascript";
    element.async = true;

    setReady(false);
    setFailed(false);

    element.onload = () => {
      console.log(`Dynamic Script Loaded: ${url}`);
      setReady(true);
    };

    element.onerror = () => {
      console.error(`Dynamic Script Error: ${url}`);
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      console.log(`Dynamic Script Removed: ${url}`);
      document.head.removeChild(element);
    };
  }, [url]);

  return {
    ready,
    failed,
  };
};

const RemoteComponent = ({
  url,
  filename = "remoteEntry.js",
  remoteScope,
  remoteModule,
}) => {
  // const { ready, failed } = useDynamicScript(
  //   "http://localhost:8080/remoteEntry.js"
  // );

  const { ready, failed } = useDynamicScript(`${url}/${filename}`);

  if (!ready || failed || !global) {
    return null;
  }

  // const remoteScope = "host";
  // const remoteModule = "./Header";

  try {
    if (!global[remoteScope].__initialized) {
      global[remoteScope].init(
        Object.assign(
          {
            react: {
              get: () => Promise.resolve(() => require("react")),
              loaded: true,
            },
          },
          global.__webpack_require__ ? global.__webpack_require__.o : {}
        )
      );

      global[remoteScope].__initialized = true;
    }
  } catch (error) {
    console.log(error);
  }

  const Component = React.lazy(() =>
    global[remoteScope].get(remoteModule).then((factory) => {
      const Module = factory();
      return Module;
    })
  );

  return (
    <React.Suspense fallback={<div>Loading caption</div>}>
      <Component />
    </React.Suspense>
  );
};

export default RemoteComponent;
