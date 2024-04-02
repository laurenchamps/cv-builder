// import { useState } from 'react';
import { useState } from 'react';
import './App.css';

const initialDetails = {
  firstName: 'Juno',
  lastName: 'Bowden',
  email: 'junobowden@gmail.com',
  mobile: '0400 123 456',
};

export default function App() {
  const [firstName, setFirstName] = useState(initialDetails.firstName);
  const [lastName, setLastName] = useState(initialDetails.lastName);
  const [email, setEmail] = useState(initialDetails.email);
  const [mobile, setMobile] = useState(initialDetails.mobile);

  const [qualifications, setQualifications] = useState([]);

  function handleAddQuals(qual) {
    setQualifications((quals) => [...qualifications, qual]);
  }

  const fullName = `${firstName} ${lastName}`;

  return (
    <>
      <header>
        <h1>CV Builder</h1>
      </header>
      <main className="container">
        <Form className="section section--input">
          <h2>Personal details</h2>
          <FormField
            label="First name"
            type="text"
            personalDetail={firstName}
            onAddDetail={setFirstName}
          />
          <FormField
            label="Last name"
            type="text"
            personalDetail={lastName}
            onAddDetail={setLastName}
          />
          <FormField
            label="Email"
            type="email"
            personalDetail={email}
            onAddDetail={setEmail}
          />
          <FormField
            label="Mobile"
            type="text"
            personalDetail={mobile}
            onAddDetail={setMobile}
          />
        </Form>
        <EducationForm onAddQuals={handleAddQuals} />
        <Form className="section section--input">
          <h2>Experience</h2>
          <FormField label="Job title" type="text" placeholder="job title" />
          <FormField label="Employer" type="text" placeholder="employer" />
          <FormField label="Start date" type="text" placeholder="start date" />
          <FormField label="End date" type="text" placeholder="end date" />
          <FormField label="Description" type="text" />
        </Form>
        <section className="section section--preview">
          {/* <h2>Preview</h2> */}
          <PersonalDetails name={fullName} email={email} mobile={mobile} />
          <EducationList qualifications={qualifications} />
          <Experience />
        </section>
      </main>
    </>
  );
}

function Form({ className, children, handleSubmit }) {
  return (
    <form className={className} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

function EducationForm({ onAddQuals }) {
  const [qualification, setQualification] = useState('testqual');
  const [qualInstitution, setQualInstitution] = useState('testinst');
  const [qualStart, setQualStart] = useState('teststart');
  const [qualEnd, setQualEnd] = useState('testend');
  const [qualDescription, setQualDescription] = useState('testdesc');

  function handleQualSubmit(e) {
    e.preventDefault();

    if (!qualification) return;

    const newQualification = {
      qualification,
      qualInstitution,
      qualStart,
      qualEnd,
      qualDescription,
      id: Date.now(),
    };

    onAddQuals(newQualification);

    setQualification('');
    setQualInstitution('');
    setQualStart('');
    setQualEnd('');
    setQualDescription('');
  }

  return (
    <form
      className="education-form section section--input"
      onSubmit={handleQualSubmit}
    >
      <h2>Education</h2>
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
          value={qualInstitution}
          onChange={(e) => setQualInstitution(e.target.value)}
        ></input>
      </div>
      <div className="form-field">
        <label>Start date</label>
        <input
          type="text"
          value={qualStart}
          onChange={(e) => setQualStart(e.target.value)}
        ></input>
      </div>
      <div className="form-field">
        <label>End date</label>
        <input
          type="text"
          value={qualEnd}
          onChange={(e) => setQualEnd(e.target.value)}
        ></input>
      </div>
      <div className="form-field">
        <label>Description</label>
        <input
          type="text"
          value={qualDescription}
          onChange={(e) => setQualDescription(e.target.value)}
        ></input>
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

function FormField({
  label,
  type,
  placeholder = null,
  personalDetail,
  onAddDetail,
}) {
  return (
    <div className="form-field">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={personalDetail}
        onChange={(e) => onAddDetail(e.target.value)}
      ></input>
    </div>
  );
}

function PersonalDetails({ name, email, mobile }) {
  return (
    <div className="personal-details">
      <p className="name">{name}</p>
      <div className="contact">
        <p>e: {email}</p>
        <p>m: {mobile}</p>
      </div>
    </div>
  );
}

function EducationList({ qualifications }) {
  return (
    <div className="preview preview--education">
      <h2>Education</h2>
      <div>
        {qualifications.map((qual) => (
          <div key={qual.id}>
            <h3>{qual.qualification}</h3>
            <p>{qual.qualInstitution}</p>
            <p>{qual.qualStart}</p>
            <p>{qual.qualEnd}</p>
            <p>{qual.qualDescription}</p>
          </div>
        ))}
      </div>

      <h3>Full stack JavaScript</h3>
      <p className="subheading">The Odin Project</p>
      <p className="description">
        Self-direct study following The Odin Project&apos;s open-source
        curriculum
      </p>
    </div>
  );
}

function Experience() {
  return (
    <div className="preview preview--experience">
      <h2>Experience</h2>
      <h3>Job title</h3>
      <p className="subheading">Employer</p>
      <p>Start date - end date</p>
      <p>Description</p>
    </div>
  );
}
