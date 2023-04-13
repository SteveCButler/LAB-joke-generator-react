import JokeSetup from './jokeSetup';

function Home() {
  return (
    <div
      className="text-center w-80 d-flex flex-column "
      style={{
        height: '90vh',
        padding: '30px',
        // maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1 className="text-light display-1 w-75 mx-auto">The Joke Generator</h1>
      <JokeSetup />
    </div>
  );
}

export default Home;
