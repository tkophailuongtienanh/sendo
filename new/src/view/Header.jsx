import { Affix, Button, Popover } from "antd";
import { memo } from "react";

const cursor = {
    cursor : "pointer"
}
const QrCode = <a href="https://www.sendo.vn/su-kien/gioi-thieu-sendo-app/">Quét để tải ứng dụng</a>;
const cskh=(
    <>
    <Button type="text" href="https://help.sendo.vn/hc/vi">Trung tâm hỗ trợ</Button>
    <Button type="text" href="https://www.sendo.vn/dang-nhap?return_url=https%3A%2F%2Freturns.sendo.vn%2F">Trả hàng hoàn tiền</Button>
    </>
)
const Header = () => {
  return (
    <div className="">
        <div className="section nav-link">

      <div className="container d-flex ">
        <Popover
          placement="bottomLeft"
          content={QrCode}
          arrow={false}
          trigger="click"
        >
          <div style={cursor}>Tải ứng dụng</div>
        </Popover>
        <Popover
          placement="bottomLeft"
          content={cskh}
          arrow={false}
          trigger="click"
        >
          <div style={cursor}>Chăm sóc khách hàng</div>
        </Popover>
        </div>
        </div>
        <div className="section nav-bar">

      <Affix className="container" offsetTop={0}>
        <div className="">good</div>
      </Affix>
      </div>
      </div>
  );
};
export default memo(Header);
