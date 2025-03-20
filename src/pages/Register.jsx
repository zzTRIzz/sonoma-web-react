import Breadcrumb from '../components/Breadcrumb';

function Register() {
  return (
    <>
      <Breadcrumb items={[
        { label: 'Trang chủ', path: '/' },
        { label: 'Đăng ký', active: true }
      ]} />
      <div className="container-sm mt-4">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="d-flex justify-content-center m-3 mb-4">
                <h5 className="modal-title">
                  Đăng ký trở thành thành viên của <span style={{ color: 'rgb(235, 137, 81)' }} className="fw-semibold">Sonoma</span> với
                </h5>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingName" placeholder="Họ và tên" />
                <label htmlFor="floatingName">Nhập họ và tên của bạn</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingPhone" placeholder="Số điện thoại" />
                <label htmlFor="floatingPhone">Nhập số điện thoại</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingEmail" placeholder="Email" />
                <label htmlFor="floatingEmail">Nhập địa chỉ email</label>
              </div>
              <div className="form-floating mb-1">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Mật khẩu" />
                <label htmlFor="floatingPassword">Mật khẩu</label>
              </div>
              <label className="mb-2 mx-2" style={{ fontSize: '12px', fontStyle: 'italic' }}>
                Mật khẩu tối thiểu 6 ký tự, có ít nhất 1 chữ và 1 số. (VD: 12345a)
              </label>
              <div className="form-floating">
                <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="Nhập lại mật khẩu" />
                <label htmlFor="floatingConfirmPassword">Nhập lại mật khẩu</label>
              </div>
              <div className="form-check mt-md-3 mb-md-2">
                <input type="checkbox" className="form-check-input" id="terms" style={{ backgroundColor: 'rgb(235, 137, 81)' }} />
                <label className="form-check-label" htmlFor="terms" style={{ fontSize: '14px' }}>
                  Tôi đồng ý với các điều khoản bảo mật cá nhân
                </label>
              </div>
              <a className="dropdown-item mt-3 text-muted text-sm-center" href="/login">
                Bạn đã có tài khoản? <span style={{ color: 'rgb(215, 109, 47)' }}>Đăng nhập</span>
              </a>
            </div>
            <div className="container mt-4">
              <button type="button" className="btn btn-primary btnDangNhap w-100">Đăng ký</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;