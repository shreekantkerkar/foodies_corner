const Shimmer = () => {
    return (
      <div className="shimmer-container flex flex-wrap gap-4">
        {Array(9).fill(null).map((_, index) => (
          <div
            key={index}
            className="w-[300px] h-[400px] rounded-lg bg-gray-200 relative overflow-hidden"
          >
            <div className="w-full h-1/2 bg-gray-300 animate-pulse"></div>
            <div className="p-4 flex flex-col gap-2">
              <div className="w-3/4 h-4 bg-gray-800 animate-pulse"></div>
              <div className="w-1/2 h-4 bg-gray-800 animate-pulse"></div>
              <div className="w-3/4 h-4 bg-gray-800 animate-pulse"></div>
              <div className="w-1/2 h-4 bg-gray-800 animate-pulse"></div>
              <div className="w-3/4 h-4 bg-gray-800 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Shimmer;
  