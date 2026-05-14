import React from 'react';

const Summer_care = () => {
    return (
       <div className="container mx-auto mt-20">
  
  <h2 className="text-4xl font-bold text-center mb-10">
    Summer Care Tips
  </h2>

  <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6" >

    <div className="bg-base-200 p-6 rounded-2xl shadow-lg border border-pink-400 ">
      <h3 className="text-2xl font-bold mb-3">
        Stay Hydrated
      </h3>

      <p>
        Drink plenty of water throughout the day to keep your body cool and energized during hot summer weather.
      </p>
    </div>

    <div className="bg-base-200 p-6 rounded-2xl shadow-lg border border-pink-400">
      <h3 className="text-2xl font-bold mb-3">
        Use Sunscreen
      </h3>

      <p>
        Apply sunscreen with SPF protection before going outside to protect your skin from harmful UV rays.
      </p>
    </div>

    <div className="bg-base-200 p-6 rounded-2xl shadow-lg border border-pink-400">
      <h3 className="text-2xl font-bold mb-3">
        Wear Light Clothes
      </h3>

      <p>
        Choose breathable cotton clothing to stay comfortable and reduce heat during summer days.
      </p>
    </div>

  </div>
</div>
    );
};

export default Summer_care;