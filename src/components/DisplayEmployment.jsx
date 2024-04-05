export default function DisplayEmployment({ employment }) {
  return (
    <div className="preview preview--experience">
      <h2 className="section__display--title">Experience</h2>
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
