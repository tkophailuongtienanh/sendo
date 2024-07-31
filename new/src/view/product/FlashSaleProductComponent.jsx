const FlashSaleProductComponent = () => {
  const style = {
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    display: "-webkit-box",
    height: "3.4rem",
    overflow: "hidden",
  };
  return (
    <div className="w-1/5 p-2">
      <div
        onClick={() => {
          window.location.href = `/product/1`;
        }}
        className="bg-white rounded-lg overflow-hidden cursor-pointer"
      >
        <img
          height={"100%"}
          src="https://media3.scdn.vn/img4/2021/05_23/iNCwBVGPRDMk2WoGMApN.jpg"
        />
        <div className="p-2 text-ellipsis" style={style}>
          Váy ngủ mang phong cách hoàng gia quý tộc con nhà giàu
        </div>
        <div className="px-2">
          <span className=" line-through"> 500.000đ</span>{" "}
          <span className="text-red-600">-20%</span>
        </div>
        <div className="px-2 text-lg font-bold text-red-500">250.000đ</div>
        <div className="px-2 pb-2 flex justify-between">
          <span>
            4.2/5<span className="text-yellow-400">★</span>
          </span>
          <span>Hà Nội</span>
        </div>
      </div>
    </div>
  );
};
export default FlashSaleProductComponent;
