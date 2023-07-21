import { createRef } from "react";

export const UncontrolledForm = () => {
  const nameInputRef = createRef();
  const ageInputRef = createRef();
  const hairColorRef = createRef();

  const handleSubmit = (e) => {
    console.log(nameInputRef.current.value);
    console.log(ageInputRef.current.value);
    console.log(hairColorRef.current.value);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" ref={nameInputRef} />
      <input name="age" type="number" placeholder="Age" ref={ageInputRef} />
      <input
        name="hairColor"
        type="text"
        placeholder="Hair Color"
        ref={hairColorRef}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
