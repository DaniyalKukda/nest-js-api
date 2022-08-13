import { useState } from 'react';
import Details from "./component/details";
import './App.css';

const App = () => {
  const [value, setValue] = useState('');
  const [details, setDetails] = useState(false);
  const [post, setPost] = useState({});

  const handleChange = event => {
    const result = event.target.value.replace(/\D/g, '');

    setValue(result);
  };
  const sendRequestHandler = async () => {
    try {
      const url = `https://scalio-test-ten.vercel.app/posts/${value}`
      const response = await fetch(url);
      const data = await response.json()
      setPost(data)
      setDetails(true)
    } catch (error) {
      console.log('error: ', error);
    }
  }
  if (details) {
    return <Details post={post} setDetails={setDetails} />
  }
  return (
    <div className='App'>
      <h3>Enter User Id</h3>
      <input
        type="text"
        placeholder="user id"
        value={value}
        onChange={handleChange}
      />
      <button onClick={sendRequestHandler}>Send</button>
    </div>
  );
};

export default App;