import React from 'react'

export default function CardExample() {
  return (
    <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg bg-purple-200 p-4">
      <img
        className="w-full h-48 object-cover"
        src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="
        alt="Card Image"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">Card Title</h2>
        <p className="text-gray-600 mt-2">
          This is a beautiful card component with an image, title, and description.
        </p>
        <button className="mt-4 bg-purple-400 text-white px-4 py-2 rounded-md hover:bg-purple-500 transition">
          Read More
        </button>
      </div>
    </div>
  )
}
