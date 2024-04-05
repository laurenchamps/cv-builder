import { useState } from 'react';
import Button from './Button';
import Qualification from './Qualification';
import FormAddQualification from './FormAddQualification';

export default function QualificationList({
  qualifications,
  onAddQualification,
  onDeleteQualification,
}) {
  const [showQualificationForm, setShowQualificationForm] = useState(false);

  function handleToggleQualificationForm() {
    setShowQualificationForm((show) => !show);
  }

  return (
    <section className="input-block section__qualifications">
      <h2>Qualifications</h2>
      <ul className="input-list">
        {qualifications.map((qual) => (
          <Qualification
            qualification={qual}
            key={qual.id}
            onDeleteQualification={onDeleteQualification}
          />
        ))}
      </ul>
      {!showQualificationForm && (
        <Button onClick={handleToggleQualificationForm} type="btn--primary">
          Add qualification
        </Button>
      )}
      {showQualificationForm && (
        <FormAddQualification
          onAddQualification={onAddQualification}
          onToggleQualificationForm={handleToggleQualificationForm}
        />
      )}
      {showQualificationForm && (
        <Button onClick={handleToggleQualificationForm} type="btn--primary">
          Cancel
        </Button>
      )}
    </section>
  );
}
