export default function NavLink({ href, children }) {
  return (
    <div
      className={`relative ${isCurrent ? "border-b-2 border-yellow-500" : ""}`}
    >
      <a
        href={href}
        className="hover:text-yellow-500 text-white transition duration-300"
      >
        {children}
      </a>
    </div>
  );
}
