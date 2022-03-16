import { useEffect ,useState,useCallback,memo} from "react";

function UseRefExample() {
  console.log("App is rendering...");
  useEffect(() => console.log("== App rendered =="));
  const [firstInput, setFirstInput] = useState();
  const [secondInput, setSecondInput] = useState();
  const input1 = (null);
  const input2 = (null);

  const changeValue1 = useCallback(() => {setFirstInput(input1.current.outerText)},[firstInput]);

  const changeValue2 = useCallback(() => {setSecondInput(input2.current.outerText)}, [secondInput]);

  return (
    <div className="App">
      <div className="value-1"  >
        first value: <h1>{firstInput}</h1>
        <br />
        change first value:
        <input ref={input1} />
        <button onClick={changeValue1}> change </button>
      </div>
      <div className="value-2" >
        second value: <h1>{secondInput}</h1>
        <br />
        change second value:
        <input ref={input2} />
        <button onClick={changeValue2}> change </button>
      </div>
    </div>
  );
}
export default memo(UseRefExample);
