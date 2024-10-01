import Link from 'next/link';

export default function NewsPage() {
  return (
    <div>
      <h1>News Page</h1>
      <p>
        <Link href="/news/first-news">First News Item</Link>
      </p>
      <p>
        <Link href="/news/second-news">Second News Item</Link>
      </p>
      <p>
        <Link href="/news/third-news">Third News Item</Link>
      </p>
    </div>
  );
}
