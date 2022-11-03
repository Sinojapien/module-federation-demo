import RemoteComponent from "./Remote";

const RemoteFooter = () => (
  <RemoteComponent
    url="http://localhost:8080"
    remoteScope="host"
    remoteModule="./Footer"
  />
);

export default RemoteFooter;
