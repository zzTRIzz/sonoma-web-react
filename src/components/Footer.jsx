function Footer() {
    return (
      <footer className="footer mt-5">
        <section className="bg-light py-4 py-md-5 py-xl-8 border-top border-light">
          <div className="container overflow-hidden">
            <div className="row gy-4 gy-lg-0 justify-content-xl-between">
              <div className="col-12 col-md-4 col-lg-3 col-xl-2">
                <div className="widget">
                  <a href="#!">
                    <img src="/resource/logo/logofillfinal.png" alt="BootstrapBrain Logo" className="w-100" />
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3 col-xl-2">
                <div className="widget">
                  <h4 className="widget-title mb-4">Sonoma</h4>
                  <address className="mb-4">Ng. 124 Phố Hoè Thị, Xuân Phương, Nam Từ Liêm, Hà Nội, Việt Nam</address>
                  <p className="mb-1">
                    <a className="link-secondary text-decoration-none" href="tel:+15057922430">(084) 0358168699</a>
                  </p>
                  <p className="mb-0">
                    <a className="link-secondary text-decoration-none" href="mailto:sonoma@gmail.com">sonoma@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3 col-xl-2">
                <div className="widget">
                  <h4 className="widget-title mb-4">Learn More</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2"><a href="#!" className="link-secondary text-decoration-none">About</a></li>
                    <li className="mb-2"><a href="#!" className="link-secondary text-decoration-none">Contact</a></li>
                    <li className="mb-2"><a href="#!" className="link-secondary text-decoration-none">Advertise</a></li>
                    <li className="mb-2"><a href="#!" className="link-secondary text-decoration-none">Terms of Service</a></li>
                    <li className="mb-0"><a href="#!" className="link-secondary text-decoration-none">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-lg-3 col-xl-4">
                <div className="widget">
                  <h4 className="widget-title mb-4">Đăng ký nhận tin</h4>
                  <p className="mb-4">Đừng bỏ lỡ cơ hội nhận những thông tin và ưu đãi hấp dẫn. Hãy đăng ký bản tin của chúng tôi ngay hôm nay.</p>
                  <form action="#!">
                    <div className="row gy-4">
                      <div className="col-12">
                        <div className="input-group">
                          <span className="input-group-text" id="email-newsletter-addon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                            </svg>
                          </span>
                          <input type="email" className="form-control" id="email-newsletter" placeholder="Email Address" required />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <button className="btn btn-primary" type="submit">Subscribe</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-light py-4 py-md-5 py-xl-8 border-top border-light-subtle">
          <div className="container overflow-hidden">
            <div className="row gy-4 gy-md-0 align-items-md-center">
              <div className="col-xs-12 col-md-7 order-1 order-md-0">
                <div className="copyright text-center text-md-start">&copy; 2024. All Rights Reserved.</div>
                <div className="credits text-secondary text-center text-md-start mt-2 fs-8">
                  Built by <a href="https://bootstrapbrain.com/" className="link-secondary text-decoration-none">Mixigaming</a> with <span className="text-primary">&#9829;</span>
                </div>
              </div>
              <div className="col-xs-12 col-md-5 order-0 order-md-1">
                <div className="social-media-wrapper">
                  <ul className="list-unstyled m-0 p-0 d-flex justify-content-center justify-content-md-end">
                    <li className="me-3"><a href="#!" className="link-dark link-opacity-75-hover"><i className="fab fa-facebook-f"></i></a></li>
                    <li className="me-3"><a href="#!" className="link-dark link-opacity-75-hover"><i className="fab fa-youtube"></i></a></li>
                    <li className="me-3"><a href="#!" className="link-dark link-opacity-75-hover"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#!" className="link-dark link-opacity-75-hover"><i className="fab fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;