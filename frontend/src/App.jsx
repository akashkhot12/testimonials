import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/testimonials")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-center text-3xl font-bold mb-8">Testimonials</h1>
      <div className="flex flex-wrap -mx-4">
        {data.map((d, i) => (
          <div key={i} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{d.name}</h3>
              <p className="text-gray-700 mb-4">{d.subject}</p>
              <div className="flex space-x-2">
                <p className="text-lg">
                  {d.company_name} - {d.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
