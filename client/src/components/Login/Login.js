import React, { useState } from "react";
import { Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import axios from 'axios';


const LoginForm = props => {
  const [email, setEmail] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value
    })
  };

  const handleValidSubmit = (event, values) => {
    setEmail({ email: values.email });
    axios.post("/api/auth/login", loginData)
      .then(res => (console.log(res.data.user)))
      .catch(err => (console.error(err)));
    console.log(`Login Successful`);
  };

  const handleInvalidSubmit = (event, errors, values) => {
    setEmail({ email: values.email, error: true });
    console.log(`Login failed`);
  };

  return (
    <AvForm
      onValidSubmit={handleValidSubmit}
      onInvalidSubmit={handleInvalidSubmit}
    >
      <AvField
        name="email"
        label="Email"
        type="text"
        onChange={handleInputChange}
        value={loginData.username}
        validate={{
          required: true,
          email: true
        }}
      />
      <AvField
        name="password"
        label="Password"
        type="password"
        onChange={handleInputChange}
        value={loginData.password}
        validate={{
          required: {
            value: true,
            errorMessage: "Please enter your password"
          },
          pattern: {
            value: "^[A-Za-z0-9]+$",
            errorMessage:
              "Your password must be composed only with letter and numbers"
          }
        }}
      />
      <Button id="submit" id="submit" className="btn-fill" color="primary" type="submit">Submit</Button>
    </AvForm>
  );
};

export default LoginForm;









// export default class LoginForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { email: false };
//   }

//   handleValidSubmit = (event, values) => {
//     this.setState({ email: values.email });
//     console.log(`Login Successful`);
//   };

//   handleInvalidSubmit = (event, errors, values) => {
//     this.setState({ email: values.email, error: true });
//     console.log(`Login failed`);
//   };

//   render() {
//     return (
//       <AvForm
//         onValidSubmit={this.handleValidSubmit}
//         onInvalidSubmit={this.handleInvalidSubmit}
//       >
//         <AvField
//           name="username"
//           label="Email"
//           type="text"
//           validate={{
//             required: true,
//             email: true
//           }}
//         />
//         <AvField
//           name="password"
//           label="Password"
//           type="password"
//           validate={{
//             required: {
//               value: true,
//               errorMessage: "Please enter your password"
//             },
//             pattern: {
//               value: "^[A-Za-z0-9]+$",
//               errorMessage:
//                 "Your password must be composed only with letter and numbers"
//             },
//             minLength: {
//               value: 6,
//               errorMessage: "Your password must be between 6 and 16 characters"
//             },
//             maxLength: {
//               value: 16,
//               errorMessage: "Your password must be between 6 and 16 characters"
//             }
//           }}
//         />
//         <Button id="submit">Submit</Button>
//       </AvForm>
//     );
//   }
// }
