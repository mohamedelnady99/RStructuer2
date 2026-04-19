// import notFound from "@/assets/Auth/svgexport-1.svg";

function UnAuth() {
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 text-center p-4">
      <div className="w-32 h-32 bg-red-200 rounded-full flex items-center justify-center shadow-lg mb-6">
        {/* <img src={notFound} alt="Forbidden Icon" className="w-3/4 h-3/4" /> */}
      </div>
      <h1 className="text-4xl font-bold text-red-600 mb-2">Forbidden</h1>
      <h1 className="text-6xl font-extrabold text-gray-800 mb-4">403</h1>
      <p className="text-lg text-gray-700 mb-6">
        You don't have permission to access this resource.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-red-500 text-white font-semibold rounded shadow-lg hover:bg-red-700 transition-all duration-300"
      >
        Back to Home
      </a>
    </div>
  );
}

export default UnAuth;
