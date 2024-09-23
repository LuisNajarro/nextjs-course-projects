export default function MealPage({ params }) {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Meal {params.slug}
      </h1>
    </main>
  );
}
