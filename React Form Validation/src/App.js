import { useState } from "react";
import "./App.css";
import FormInput from "./component/FormInput";

function App() {
  const [useValue, setUseValue] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
      errorMsg:
        "Username shouble be 3-16 and should not include any special character",
    },
    {
      id: 2,
      name: "username",
      type: "email",
      placeholder: "Email",
      label: "Email",
      required: true,
      errorMsg: "It should be a valid email",
    },
    {
      id: 3,
      name: "password",
      type: "text",
      placeholder: "Password",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
      errorMsg:
        "Password should be 8-12 and include letters, number and characters",
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      pattern: useValue.password,
      required: true,
      errorMsg: "Password do not match",
    },
  ];

  const handleSubmit = () => {
    alert("SUBMITTED")
  };
  const handleChange = (e) => {
    setUseValue({ ...useValue, [e.target.name]: e.target.value });
  };

  console.log(useValue);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={useValue[input.name]}
            onChange={handleChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
