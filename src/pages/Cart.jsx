import Breadcrumb from '../components/Breadcrumb';

function Cart() {
  return (
    <>
      <Breadcrumb items={[
        { label: 'Trang chủ', path: '/' },
        { label: 'Giỏ hàng', active: true }
      ]} />
      <div className="container-md mt-4">
        <div className="row">
          <div className="col-8 d-flex justify-content-between align-items-center mb-3">
            <h4>Giỏ hàng</h4>
            <a style={{ textDecoration: 'none' }} href="#">Xóa tất cả</a>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <table className="table align-middle mb-0 bg-white">
              <thead className="bg-light">
                <tr>
                  <th><input className="form-check-input" type="checkbox" /></th>
                  <th>Cửa hàng trực tuyến Sonoma</th>
                  <th>Đơn giá</th>
                  <th style={{ width: '100px' }}>Số lượng</th>
                  <th style={{ width: '130px' }}>Thành tiền</th>
                  <th style={{ width: '71px' }}>Hủy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input className="form-check-input" type="checkbox" /></td>
                  <td>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png" className="img-fluid rounded-start" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <div className="card-text">iPhone 15 Pro</div>
                          <div className="card-text"><small className="text-body-secondary">256GB</small></div>
                          <div className="card-text"><small className="text-body-secondary">Đen</small></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td><p className="fw-bold mb-1" style={{ fontSize: '14px' }}>19.900.000đ</p></td>
                  <td><input min="1" max="20" type="number" className="form-control" /></td>
                  <td><p className="fw-bold mb-1" style={{ fontSize: '14px' }}>19.900.000đ</p></td>
                  <td><button type="button" className="btn btn-link btn-sm btn-rounded mb-1" style={{ textDecoration: 'none', fontSize: '15px' }}>Xóa</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="card" style={{ width: '30rem' }}>
                <div className="card-body">
                  <h6 className="card-title fw-bold">Thanh toán</h6>
                  <div className="d-flex justify-content-between">
                    <p className="card-text" style={{ fontSize: 'small' }}>Tổng tạm tính</p>
                    <p className="card-text" style={{ fontSize: 'small' }}>33.490.000đ</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="card-text" style={{ fontSize: 'small' }}>Thành tiền</p>
                    <p className="card-text fw-bolder" style={{ fontSize: 'small', color: 'rgb(212, 83, 32)' }}>33.490.000đ</p>
                  </div>
                  <a href="/pay" className="btn btn-outline-primary w-100">Thanh toán</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;