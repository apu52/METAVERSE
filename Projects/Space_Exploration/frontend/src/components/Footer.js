export default function Footer(params) {
  return (
    <>
      <footer>
        <div className="flex flex-row justify-around">
          <div className=" text-white flex gap-3">
            <p>Website &copy; 2023</p>
            <p className=" text-gray-500">
              Designed and Developed by{" "}
              <span className="text-white">CODER THINGS</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
