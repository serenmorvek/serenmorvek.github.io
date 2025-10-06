import "../styles/GeneralInfo.css";

function GeneralInfo({ data, setData, isEditing }) {
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>General Information</h2>

            {isEditing ? (
                <div>
                    <input
                        name="name"
                        placeholder="Full Name"
                        value={data.name}
                        onChange={handleChange}
                    />
                    <input
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={handleChange}
                    />
                    <input
                        name="phone"
                        placeholder="Phone"
                        value={data.phone}
                        onChange={handleChange}
                    />
                </div>
            ) : (
                <div>
                    <p><strong>Name:</strong> {data.name}</p>
                    <p><strong>Email:</strong> {data.email}</p>
                    <p><strong>Phone:</strong> {data.phone}</p>
                </div>
            )}
        </div>
    );
}

export default GeneralInfo;