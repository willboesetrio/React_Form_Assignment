import './App.css';
import { useRef, useState } from 'react';

function App() {

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const zipInputRef = useRef();

  let [nameError, setNameError] = useState(false);
  let [emailError, setEmailError] = useState(false);
  let [zipError, setZipError] = useState(false);
  let [formSubmitted, setFormSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setFormSubmitted(true);

    const enteredName = nameInputRef.current.value;
    if(enteredName.length < 3){setNameError(true)}else(setNameError(false));

    const enteredEmail = emailInputRef.current.value;
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(enteredEmail)){
    setEmailError(false)
   }else{
    setEmailError(true);
   }

   const enteredZip = zipInputRef.current.value;
   if (/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(enteredZip)){
    setZipError(false)
   }else{
    setZipError(true);
   }

  nameInputRef.current.value = ''
  emailInputRef.current.value = ''
  zipInputRef.current.value = ''


  }

  return (
    <div className="App">
      <h2>Form Validation</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name</label>
            <input type="text" id="name" ref={nameInputRef} required></input>
            {nameError && 
            <p className='error'>NAME MUST BE 3 CHARACTERS OR MORE</p>
            }
            </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input type="text" id="email" ref={emailInputRef} required></input>
            {emailError && 
            <p className='error'>MUST BE VALID EMAIL</p>
            }
          </div>
          <div>
            <label htmlFor='zip'>Zip Code</label>
            <input type="text" id="zip" ref={zipInputRef} required></input>
            {zipError && 
            <p className='error'>MUST BE VALID ZIP CODE</p>
            }
          </div>
          <div>
            <button>SUBMIT</button>
          </div>
        </form>
        <div>
        {!nameError && !emailError && !zipError && formSubmitted &&
            <p className='success'>FORM SUBMIT SUCCESSFUL</p>
            }
        </div>
      </div>
    </div>
  );
}

export default App;
