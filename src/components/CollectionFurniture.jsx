import React, { useState } from 'react'
import product1 from "../assets/Rectangle 11.png"
import product2 from "../assets/Rectangle 11 (1).png"
import product3 from "../assets/Rectangle 11 (2).png"
import product4 from "../assets/Rectangle 11 (3).png"
import product5 from "../assets/Rectangle 11 (4).png"
import product6 from "../assets/Rectangle 11 (5).png"
import product7 from "../assets/Rectangle 11 (6).png"
import product8 from "../assets/Rectangle 11 (7).png"

import { useQuery } from "@tanstack/react-query"
import api from "../api/axios"


const products = [
  {
    id: 1,
    name: 'Stylish Soft Chair',
    price: 20.00,
    image: product1,
    colors: ['#000000', '#D4B896', '#8B5E3C'],
  },
  {
    id: 2,
    name: 'Modern Soft Chair',
    price: 35.00,
    image: product2,
    colors: ['#000000', '#FFFFFF', '#9CA3AF'],
  },
  {
    id: 3,
    name: 'Elegant Sofa',
    price: 45.00,
    image: product3,
    colors: ['#D4B896', '#8B5E3C', '#374151'],
  },
  {
    id: 4,
    name: 'Comfort Armchair',
    price: 55.00,
    image: product4,
    colors: ['#111827', '#E5E7EB', '#92400E'],
  },
  {
    id: 5,
    name: 'Luxury Chair',
    price: 65.00,
    image: product5,
    colors: ['#000000', '#C4A484', '#FFFFFF',],
  },
  {
    id: 6,
    name: 'Premium Sofa',
    price: 80.00,
    image:product6,
    colors: ['#374151', '#D1D5DB', '#92400E'],
  },
  {
    id: 7,
    name: 'Classic Recliner',
    price: 70.00,
    image:product7,
    colors: ['#000000', '#8B5E3C', '#D4B896'],
  },
  {
    id: 8,
    name: 'Designer Couch',
    price: 95.00,
    image:product8,
    colors: ['#111827', '#F3F4F6', '#A16207'],
  },
]

const categories = [
  'All Furniture',
  'Bedroom',
  'Living Room',
  'Home Office',
  'Dining Table',
  'More',
]

const CollectionFurniture = () => {
  const [activeCategory, setActiveCategory] = useState('All Furniture')

  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await api.get("/api/categories")
      return response.data
    },
  })

//console.log(data)

const { data: productsData, isLoading: productsLoading, isError: productsError } = useQuery({
  queryKey: ["products"],
  queryFn: async () => {
    const response = await api.get("/api/products")
    return response.data
  },
})
console.log(productsData)

const renderColors = (colors=[]) => {
    return colors.map((color, index) => (
      <span
        key={index}
        className="h-3 w-3 rounded-full border border-gray-300"
        style={{ backgroundColor: color }}
      />
    ))
  }

  return (
    <section className="bg-[#EEF2FB] px-5 py-20">
      <div className="mx-auto max-w-7xl">

        {/* Title & Description */}
        <div className="mb-12 text-left">
          <h2 className="mb-4 text-[42px] font-bold tracking-tight text-gray-800">
            Stylish Collection of Furniture
          </h2>

          <p className="max-w-600px text-base leading-relaxed text-gray-600">
            Stay updated with our information and engaging blog posts about
            modern Furniture and Fashion on the industry
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {data?.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`cursor-pointer whitespace-nowrap rounded-full px-6 py-3 text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-black text-white shadow-lg'
                  : 'border border-gray-200 bg-white text-gray-600 hover:border-black hover:text-black'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
         {productsData?.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Product Image */}
              <div className="h-280px w-full overflow-hidden bg-gray-100">
                <img
                 src={product.imageUrl}
                 alt={product.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>

              {/* Product Information */}
              <div className="p-5">

                {/* Product Name */}
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>

                {/* Available Colors */}
                <div className="mb-4 flex items-center gap-2">
                  {renderColors(product.colors)}
                </div>

                {/* Price & Button */}
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-800">
                    ${product.price.toFixed(2)}
                  </span>

                  <button className="cursor-pointer rounded-full bg-[#D4DCFB] px-5 py-2.5 text-sm font-medium text-black transition-all hover:scale-105 hover:shadow-lg">
                    Add to
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CollectionFurniture