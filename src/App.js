import { useState } from "react";

// import { UncontrolledForm } from "./UncontrolledForm";
// import { ControlledForm } from "./ControlledForm";
// import { UncontrolledModal } from "./UncontrolledModal";
// import { ControlledModal } from "./ControlledModal";
import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step One</h1>
    <button onClick={() => goToNext({ name: "John Doe" })}>Go to Next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step Two</h1>
    <button onClick={() => goToNext({ age: 50 })}>Go to Next</button>
  </>
);
const StepThree = ({ goToNext }) => (
  <>
    <h1>Step Three</h1>
    <p>Congratulations! You qualify for our senior discount</p>
    <button onClick={() => goToNext({})}>Go to Next</button>
  </>
);

const StepFour = ({ goToNext }) => (
  <>
    <h1>Step Four</h1>
    <button onClick={() => goToNext({ hairColor: "Black" })}>Go to Next</button>
  </>
);

function App() {
  // const [shouldShowModal, setShouldShowModal] = useState(false);
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    // <>
    //   <ControlledModal
    //     shouldShow={setShouldShowModal}
    //     onRequestClose={() => setShouldShowModal(false)}
    //   >
    //     <h1>Hello</h1>
    //   </ControlledModal>
    //   <button onClick={() => setShouldShowModal(!shouldShowModal)}>
    //     {shouldShowModal ? "Hide Modal" : "Show Modal"}
    //   </button>
    // </>
    // <UncontrolledOnboardingFlow
    //   onFinish={(data) => {
    //     console.log(data);
    //     alert("Onboarding complete!");
    //   }}
    // >
    //   <StepOne />
    //   <StepTwo />
    //   <StepThree />
    // </UncontrolledOnboardingFlow>
    <ControlledOnboardingFlow
      currentIndex={currentIndex}
      onNext={onNext}
      onFinish={(data) => {
        console.log(data);
        alert("Onboarding complete!");
      }}
    >
      <StepOne />
      <StepTwo />
      {onboardingData.age >= 62 && <StepThree />}
      <StepFour />
    </ControlledOnboardingFlow>
  );
}

export default App;
