import RemoteComponent from "./Remote";

const RemoteCustomCounter = (props) => (
  <RemoteComponent
    url="http://localhost:8080"
    remoteScope="host"
    remoteModule="./CustomCounter"
    {...props}
  />
);

export default RemoteCustomCounter;
