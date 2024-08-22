import { createContext, useEffect, useRef, useState } from "react";
export const ContextApp = createContext();

const AppContext = ({ children }) => {
  const [chatValue, setChatValue] = useState("");
  const [message, setMessage] = useState([
  ]);
  const msgEnd = useRef(null);

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [message]);

  // button Click function
  const handleSend = async () => {
    const text = chatValue;
    setChatValue("");
    setMessage([...message, { text, isBot: false }]);
    const res = text
    setMessage([
      ...message,
      { text, isBot: false },
      { text: res, isBot: true },
    ]);
  };

  // Enter Click function
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };
  return (
    <ContextApp.Provider
      value={{
        chatValue,
        setChatValue,
        handleSend,
        message,
        msgEnd,
        handleKeyPress,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};
export default AppContext;
