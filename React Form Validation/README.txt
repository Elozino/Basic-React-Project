// METHOD 1
// import "./App.css";
// import FormInput from "./component/FormInput";

// function App() {

//   const handleSubmit = (e) => {
//     e.preventDefault(); //To prevent the page from refreshing after submit
//     const data = new FormData(e.target)
//     console.log(Object.fromEntries(data.entries()));
//   };

//   return (
//     <div className="App">
//       <h1>Register</h1>
//       <form onSubmit={handleSubmit}>
//         <FormInput name="username" placeholder="Username" />
//         <FormInput name="email" placeholder="Username" />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

<!-- 
import React from 'react'
import './Form.css'

function FormInput(props) {
    return (
        <div>
            <label>Label</label>
            <input type="text"
                name={props.name}
                placeholder={props.placeholder} />
        </div>
    )
}

export default FormInput -->


// METHOD 2

// import { useRef } from "react";
// import "./App.css";
// import FormInput from "./component/FormInput";

// function App() {
//   const userNameRef = useRef();
//   const handleSubmit = (e) => {
//     e.preventDefault(); //To prevent the page from refreshing after submit
//     console.log(userNameRef);
//   };

//   return (
//     <div className="App">
//       <h1>Register</h1>
//       <form onSubmit={handleSubmit}>
//         <FormInput refer={userNameRef} placeholder="Username" />
//         <FormInput placeholder="Username" />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

// import React from 'react'
// import './Form.css'

// function FormInput(props) {
//     return (
//         <div>
//             <label>Label</label>
//             <input type="text" 
//             ref={props.refer}
//             placeholder={props.placeholder}  />
//         </div>
//     )
// }

// export default FormInput


//METHOD 3

// import { useState } from "react";
// import "./App.css";
// import FormInput from "./component/FormInput";

// function App() {
//   const [userName, setUserName] = useState("")

//   console.log(userName)
//   return (
//     <div className="App">
//       <h1>Register</h1>
//       <form>
//         <FormInput placeholder="Username" setUserName={setUserName}/>
//         <FormInput placeholder="Username"/>
//       </form>
//     </div>
//   );
// }

// export default App;

// import React from 'react'
// import './Form.css'

// function FormInput(props) {
//     return (
//         <div>
//             <label>Label</label>
//             <input type="text" placeholder={props.placeholder} onChange={(e) => props.setUserName(e.target.value)} />
//         </div>
//     )
// }

// export default FormInput
