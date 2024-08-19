import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css"
function App() {
  const [length, setLenght] = useState(8);
  const [numAllow, setnumAllow] = useState(false);
  const [charAllow, setcharAllow] = useState(false);
  const [Password, setPassword] = useState("");

  // useRef Hook
  let passwordRef = useRef(null);
  let passGenerator = useCallback(() => {
    let pass = "";
    let str = "abc)defghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "~!@#$%&*<>?|/";
    for (let i = 1; i <= length; i++) {
      let random = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(random);
    }
    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  useEffect(() => {
    passGenerator();
  }, [length, numAllow, charAllow, passGenerator]);
  return (
    <>
      <div
        className="w-full max-w-lg mx-auto shadow-md
   rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700"
      >
        <h1 className="text-4xl text-center mt-4 text-white">
          Password Generator
        </h1>
        <div
          className="flex shadow rounded-lg overflow-hidden 
    mb-4"
        >
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 
      text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <input
            type="range"
            min={8}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLenght(e.target.value)}
          />
          <label>Length: {length}</label>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numInput"
              onChange={() => {
                setnumAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="charInput"
              onChange={() => {
                setcharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
