import "./App.css";

function App() {
  return (
    <main className="website">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#" className="logo">
          liftrix<span>↗</span>
        </a>

        <div className="nav-links">
          <a href="#about">About us</a>
          <a href="#product">Our product</a>
          <a href="#approach">Our approach</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero grid-card">

        <div className="hero-content">
          <span className="eyebrow">
            <i></i> TECHNOLOGY FOR A BETTER EVERYDAY
          </span>

          <h1>
            Technology
            <br />
            That <span>Moves</span>
            <br />
            Life Forward.
          </h1>

          <p>
            We build thoughtful technology products that
            simplify everyday life, enhance experiences,
            and make the way people live better.
          </p>

          <a href="#product" className="dark-button">
            Explore Our Products ↗
          </a>
        </div>

        <div className="hero-visual">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="hero-symbol">
            L
          </div>

          <div className="visual-bottom">
            <span>PEOPLE FIRST.</span>
            <span>PURPOSE DRIVEN.</span>
          </div>
        </div>

      </section>

      {/* PRODUCT SECTION */}
      <section id="product" className="product grid-card">

        <div className="product-content">

          <span className="section-label">
            02 / OUR PRODUCT · FIRST RELEASE
          </span>

          <h2>
            Meet
            <br />
            Mellow.
          </h2>

          <p>
            Our first product, Mellow, is a social connection
            platform designed to make meeting and connecting
            with people more meaningful.
          </p>

          <div className="tags">
            <span>Dating</span>
            <span>Friendship</span>
            <span>Meaningful Connections</span>
          </div>

          <p>
            A more thoughtful approach to social discovery,
            focused on real people and real intent.
          </p>

          <a
            href="http://localhost:5173/#home"
            className="lime-button"
          >
            Explore Mellow ↗
          </a>

        </div>

        <div className="product-visual">

          <span>A MORE MEANINGFUL WAY TO CONNECT</span>

          <div className="connection-icons">
            <div>✦</div>
            <div>☺</div>
            <div>♡</div>
          </div>

          <h3>
            Different people.
            <br />
            Meaningful connections.
          </h3>

          <p>A product by Liftrix Solution</p>

        </div>

      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about grid-card">

        <div className="section-label">
          01 / ABOUT LIFTRIX
        </div>

        <div className="about-main">
          <h2>
            Building Technology
            <br />
            Around People.
          </h2>

          <p>
            Liftrix Solution Private Limited is a technology-driven
            company focused on developing innovative digital products
            that simplify everyday experiences and improve the way
            people live.
          </p>

          <p>
            We identify real-world challenges, understand changing
            lifestyles, and turn those insights into practical,
            user-friendly solutions.
          </p>
        </div>

        <div className="about-pillars">

          <div>
            <span>01</span>
            <h3>Real Problems</h3>
            <p>
              We start by understanding genuine challenges
              in people's everyday lives.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Simple Experiences</h3>
            <p>
              We design products that are intuitive,
              accessible, and easy to use.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Meaningful Impact</h3>
            <p>
              We build with a clear purpose,
              creating lasting value for people.
            </p>
          </div>

        </div>

      </section>

      {/* BRAND IDENTITY */}
      <section className="brand grid-card">

        <span className="section-label">
          LIFTRIX BRAND IDENTITY
        </span>

        <h2>Liftrix.</h2>

        <h3>Technology That Moves Life Forward.</h3>

        <p>
          Building thoughtful products for better
          everyday experiences.
        </p>

        <div className="brand-pillars">

          <div>
            <span>✳</span>
            <h3>Purpose</h3>
            <p>Real problems</p>
          </div>

          <div>
            <span>♧</span>
            <h3>People</h3>
            <p>Human experiences</p>
          </div>

          <div>
            <span>↗</span>
            <h3>Progress</h3>
            <p>Better living</p>
          </div>

        </div>

      </section>

      {/* APPROACH SECTION */}
      <section id="approach" className="approach grid-card">

        <span className="section-label">
          03 / OUR APPROACH
        </span>

        <div className="approach-main">

          <h2>
            People First.
            <br />
            <span>Purpose</span> Always.
          </h2>

          <p>
            Every product we build begins with a simple question:
            How can we make this experience better for people?
          </p>

          <p>
            We follow a purpose-driven approach that combines
            user understanding, thoughtful design, and technology.
          </p>

        </div>

        <div className="approach-steps">

          <div>
            <span>01</span>
            <div>
              <h3>Understand</h3>
              <p>
                Listen to people, explore their needs,
                and identify the real problem.
              </p>
            </div>
          </div>

          <div>
            <span>02</span>
            <div>
              <h3>Create</h3>
              <p>
                Turn insights into clear, useful,
                and delightful experiences.
              </p>
            </div>
          </div>

          <div>
            <span>03</span>
            <div>
              <h3>Evolve</h3>
              <p>
                Learn from feedback, improve continuously,
                and keep building for a changing world.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* VISION SECTION */}
      <section className="vision grid-card">

        <span className="section-label">
          OUR JOURNEY AHEAD
        </span>

        <h2>
          The Journey Has
          <br />
          Just Begun.
        </h2>

        <p>
          Mellow is our first product. We're continuously
          exploring new opportunities to build technology
          that makes everyday life simpler, better,
          and more meaningful.
        </p>

        <a href="#contact" className="dark-button">
          Get in Touch ↗
        </a>

      </section>

      {/* VISION & MISSION */}
      <section className="mission grid-card">

        <div>
          <span className="section-label">
            OUR VISION
          </span>

          <h2>A Better Way to Experience Everyday Life.</h2>

          <p>
            To build a portfolio of meaningful technology
            products that simplify everyday living,
            improve human experiences, and adapt to
            the changing needs of society.
          </p>
        </div>

        <div>
          <span className="section-label">
            OUR MISSION
          </span>

          <h2>Turning Everyday Challenges into Better Experiences.</h2>

          <p>
            Our mission is to identify real-world problems
            and transform them into simple, effective,
            and user-friendly digital solutions.
          </p>
        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="contact grid-card">

        <span className="section-label">
          LET'S CONNECT
        </span>

        <h2>
          Let's Build Better
          <br />
          Experiences Together.
        </h2>

        <p>
          We are always open to connecting with people,
          businesses, and organisations who share our
          vision of creating meaningful technology products.
        </p>

        <a href="mailto:liftrixsolution@gmail.com" className="dark-button">
          Get in Touch ↗
        </a>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div>
          <a href="#" className="logo">
            liftrix<span>↗</span>
          </a>

          <p>
            Building technology for better everyday experiences.
          </p>
        </div>

        <div className="footer-links">
          <a href="#about">About Liftrix</a>
          <a href="#product">Our Product</a>
          <a href="#approach">Our Approach</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="copyright">
          © 2026 Liftrix Solution Private Limited.
          <br />
          Chennai, Tamil Nadu, India.
        </div>

      </footer>

    </main>
  );
}

export default App;