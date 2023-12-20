import Link from 'next/link';

function HomePage() {
  return (
    <>
      <div className="pr-40 pt-40 pl-20 mb-4">
        <span>
          Explore the Star Wars Characters <br />
          and Create Your Own Squad! <br />
        </span>
        <Link href="/characters">
          <button className="text-4xl mt-4 p-2 border border-r-2 rounded-lg cursor-pointer">
            Let's Start!
          </button>
        </Link>
      </div>
      <img src="/images/background-homepage.jpg" alt="bg-homepage"></img>
      {/* <div>Authentication From will be Here!</div> */}
    </>
  );
}

export default HomePage;
