import Button from './Button';

export default function Employment({ employment, onDeleteEmployment }) {
  return (
    <li className="list-item">
      <div>
        <h3>{employment.jobTitle}</h3>
        <p className="subtitle">{employment.employer}</p>
      </div>
      <Button onClick={() => onDeleteEmployment(employment)}>Delete</Button>
    </li>
  );
}
