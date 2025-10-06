import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo"
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState({
    school: "",
    degree: "",
    year: "",
  });

  const [experience, setExperience] = useState({
    company: "",
    position: "",
    start: "",
    end: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  const handleEditToggle = () => setIsEditing(!isEditing);

  return (
    <div>
      <h1>CV Application</h1>

      <GeneralInfo data={generalInfo} setData={setGeneralInfo} isEditing={isEditing} />
      <Education data={education} setData={setEducation} isEditing={isEditing} />
      <Experience data={experience} setData={setExperience} isEditing={isEditing} />

      <button onClick={handleEditToggle}>
        {isEditing ? "Submit" : "Edit"}
      </button>
    </div>
  )
}

export default App;