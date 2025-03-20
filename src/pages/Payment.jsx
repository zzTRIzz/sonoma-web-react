import Breadcrumb from '../components/Breadcrumb';

function Payment() {
  return (
    <>
      <Breadcrumb items={[
        { label: 'Trang chủ', path: '/' },
        { label: 'Thanh toán', active: true }
      ]} />
      <div className="container mt-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Giỏ hàng</span>
              <span className="badge bg-primary rounded-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">iPhone 15 Pro</h6>
                  <small className="text-muted">256GB, Đen</small>
                </div>
                <span className="text-muted">19.900.000đ</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Tổng tiền (VND)</span>
                <strong>33.450.000đ</strong>
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-lg-8">
            <h5 className="mb-3 fw-bold">Thanh toán</h5>
            <form className="needs-validation" noValidate>
              <div className="row g-3">
                <div className="col-sm-12">
                  <label htmlFor="firstName" className="form-label">Họ và tên</label>
                  <input type="text" className="form-control" id="firstName" required />
                </div>
                <div className="col-12">
                  <label htmlFor="username" className="form-label">Số điện thoại</label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">SDT</span>
                    <input type="tel" className="form-control" id="username" placeholder="084XXXXXXX" required />
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="address" className="form-label">Địa chỉ nhận hàng</label>
                  <input type="text" className="form-control" id="address" placeholder="Ngõ ..., Phường ..." required />
                </div>
              </div>
              <hr className="my-4" />
              <h5 className="mb-3 fw-bolder">Hình thức thanh toán</h5>
              <div className="my-3">
                <div className="form-check">
                  <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required />
                  <label className="form-check-label" htmlFor="credit">Thanh toán khi nhận hàng</label>
                </div>
                <div className="form-check">
                  <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                  <label className="form-check-label" htmlFor="debit">Thanh toán bằng ngân hàng (Online)</label>
                </div>
              </div>
              <hr className="my-4" />
              <button className="w-100 btn btn-primary btn-lg mb-5" type="submit">Tiếp tục thanh toán</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;