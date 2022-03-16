import { useEffect, useState, useCallback, memo, useRef } from "react";

function UseRefExample() {
  console.log("App is rendering...");
  useEffect(() => console.log("== App rendered =="));
  const [firstInput, setFirstInput] = useState();
  const [secondInput, setSecondInput] = useState();
  let input1 = useRef();
  let input2 = useRef();
  const changeValue1 = useCallback(() => {
    setFirstInput(input1.current.value)
  }, [firstInput]);

  const changeValue2 = useCallback(() => {
    setSecondInput(input2.current.value)
  }, [secondInput]);


  return (
    <div className="App">
      <div className="value-1"  >
        first value: <h5>{firstInput}</h5>
        <br />
        change first value:
        <input ref={input1} type="text" />
        <button type="button" onClick={changeValue1}> change </button>
      </div>

      <div className="value-2"  >
        Second value: <h5>{secondInput}</h5>
        <br />
        change Second value:
        <input ref={input2} type="text" />
        <button type="button" onClick={changeValue2}> change </button>
      </div>
    </div>
  );
}
export default memo(UseRefExample);

