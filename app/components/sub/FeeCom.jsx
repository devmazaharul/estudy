export default function FeeCom({ title, desc = "", price, discount }) {
  return (
    <>
      <div className="w-fit cursor-pointer m-2 hover:bg-gray-50 border p-4 rounded-lg shadow-sm">
        <h1 className="text-xl capitalize text-center">{title || ""}</h1>
        <p className="text-gray-500">
          {desc.length > 70 ? desc.slice(0, 70) + "..." : desc || ""}
        </p>
        <div className="flex gap-1 w-fit mx-auto items-center py-4">
          <p className="">${price || 0} </p> -
          <p className="b">{discount || 0}% (Less)</p>
        </div>
        <p className="bg-green-100 w-fit mx-auto px-1  rounded-md text-green-600">
          {" "}
          ${Math.ceil(price/100*(100-discount))}
        </p>
      </div>
    </>
  );
}
