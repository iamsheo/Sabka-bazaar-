import Form from "../Form";
const Login = () => {
  const loginField = [
    { lable: "Email", name: "email", type: "email" },
    { lable: "Password", name: "password", type: "password" },
  ];
  //   const regestraionField = [
  //     { lable: "First name", name: "firstName", type: "text" },
  //     { lable: "Last name", name: "lastName", type: "text" },
  //     { lable: "Email", name: "email", type: "email" },
  //     { lable: "Password", name: "password", type: "password" },
  //     { lable: "Conform Password", name: "confirmPassword", type: "password" },
  //   ];

  const title = "Login";
  const description = "Get access your Orders, Wishlist and Recommendations";
  const submitBtnText = "Login";
  return (
    <Form
      title={title}
      description={description}
      fields={loginField}
      submitBtnText={submitBtnText}
    />
  );
};

export default Login;
