import RemoteComponent from "./Remote";

const RemoteHeader = () => (
  <RemoteComponent
    url="http://localhost:8080"
    remoteScope="host"
    remoteModule="./Header"
  />
);

export default RemoteHeader;
