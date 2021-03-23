import Head from "next/head";

function Page404() {
  return (
    <>
      <Head>
        <title>testimonialapi 404 Page</title>
        <meta name="description" content="Error 404 Page " />
      </Head>

      <div className="text-center py-16">
        <h1 className="text-2xl py-2">404 ??</h1>
        <h3>Somebody made wrong move...</h3>
        <img
          src="https://assets.website-files.com/5cb09a0317edca4b17c1d245/5cb09a0317edca5fecc1d4f8_new404-01-92.gif"
          alt=""
          className="w-30 h-96 mx-auto"
        />
        <a href="/">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Back to Home
          </button>
        </a>{" "}
      </div>
    </>
  );
}

export default Page404;
