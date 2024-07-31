import { Affix, Button, Popover } from "antd";
import { memo } from "react";

const cursor = {
  cursor: "pointer",
};
const QrCode = (
  <a href="https://www.sendo.vn/su-kien/gioi-thieu-sendo-app/">
    Quét để tải ứng dụng
  </a>
);
const cskh = (
  <div className="flex-col d-flex text-left">
    <Button type="text" href="https://help.sendo.vn/hc/vi">
      Trung tâm hỗ trợ
    </Button>
    <Button
      type="text"
      href="https://www.sendo.vn/dang-nhap?return_url=https%3A%2F%2Freturns.sendo.vn%2F"
    >
      Trả hàng hoàn tiền
    </Button>
  </div>
);
const Header = () => {
  return (
    <div className="">
      <div className="section nav-link">
        <div className="container d-flex gap-4">
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
          <a href="https://www.sendo.vn/nhacungcap">Nhà cung cấp</a>
        </div>
      </div>
      <div className="section nav-bar">
        <Affix className="container" offsetTop={0}>
            <div className="flex content-center">
          <div class="logo content-center pr-5">
            <a aria-label="sendo" href="/">
              <svg viewBox="0 0 87 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m69.052 12.375-3.097 16.548a44.418 44.418 0 0 0-.74 6.633h-4.378l.27-2.94h-.068a6.042 6.042 0 0 1-5.251 3.008c-2.761 0-4.983-2.188-4.983-6.154 0-5.675 4.04-10.872 10.1-10.872.74 0 1.481.137 2.222.41l1.212-6.564 4.713-.069zm-6.666 10.394a2.664 2.664 0 0 0-1.885-.547c-2.828 0-4.848 3.35-4.848 6.496 0 1.983.875 3.077 2.222 3.077 1.414 0 3.03-1.436 3.636-4.581l.875-4.445zM4.481 30.017a10.123 10.123 0 0 0 5.252 1.436c1.818 0 3.501-.889 3.501-2.667 0-1.299-.942-2.12-2.962-3.145-2.424-1.3-4.646-3.009-4.646-5.95 0-4.512 3.905-7.316 8.753-7.316 2.693 0 4.31.616 5.252 1.163l-1.481 4.034a8.713 8.713 0 0 0-4.108-1.025c-2.222 0-3.366 1.162-3.366 2.393 0 1.299 1.346 2.12 3.232 3.145 2.693 1.436 4.444 3.283 4.444 5.95 0 4.991-4.108 7.59-9.023 7.59-3.097 0-5.32-.821-6.33-1.573l1.482-4.035zm27.606 4.308a13.756 13.756 0 0 1-5.992 1.3c-4.579 0-6.935-2.668-6.935-6.839 0-4.991 3.568-10.12 9.359-10.12 3.232 0 5.588 1.847 5.588 4.855 0 4.171-3.972 5.676-10.436 5.54 0 .615.202 1.162.471 1.64.606.82 1.684 1.3 3.098 1.3 1.548 0 3.097-.342 4.51-1.026l.338 3.35zm-4.174-12.24c-2.222 0-3.434 1.846-3.771 3.35 3.703.07 5.521-.478 5.521-1.982 0-.82-.606-1.368-1.75-1.368zm5.52 13.471 2.088-11.35c.404-2.052.74-4.24.875-5.676h4.242l-.404 3.077h.068a6.707 6.707 0 0 1 5.656-3.077c2.625 0 4.107 1.64 4.107 4.444 0 .958-.135 1.847-.27 2.804l-1.818 9.778h-4.713l1.75-9.368c.135-.615.135-1.23.135-1.846 0-1.163-.404-1.915-1.548-1.915-1.549 0-3.367 1.983-3.973 5.54l-1.414 7.59h-4.78zM84 25.3c0 5.95-3.973 10.325-9.561 10.325-4.107 0-6.8-2.735-6.8-6.77 0-5.675 3.904-10.325 9.56-10.325 4.31.069 6.8 3.078 6.8 6.77m-11.445 3.487c0 1.915.942 3.146 2.558 3.146 2.626 0 4.04-3.83 4.04-6.633 0-1.504-.606-3.077-2.558-3.077-2.694 0-4.107 4.034-4.04 6.565"
                  fill="#fff"
                ></path>
              </svg>
            </a>
          </div>
          <div class="nav-category content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              version="1.1"
              class="d7ed-SwZDZ2"
            >
              <path
                d="M9 2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5zm0 2H4v5h5V4zm11-2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5zm0 2h-5v5h5V4zM9 13a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h5zm0 2H4v5h5v-5zm8.5-2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5z"
                fill="#fff"
                fill-rule="nonzero"
              ></path>
            </svg>
          </div>
          </div>
        </Affix>
      </div>
    </div>
  );
};
export default memo(Header);
