import React from 'react'
import post1 from "../assets/Rectangle 9.png"
import post2 from "../assets/Rectangle 9 (1).png"
import post3 from "../assets/Rectangle 9 (2).png"


const blogPosts = [
  {
    id: 1,
    category: 'Furniture',
    title: 'The Latest Furniture Trends for Spring',
    description: 'Discover the modern trends for the upcoming spring season',
    image: post1,
    author: 'Emily Johnson',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    date: '11 Jan 2023',
    readTime: '5 min read'
  },
  {
    id: 2,
    category: 'Furniture',
    title: 'Modern Furniture Trends for Summer',
    description: 'Explore the modern trends for the upcoming summer season',
    image: post2,
    author: 'Sarah Williams',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    date: '15 Feb 2023',
    readTime: '7 min read'
  },
  {
    id: 3,
    category: 'Furniture',
    title: 'Best Furniture for Small Spaces',
    description: 'Learn how to maximize your small space with smart furniture',
    image: post3 ,
    author: 'Michael Brown',
    authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    date: '20 Mar 2023',
    readTime: '6 min read'
  }
]

const BlogPosts = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="text-center md:text-left md:max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Discover the Latest Trends
            </h2>
            <p className="text-lg text-gray-600">
              Stay Updated With Our Information And Engaging Blog Posts About Modern Furniture And Fashion On The Industry
            </p>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors">
            Explore →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="flex flex-col items-start p-0 w-379px h-254px bg-white shadow-[0px_4px_4px_#D3DAEB] flex-none order-0 grow-0 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 uppercase tracking-wide">{post.category}</p>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">{post.title}</h3>
                <p className="mt-2 text-gray-600">{post.description}</p>
                <div className="mt-4 flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-3"
                    src={post.authorImage}
                    alt={post.author}
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-500">{post.date} • {post.readTime}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogPosts
