import "./Form.css";
const Form = ({ title, description, fields, submitBtnText }) => {
  return (
    <div className="login-conatiner">
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>
        <form className="login-form">
          {fields.map((field) => {
            return (
              <div className="form-group">
                <input
                  className="form-control"
                  type={field.type}
                  id={field.name}
                  required
                />
                <label for={field.name}>{field.lable}</label>
              </div>
            );
          })}
          <div>
            <button type="submit">{submitBtnText}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
