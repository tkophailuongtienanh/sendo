import { Breadcrumb, Collapse, Layout, Space } from "antd";
import Sider from "antd/es/layout/Sider";
import { memo, useState } from "react";
import { useParams } from "react-router-dom";
import ProductComponent from "./ProductComponent";
import FlashSaleProductComponent from "./FlashSaleProductComponent";

const ProductList = () => {
  const [categoryName, setCategoryName] = useState("Thể loại");
  const [data, setData] = useState([]);
  const { categoryId, search } = useParams();

  const siderStyle = {
    textAlign: "center",
    color: "#000",
    backgroundColor: "#fff",
  };
  const items = [
    {
      key: "1",
      label: <div className="font-bold">Khoảng giá</div>,
      children: (
        <div className="flex flex-col">
          <span>Thấp nhất</span>
          <input type="text" className="shrink border rounded" placeholder="" />
          <span className="shrink">Cao nhất</span>
          <input type="text" className="shrink border rounded" placeholder="" />
          <button className="bg-red-600 text-white rounded mt-2">Lọc</button>
        </div>
      ),
    },
  ];
  return (
    <div className="container pb-5">
      <Breadcrumb
        className="mt-2"
        items={[
          {
            title: <a href="/">Sendo.vn</a>,
          },
          {
            title: `${search ? "Kết quả tìm kiếm" : categoryName}`,
          },
        ]}
      />
      <div className="mb-5">
        <span className="font-bold text-lg mr-2">
          {search ? search : categoryName}
        </span>
        <span>
          Tìm thấy {data.length > 1000 ? "hơn 1000" : data.length} sản phẩm
        </span>
      </div>
      <div className="flex items-start">
        <div className="basis-1/5 shrink-0 py-2">
          <div className="bg-white h-full rounded-lg p-2">
            <div>
              <Collapse defaultActiveKey={["1"]} ghost items={items} />
            </div>
          </div>
        </div>
        <div className="flex grow flex-wrap items-stretch">
          <ProductComponent
            name="Váy ngủ mang phong cách hoàng gia quý tộc con nhà giàu"
            imageUrl="https://media3.scdn.vn/img4/2021/05_23/iNCwBVGPRDMk2WoGMApN.jpg"
            price={250000}
            discountPrice={10000}
            rate="4.5"
            address="Hà Nội"
          />
        </div>
      </div>
    </div>
  );
};
export default memo(ProductList);
