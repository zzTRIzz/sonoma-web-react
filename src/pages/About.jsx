import Breadcrumb from '../components/Breadcrumb';

function About() {
  return (
    <>
      <Breadcrumb items={[
        { label: 'Trang chủ', path: '/' },
        { label: 'Về cửa hàng', active: true }
      ]} />
      <div className="container mt-4">
        <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
          <span className="fs-4">Về chúng tôi</span>
        </header>
        <div className="row">
          <div className="col-md-8">
            <h1>Sonoma - Cửa hàng mua sắm trực tuyến mới thành lập 2024</h1>
            <p className="fs-5 mt-5 mb-5" style={{ textAlign: 'justify' }}>
              Chào mừng bạn đến với Sonoma - cửa hàng online chuyên cung cấp các sản phẩm điện thoại, laptop và máy tính bảng chính hãng với đa dạng mẫu mã, giá cả cạnh tranh và dịch vụ khách hàng tận tâm. Chúng tôi luôn mong muốn mang đến cho khách hàng những trải nghiệm mua sắm tuyệt vời nhất.
            </p>
            <div className="mb-5">
              <a href="/" className="btn btn-primary btn-lg px-4">Truy cập trang chủ</a>
            </div>
          </div>
          <div className="col-md-4">
            <img src="/resource/logo/logofillfinal.png" alt="" className="w-100" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;