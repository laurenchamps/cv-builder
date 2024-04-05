import Button from './Button';

export default function Qualification({
  qualification,
  onDeleteQualification,
}) {
  return (
    <li className="display-item">
      <div>
        <h3>{qualification.qualification}</h3>
        <p className="subtitle">{qualification.institution}</p>
      </div>
      <Button onClick={() => onDeleteQualification(qualification)}>
        Delete
      </Button>
    </li>
  );
}
