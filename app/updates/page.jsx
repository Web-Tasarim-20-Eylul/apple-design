export default async function UpdatesPage() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (response) => response.json()
  );

  if (data.length === 0) {
    return <h1>Yükleniyor...</h1>;
  }

  return (
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {data.map((item) => (
        <div key={item.id} className="bg-gray-100 rounded-lg p-4">
          <h3 className="py-4 text-2xl font-semibold">{item.title}</h3>
          <p className="text-sm text-text/60">
            {item.completed ? "Tamamlandı" : "Başla"}
          </p>
        </div>
      ))}
    </div>
  );
}
