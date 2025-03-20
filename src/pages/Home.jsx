import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

function Home() {
  // Dữ liệu sản phẩm cho Điện thoại
  const phoneProducts = [
    {
      img: '/resource/img/iphone/iphone-13-pro-max-blue-1-2-3-650x650-2.webp',
      name: 'iPhone 13 Pro Max 128GB',
      price: 27990000,
      old: 31990000,
      reduce: 12,
      rate_star: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>',
    },
    {
      img: '/resource/img/iphone/iphone-14-pro-den-1-1.jpg',
      name: 'iPhone 14 Pro 128GB',
      price: 29990000,
      old: 34990000,
      reduce: 14,
      rate_star: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span>',
    },
    {
      img: '/resource/img/samsung/s23-ultra-tim.webp',
      name: 'Samsung Galaxy S23 Ultra 256GB',
      price: 31990000,
      old: 36990000,
      reduce: 13,
      rate_star: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>',
    },
    {
      img: '/resource/img/samsung/a54.webp',
      name: 'Samsung Galaxy A54 128GB',
      price: 8990000,
      old: 10990000,
      reduce: 18,
      rate_star: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span>',
    },
    {
      img: '/resource/img/iphone/iphone-se-red-1-650x650-1.webp',
      name: 'iPhone SE 2022 64GB',
      price: 10990000,
      old: 12990000,
      reduce: 15,
      rate_star: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span>',
    },
  ];

  // Dữ liệu sản phẩm cho Laptop
  const laptopProducts = [
    {
      img: '/resource/img/laptop/apple-macbook-air-m2-2022-10-core-gpu-xanh-650x650-1.webp',
      name: 'MacBook Air M2 2022 256GB',
      price: 27990000,
      old: 31990000,
      reduce: 12,
      rate_star: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>',
    },
    {
      img: '/resource/img/laptop/macprom2.webp',
      name: 'MacBook Pro M2 2022 512GB',
      price: 35990000,
      old: 39990000,
      reduce: 10,
      rate_star: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span>',
    },
    {
      img: '/resource/img/laptop/gaming32022.webp',
      name: 'Laptop Gaming ASUS TUF 2022',
      price: 22990000,
      old: 25990000,
      reduce: 11,
      rate_star: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>',
    },
    {
      img: '/resource/img/laptop/legion5.webp',
      name: 'Lenovo Legion 5 2022 512GB',
      price: 24990000,
      old: 28990000,
      reduce: 13,
      rate_star: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span>',
    },
    {
      img: '/resource/img/laptop/Surface pro7.webp',
      name: 'Microsoft Surface Pro 7 128GB',
      price: 18990000,
      old: 21990000,
      reduce: 14,
      rate_star: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>',
    },
  ];

  // Dữ liệu sản phẩm cho Máy tính bảng
  const tabletProducts = [
    {
      img: '/resource/img/ipad/ipad-pro-2021-11inch-grey_3.webp',
      name: 'iPad Pro 2021 11-inch 128GB',
      price: 19990000,
      old: 22990000,
      reduce: 13,
      rate_star: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>',
    },
    {
      img: '/resource/img/ipad/ipadmini6.webp',
      name: 'iPad Mini 6 64GB',
      price: 12990000,
      old: 14990000,
      reduce: 13,
      rate_star: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span>',
    },
    {
      img: '/resource/img/ipad/samsung-galaxy-tab-s8-002.webp',
      name: 'Samsung Galaxy Tab S8 128GB',
      price: 17990000,
      old: 20990000,
      reduce: 14,
      rate_star: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>',
    },
    {
      img: '/resource/img/ipad/Xiaomipad5.webp',
      name: 'Xiaomi Pad 5 128GB',
      price: 8990000,
      old: 10990000,
      reduce: 18,
      rate_star: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span>',
    },
    {
      img: '/resource/img/ipad/tab_s8_ultra.webp',
      name: 'Samsung Galaxy Tab S8 Ultra 256GB',
      price: 27990000,
      old: 31990000,
      reduce: 12,
      rate_star: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>',
    },
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Trang chủ', path: '/', active: true }]} />
      <div className="container-fluid mt-4">
        {/* Banner */}
        <div className="container-xl">
          <div className="row justify-content-around">
            <div className="col-xl-4 mb-3">
              <p className="fw-bold fs-3">iPhone</p>
              <video autoPlay loop muted className="rounded-5 w-100">
                <source src="/resource/banner/mp4iphone.mp4" type="video/mp4" />
                Video không tải được. Kiểm tra file tại /resource/banner/mp4iphone.mp4
              </video>
            </div>
            <div className="col-xl-4 mb-3">
              <p className="fw-bold fs-3">Macbook</p>
              <video autoPlay loop muted className="rounded-5 w-100">
                <source src="/resource/banner/mp4mac.mp4" type="video/mp4" />
                Video không tải được. Kiểm tra file tại /resource/banner/mp4mac.mp4
              </video>
            </div>
            <div className="col-xl-4 mb-3 d-flex flex-column align-items-center">
              <p className="fw-bold fs-3">Deal hời mua ngay</p>
              <img
                className="rounded-5 w-90 mb-2"
                style={{ height: '132px' }}
                src="/resource/banner/minibannneripad.webp"
                alt="iPad Banner"
              />
              <img
                className="rounded-5 w-90 mb-2"
                style={{ height: '132px' }}
                src="/resource/banner/minibannerlaptop.webp"
                alt="Laptop Banner"
              />
            </div>
          </div>
        </div>

        {/* Điện thoại nổi bật */}
        <div className="container">
          <div className="d-flex bd-highlight mb-3 align-items-center">
            <div className="me-auto p-2 bd-highlight">
              <h2 className="fw-bold category-title">Điện thoại nổi bật</h2>
            </div>
            <div className="p-2 bd-highlight d-flex align-items-center">
              <a href="#" className="btn btn-brand me-2">iPhone</a>
              <a href="#" className="btn btn-brand me-2">Samsung</a>
              <a href="#" className="btn btn-brand me-2">Xiaomi</a>
              <a href="#" className="btn btn-brand me-2">Oppo</a>
              <a href="#" className="btn btn-view-all">Xem tất cả</a>
            </div>
          </div>
          <div className="row d-flex justify-content-between row-cols-lg-5">
            {phoneProducts.map((p, index) => (
              <div key={index} className="col mb-3">
                <Link to="/product" style={{ textDecoration: 'none' }}>
                  <div className="card css-card border-0 h-100">
                    <h6 className="css-giamgia position-absolute start-0 top-0 p-1 m-2">Giảm đến {p.reduce}%</h6>
                    <div className="card-body text-center">
                      <div className="w-100" style={{ height: '200px' }}>
                        <img src={p.img} alt={p.name} className="w-100 img-css" style={{ objectFit: 'contain', height: '100%' }} />
                      </div>
                      <p className="card-title mt-2 fw-bold" style={{ fontSize: '16px', minHeight: '48px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {p.name}
                      </p>
                      <p className="css-moneys align-content-center">
                        {p.price.toLocaleString()}đ
                        <span className="ms-2">{p.old.toLocaleString()}đ</span>
                      </p>
                      <button className="btn w-100 btnGioHangHTML mt-2">Thêm vào giỏ hàng</button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Laptop xu hướng */}
        <div className="container">
          <div className="d-flex bd-highlight mb-3 align-items-center">
            <div className="me-auto p-2 bd-highlight">
              <h2 className="fw-bold category-title">Laptop xu hướng</h2>
            </div>
            <div className="p-2 bd-highlight d-flex align-items-center">
              <a href="#" className="btn btn-brand me-2">Dell</a>
              <a href="#" className="btn btn-brand me-2">Macbook</a>
              <a href="#" className="btn btn-brand me-2">Lenovo</a>
              <a href="#" className="btn btn-brand me-2">HP</a>
              <a href="#" className="btn btn-view-all">Xem tất cả</a>
            </div>
          </div>
          <div className="row d-flex justify-content-between row-cols-lg-5">
            {laptopProducts.map((p, index) => (
              <div key={index} className="col mb-3">
                <div className="card css-card border-0 h-100">
                  <h6 className="css-giamgia position-absolute start-0 top-0 p-1 m-2">Giảm đến {p.reduce}%</h6>
                  <div className="card-body text-center">
                    <div className="w-100" style={{ height: '200px' }}>
                      <img src={p.img} alt={p.name} className="w-100 img-css" style={{ objectFit: 'contain', height: '100%' }} />
                    </div>
                    <p className="card-title mt-2 fw-bold" style={{ fontSize: '16px', minHeight: '48px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {p.name}
                    </p>
                    <p className="css-moneys align-content-center">
                      {p.price.toLocaleString()}đ
                      <span className="ms-2">{p.old.toLocaleString()}đ</span>
                    </p>
                    <button className="btn w-100 btnGioHangHTML mt-2">Thêm vào giỏ hàng</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Máy tính bảng */}
        <div className="container">
          <div className="d-flex bd-highlight mb-3 align-items-center">
            <div className="me-auto p-2 bd-highlight">
              <h2 className="fw-bold category-title">Máy tính bảng</h2>
            </div>
            <div className="p-2 bd-highlight d-flex align-items-center">
              <a href="#" className="btn btn-brand me-2">iPad</a>
              <a href="#" className="btn btn-brand me-2">Samsung</a>
              <a href="#" className="btn btn-brand me-2">Xiaomi</a>
              <a href="#" className="btn btn-brand me-2">Huawei</a>
              <a href="#" className="btn btn-view-all">Xem tất cả</a>
            </div>
          </div>
          <div className="row d-flex justify-content-between row-cols-lg-5">
            {tabletProducts.map((p, index) => (
              <div key={index} className="col mb-3">
                <div className="card css-card border-0 h-100">
                  <h6 className="css-giamgia position-absolute start-0 top-0 p-1 m-2">Giảm đến {p.reduce}%</h6>
                  <div className="card-body text-center">
                    <div className="w-100" style={{ height: '200px' }}>
                      <img src={p.img} alt={p.name} className="w-100 img-css" style={{ objectFit: 'contain', height: '100%' }} />
                    </div>
                    <p className="card-title mt-2 fw-bold" style={{ fontSize: '16px', minHeight: '48px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {p.name}
                    </p>
                    <p className="css-moneys align-content-center">
                      {p.price.toLocaleString()}đ
                      <span className="ms-2">{p.old.toLocaleString()}đ</span>
                    </p>
                    <button className="btn w-100 btnGioHangHTML mt-2">Thêm vào giỏ hàng</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Offcanvas Danh mục */}
      <div className="offcanvas offcanvas-start" style={{ width: '200px' }} data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="flex-shrink-0 p-3 bg-white">
          <Link to="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
            <span className="fs-5 fw-semibold">Sonoma</span>
          </Link>
          <ul className="list-unstyled ps-0">
            <li className="mb-1">
              <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                Trang chủ
              </button>
              <div className="collapse show" id="home-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><Link to="/" className="link-dark rounded">Trang chính</Link></li>
                  <li><Link to="/about" className="link-dark rounded">Về chúng tôi</Link></li>
                  <li><Link to="/contact" className="link-dark rounded">Liên hệ</Link></li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                Điện thoại
              </button>
              <div className="collapse" id="dashboard-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="#" className="link-dark rounded">iPhone</a></li>
                  <li><a href="#" className="link-dark rounded">Xiaomi</a></li>
                  <li><a href="#" className="link-dark rounded">Oppo</a></li>
                  <li><a href="#" className="link-dark rounded">Samsung</a></li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                Máy tính bảng
              </button>
              <div className="collapse" id="orders-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="#" className="link-dark rounded">iPad</a></li>
                  <li><a href="#" className="link-dark rounded">Samsung</a></li>
                  <li><a href="#" className="link-dark rounded">Xiaomi</a></li>
                  <li><a href="#" className="link-dark rounded">Huawei</a></li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#laptop-collapse" aria-expanded="false">
                Laptop
              </button>
              <div className="collapse" id="laptop-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="#" className="link-dark rounded">MacBook</a></li>
                  <li><a href="#" className="link-dark rounded">Dell</a></li>
                  <li><a href="#" className="link-dark rounded">Lenovo</a></li>
                  <li><a href="#" className="link-dark rounded">HP</a></li>
                </ul>
              </div>
            </li>
            <li className="border-top my-3"></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;