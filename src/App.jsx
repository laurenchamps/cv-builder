import { useState } from 'react';
import './App.css';

const initialDetails = {
  firstName: 'Juno',
  lastName: 'Bowden',
  email: 'junobowden@gmail.com',
  phone: '0400 123 456',
};

const initialQualifications = [
  {
    qualification: 'Bachelor of Science',
    institution: 'University of South Australia',
    start: 2000,
    end: 2003,
    description:
      'Understanding, reasoning and improving the natural world through systematic observation.',
    id: 123456789,
  },
  {
    qualification: 'Master of Public Health',
    institution: 'University of Adelaide',
    start: 2006,
    end: 2008,
    description:
      'In-depth study of epidemiology, health promotion, biostatistics, communicable diseases and global public health',
    id: 987654321,
  },
];

export default function App() {
  const [firstName, setFirstName] = useState(initialDetails.firstName);
  const [lastName, setLastName] = useState(initialDetails.lastName);
  const [email, setEmail] = useState(initialDetails.email);
  const [phone, setPhone] = useState(initialDetails.phone);
  const fullName = `${firstName} ${lastName}`;

  const [qualifications, setQualifications] = useState(initialQualifications);

  function handleAddQualification(qual) {
    setQualifications((qualifications) => [...qualifications, qual]);
  }

  function handleDeleteQualification(qual) {
    setQualifications((qualifications) =>
      qualifications.filter((qualification) => qualification.id !== qual.id)
    );
  }

  return (
    <>
      <header>
        <h1>CV Builder</h1>
      </header>
      <main className="container">
        <FormAddPersonalDetails
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmail={setEmail}
          setPhone={setPhone}
        />
        <QualificationList
          qualifications={qualifications}
          onAddQualification={handleAddQualification}
          onDeleteQualification={handleDeleteQualification}
        />
        <FormAddExperience />
        <section className="section section--preview">
          {/* <h2>Preview</h2> */}
          <DisplayPersonalDetails name={fullName} email={email} phone={phone} />
          <DisplayEducation qualifications={qualifications} />
          <DisplayExperience />
        </section>
      </main>
    </>
  );
}

function QualificationList({
  qualifications,
  onAddQualification,
  onDeleteQualification,
}) {
  const [showQualificationForm, setShowQualificationForm] = useState(false);

  function handleToggleQualificationForm() {
    setShowQualificationForm((show) => !show);
  }

  return (
    <section className="section section--qualifications">
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
        <Button onClick={handleToggleQualificationForm}>
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

function Button({ children, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
}

function Qualification({ qualification, onDeleteQualification }) {
  return (
    <li className="qualification">
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

function FormAddPersonalDetails({
  firstName,
  lastName,
  email,
  phone,
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
}) {
  return (
    <form className="section section--input">
      <h2>Personal details</h2>

      <div className="form-field">
        <label>First name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="form-field">
        <label>Last name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="form-field">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-field">
        <label>Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
    </form>
  );
}

function FormAddQualification({
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
      <form className="education-form" onSubmit={handleSubmit}>
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
        <div className="btn-group">
          <Button>Add</Button>
        </div>
      </form>
    </div>
  );
}

function FormAddExperience() {
  return (
    <form className="section section--input">
      <h2>Experience</h2>

      <div className="form-field">
        <label>Title</label>
        <input
          type="text"
          // value={title}
          // onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="form-field">
        <label>Employer</label>
        <input
          type="text"
          // value={phone}
          // onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="form-field">
        <label>Start date</label>
        <input
          type="text"
          // value={phone}
          // onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="form-field">
        <label>End date</label>
        <input
          type="text"
          // value={phone}
          // onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="form-field">
        <label>Description</label>
        <input
          type="text"
          placeholder="Description of role responsibilities and achievements"
          // value={phone}
          // onChange={(e) => setPhone(e.target.value)}
        />
      </div>
    </form>
  );
}

function DisplayPersonalDetails({ name, email, phone }) {
  return (
    <div className="personal-details">
      <p className="name">{name}</p>
      <div className="contact">
        <p>e: {email}</p>
        <p>m: {phone}</p>
      </div>
    </div>
  );
}

function DisplayEducation({ qualifications }) {
  return (
    <div className="preview preview--education">
      <h2>Education</h2>
      <div>
        {qualifications.map((qual) => (
          <div key={qual.id}>
            <h3>{qual.name}</h3>
            <p>{qual.institution}</p>
            <p>
              {qual.start} - {qual.end}
            </p>
            <p>{qual.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DisplayExperience() {
  return (
    <div className="preview preview--experience">
      <h2>Experience</h2>
      <h3>X</h3>
      <p className="subheading">X</p>
      <p>X - X</p>
      <p>X</p>
    </div>
  );
}
