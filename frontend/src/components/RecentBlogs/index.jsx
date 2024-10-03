import React, { useState, useEffect } from "react";
import BlogPost from "../BlogPost";
import BlogBanner from "../../assets/images/blog-banner.png";
import Post1 from "../../assets/images/post-1.png";
import Post2 from "../../assets/images/post-2.png";
import Post3 from "../../assets/images/post-3.png";
import { GetData } from "../../api/services";

const RecentBlogSection = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const dataPromise = await GetData();
      setData(dataPromise?.data[0]?.attributes?.RecentBlogs);
      console.log(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const featuredPost = {
    blogImage: data?.MainImage?.data?.attributes?.url,
    category: data?.BlogStatus,
    BlogTime: data?.TimeLimit,
    title: data?.BlogTitle,
    Description: data?.Description,
  };

  const recentPosts = data?.BlogPost;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-[1072px] mx-auto">
        <h2 className="text-3xl font-bold mb-8">{data?.RecentBlog}</h2>
        <div className="space-y-8">
          <BlogPost {...featuredPost} isFeature={true} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentPosts?.map((post, index) => (
              <BlogPost
                key={index}
                blogImage={post?.blogImage?.data?.attributes?.url}
                {...post}
              />
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            {data?.BtnText?.ButtonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogSection;
