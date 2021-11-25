import { useState } from "react";

const UseStateExample = () => {
  const [counter, setCounter] = useState(0);
  const [toggle, toggleSetter] = useState("false");
  const [personObject, setPerson] = useState({});

  const _onClick = () => {
    setCounter(counter + 1);
  };

  const _toggle = () => {
    if (toggle == "true") {
      toggleSetter("false");
    } else toggleSetter("true");
  };

  const _formSubmit = (event: any) => {
    event.preventDefault();
    const nameData = event.target.name.value;
    const ageData = event.target.age.value;
    let item = [{ ...personObject }, { nameData, ageData }];
    setPerson(item);
    console.log("List:", personObject);
  };

  return (
    <>
      <label htmlFor="counter">Counter</label>
      <button name="counter" onClick={_onClick}>
        {counter}
      </button>
      <br />
      <label htmlFor="toggle">Toggle</label>
      <button name="toggle" onClick={_toggle}>
        {toggle}
      </button>
      <form action="return 0;" onSubmit={_formSubmit}>
        <label htmlFor="name">
          <input type="text" name="name" placeholder="Name" />
        </label>
        <label htmlFor="age">
          <input type="number" name="age" placeholder="Age" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UseStateExample;
