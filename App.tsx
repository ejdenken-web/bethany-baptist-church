import { useEffect, useRef, useState } from 'react';
import './App.css';

const base =
  'https://raw.githubusercontent.com/ejdenken-web/bethany-baptist-church/main/';

const logo = `${base}IMG-20260905-WA0028.jpg`;
const churchPhoto = `${base}IMG-20260910-WA0014.jpg`;

const galleryPhotos = [
  `${base}IMG-20260905-WA0032.jpg`,
  `${base}IMG-20260905-WA0035.jpg`,
  `${base}IMG-20260905-WA0037.jpg`,
  `${base}IMG-20260905-WA0039.jpg`,
  `${base}IMG-20260905-WA0041.jpg`,
  `${base}1000535145.jpg`,
  `${base}1000640677.jpg`,
  `${base}1000643862.jpg`,
  `${base}1000646371.jpg`,
  `${base}1000646582.jpg`,
  `${base}1000646590.jpg`,
  `${base}1000746549.jpg`,
  `${base}1000746557.jpg`,
  `${base}IMG-20250420-WA0053.jpg`,
  `${base}IMG-20250703-WA0052.jpg`,
  `${base}IMG-20250714-WA0043.jpg`,
  `${base}IMG-20250914-WA0027.jpg`,
  `${base}IMG-20251222-WA0049.jpg`,
  `${base}IMG-20260415-WA0028.jpg`,
  `${base}IMG-20260425-WA0036.jpg`,
  `${base}IMG-20260502-WA0037.jpg`,
  `${base}IMG-20260504-WA0072.jpg`,
  `${base}IMG-20260508-WA0053.jpg`,
  `${base}IMG-20260508-WA0067.jpg`,
  `${base}IMG-20260508-WA0075.jpg`,
  `${base}IMG-20260508-WA0079.jpg`,
  `${base}IMG-20260509-WA0055.jpg`,
  `${base}IMG-20260509-WA0057.jpg`,
  `${base}IMG-20260509-WA0063.jpg`,
  `${base}IMG-20260509-WA0069.jpg`,
  `${base}IMG-20260509-WA0084.jpg`,
  `${base}IMG-20260509-WA0090.jpg`,
  `${base}IMG-20260509-WA0092.jpg`,
  `${base}IMG-20260509-WA0094.jpg`,
  `${base}IMG-20260509-WA0096.jpg`,
  `${base}IMG-20260509-WA0110.jpg`,
  `${base}IMG-20260509-WA0121.jpg`,
  `${base}IMG-20260511-WA0008.jpg`,
  `${base}IMG-20260511-WA0009.jpg`,
  `${base}IMG-20260513-WA0042.jpg`,
  `${base}IMG-20260513-WA0043.jpg`,
  `${base}IMG-20260513-WA0044.jpg`,
  `${base}IMG-20260516-WA0037.jpg`,
  `${base}IMG-20260724-WA0096.jpg`,
  `${base}IMG-20260724-WA0097.jpg`,
  `${base}IMG-20260730-WA0030.jpg`,
  `${base}IMG-20260806-WA0031.jpg`,
  `${base}IMG-20260806-WA0038.jpg`,
  `${base}IMG-20260806-WA0042.jpg`,
  `${base}IMG-20260806-WA0044.jpg`,
];

const song = `${base}Silent%20Night.mp3`;

