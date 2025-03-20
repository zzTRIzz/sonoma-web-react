import Breadcrumb from '../components/Breadcrumb';

function Contact() {
  return (
    <>
      <Breadcrumb items={[
        { label: 'Trang chủ', path: '/' },
        { label: 'Liên hệ', active: true }
      ]} />
      <div className="container-sm mt-4">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="d-flex justify-content-center m-3 mb-4">
                <h5 className="modal-title">
                  Gửi phản hồi đến <span style={{ color: 'rgb(235, 137, 81)' }} className="fw-semibold">Sonoma</span>. Chúng tôi sẽ cố gắng trả lời đến bạn sớm nhất
                </h5>
              </div>
              <div className="row row-cols-2">
                <div className="col-7">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8639811788194!2d105.7442121744338!3d21.038127780613525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1685926244098!5m2!1svi!2s"
                    width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-5 shadow"
                  ></iframe>
                </div>
                <div className="col-5">
                  <form>
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="floatingInput" placeholder="Họ và tên" />
                      <label htmlFor="floatingInput">Nhập họ và tên của bạn</label>
                    </div>
                    <div className="form-floating mb-1">
                      <input type="email" className="form-control" id="floatingEmail" placeholder="Email" />
                      <label htmlFor="floatingEmail">Email</label>
                    </div>
                    <label className="mb-2 mx-2" style={{ fontSize: '12px', fontStyle: 'italic' }}>
                      Câu trả lời của chúng tôi sẽ gửi đến vào email này
                    </label>
                    <div className="form-floating mb-3">
                      <textarea className="form-control" id="floatingTextarea" placeholder="" rows="9" style={{ height: '230px' }}></textarea>
                      <label htmlFor="floatingTextarea">Tin nhắn phản hồi</label>
                    </div>
                    <button type="button" className="btn btn-primary btnDangNhap w-100">Gửi phản hồi</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;