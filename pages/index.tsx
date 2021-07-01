import Head from "next/head";

export default function Home() {
  return (
    <div className="m-12">
      <Head>
        <title>GH Pages Test</title>
        <meta name="description" content="This is a GH pages test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mb-4">
        <h1 className="text-4xl mb-4">GH Pages</h1>

        <p>
          Blurb about GH pages Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </main>

      <footer>This is a footer</footer>
    </div>
  );
}
