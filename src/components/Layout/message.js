import Alert from "react-bootstrap/Alert";
import "../../style/Layout/message.css";

const AlertMessage = ({ info }) => {
  return (
    <div className="message">
      {info === null ? null : <div>{info.message}</div>}
    </div>
  );
};

export default AlertMessage;
