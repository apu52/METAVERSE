export default function EventsCard({ name, date, description }) {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="space-events-list">
        <div key={name} className="space-event-card">
          <h3 className="text-xl text-white font-bold mb-2">{name}</h3>
          <p className="text-white">Date: {date}</p>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}
