import { useState } from 'react';

import FormAddPersonalDetails from './components/FormAddPersonalDetails.jsx';
import EmploymentList from './components/EmploymentList.jsx';
import QualificationList from './components/QualificationsList.jsx';
import DisplayPersonalDetails from './components/DisplayPersonalDetails.jsx';
import DisplayQualifications from './components/DisplayQualifications.jsx';
import DisplayEmployment from './components/DisplayEmployment.jsx';

import './main.scss';

const initialDetails = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  email: 'ada@lovelace.com',
  phone: '0400 123 456',
};

const initialQualifications = [
  {
    qualification: 'Bachelor of Mathematical Science',
    institution: 'University of London',
    start: 1835,
    end: 1839,
    description:
      'High level skills in all areas of mathematics. Awarded Babbage Prize for differential calculus.',
    id: 123456789,
  },
  {
    qualification: 'Master of Computer Science',
    institution: 'University of London',
    start: 1840,
    end: 1842,
    description:
      'Extensive studies in computer science. Achievements include publishing the first known algorithm.',
    id: 987654321,
  },
];

const initialEmployment = [
  {
    jobTitle: 'Computer Scientist',
    employer: 'Lovelace Co',
    start: '1843',
    end: '1852',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    id: 567891234,
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
        <img src="./icons8-resume-100.png"></img>
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
        <section className="section section__preview">
          {/* <h2>Preview</h2> */}
          <DisplayPersonalDetails name={fullName} email={email} phone={phone} />
          <div className="preview-container">
            <DisplayQualifications qualifications={qualifications} />
            <DisplayEmployment employment={employment} />
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
