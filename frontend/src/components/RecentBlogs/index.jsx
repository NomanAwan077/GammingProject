import React from "react";
import BlogPost from "../BlogPost";
import BlogBanner from "../../assets/images/blog-banner.png";
import Post1 from "../../assets/images/post-1.png";
import Post2 from "../../assets/images/post-2.png";
import Post3 from "../../assets/images/post-3.png";

const RecentBlogSection = () => {
  const featuredPost = {
    image: BlogBanner,
    category: "FUNDRAISING",
    readTime: "8",
    title:
      "Online Fundraising Options in Canada: Exploring 50/50 and Chase the Ace",
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking overpass is important",
  };

  const recentPosts = [
    {
      image: Post1,
      readTime: "8",
      title: "The worst advice we've ever heard about web",
    },
    {
      image: Post2,
      readTime: "8",
      title: "The worst advice we've ever heard about web",
    },
    {
      image: Post3,
      readTime: "8",
      title: "The worst advice we've ever heard about web",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-[1072px] mx-auto">
        <h2 className="text-3xl font-bold mb-8">Recent Blog</h2>
        <div className="space-y-8">
          <BlogPost {...featuredPost} isFeature={true} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentPosts.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            View All Blogs
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogSection;
