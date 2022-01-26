import Form from "../Form";
const Regestration = () => {
  const regestraionField = [
    { lable: "First Name", name: "firstName", type: "text" },
    { lable: "Last N  ame", name: "lastName", type: "text" },
    { lable: "Email", name: "email", type: "email" },
    { lable: "Password", name: "password", type: "password" },
    { lable: "Confirm Password", name: "confirmPassword", type: "password" },
  ];

  const title = "Signup";
  const description = "We do not share your personal details with anyone.";
  const submitBtnText = "Singup";
  return (
    <Form
      title={title}
      description={description}
      fields={regestraionField}
      submitBtnText={submitBtnText}
    />
  );
};

export default Regestration;
