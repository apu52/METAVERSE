export default function SatelliteCard({
  name,
  imageUrl,
  description,
  launchDate,
  latitude,
  longitude,
}) {
  return (
    <div className=" bg-gray-800 rounded-xl shadow-md">
      <img
        src={imageUrl}
        alt={`${name} Satellite`}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="p-4">
        <h3 className="text-xl text-white font-bold mb-2">{name}</h3>
        <p className="text-white">{description}</p>
        <div className="mt-2">
          <p className="text-gray-500 text-sm">Launched on: {launchDate}</p>
          {latitude && longitude && (
            <div className="flex mt-2">
              <p className="text-gray-500 text-sm mr-2">Latitude:</p>
              <p className="text-white text-sm">{latitude}</p>
            </div>
          )}
          {latitude && longitude && (
            <div className="flex mt-2">
              <p className="text-gray-500 text-sm mr-2">Longitude:</p>
              <p className="text-white text-sm">{longitude}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
