import { useState } from 'react';
import getJoke from '../api/jokeData';

const JokeSetupPage = () => {
  const [jokeSetup, setJokeSetup] = useState('');
  const [jokeDelivery, setJokeDelivery] = useState('');
  const [buttonText, setButtonText] = useState('Get Joke');

  const handleJoke = () => {
    getJoke().then((jokeData) => {
      setJokeSetup(jokeData.setup);
      setJokeDelivery(jokeData.delivery);
      setButtonText('Get Punchline');
    });
  };
  const showPunchline = () => {
    setButtonText('Get Another Joke');
  };

  return (
    <div className="mt-4 p-4 w-80 ">
      <h2 className="display-2">{jokeSetup}</h2>
      {buttonText === 'Get Punchline' ? (
        <>
          <button type="button" className="btn btn-secondary mt-5" onClick={showPunchline}>
            {buttonText}
          </button>
        </>
      ) : (
        <>
          <h4 className="text-light display-6 mt-5">{jokeDelivery}</h4>
          <button type="button" className="btn btn-secondary mt-5" onClick={handleJoke}>
            {buttonText}
          </button>
        </>
      )}
    </div>
  );
};

export default JokeSetupPage;
