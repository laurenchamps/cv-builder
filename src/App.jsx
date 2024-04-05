import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './main.scss';

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

const initialEmployment = [
  {
    jobTitle: 'Web developer',
    employer: 'Google',
    start: 'Nov 2018',
    end: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

export default function App() {
  const [firstName, setFirstName] = useState(initialDetails.firstName);
  const [lastName, setLastName] = useState(initialDetails.lastName);
  const [email, setEmail] = useState(initialDetails.email);
  const [phone, setPhone] = useState(initialDetails.phone);
  const fullName = `${firstName} ${lastName}`;

  const [qualifications, setQualifications] = useState(initialQualifications);

  const [employment, setEmployment] = useState(initialEmployment);

  function handleAddQualification(qual) {
    setQualifications((qualifications) => [...qualifications, qual]);
  }

  function handleDeleteQualification(qual) {
    setQualifications((qualifications) =>
      qualifications.filter((qualification) => qualification.id !== qual.id)
    );
  }

  function handleAddEmployment(role) {
    setEmployment((employment) => [...employment, role]);
  }

  function handleDeleteEmployment(role) {
    setEmployment((employment) =>
      employment.filter((empl) => empl.id !== role.id)
    );
  }

  return (
    <>
      <header className="header">
        <img src="./public/icons8-resume-100.png"></img>
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
        <EmploymentList
          employment={employment}
          onAddEmployment={handleAddEmployment}
          onDeleteEmployment={handleDeleteEmployment}
        />
        <section className="section section--preview">
          {/* <h2>Preview</h2> */}
          <DisplayPersonalDetails name={fullName} email={email} phone={phone} />
          <div className="preview-container">
            <DisplayEducation qualifications={qualifications} />
            <DisplayExperience employment={employment} />
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>
          &copy; Lauren Champs 2024.{' '}
          <a target="_blank" href="https://icons8.com/icon/121320/resume">
            {' '}
            Resume
          </a>{' '}
          icon by{' '}
          <a target="_blank" href="https://icons8.com">
            Icons8.
          </a>
        </p>
      </footer>
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

function Button({ children, onClick, type }) {
  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {children}
    </button>
  );
}

function Qualification({ qualification, onDeleteQualification }) {
  return (
    <li className="list-item">
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
    <form className="input-block">
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

function EmploymentList({ employment, onAddEmployment, onDeleteEmployment }) {
  const [showEmploymentForm, setShowEmploymentForm] = useState('');

  function handleToggleEmploymentForm() {
    setShowEmploymentForm((show) => !show);
  }

  return (
    <section className="input-block section__experience">
      <h2>Experience</h2>
      <ul className="employment-list">
        {employment.map((empl) => (
          <Employment
            employment={empl}
            key={empl.id}
            onDeleteEmployment={onDeleteEmployment}
          />
        ))}
      </ul>
      {!showEmploymentForm && (
        <Button onClick={handleToggleEmploymentForm} type="btn-primary">
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
        <Button onClick={handleToggleEmploymentForm}>Cancel</Button>
      )}
    </section>
  );
}

function Employment({ employment, onDeleteEmployment }) {
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

function FormAddEmployment({ onAddEmployment, onToggleEmploymentForm }) {
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

function DisplayPersonalDetails({ name, email, phone }) {
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

function DisplayEducation({ qualifications }) {
  return (
    <div className="preview preview--education">
      <h2 className="section-title">Education</h2>
      <div>
        {qualifications.map((qual) => (
          <div key={qual.id} className="item">
            <h3 className="item__title">{qual.qualification}</h3>
            <p className="item__subtitle">{qual.institution}</p>
            <p className="item__dates">
              {qual.start} - {qual.end}
            </p>
            <p className="item__description">{qual.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DisplayExperience({ employment }) {
  return (
    <div className="preview preview--experience">
      <h2 className="section-title">Experience</h2>
      <div>
        {employment.map((empl) => (
          <div key={empl.id} className="item">
            <h3 className="item__title">{empl.jobTitle}</h3>
            <p className="item__subtitle">{empl.employer}</p>
            <p className="item__dates">
              {empl.start} - {empl.end}
            </p>
            <p className="item__description">{empl.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
