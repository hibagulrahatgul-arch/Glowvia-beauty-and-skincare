import './App.css'

function App() {
  return (
    <>
      {/* ======== NAVBAR ======== */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold text-pink" href="#">GLOWVIA</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#products">Shop</a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#category">Skincare</a></li>
                  <li><a className="dropdown-item" href="#category">Makeup</a></li>
                  <li><a className="dropdown-item" href="#category">Body Care</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about-us">About</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search products..."
                aria-label="Search"
              />
              <button className="btn btn-pink" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      {/* =========== CAROUSEL (HERO) =========== */}
      <div id="home">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/pic9 (2).jpg" className="d-block w-100 slide-img" alt="Skincare" />
              <div className="carousel-caption">
                <h1 className="fw-bold">Glowvia Beauty Skincare</h1>
                <p>Skin that feels like you gentle formulas made with natural ingredients only.</p>
                <a href="#products" className="btn btn-pink">Shop Now</a>
              </div>
            </div>

            <div className="carousel-item">
              <img src="/pic10 (2).jpg" className="d-block w-100 slide-img" alt="Serum" />
              <div className="carousel-caption">
                <h1 className="fw-bold">Glowvia Beauty Skincare</h1>
                <p>Skin that feels like you gentle formulas made with natural ingredients only.</p>
                <a href="#products" className="btn btn-pink">Shop Now</a>
              </div>
            </div>

            <div className="carousel-item">
              <img src="/pic11.jpg" className="d-block w-100 slide-img" alt="Offer" />
              <div className="carousel-caption">
                <h1 className="fw-bold">Glowvia Beauty Skincare</h1>
                <p>Skin that feels like you gentle formulas made with natural ingredients only.</p>
                <a href="#products" className="btn btn-pink">Shop Now</a>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* =========== SHOP BY CATEGORY =========== */}
      <section id="category" className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Shop by Category</h2>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100">
                <img src="/pic1.png" className="card-img-top" alt="Skincare" />
                <div className="card-body">
                  <h5 className="card-title">Skincare</h5>
                  <p className="card-text">Cleanse, treat and glow with our daily skincare range.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100">
                <img src="/pic2.png" className="card-img-top" alt="Makeup" />
                <div className="card-body">
                  <h5 className="card-title">Makeup</h5>
                  <p className="card-text">Look good and feel good with long lasting makeup products.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100">
                <img src="/pic3.png" className="card-img-top" alt="Body Care" />
                <div className="card-body">
                  <h5 className="card-title">Body Care</h5>
                  <p className="card-text">Soft, smooth and fresh skin from head to toe every day.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100">
                <img src="/pic4.png" className="card-img-top" alt="Essentials" />
                <div className="card-body">
                  <h5 className="card-title">Beauty Essentials</h5>
                  <p className="card-text">Everyday must haves like brushes, sponges and tools.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURED PRODUCTS ==================== */}
      <section id="products" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Featured Products</h2>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100">
                <img src="/pic5.png" className="card-img-top" alt="Face Serum" />
                <div className="card-body">
                  <h5 className="card-title">Hydrating Face Serum</h5>
                  <p className="card-text">Lightweight serum that keeps the skin hydrated all day.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100">
                <img src="/pic6.png" className="card-img-top" alt="Face Cream" />
                <div className="card-body">
                  <h5 className="card-title">Vitamin C Face Cream</h5>
                  <p className="card-text">Brightens dull skin and reduces dark spots over time.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100">
                <img src="/pic7.png" className="card-img-top" alt="Face Wash" />
                <div className="card-body">
                  <h5 className="card-title">Gentle Face Wash</h5>
                  <p className="card-text">Mild cleanser suitable for daily use on all skin types.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100">
                <img src="/pic8.webp" className="card-img-top" alt="Lip Balm" />
                <div className="card-body">
                  <h5 className="card-title">Lip Care Balm</h5>
                  <p className="card-text">Nourishing balm that keeps your lips soft and protected.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT US ==================== */}
      <section id="about-us" className="py-5 about-us-section">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <span className="badge-pink mb-3">Our Story</span>
              <h2 className="fw-bold mb-3">Skin That Feels Like You</h2>
              <p className="mb-0">
                Glowvia started with one simple idea: beauty shouldn't be
                complicated. We bring together gentle, natural formulas with
                everyday essentials so you can look after your skin without any
                fuss, and feel confident in it every single day.
              </p>
            </div>
          </div>

          <div className="row g-4 text-center">
            <div className="col-6 col-lg-3">
              <div className="about-stat">
                <h3 className="fw-bold text-pink">5+</h3>
                <p className="mb-0">Years of Experience</p>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="about-stat">
                <h3 className="fw-bold text-pink">50+</h3>
                <p className="mb-0">Skincare &amp; Beauty Products</p>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="about-stat">
                <h3 className="fw-bold text-pink">10k+</h3>
                <p className="mb-0">Happy Customers</p>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="about-stat">
                <h3 className="fw-bold text-pink">100%</h3>
                <p className="mb-0">Authentic &amp; Tested</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer id="contact" className="py-4 bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
              <h5 className="fw-bold text-pink">GLOWVIA</h5>
              <p className="mb-0">Beauty skincare products delivered across Pakistan.</p>
            </div>

            <div className="col-md-4 mb-3 mb-md-0">
              <h5 className="fw-bold">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#home" className="footer-link">Home</a></li>
                <li><a href="#products" className="footer-link">Shop</a></li>
                <li><a href="#about-us" className="footer-link">About Us</a></li>
              </ul>
            </div>

            <div className="col-md-4">
              <h5 className="fw-bold">Contact</h5>
              <p className="mb-0">Email: info@glowvia.com</p>
              <p className="mb-0">Phone: +92 300 0000000</p>
            </div>
          </div>

          <hr />
          <p className="text-center mb-0">&copy; 2026 Glowvia. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App