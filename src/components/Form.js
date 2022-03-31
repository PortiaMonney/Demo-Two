import React, {useState} from 'react'
import Signup from './Signup'
import SignUpFormSuccess from './SignUpFormSuccess';


const Form = () => {
  const [formIsSubmitted, setFormIsSubmited] = useState(false);
  const submitForm = () => {
    setFormIsSubmited(true);
  };

  return (
   <div>
     {!formIsSubmitted ? <Signup submitForm={submitForm}/> : <SignUpFormSuccess />}
   </div>
  );
}

export default Form