import React, {useState} from 'react'
import './App.css';

function useFormik({
  initialValues,
})    {
  const [values, setValues] = useState(initialValues);
    
  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    const { value } = event.target;
    setValues({
      ...values,
      [fieldName]: value,
    });
  }

  return {
    values,
    handleChange,
  };
}

function validate(values){
  const errors = {};
  if(!values.userEmail.includes("willy.klein@pucpr.br")){
      errors.userEmail = "Usuário ou senha incorretos!";
    
    }
  
  if(values.userEmail.includes("willy.klein@pucpr.br")){
      errors.userEmail = "";
      if(values.userPassword.includes("123456")){
        errors.userPassword = "Acessado com sucesso!";
    }
  
  
  if(!values.userPassword.includes("123456")){
      errors.userPassword = "Usuário ou senha incorretos!";
    }   
  }
    return errors;
}


function App () {
    const [errors, setErrors] = useState ({});
    
  function validateValues(values){
    setErrors(validate(values));
  }


  const formik = useFormik({
    initialValues: {
      userEmail: "willy.klein@pucpr.br",
      userPassword: "123456",
  },
});

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      console.log(formik.values);
      
      validateValues(formik.values);

      
  
    }}
    > <div classTitle="title">
      <h2>Login</h2>
      <p></p>
    </div>

      <div className="formField">
        <label htmlFor="userEmail">
          
        </label>
        <input
          type="text"
          placeholder="willy.klein@pucpr.br"
          name="userEmail"
          id="userEmail"
          onChange={formik.handleChange}
          value={formik.values.userEmail}
        />
      
      </div>

      
      <div className="formField">
        <label htmlFor="userPassword">
          
        </label>
        <input
          type="password"
          placeholder="123456"
          name="userPassword"
          id="userPassword"
          onChange={formik.handleChange}
          value={formik.values.userPassword}
        />
        <div>
        <button type="submit">Acessar</button>
        </div>
        <p>
        {errors.userEmail && <span className="formField_error">{errors.userEmail}</span>}
        {errors.userPassword && <span className="formField_error">{errors.userPassword}</span>}
        </p>
      </div>


    </form>
)}
export default App;