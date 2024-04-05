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
      <ul className="qualification-list">
        {qualifications.map((qual) => (
          <Qualification
            qualification={qual}
            key={qual.id}
            onDeleteQualification={onDeleteQualification}
          />
        ))}
      </ul>
      {!showQualificationForm && (
        <Button onClick={handleToggleQualificationForm} type="btn-primary">
          Add qualification
        </Button>
      )}
      {showQualificationForm && (
        <FormAddQualification
          onAddQualification={onAddQualification}
          onToggleQualificationForm={handleToggleQualificationForm}
          // onEditQuals={handleEditQuals}
          // qualifications={qualifications}
        />
      )}
      {showQualificationForm && (
        <Button onClick={handleToggleQualificationForm}>Cancel</Button>
      )}
    </section>
  );
}
