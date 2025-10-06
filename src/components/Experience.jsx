import "../styles/Experience.css";

function Experience({ data, setData, isEditing }) {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Work Experience</h2>

      {isEditing ? (
        <div>
          <input
            name="company"
            placeholder="Company"
            value={data.company}
            onChange={handleChange}
          />
          <input
            name="position"
            placeholder="Position"
            value={data.position}
            onChange={handleChange}
          />
          <input
            name="start"
            placeholder="Start Date"
            value={data.start}
            onChange={handleChange}
          />
          <input
            name="end"
            placeholder="End Date"
            value={data.end}
            onChange={handleChange}
          />
        </div>
      ) : (
        <div>
          <p><strong>Company:</strong> {data.company}</p>
          <p><strong>Position:</strong> {data.position}</p>
          <p><strong>Start:</strong> {data.start}</p>
          <p><strong>End:</strong> {data.end}</p>
        </div>
      )}
    </div>
  );
}

export default Experience;
