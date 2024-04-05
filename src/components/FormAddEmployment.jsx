import { useState } from 'react';
import Button from './Button';

export default function FormAddEmployment({
  onAddEmployment,
  onToggleEmploymentForm,
}) {
  const [jobTitle, setJobTitle] = useState('');
  const [employer, setEmployer] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const newRole = {
      jobTitle,
      employer,
      start,
      end,
      description,
      id: crypto.randomUUID(),
    };

    onAddEmployment(newRole);

    setJobTitle('');
    setEmployer('');
    setStart('');
    setEnd('');
    setDescription('');

    onToggleEmploymentForm(false);
  }

  return (
    <form className="form__employment" onSubmit={handleSubmit}>
      <h3>Add employment</h3>

      <div className="form-field">
        <label>Job title</label>
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </div>

      <div className="form-field">
        <label>Employer</label>
        <input
          type="text"
          value={employer}
          onChange={(e) => setEmployer(e.target.value)}
        />
      </div>

      <div className="form-field">
        <label>Start date</label>
        <input
          type="text"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
      </div>

      <div className="form-field">
        <label>End date</label>
        <input
          type="text"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />
      </div>

      <div className="form-field">
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Button type="btn--right">Add</Button>
    </form>
  );
}
