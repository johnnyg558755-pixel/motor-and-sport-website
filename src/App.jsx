import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

const phone = "tel:+14693950360";
const services = [
  [
    "General Auto Repair",
    "Diagnostics, maintenance and practical mechanical repairs.",
  ],
  ["Exhaust Work", "Exhaust inspection, muffler service and repair."],
  [
    "Customer-Supplied Parts",
    "Already bought the parts? Call to discuss installation.",
  ],
];

const imageUrl = (path) => `${import.meta.env.BASE_URL}images/${path}`;
const projects = [
  {
    title: "2013 Jaguar XF 2.0L Turbo Replacement",
    category: "Engine & Performance",
    summary:
      "Removal of the failed turbocharger and installation of a new replacement unit.",
    folder: "jaguar-xf-turbo",
    photos: [
      "01-jaguar-xf.png",
      "02-engine-bay-before.png",
      "03-turbo-removed.png",
      "04-old-and-new-turbo.png",
      "05-new-turbo-installed.png",
    ],
  },
  {
    title: "Muffler & Chrome Tip Installation",
    category: "Custom Exhaust",
    summary:
      "Custom exhaust fitment, welding and chrome-tip installation completed in-house.",
    folder: "muffler-chrome-tip",
    photos: [
      "01-vehicle-on-lift.png",
      "02-muffler-fitting.png",
      "03-welding-under-vehicle.png",
      "04-exhaust-welding.png",
      "05-final-welding.png",
    ],
  },
  {
    title: "Range Rover Evoque Radiator Swap",
    category: "Cooling System",
    summary:
      "Front-end disassembly, radiator replacement and complete reassembly.",
    folder: "range-rover-radiator",
    photos: [
      "01-front-end-disassembly.png",
      "02-old-and-new-radiator.png",
      "03-repair-complete.png",
    ],
  },
  {
    title: "2015 Corvette Suspension Repair",
    category: "Steering & Suspension",
    summary: "Upper control arm, strut and shock replacement on a C7 Corvette.",
    folder: "corvette-suspension",
    photos: [
      "05-corvette-in-shop.png",
      "01-control-arms-old-and-new.png",
      "02-shocks-old-and-new.png",
      "04-original-suspension.png",
      "03-new-suspension-installed.png",
    ],
  },
  {
    title: "2011 Jeep Wrangler Oil Pan Gaskets",
    category: "Engine Repair",
    summary:
      "Upper and lower oil pan gasket replacement to correct an active oil leak.",
    folder: "jeep-oil-pan-gasket",
    photos: [
      "01-jeep-in-shop.png",
      "02-oil-leak-inspection.png",
      "03-oil-pan-removed.png",
      "04-new-gasket-installed.png",
      "05-oil-pan-reassembled.png",
    ],
  },
  {
    title: "Lexus IS 250 Long-Tube Headers",
    category: "Performance Exhaust",
    summary:
      "Factory manifolds removed and polished long-tube headers fitted and installed.",
    folder: "lexus-long-tube-headers",
    photos: [
      "01-lexus-is-250.png",
      "02-original-engine-setup.png",
      "04-stock-vs-long-tube-headers.png",
      "03-new-long-tube-headers.png",
      "05-headers-installed.png",
    ],
  },
  {
    title: "2014 Infiniti Q50 Engine Swap",
    category: "Engine Replacement",
    summary: "Complete engine removal and replacement for a 2014 Infiniti Q50.",
    folder: "infiniti-q50-engine-swap",
    photos: [
      "01-infiniti-q50.png",
      "02-engine-removed.png",
      "03-engine-swap-in-progress.png",
      "04-engine-installed.png",
    ],
  },
  {
    title: "Custom S40 Mufflers & Matte-Black Tips",
    category: "Custom Exhaust",
    summary:
      "Custom S40 mufflers paired with welded matte-black exhaust tips on a Mustang GT.",
    folder: "custom-s40-mufflers",
    photos: [
      "01-mustang-on-lift.png",
      "02-original-muffler.png",
      "03-original-exhaust-closeup.png",
      "05-custom-muffler-welding.png",
      "04-matte-black-tips-installed.png",
    ],
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header>
      <Link className="logo" to="/" onClick={closeMenu}>
        <b>
          M<span>&</span>S
        </b>
        <i>
          MOTOR <span>&</span> SPORT<small>AUTO REPAIR</small>
        </i>
      </Link>
      <button
        className={"menuToggle " + (menuOpen ? "active" : "")}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={menuOpen ? "open" : ""}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/services" onClick={closeMenu}>
          Services
        </Link>
        <Link to="/gallery" onClick={closeMenu}>
          Gallery
        </Link>
        <Link to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>
        <Link className="mobileEstimate" to="/appointment" onClick={closeMenu}>
          Schedule Appointment
        </Link>
      </nav>
      <Link className="button red" to="/appointment">
        Schedule Service
      </Link>
    </header>
  );
}
function Hours() {
  return (
    <div className="hours">
      <span>
        MON–FRI <b>8 AM–6 PM</b>
      </span>
      <span>
        SATURDAY <b>8:30 AM–3 PM</b>
      </span>
      <span>
        SUNDAY <b>Closed</b>
      </span>
    </div>
  );
}
function Footer() {
  return (
    <footer>
      <div>
        <Link className="logo" to="/">
          <b>
            M<span>&</span>S
          </b>
          <i>
            MOTOR <span>&</span> SPORT<small>AUTO REPAIR</small>
          </i>
        </Link>
        <p>
          Family-operated auto repair in Garland, serving drivers throughout the
          surrounding Dallas area.
        </p>
      </div>
      <div>
        <h4>EXPLORE</h4>
        <Link to="/services">Services</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About</Link>
      </div>
      <div>
        <h4>CONTACT</h4>
        <a href={phone}>(469) 395-0360</a>
        <p>
          211 Barger St
          <br />
          Garland, TX 75040
        </p>
      </div>
      <div>
        <h4>SHOP HOURS</h4>
        <Hours />
      </div>
    </footer>
  );
}
function Shell({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
function PageHero({ eyebrow, title, children }) {
  return (
    <section className="pageHero">
      <span>{eyebrow}</span>
      <h1>{title}</h1>
      <p>{children}</p>
    </section>
  );
}
function CTA() {
  return (
    <section className="cta">
      <div>
        <small>NEED HELP WITH YOUR VEHICLE?</small>
        <h2>LET'S GET YOU BACK ON THE ROAD.</h2>
      </div>
      <a className="button red" href={phone}>
        Call (469) 395-0360
      </a>
    </section>
  );
}

function Home() {
  return (
    <Shell>
      <section className="">
        <div>
          <span className="eyebrow">GARLAND'S LOCAL AUTO REPAIR SHOP</span>
          <h1>
            BUILT FOR
            <br />
            THE ROAD.
            <br />
            <em>
              READY FOR
              <br />
              ANYTHING.
            </em>
          </h1>
          <p>
            Reliable mechanical work, exhaust service and honest help from a
            locally owned, family-operated shop.
          </p>
          <div className="actions">
            <Link className="button red" to="/appointment">
              Schedule Service
            </Link>
            <a className="button outline" href={phone}>
              Call the Shop
            </a>
          </div>
          <div className="rating">
            <b>4.9</b>
            <span>★★★★★</span>
            <small>36 GOOGLE REVIEWS</small>
          </div>
        </div>
        <div className="visual shopHero">
          <img
            src={imageUrl("shop-exterior.webp")}
            alt="Motor & Sport auto repair shop exterior in Garland, Texas"
          />
          <div className="shopBadge">
            <strong>
              M<span>&</span>S
            </strong>
            <small>211 BARGER ST · GARLAND</small>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="title">
          <span>WHAT WE DO</span>
          <h2>
            AUTOMOTIVE SERVICE
            <br />
            WITHOUT THE RUNAROUND.
          </h2>
        </div>
        <div className="cards">
          {services.map((s, i) => (
            <article key={s[0]}>
              <small>0{i + 1}</small>
              <b>◆</b>
              <h3>{s[0]}</h3>
              <p>{s[1]}</p>
              <Link to="/services">LEARN MORE →</Link>
            </article>
          ))}
        </div>
      </section>
      <section className="gallery dark homeGallery">
        <div className="homeGalleryHeading">
          <div className="title">
            <span>INSIDE MOTOR & SPORT</span>
            <h2>REAL WORK. REAL RESULTS.</h2>
          </div>
          <p>
            Take a look inside the Garland shop and see the hands-on mechanical
            and custom exhaust work behind every repair.
          </p>
        </div>
        <div className="homePhotoGrid">
          <figure className="shopInterior">
            <img
              src={imageUrl("shop-interior.webp")}
              alt="Inside the Motor & Sport repair shop"
            />
            <figcaption>INSIDE THE GARAGE</figcaption>
          </figure>
          <figure>
            <img
              src={imageUrl("welding-under-vehicle.png")}
              alt="Mechanic welding beneath a vehicle"
            />
            <figcaption>CUSTOM FABRICATION</figcaption>
          </figure>
          <figure>
            <img
              src={imageUrl("dual-exhaust-closeup.png")}
              alt="Custom matte-black exhaust tips"
            />
            <figcaption>EXHAUST WORK</figcaption>
          </figure>
          <figure>
            <img
              src={imageUrl("engine-removal.png")}
              alt="Engine removal in progress"
            />
            <figcaption>ENGINE REPAIR</figcaption>
          </figure>
          <figure>
            <img
              src={imageUrl("exhaust-installation.png")}
              alt="Mechanic installing a custom exhaust"
            />
            <figcaption>HANDS-ON SERVICE</figcaption>
          </figure>
        </div>
        <Link className="button outline" to="/gallery">
          View All Repair Projects
        </Link>
      </section>
      <section className="faq section">
        <div className="title">
          <span>COMMON QUESTIONS</span>
          <h2>
            GOOD TO KNOW
            <br />
            BEFORE YOU VISIT.
          </h2>
        </div>
        <div>
          {[
            [
              "Can I bring my own parts?",
              "Yes. Call first so the team can confirm what is needed.",
            ],
            [
              "What work do you do?",
              "General mechanical service and exhaust work.",
            ],
            [
              "Do I need an appointment?",
              "Call to check current availability and hours.",
            ],
          ].map((f, i) => (
            <details key={f[0]} open={i === 0}>
              <summary>{f[0]}</summary>
              <p>{f[1]}</p>
            </details>
          ))}
        </div>
      </section>
      <CTA />
    </Shell>
  );
}
function Services() {
  return (
    <Shell>
      <PageHero
        eyebrow="MOTOR & SPORT SERVICES"
        title="AUTO REPAIR DONE WITH PURPOSE."
      >
        Practical help, skilled work and direct communication from a
        neighborhood shop.
      </PageHero>
      <section className="section serviceList">
        {services.map((s, i) => (
          <article key={s[0]}>
            <b>0{i + 1}</b>
            <div>
              <h2>{s[0]}</h2>
              <p>{s[1]}</p>
              <a href={phone}>CALL TO DISCUSS THIS SERVICE →</a>
            </div>
          </article>
        ))}
      </section>
      <CTA />
    </Shell>
  );
}
function ProjectViewer({ project, onClose }) {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const move = (direction) =>
    setIndex(
      (current) =>
        (current + direction + project.photos.length) % project.photos.length,
    );
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };
    document.body.classList.add("modalOpen");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("modalOpen");
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);
  return (
    <div
      className="projectModal"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="viewerPanel">
        <button
          className="viewerClose"
          onClick={onClose}
          aria-label="Close gallery"
        >
          ×
        </button>
        <div className="viewerCopy">
          <span>{project.category}</span>
          <h2>{project.title}</h2>
          <p>{project.summary}</p>
        </div>
        <div
          className="viewerStage"
          onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
          onTouchEnd={(event) => {
            if (touchStart === null) return;
            const distance = event.changedTouches[0].clientX - touchStart;
            if (Math.abs(distance) > 45) move(distance > 0 ? -1 : 1);
            setTouchStart(null);
          }}
        >
          <img
            src={imageUrl(`${project.folder}/${project.photos[index]}`)}
            alt={`${project.title}, photo ${index + 1} of ${project.photos.length}`}
          />
          <button
            className="viewerArrow previous"
            onClick={() => move(-1)}
            aria-label="Previous photo"
          >
            ‹
          </button>
          <button
            className="viewerArrow next"
            onClick={() => move(1)}
            aria-label="Next photo"
          >
            ›
          </button>
          <div className="viewerCount">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(project.photos.length).padStart(2, "0")}
          </div>
        </div>
        <div className="viewerThumbs">
          {project.photos.map((photo, i) => (
            <button
              className={i === index ? "active" : ""}
              onClick={() => setIndex(i)}
              key={photo}
              aria-label={`View photo ${i + 1}`}
            >
              <img src={imageUrl(`${project.folder}/${photo}`)} alt="" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  const [selected, setSelected] = useState(null);
  return (
    <Shell>
      <PageHero
        eyebrow="MOTOR & SPORT PROJECT GALLERY"
        title="REAL WORK. REAL RESULTS."
      >
        Explore recent repairs, replacements and custom exhaust work completed
        inside our Garland shop.
      </PageHero>
      <section className="section projectSection">
        <div className="projectIntro">
          <div>
            <span className="eyebrow">FROM THE SHOP FLOOR</span>
            <h2>RECENT PROJECTS</h2>
          </div>
          <p>
            Every photo below comes from real work completed by the Motor &
            Sport team. Select a project to see the full repair set.
          </p>
        </div>
        <div className="projectGrid">
          {projects.map((project, index) => (
            <button
              className="projectCard"
              onClick={() => setSelected(project)}
              key={project.title}
            >
              <div className="projectImage">
                <img
                  src={imageUrl(`${project.folder}/${project.photos[0]}`)}
                  alt={project.title}
                />
                <span>{project.photos.length} PHOTOS</span>
              </div>
              <div className="projectInfo">
                <small>{project.category}</small>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <b>
                  VIEW PROJECT <i>→</i>
                </b>
              </div>
              <em>{String(index + 1).padStart(2, "0")}</em>
            </button>
          ))}
        </div>
      </section>
      <CTA />
      {selected && (
        <ProjectViewer project={selected} onClose={() => setSelected(null)} />
      )}
    </Shell>
  );
}
function About() {
  return (
    <Shell>
      <PageHero
        eyebrow="ABOUT MOTOR & SPORT"
        title="A LOCAL SHOP BUILT ON REAL WORK."
      >
        Family-operated automotive service for drivers across Garland and
        surrounding Dallas-area communities who value direct answers and
        dependable repairs.
      </PageHero>
      <section className="section story">
        <div className="storyVisual">
          M<span>&</span>S
        </div>
        <div>
          <span className="eyebrow">OUR STORY</span>
          <h2>KEEPING NORTH TEXAS DRIVERS ON THE ROAD.</h2>
          <p>
            Motor & Sport is a locally owned, family-operated automotive
            facility at 211 Barger Street in Garland. Customers come to the shop
            from Garland and nearby communities for general mechanical services,
            custom exhaust work and installation using customer-supplied parts.
          </p>
        </div>
      </section>
      <CTA />
    </Shell>
  );
}
function Contact() {
  return (
    <Shell>
      <PageHero eyebrow="CONTACT MOTOR & SPORT" title="TALK TO THE SHOP.">
        Drivers from Garland and the surrounding Dallas area are welcome. Call,
        visit or send an appointment request and we’ll help determine the right
        next step.
      </PageHero>
      <section className="section contact">
        <div>
          <small>PHONE</small>
          <a href={phone}>(469) 395-0360</a>
          <p>Call the shop to discuss your vehicle.</p>
        </div>
        <div>
          <small>ADDRESS</small>
          <a href="https://www.google.com/maps/search/?api=1&query=211+Barger+St+Garland+TX+75040">
            211 Barger St
            <br />
            Garland, TX 75040
          </a>
          <p>Open directions in Google Maps.</p>
        </div>
        <div>
          <small>SHOP HOURS</small>
          <Hours />
        </div>
        <div>
          <small>INSTAGRAM</small>
          <a href="https://www.instagram.com/motorandsports1/">
            @motorandsports1
          </a>
          <p>See shop updates and recent work.</p>
        </div>
      </section>
    </Shell>
  );
}
function Appointment() {
  const today = new Date().toISOString().split("T")[0];
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const request = [
      "Motor & Sport appointment request",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email || "Not provided"}`,
      `Service: ${data.service}`,
      `Requested: ${data.date} at ${data.time}`,
      `Vehicle: ${data.year} ${data.make} ${data.model}`,
      `Reason: ${data.reason}`,
    ].join("\n");
    window.location.href = `sms:+14693950360?body=${encodeURIComponent(request)}`;
  };
  return (
    <Shell>
      <PageHero
        eyebrow="MOTOR & SPORT APPOINTMENTS"
        title="SCHEDULE YOUR SERVICE."
      >
        Fast scheduling. Experienced service. Complete the request below and
        the shop will contact you to confirm your appointment.
      </PageHero>
      <section className="appointmentSection">
        <div className="appointmentIntro">
          <div>
            <span className="eyebrow">REQUEST AN APPOINTMENT</span>
            <h2>LET'S GET YOUR VEHICLE ON THE SCHEDULE.</h2>
          </div>
          <div className="appointmentNotice">
            <b>REQUESTS REQUIRE CONFIRMATION</b>
            <p>
              Your preferred date and time are not guaranteed until Motor &
              Sport contacts you. For urgent repairs, call the shop directly.
            </p>
          </div>
        </div>
        <form className="appointmentForm" onSubmit={handleSubmit}>
          <label>
            <span>Name *</span>
            <input name="name" type="text" autoComplete="name" placeholder="Your full name" required />
          </label>
          <label>
            <span>Phone *</span>
            <input name="phone" type="tel" autoComplete="tel" placeholder="(000) 000-0000" required />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" autoComplete="email" placeholder="you@example.com" />
          </label>
          <label>
            <span>Service Category *</span>
            <select name="service" defaultValue="" required>
              <option value="" disabled>Select a service</option>
              <option>General Auto Repair</option>
              <option>Diagnostics</option>
              <option>Engine Repair or Replacement</option>
              <option>Cooling System / Radiator</option>
              <option>Suspension or Steering</option>
              <option>Exhaust / Muffler Work</option>
              <option>Custom Fabrication</option>
              <option>Customer-Supplied Parts Installation</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            <span>Requested Date *</span>
            <input name="date" type="date" min={today} required />
          </label>
          <label>
            <span>Requested Time *</span>
            <input name="time" type="time" required />
          </label>
          <label>
            <span>Vehicle Make *</span>
            <input name="make" type="text" placeholder="Ford" required />
          </label>
          <label>
            <span>Vehicle Model *</span>
            <input name="model" type="text" placeholder="F-150" required />
          </label>
          <label>
            <span>Vehicle Year *</span>
            <input name="year" type="number" inputMode="numeric" min="1900" max="2030" placeholder="2020" required />
          </label>
          <label className="reasonField">
            <span>Reason for Appointment *</span>
            <textarea name="reason" rows="6" placeholder="Tell us what you hear, feel or see, when the issue started, and whether you already have parts." required />
          </label>
          <div className="appointmentSubmit">
            <button className="button red" type="submit">Send Appointment Request</button>
            <p>Submitting opens a text message to Motor & Sport with your appointment details.</p>
          </div>
        </form>
        <div className="appointmentDetails">
          <div><small>CALL THE SHOP</small><a href={phone}>(469) 395-0360</a></div>
          <div><small>LOCATION</small><p>211 Barger St, Garland, TX 75040</p></div>
          <div><small>SHOP HOURS</small><Hours /></div>
        </div>
      </section>
    </Shell>
  );
}
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/estimate" element={<Appointment />} />
    </Routes>
  );
}
