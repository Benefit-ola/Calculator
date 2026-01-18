import React from "react";

const Calculator = () => {
  const [input, setInput] = React.useState("");

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };
  const handleClear = () => {
    setInput("");
  };
  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };
  // const handleEqual = () => {
  //   try {
  //     setInput(eval(input).toString());
  //   } catch (error) {
  //     setInput("Error");
  //   }
  // }
  const handleEqual = () => {
    if (!input) return;
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    < div  className="flex flex-col items-center justify-center rounded-lg shadow-lg  bg-gray-200  w-full h-[100vh]" >
      <div className=" p-4  rounded-lg shadow-lg  space-y-4 ">
        <input
          type="text"
          readOnly
          className="px-12 py-6 rounded bg-gray-200 text-black text-right  "
          value={input || "0"}
        />

        <div className=" grid grid-cols-4 gap-2  text-black rounded-lg transition-ease ">
          <button
            onClick={() => {
              handleClear();
            }}
            className="  px-4 py-4  bg-red-200 text-red-300 rounded-full"
          >
            c
          </button>
          <button
            onClick={() => {
              handleDelete();
            }}
            className="  px-4 py-4   bg-red-200  text-red-300 rounded-full"
          >
            DEL
          </button>
          <button
            onClick={() => {
              handleClick("/");
            }}
            className=" px-4 py-4  bg-orange-300 rounded-full"
          >
            &divide;
          </button>
          <button
            onClick={() => {
              handleClick("*");
            }}
            className=" px-4 py-4  bg-orange-300 rounded-full"
          >
            &times;
          </button>
     
          <button
            onClick={() => {
              handleClick("7");
            }}
            className=" px-4 py-4  bg-gray-300 rounded-full"
          >
            7
          </button>
          <button
            onClick={() => {
              handleClick("8");
            }}
            className=" px-4 py-4  bg-gray-300 rounded-full"
          >
            8
          </button>
          <button
            onClick={() => {
              handleClick("9");
            }}
            className=" px-4 py-4  bg-gray-300 rounded-full"
          >
            9
          </button>
               <button
            onClick={() => {
              handleClick("-");
            }}
            className=" px-4 py-4   bg-orange-300 rounded-full"
          >
            &minus;
          </button>
        
          <button
            onClick={() => {
              handleClick("4");
            }}
            className=" px-4 py-4  bg-gray-300 rounded-full"
          >
            4
          </button>
          <button
            onClick={() => {
              handleClick("5");
            }}
            className=" px-4 py-4 bg-gray-300  rounded-full"
          >
            5
          </button>
          <button
            onClick={() => {
              handleClick("6");
            }}
            className=" px-4 py-4  bg-gray-300 rounded-full"
          >
            6
          </button>
            <button
            onClick={() => {
              handleClick("+");
            }}
            className=" px-4 py-4   bg-orange-300 rounded-full"
          >
            +
          </button>
           <button
            onClick={() => {
              handleClick("1");
            }}
            className=" px-4 py-4  bg-gray-300 rounded-full"
          >
            1
          </button>
        
         
          <button
            onClick={() => {
              handleClick("2");
            }}
            className=" px-4 py-4  bg-gray-300 rounded-full"
          >
            2
          </button>
          <button
            onClick={() => {
              handleClick("3");
            }}
            className="px-4 py-4 bg-gray-300 rounded-full"
          >
            3
          </button>
         
          <button
            onClick={() => {
              handleClick(".");
            }}
            className="px-4 py-4  bg-orange-300 rounded-full"
          >
            .
          </button>
          
             <button
            onClick={() => {
              handleClick("0");
            }}
            className=" px-4 w-full py-4 bg-gray-300 rounded-full"
          >
            0
          </button>
          <button onClick={handleEqual} className=" px-4 py-2  rounded-full bg-green-400 ">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
