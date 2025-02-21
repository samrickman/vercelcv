export default function Section({ title, children }) {
    return (
      <div className="mt-6">
        <h3 className="text-3xl font-semibold">{title}</h3>
        {children}
      </div>
    );
  }