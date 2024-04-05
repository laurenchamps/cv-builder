export default function DisplayQualifications({ qualifications }) {
  return (
    <div className="preview preview--education">
      <h2 className="section__display--title">Education</h2>
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
