const ProductComponent = ({
  name,
  imageUrl,
  price,
  discountPrice = 0,
  rate,
  address,
}) => {
  const style = {
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    display: "-webkit-box",
    height: "3.4rem",
    overflow: "hidden",
  };
  const realPriceNum = parseFloat(price) - parseFloat(discountPrice);
  const discountPercent = discountPrice ? parseInt(
    Math.floor((parseFloat(discountPrice) / parseFloat(price)) * 100)
  ):0;
const convertNumString = (number) =>{
    return 
}
  return (
    <div className="w-1/5 p-2">
      <div
        onClick={() => {
          window.location.href = `/product/1`;
        }}
        className="bg-white rounded-lg overflow-hidden cursor-pointer h-full flex flex-col justify-between"
      >
        <div>
          <img height={"100%"} src={imageUrl} />
          <div className="p-2 text-ellipsis" style={style}>
            {name}
          </div>
        </div>
        <div>
          {(discountPrice > 0) &&
          (
            <div className="px-2">
              <span className="line-through">{price.toLocaleString('vi-VN')}</span>{" "}
              <span className="text-red-600">-{discountPercent}%</span>
            </div>
          )}

          <div className="px-2 text-lg font-bold text-red-500">
            {realPriceNum.toLocaleString('vi-VN')}đ
          </div>
          <div className="px-2 pb-2 flex justify-between">
            <span>
              {rate}/5<span className="text-yellow-400">★</span>
            </span>
            <span>{address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductComponent;
