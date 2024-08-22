const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap justify-center gap-6">
      {Array(8).fill(null).map((_, index) => (
        <div
          key={index}
          className="w-[300px] h-[400px] rounded-lg bg-gray-200 overflow-hidden"
        >
          <div className="w-full h-1/2 bg-gray-300 animate-pulse"></div>
          <div className="p-4 flex flex-col gap-3">
            <div className="w-3/4 h-4 bg-gray-400 animate-pulse rounded"></div>
            <div className="w-1/2 h-4 bg-gray-400 animate-pulse rounded"></div>
            <div className="w-3/4 h-4 bg-gray-400 animate-pulse rounded"></div>
            <div className="w-1/2 h-4 bg-gray-400 animate-pulse rounded"></div>
            <div className="w-3/4 h-4 bg-gray-400 animate-pulse rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
