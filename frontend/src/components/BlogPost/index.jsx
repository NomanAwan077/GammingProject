const BlogPost = ({
  image,
  category,
  readTime,
  title,
  description,
  isFeature = false,
}) => (
  <div
    className={`bg-white rounded-lg overflow-hidden shadow-md ${
      isFeature ? "md:flex min-h-[381px]" : "flex p-4 gap-2"
    }`}
  >
    <div className={`${isFeature ? "md:w-1/2 " : "min-w-[96px]"}`}>
      <img
        src={image}
        alt={title}
        className={`object-cover ${
          isFeature ? "w-full h-full " : "w-[96px] h-[96px]"
        }`}
      />
    </div>
    <div className={`${isFeature ? "md:w-1/2" : ""}`}>
      <div className="flex items-center mb-2">
        {category && (
          <span className="bg-blue-500 text-white text-xs font-semibold mr-2  rounded ps-2">
            {category}
          </span>
        )}
        <span className="text-gray-600 text-sm">{readTime} MIN READ</span>
      </div>
      <h3 className={`font-bold mb-2 ${isFeature ? "text-2xl" : "text-lg"}`}>
        {title}
      </h3>
      {description && <p className="text-gray-700 mb-4">{description}</p>}
      {isFeature && (
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-500 bg-white rounded-lg hover:bg-blue-50 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Read More
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      )}
    </div>
  </div>
);
export default BlogPost;
