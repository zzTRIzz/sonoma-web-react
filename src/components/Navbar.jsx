import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-md navbar-light w-100 baloo-2 sticky-top"
        style={{ backgroundColor: 'rgb(245, 245, 247)' }}
      >
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img
              src="/resource/logo/logofill.png"
              alt="Logo"
              width="34"
              height="34"
              className="d-inline-block align-text-top me-2"
            />
            <span
              style={{
                display: 'inline-block',
                verticalAlign: 'middle',
                color: 'rgb(236, 132, 41)',
              }}
              className="fw-bold fs-5"
            >
              Sonoma
            </span>
          </Link>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Content */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Search Bar */}
            <div className="navbar-search mx-3">
              <input
                type="text"
                placeholder="Bạn cần tìm gì?"
                className="search-input"
                disabled // Chỉ để hiển thị, không cho nhập
              />
              <i className="fas fa-search search-icon"></i>
            </div>

            {/* Navbar Links */}
            <ul className="navbar-nav me-auto mx-3 align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  <img src="/resource/icon/store25.svg" alt="" className="mb-1" /> Về cửa hàng
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <img src="/resource/icon/phone25fill.svg" alt="" className="mb-1" /> Liên hệ
                </Link>
              </li>
              <li className="nav-item shadow-lg rounded-5 me-3 mx-2">
                <Link className="nav-link" to="/cart">
                  <img src="/resource/icon/cart25fill.svg" alt="" className="mb-1" /> Giỏ hàng
                </Link>
              </li>
            </ul>

            {/* Login Button */}
            <form className="d-flex justify-content-center">
              <a href="/login">
              <button
                type="button"
                className="btn custom-bg-success-subtle"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                <img src="/resource/icon/account.svg" className="mb-1" /> Đăng nhập
              </button></a>
            </form>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="loginModalLabel">
                Đăng nhập vào Sonoma
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Email/Phone Input */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="(Sử dụng email / Số điện thoại)"
                />
              </div>

              {/* Password Input */}
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Mật khẩu"
                />
              </div>

              {/* Remember Me Checkbox */}
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Ghi nhớ tài khoản
                </label>
              </div>

              {/* Social Login Buttons */}
              <div className="d-flex justify-content-between mb-3">
                <button className="btn btn-outline-secondary w-48">
                  <i className="fab fa-google me-2"></i> Google
                </button>
                <button className="btn btn-outline-primary w-48">
                  <i className="fab fa-facebook-f me-2"></i> Facebook
                </button>
              </div>

              {/* Links */}
              <div className="text-center mb-3">
                <a href="#" className="text-muted">
                  Bạn chưa có tài khoản? Đăng ký
                </a>
                <br />
                <a href="#" className="text-muted">
                  Quên mật khẩu?
                </a>
              </div>
            </div>
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Hủy
              </button>
              <button type="button" className="btn btn-login">
                Đăng nhập
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;