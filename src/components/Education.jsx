import "../styles/Education.css";

function Education({ data, setData, isEditing }) {
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Education</h2>

            {isEditing ? (
                <div>
                    <input
                        name="school"
                        placeholder="School"
                        value={data.school}
                        onChange={handleChange}
                    />
                    <input
                        name="degree"
                        placeholder="Degree"
                        value={data.degree}
                        onChange={handleChange}
                    />
                    <input
                        name="year"
                        placeholder="Year of Graduation"
                        value={data.year}
                        onChange={handleChange}
                    />
                </div>
            ) : (
                <div>
                    <p><strong>School:</strong> {data.school}</p>
                    <p><strong>Degree:</strong> {data.degree}</p>
                    <p><strong>Year:</strong> {data.year}</p>
                </div>
            )}
        </div>
    );
}

export default Education;