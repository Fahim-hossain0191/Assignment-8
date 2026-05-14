import Details_page from "@/component/Details_page";
import data from "../../../../data/data.json";

const SeeDetailsPage = async ({ params }) => {
  const { id } = await params; 

  const paramsId = Number(id); // optional but recommended
  console.log(paramsId);

  const product = data.find((p) => p.id === paramsId);
  console.log(product)
  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="container mx-auto pt-24">
      <Details_page product={product} />
    </div>
  );
};

export default SeeDetailsPage;