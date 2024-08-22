const ResMenuShimmer = () => {
    return (
      <div className="flex flex-col items-center p-10 font-[Poppins]">
        {/* Shimmer for Restaurant Name and Cuisines */}
        <div className="w-1/3 h-8 bg-gray-300 animate-pulse rounded mb-4"></div>
        <div className="w-1/4 h-6 bg-gray-300 animate-pulse rounded mb-10"></div>
  
        {/* Shimmer for Categories and Items */}
        <div className="w-1/2 flex flex-col gap-10">
          {Array(4).fill(null).map((_, index) => (
            <div key={index}>
              {/* Category Title */}
              <div className="w-1/4 h-6 bg-gray-300 animate-pulse rounded mb-4"></div>
  
              {/* Shimmer for Items */}
              {Array(3).fill(null).map((_, idx) => (
                <div
                  key={idx}
                  className="p-4 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                >
                  <div className="w-9/12">
                    <div className="py-2">
                      <div className="h-4 bg-gray-300 animate-pulse rounded w-3/4 mb-2"></div>
                    </div>
                    <div className="h-4 bg-gray-300 animate-pulse rounded w-1/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 animate-pulse rounded w-full mb-2"></div>
                  </div>
                  <div className="w-3/12 p-4 flex items-center">
                    <div className="w-full h-24 bg-gray-300 animate-pulse rounded-md"></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ResMenuShimmer;
  