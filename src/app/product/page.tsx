"use client";

import { useSearchParams } from "next/navigation";
import productDetails from "@/data/productDetails.json";

export default function ProductPage() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");

  // Find product details based on title
  const product = productDetails.find((item) => item.title === title);

  if (!product) {
    return <div className="text-center py-20">Produk tidak ditemukan.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-orange-500">{product.title}</h1>
        <p className="text-lg text-gray-700 mt-4">{product.type}</p>
        <p className="text-lg text-gray-700">{product.price}</p>
        <p className="text-lg text-gray-700">{product.customTrip}</p>
        <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md">
          {product.contact}
        </button>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md">
          {product.book}
        </button>

        <h2 className="text-xl font-semibold mt-8">Itinerary / Tentatif</h2>
        {product.itinerary.map((day, index) => (
          <div key={index} className="mt-4">
            <h3 className="font-bold">{day.day}</h3>
            <ul className="list-disc ml-6">
              {day.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}

        <h2 className="text-xl font-semibold mt-8">Termasuk</h2>
        <ul className="list-disc ml-6">
          {product.includes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-8">Tidak Termasuk</h2>
        <ul className="list-disc ml-6">
          {product.excludes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-8">Catatan</h2>
        <ul className="list-disc ml-6">
          {product.notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}