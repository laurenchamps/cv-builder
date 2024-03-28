// import { useState } from 'react';
import './App.css';

export default function App() {
  return (
    <>
      <header>
        <h1>CV Builder</h1>
      </header>
      <main className="container">
        <InputSection className="section section--input">
          <h2>Personal details</h2>
          <FormField label="First name" type="text" placeholder="first name" />
          <FormField label="Last name" type="text" placeholder="last name" />
          <FormField label="Email" type="email" placeholder="email" />
        </InputSection>
        <InputSection className="section section--input">
          <h2>Education</h2>
          <FormField
            label="Course title"
            type="text"
            placeholder="Name of degree or course"
          />
          <FormField
            label="University / School / Institution"
            type="text"
            placeholder="Name of education provider"
          />
          <FormField label="Start date" type="text" placeholder="start date" />
          <FormField label="End date" type="text" placeholder="end date" />
          <FormField
            label="Description"
            type="text"
            placeholder="enter a brief description of subjects covered"
          />
        </InputSection>
        <InputSection className="section section--input">
          <h2>Experience</h2>
          <FormField label="Job title" type="text" placeholder="job title" />
          <FormField label="Employer" type="text" placeholder="employer" />
          <FormField label="Start date" type="text" placeholder="start date" />
          <FormField label="End date" type="text" placeholder="end date" />
          <FormField
            label="Description"
            type="text"
            placeholder="description of job role and achievements"
          />
        </InputSection>
        <section className="section section--preview">
          <h2>Preview</h2>
          <PersonalDetails />
          <Education />
          <Experience />
        </section>
      </main>
    </>
  );
}

function InputSection({ className, children }) {
  return <section className={className}>{children}</section>;
}

function FormField({ label, type, placeholder }) {
  return (
    <div className="formField">
      <label>{label}</label>
      <input type={type} placeholder={placeholder}></input>
    </div>
  );
}

function PersonalDetails() {
  return (
    <div className="personal-details">
      <p>Juno Riley</p>
      <p>e: junoriley@gmail.com</p>
      <p>m: 0400 111 333</p>
    </div>
  );
}

function Education() {
  return (
    <div className="preview preview--education">
      <h2>Education</h2>
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
