export default function NewsDetailPage({ params }) {
  return (
    <div>
      <h1>News Detail Page</h1>
      <p>News ID: {params.id}</p>
    </div>
  );
}
