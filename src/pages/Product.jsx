import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import './Product.css';

function Product() {
  const [quantity, setQuantity] = useState(1);
  const [selectedStorage, setSelectedStorage] = useState('128GB');
  const [selectedColor, setSelectedColor] = useState('#f0e6d6');

  const handleQuantityChange = (action) => {
    if (action === 'increase' && quantity < 116) {
      setQuantity(quantity + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Trang chủ', path: '/' },
          { label: 'Điện thoại', path: '#' },
          { label: 'iPhone 15 Pro Max', active: true },
        ]}
      />

      <div className="container mt-5">
        {/* Product Overview */}
        <div className="row">
          {/* Left Column: Image Carousel */}
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="product-image-container shadow-sm rounded">
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/2023_9_16_638304560571374532_iphone-15-pro-den-1.jpg"
                      className="d-block w-100 rounded"
                      alt="iPhone 15 Pro Max Beige"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/2023_9_16_638304565863318698_iphone-15-pro-trang-1.jpg"
                      className="d-block w-100 rounded"
                      alt="iPhone 15 Pro Max Black"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/2023_9_16_638304612779650501_iphone-15-pro-xanh-1.jpg"
                      className="d-block w-100 rounded"
                      alt="iPhone 15 Pro Max White"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/2023_9_16_638304626032590721_iphone-15-pro-vang-1.jpg"
                      className="d-block w-100 rounded"
                      alt="iPhone 15 Pro Max Gray"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {/* Thumbnails */}
              <div className="d-flex justify-content-center mt-3">
                <img
                  src="https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/2023_9_16_638304560571374532_iphone-15-pro-den-1.jpg"
                  className={`thumbnail ${selectedColor === '#f0e6d6' ? 'selected' : ''}`}
                  data-bs-target="#carouselExample"
                  data-bs-slide-to="0"
                  onClick={() => setSelectedColor('#f0e6d6')}
                />
                <img
                  src="https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/2023_9_16_638304565863318698_iphone-15-pro-trang-1.jpg"
                  className={`thumbnail ${selectedColor === '#333333' ? 'selected' : ''}`}
                  data-bs-target="#carouselExample"
                  data-bs-slide-to="1"
                  onClick={() => setSelectedColor('#333333')}
                />
                <img
                  src="https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/2023_9_16_638304612779650501_iphone-15-pro-xanh-1.jpg"
                  className={`thumbnail ${selectedColor === '#ffffff' ? 'selected' : ''}`}
                  data-bs-target="#carouselExample"
                  data-bs-slide-to="2"
                  onClick={() => setSelectedColor('#ffffff')}
                />
                <img
                  src="https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/2023_9_16_638304626032590721_iphone-15-pro-vang-1.jpg"
                  className={`thumbnail ${selectedColor === '#666666' ? 'selected' : ''}`}
                  data-bs-target="#carouselExample"
                  data-bs-slide-to="3"
                  onClick={() => setSelectedColor('#666666')}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Product Details */}
          <div className="col-lg-6 col-md-12">
            <h1 className="product-title">iPhone 15 Pro Max Mới</h1>
            <div className="rating mb-3">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star-half-alt checked"></span>
              <span className="ms-2">(1 đánh giá)</span>
            </div>

            {/* Price */}
            <div className="price-section mb-4">
              <span className="current-price">29.990.000 đ</span>
              <span className="original-price">32.990.000 đ</span>
              <span className="discount-badge">-9%</span>
            </div>

            {/* Color Selection */}
            <div className="mb-4">
              <h6 className="section-title">Màu sắc</h6>
              <div className="d-flex">
                <div
                  className={`color-option ${selectedColor === '#f0e6d6' ? 'selected' : ''}`}
                  style={{ backgroundColor: '#f0e6d6' }}
                  onClick={() => setSelectedColor('#f0e6d6')}
                ></div>
                <div
                  className={`color-option ${selectedColor === '#ffffff' ? 'selected' : ''}`}
                  style={{ backgroundColor: '#ffffff' }}
                  onClick={() => setSelectedColor('#ffffff')}
                ></div>
                <div
                  className={`color-option ${selectedColor === '#333333' ? 'selected' : ''}`}
                  style={{ backgroundColor: '#333333' }}
                  onClick={() => setSelectedColor('#333333')}
                ></div>
              </div>
            </div>

            {/* Storage Options */}
            <div className="mb-4">
              <h6 className="section-title">Dung lượng</h6>
              <div className="d-flex flex-wrap">
                {['128GB', '256GB', '512GB', '1TB'].map((storage) => (
                  <button
                    key={storage}
                    className={`storage-btn ${selectedStorage === storage ? 'selected' : ''}`}
                    onClick={() => setSelectedStorage(storage)}
                  >
                    {storage}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-4">
              <h6 className="section-title">Số lượng</h6>
              <div className="d-flex align-items-center">
                <button
                  className="quantity-btn"
                  onClick={() => handleQuantityChange('decrease')}
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  className="quantity-input"
                  readOnly
                />
                <button
                  className="quantity-btn"
                  onClick={() => handleQuantityChange('increase')}
                >
                  +
                </button>
                <span className="ms-3 text-muted">Còn 116 sản phẩm</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="d-flex mb-4">
              <button className="btn btn-add-to-cart me-3">
                <i className="fa fa-shopping-cart me-2"></i> Thêm vào giỏ hàng
              </button>
              <button className="btn btn-buy-now">Mua ngay</button>
            </div>

            {/* Warranty Information */}
            <div className="warranty-info">
              <i className="fa fa-shield-alt me-2"></i>
              Hàng chính hãng - Bảo hành 12 tháng tại trung tâm bảo hành chính hãng Apple
            </div>
          </div>
        </div>

        {/* Tabs: Description and Specifications */}
        <div className="mt-5">
          <ul className="nav nav-tabs mb-3" id="productTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="description-tab"
                data-bs-toggle="tab"
                href="#description"
                role="tab"
                aria-controls="description"
                aria-selected="true"
              >
                Mô tả
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="specs-tab"
                data-bs-toggle="tab"
                href="#specs"
                role="tab"
                aria-controls="specs"
                aria-selected="false"
              >
                Thông số kỹ thuật
              </a>
            </li>
          </ul>

          <div className="tab-content p-4 rounded shadow-sm" id="productTabContent">
            <div
              className="tab-pane fade show active"
              id="description"
              role="tabpanel"
              aria-labelledby="description-tab"
            >
              <p>
                iPhone 15 Pro Max là chiếc iPhone cao cấp nhất của Apple với nhiều tính năng đột phá. Máy được trang bị chip A17 Pro mạnh mẽ, camera chuyên nghiệp 48MP, khung titan cứng cáp và màn hình Super Retina XDR OLED 6.7 inch sắc nét.
              </p>
              <p>
                Thiết kế đỏ phá với khung titan titan chuẩn hàng không vũ trụ cực kỳ bền bỉ, iPhone 15 Pro Max không chỉ đẹp mà còn rất bền.
              </p>
              <p>
                Cụm camera sau được nâng cấp mạnh với camera chính 48MP, camera góc siêu rộng và camera tele hỗ trợ zoom quang học 5X.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="specs"
              role="tabpanel"
              aria-labelledby="specs-tab"
            >
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>Màn hình</td>
                    <td>6.7 inch OLED</td>
                  </tr>
                  <tr>
                    <td>Chip</td>
                    <td>A17 Pro</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>48MP + 12MP + 12MP</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>12MP</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>8GB</td>
                  </tr>
                  <tr>
                    <td>Bộ nhớ trong</td>
                    <td>128GB - 1TB</td>
                  </tr>
                  <tr>
                    <td>Pin</td>
                    <td>4422 mAh</td>
                  </tr>
                  <tr>
                    <td>Sạc nhanh</td>
                    <td>20W</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;