import './Login.css';
function Login() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="login-container p-4 shadow-sm rounded">
              <h2 className="login-title mb-4">Đăng nhập vào Sonoma</h2>
  
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
                <a href="/register" className="text-muted">
                  Bạn chưa có tài khoản? Đăng ký
                </a>
                <br />
                <a href="#" className="text-muted">
                  Quên mật khẩu?
                </a>
              </div>
  
              {/* Buttons */}
              <div className="d-flex justify-content-between">
                <button className="btn btn-secondary w-48">Hủy</button>
                <button className="btn btn-login w-48">Đăng nhập</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;