import React from 'react';

const Top_brand = () => {
    return (
        <div className="container mx-auto my-20">

  <h2 className="text-4xl font-bold text-center mb-10">
    Top Brands
  </h2>

  <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-6">

    <div className="bg-base-200 rounded-2xl p-8 text-center shadow-lg border border-pink-400">
      <h3 className="text-2xl font-bold">
        Nike
      </h3>

      <p className="mt-3">
        Premium summer fashion and sportswear collection.
      </p>
    </div>

    <div className="bg-base-200 rounded-2xl p-8 text-center shadow-lg border border-pink-400">
      <h3 className="text-2xl font-bold">
        Adidas
      </h3>

      <p className="mt-3">
        Stylish and breathable summer footwear products.
      </p>
    </div>

    <div className="bg-base-200 rounded-2xl p-8 text-center shadow-lg border border-pink-400">
      <h3 className="text-2xl font-bold">
        Puma
      </h3>

      <p className="mt-3">
        Lightweight summer collections for daily comfort.
      </p>
    </div>

    <div className="bg-base-200 rounded-2xl p-8 text-center shadow-lg border border-pink-400">
      <h3 className="text-2xl font-bold">
        Ray-Ban
      </h3>

      <p className="mt-3">
        Trendy sunglasses with UV protection for summer.
      </p>
    </div>

  </div>
</div>
    );
};

export default Top_brand;