function App() {
  const [page, setPage] = useState('home');
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const startMusic = () => {
      audioRef.current?.play().catch(() => {});
    };

    startMusic();

    window.addEventListener('click', startMusic, { once: true });

    return () => {
      window.removeEventListener('click', startMusic);
    };
  }, []);

  const goTo = (newPage: string) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="site">
      <audio ref={audioRef} src={song} autoPlay loop />

      <header className="site-header">
        <div className="container nav-container">
          <button className="logo" onClick={() => goTo('home')}>
            <img src={logo} alt="Bethany Baptist Church logo" />
            <span>
              <strong>Bethany Baptist Church</strong>
              <small>RASOOLPURA · HYDERABAD</small>
            </span>
          </button>

          <nav className="navigation">
            <button
              className={page === 'home' ? 'active' : ''}
              onClick={() => goTo('home')}
            >
              Home
            </button>

            <button
              className={page === 'about' ? 'active' : ''}
              onClick={() => goTo('about')}
            >
              About
            </button>

            <button
              className={page === 'contact' ? 'active' : ''}
              onClick={() => goTo('contact')}
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      <main>
        {page === 'home' && (
          <>
            <section
              className="hero"
              style={{ backgroundImage: `url("${churchPhoto}")` }}
            >
              <div className="hero-overlay">
                <div className="container hero-content">
                  <p className="eyebrow">WELCOME TO</p>

                  <h1>Bethany Baptist Church</h1>

                  <div className="gold-line" />
                </div>
              </div>
            </section>

            <section className="welcome-section">
              <div className="container">
                <p className="eyebrow gold">JOIN US</p>
                <h2>Worship With Us</h2>

                <div className="service-grid">
                  <div className="service-card">
                    <div className="service-icon">✦</div>
                    <p className="service-label">SUNDAY</p>
                    <h3>Sunday Service</h3>
                    <p className="service-time">11:30 AM – 1:30 PM</p>
                    <p>
                      Gather with us for a time of worship, teaching, prayer,
                      and fellowship.
                    </p>
                  </div>

                  <div className="service-card">
                    <div className="service-icon">✧</div>
                    <p className="service-label">FRIDAY</p>
                    <h3>Fasting Prayer</h3>
                    <p className="service-time">6:00 PM – 7:30 PM</p>
                    <p>
                      Join us in prayer and fasting as we seek God together.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="gallery-section">
              <div className="container">
                <div className="gallery-heading">
                  <div>
                    <p className="eyebrow gold">OUR COMMUNITY</p>
                    <h2>Life at Bethany</h2>
                  </div>
                  <p>
                    Moments of shared joy, everyday faith, and meaningful
                    connection from our church family.
                  </p>
                </div>
              </div>

              <div className="photo-window">
                <div className="photo-track">
                  {[...galleryPhotos, ...galleryPhotos].map((photo, index) => (
                    <img
                      key={`${photo}-${index}`}
                      src={photo}
                      alt="Bethany Baptist Church community"
                    />
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {page === 'about' && (
          <section className="inner-page">
            <div className="container">
              <div className="page-heading">
                <p className="eyebrow gold" style={{ color: '#c88a28' }}>
                  ABOUT US
                </p>
              </div>

              <div className="about-grid">
                <article className="about-card about-card-wide founder-card">
                  <div className="founder-photo">
                    <img
                      src={`${base}IMG-20260907-WA0016.jpg`}
                      alt="G. Vijaya Kumar, Founder of Bethany Baptist Church"
                    />
                  </div>

                  <div>
                    <p>
                      Bethany Baptist Church was founded in 1983 by the late Sri
                      G. Vijaya Kumar. Driven by a profound vision and
                      unwavering commitment, Sri Vijaya Kumar poured his heart
                      into establishing this ministry, successfully laying a
                      spiritual foundation that continues to endure.Today, his
                      legacy lives on through a vibrant, growing community
                      entirely centered on faith, heartfelt worship, dedicated
                      prayer, and deep Christian fellowship. We remain inspired
                      by the foundational vision of our founder as we continue
                      to serve, love, and grow together in Christ.
                    </p>
                  </div>
                </article>

                <article className="about-card about-card-wide">
                  <p className="card-label">OUR MISSION</p>

                  <p>
                    Our mission is to deeply glorify God in every aspect of our
                    lives and ministry. Within our church, we strive to
                    cultivate a nurturing environment where believers can grow
                    together in faith and love. Reaching outward, we are
                    dedicated to actively serving our local community and
                    meeting practical needs. Ultimately, we are driven to boldly
                    share the life-changing hope of Jesus Christ with a world in
                    need. By living out these core callings, we honor the vision
                    of our foundation and look forward to a purposeful future.
                  </p>
                </article>

                <article className="about-card about-card-wide pastor-family">
                  <div
                    className="pastor-family-content"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      gap: '40px',
                      gridColumn: '1 / -1',
                    }}
                  >
                    <div className="pastor-details">
                      <p className="card-label">PASTOR &amp; FAMILY</p>
                      <h2 style={{ fontSize: '20px' }}>
                        N Richard Varun Kumar
                      </h2>
                      <p>
                        <strong>Wife:</strong> N Vinuthna
                        <br />
                        <strong>Daughter:</strong> N Jerusha Christian
                        <br />
                        <strong>Son:</strong> N Stephen Paul
                      </p>
                      <div style={{ width: '552px', flexShrink: 0 }}>
                        <img
                          src={`${base}IMG-20260906-WA0033.jpg`}
                          alt="N Richard Varun Kumar, Pastor of Bethany Baptist Church"
                          style={{
                            width: '552px',
                            height: '568px',
                            objectFit: 'cover',
                            display: 'block',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
        )}

        {page === 'contact' && (
          <section className="inner-page">
            <div className="container">
              <div className="page-heading">
                <p className="card-label">GET IN TOUCH</p>

                <p>
                  We would be glad to welcome you to Bethany Baptist Church.
                  Whether you are seeking a spiritual home, have questions about
                  our faith, or simply need prayer, our doors and hearts are
                  always open to you. We invite you to join us for worship and
                  experience a warm environment centered on fellowship and the
                  love of Christ.
                </p>
              </div>

              <div className="contact-grid">
                <div className="contact-card">
                  <p className="card-label" style={{ color: '#c88a28' }}>
                    VISIT US
                  </p>

                  <p>
                    H.No. 1-38-767
                    <br />
                    Indiramma Nagar, Rasoolpura
                    <br />
                    Begumpet, Hyderabad – 500003
                  </p>

                  <div className="contact-divider" />
                </div>

                <div className="contact-card">
                  <p className="card-label" style={{ color: '#c88a28' }}>
                    CONTACT
                  </p>

                  <h3>Phone</h3>
                  <p>
                    <a
                      href="tel:+91 9963438246"
                      style={{ color: '#000', fontWeight: '400' }}
                    >
                      +91-9963438246
                    </a>
                    <br />
                    <a
                      href="tel:+91 8019616043"
                      style={{ color: '#000', fontWeight: '400' }}
                    >
                      +91-8019616043
                    </a>
                  </p>

                  <h3>Email</h3>
                  <p>
                    <a
                      href="mailto:bethanybaptistchurch1988@gmail.com"
                      style={{ color: '#000', fontWeight: '400' }}
                    >
                      bethanybaptistchurch1988@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-card">
                <p className="card-label">PARTNER WITH US</p>

                <p>
                  If you feel led to support the ministry, you are welcome to
                  contribute toward the work of the church. Your generosity
                  helps us continue serving our church family and community.
                </p>

                <p>
                  <strong>UPI ID:</strong> 9963438246-2@ybl
                </p>

                <p>
                  <strong>Scan to Contribute</strong>
                </p>

                <img
                  src={`${base}IMG-20260910-WA0016.jpg`}
                  alt="UPI QR code for Bethany Baptist Church"
                  style={{
                    width: '220px',
                    height: '220px',
                    objectFit: 'contain',
                  }}
                />
              </div>
              <div className="map-section">
                <h2 style={{ color: '#c88a28' }}>Find Us</h2>

                <div className="map-container">
                  <iframe
                    title="Bethany Baptist Church location"
                    src="https://www.google.com/maps?q=H.No.+1-38-767,+Indiramma+Nagar,+Rasoolpura,+Begumpet,+Hyderabad+500003&output=embed"
                    loading="lazy"
                  />
                </div>

                <a
                  className="map-link"
                  href="https://www.google.com/maps/search/?api=1&query=H.No.+1-38-767,+Indiramma+Nagar,+Rasoolpura,+Begumpet,+Hyderabad+500003"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open location in Google Maps
                </a>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <img src={logo} alt="Bethany Baptist Church" />
          <div>
            <strong>Bethany Baptist Church</strong>
            <p>Rasoolpura · Begumpet · Hyderabad</p>
          </div>
        </div>

        <div className="footer-bottom">© Bethany Baptist Church</div>
      </footer>
    </div>
  );
}

export default App;
