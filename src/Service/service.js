export const sendMsgToAI = async (msg) => {
    const API_URL="https://reqres.in/api/users?page=2"
    const requestOptions = {
      method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${process.env.REACT_APP_GPT_KEY}`,
    //   },
    //   body: JSON.stringify({}),
    };
    try {
      const response = await (await fetch(API_URL, requestOptions)).json();
    //   const response = await (await fetch(API_URL, requestOptions));
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  