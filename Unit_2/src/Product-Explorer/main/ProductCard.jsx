import React from 'react'
import { Link } from "react-router-dom";


export default function ProductCard({pro}) {
  return (
      <div
          key={pro.id}
          className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300"
      >

          <img
              src={pro.thumbnail}
              alt={pro.title}
              className="w-full h-48 object-cover"
          />

          <div className="p-4">

              <p className="text-lg font-semibold text-white">
                  {pro.title}
              </p>

              <p className="text-xl font-bold text-blue-400 mt-2">
                  ${pro.price}
              </p>

              <Link
                  to={`/products/${pro.id}`}
                  className="block w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg transition"
              >
                  View Product
              </Link>

          </div>

      </div>
  )
}
