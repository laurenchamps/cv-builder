import { useState } from 'react';
import Button from './Button';
import Employment from './Employment';
import FormAddEmployment from './FormAddEmployment';

export default function EmploymentList({
  employment,
  onAddEmployment,
  onDeleteEmployment,
}) {
  const [showEmploymentForm, setShowEmploymentForm] = useState('');

  function handleToggleEmploymentForm() {
    setShowEmploymentForm((show) => !show);
  }

  return (
    <section className="input-block section__experience">
      <h2>Experience</h2>
      <ul className="input-list">
        {employment.map((empl) => (
          <Employment
            employment={empl}
            key={empl.id}
            onDeleteEmployment={onDeleteEmployment}
          />
        ))}
      </ul>
      {!showEmploymentForm && (
        <Button onClick={handleToggleEmploymentForm} type="btn--primary">
          Add role
        </Button>
      )}
      {showEmploymentForm && (
        <FormAddEmployment
          onAddEmployment={onAddEmployment}
          onToggleEmploymentForm={handleToggleEmploymentForm}
        />
      )}
      {showEmploymentForm && (
        <Button onClick={handleToggleEmploymentForm} type="btn--primary">
          Cancel
        </Button>
      )}
    </section>
  );
}
