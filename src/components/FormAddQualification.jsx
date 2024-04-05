import { useState } from 'react';
import Button from './Button';

export default function FormAddQualification({
  onAddQualification,
  onToggleQualificationForm,
}) {
  const [qualification, setQualification] = useState('');
  const [institution, setInstitution] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!qualification || !institution) return;

    const newQualification = {
      qualification,
      institution,
      start,
      end,
      description,
      id: crypto.randomUUID(),
    };

    onAddQualification(newQualification);

    setQualification('');
    setInstitution('');
    setStart('');
    setEnd('');
    setDescription('');

    onToggleQualificationForm(false);
  }

  return (
    <div>
      <form className="form__qualifications" onSubmit={handleSubmit}>
        <h3>Add qualification</h3>
        <div className="form-field">
          <label>Qualification</label>
          <input
            type="text"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>University / School / Institution</label>
          <input
            type="text"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
          ></input>
        </div>
        <div className="form-field">
          <label>Start date</label>
          <input
            type="text"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          ></input>
        </div>
        <div className="form-field">
          <label>End date</label>
          <input
            type="text"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          ></input>
        </div>
        <div className="form-field">
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>
        <Button type="btn--right">Add</Button>
      </form>
    </div>
  );
}
