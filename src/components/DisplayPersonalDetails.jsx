import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function DisplayPersonalDetails({ name, email, phone }) {
  return (
    <div className="personal-details">
      <p className="name">{name}</p>
      <div className="contact">
        <p>
          <FontAwesomeIcon icon={faEnvelope} />
          <span> : &nbsp;{email}</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} />
          <span> : &nbsp;{phone}</span>
        </p>
      </div>
    </div>
  );
}
