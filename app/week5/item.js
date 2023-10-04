export default function Item({ item }) {
    return (
      <div className="bg-blue-300 w-full max-w-xs m-4 p-2">
        <h3 className="text-xl font-bold">{item.name}</h3>
        <p>quantity: {item.quantity}</p>
        <p>category: {item.category}</p>
      </div>
    );
  }
  