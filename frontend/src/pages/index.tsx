import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="home">
        <img src="/images/upbeat.png" />
        <Link href="/playerPage" className="menutext">
          <h1>Start</h1>
        </Link>
        <Link href="/configsPage" className="menutext">
          <h1>Configs</h1>
        </Link>
        <Link href="/howtoplayPage" className="menutext">
          <h1>How To play ?</h1>
        </Link>
      </div>
    </>
  );
}
