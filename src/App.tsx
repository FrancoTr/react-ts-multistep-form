import { useState, FormEvent } from "react";
import { AccountForm } from "./AccountForm";
import { AddressFrom } from "./AddressForm";
import { useMultistepForm } from "./useMultistepForm";
import { UserForm } from "./UserForm";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <UserForm />,
    <AddressFrom />,
    <AccountForm />,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    next();
  }
  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{ marginTop: "1rem", display: "flex", gap: ".5rem", justifyContent: "flex-end" }}
        >
          {!isFirstStep && (
            <button type='button' onClick={back}>
              Back
            </button>
          )}
          <button type='submit'>{isLastStep ? "finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
