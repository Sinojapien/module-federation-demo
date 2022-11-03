import RemoteComponent from "./Remote";

const RemoteCustomLink = (props) => (
  <RemoteComponent
    url="http://localhost:3000"
    remoteScope="host"
    remoteModule="./CustomLink"
    {...props}
  />
);

export default RemoteCustomLink;