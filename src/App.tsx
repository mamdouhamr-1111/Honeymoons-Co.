import React, { useState } from "react";
import { Menu, X, Star, Heart, Phone, Mail, Clock, MapPin, ArrowRight, Check } from "lucide-react";

const PHONE_DISPLAY = "011 11 510 550";
const PHONE_WHATSAPP = "201111510550";
const EMAIL = "Bookings@honeymoonsco.com";

const destinations = [
  { id: 1, name: "Maldives", country: "Indian Ocean", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&q=85", desc: "Private overwater villas, crystal lagoons, and barefoot luxury.", price: 2800 },
  { id: 2, name: "Bali", country: "Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=85", desc: "Private pool villas, tropical nature, wellness, and romantic beaches.", price: 1900 },
  { id: 3, name: "Santorini", country: "Greece", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1600&q=85", desc: "Caldera sunsets, cliffside suites, infinity pools, and whitewashed romance.", price: 2400 },
  { id: 4, name: "Dubai", country: "UAE", image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1600&q=85", desc: "Luxury hotels, desert dinners, shopping, skyline views, and VIP experiences.", price: 1500 },
  { id: 5, name: "Paris", country: "France", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&q=85", desc: "Classic romance, palace hotels, fine dining, fashion, and culture.", price: 2200 },
  { id: 6, name: "Turkey", country: "Turkey", image: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=1600&q=85", desc: "Istanbul charm, Cappadocia balloons, Antalya resorts, and easy travel.", price: 1200 },
];

const packages = [
  { id: 1, name: "Maldives Water Villa Escape", destination: "Maldives", tier: "Ultra-Luxury", nights: 6, price: 4200, image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1600&q=85" },
  { id: 2, name: "Bali Private Pool Romance", destination: "Bali", tier: "Premium", nights: 7, price: 2500, image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=1600&q=85" },
  { id: 3, name: "Santorini Sunset Suite", destination: "Santorini", tier: "Premium", nights: 5, price: 3100, image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1600&q=85" },
  { id: 4, name: "Dubai Luxury City & Desert", destination: "Dubai", tier: "Premium", nights: 5, price: 1900, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=85" },
];

function App() {
  const [page, setPage] = useState("home");
  const [menu, setMenu] = useState(false);

  const go = (p: string) => {
    setPage(p);
    setMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{css}</style>

      <header className="navbar">
        <button className="brand" onClick={() => go("home")}>
          <span>Honeymoons & Co.</span>
          <small>Luxury Romance Travel</small>
        </button>

        <nav className="desktopNav">
          <button onClick={() => go("destinations")}>Destinations</button>
          <button onClick={() => go("packages")}>Packages</button>
          <button onClick={() => go("concierge")}>Concierge</button>
          <button onClick={() => go("contact")}>Contact</button>
          <button className="goldBtn" onClick={() => go("contact")}>Plan Your Trip</button>
        </nav>

        <button className="menuBtn" onClick={() => setMenu(!menu)}>
          {menu ? <X /> : <Menu />}
        </button>
      </header>

      {menu && (
        <div className="mobileMenu">
          <button onClick={() => go("destinations")}>Destinations</button>
          <button onClick={() => go("packages")}>Packages</button>
          <button onClick={() => go("concierge")}>Concierge</button>
          <button onClick={() => go("contact")}>Contact</button>
        </div>
      )}

      {page === "home" && <Home go={go} />}
      {page === "destinations" && <Destinations go={go} />}
      {page === "packages" && <Packages go={go} />}
      {page === "concierge" && <Concierge go={go} />}
      {page === "contact" && <Contact />}

      <footer className="footer">
        <div>
          <h2>Honeymoons & Co.</h2>
          <p>Curating luxury honeymoon escapes and VIP concierge travel experiences.</p>
        </div>
        <div>
          <p><Mail size={16} /> {EMAIL}</p>
          <p><Phone size={16} /> {PHONE_DISPLAY}</p>
          <p>Cairo • Dubai • London</p>
        </div>
      </footer>

      <a className="whatsapp" href={`https://wa.me/${PHONE_WHATSAPP}`} target="_blank">
        WhatsApp Concierge
      </a>
    </>
  );
}

function Home({ go }: { go: (p: string) => void }) {
  return (
    <main>
      <section className="hero">
        <div className="overlay" />
        <div className="heroContent">
          <p className="eyebrow">The Art of Romance</p>
          <h1>Luxury Honeymoons Crafted Around Your <em>Love Story</em></h1>
          <p>From Maldives water villas to Santorini sunsets, we create personalized romantic journeys with VIP concierge support.</p>
          <div className="heroBtns">
            <button className="goldBtn" onClick={() => go("destinations")}>Explore Destinations</button>
            <button className="outlineBtn" onClick={() => go("contact")}>Speak With Concierge</button>
          </div>
        </div>
      </section>

      <Stats />

      <SectionTitle eyebrow="Iconic Locations" title="Featured Destinations" />
      <div className="grid">
        {destinations.slice(0, 3).map((d) => <DestinationCard key={d.id} d={d} />)}
      </div>

      <SectionTitle eyebrow="Crafted for Couples" title="Signature Packages" />
      <div className="grid four">
        {packages.map((p) => <PackageCard key={p.id} p={p} />)}
      </div>

      <section className="cta">
        <Heart size={44} />
        <h2>Ready to begin your forever?</h2>
        <p>Connect with our concierge team and start planning your bespoke romantic escape.</p>
        <button className="goldBtn" onClick={() => go("contact")}>Start Planning</button>
      </section>
    </main>
  );
}

function Stats() {
  return (
    <section className="stats">
      <div><strong>12+</strong><span>Luxury Destinations</span></div>
      <div><strong>2,800+</strong><span>Happy Couples</span></div>
      <div><strong>5.0</strong><span>Guest Rating</span></div>
      <div><strong>24/7</strong><span>Concierge Support</span></div>
    </section>
  );
}

function Destinations({ go }: { go: (p: string) => void }) {
  return (
    <main className="page">
      <PageHero title="Romantic Destinations" subtitle="Discover extraordinary honeymoon destinations around the world." />
      <div className="grid">
        {destinations.map((d) => <DestinationCard key={d.id} d={d} />)}
      </div>
      <div className="center">
        <button className="goldBtn" onClick={() => go("contact")}>Plan My Honeymoon</button>
      </div>
    </main>
  );
}

function Packages({ go }: { go: (p: string) => void }) {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? packages : packages.filter((p) => p.tier === filter);

  return (
    <main className="page">
      <PageHero title="Honeymoon Packages" subtitle="Curated romantic packages for every couple." />

      <div className="filters">
        {["All", "Premium", "Ultra-Luxury"].map((f) => (
          <button key={f} onClick={() => setFilter(f)} className={filter === f ? "active" : ""}>{f}</button>
        ))}
      </div>

      <div className="grid four">
        {filtered.map((p) => <PackageCard key={p.id} p={p} />)}
      </div>

      <div className="center">
        <button className="goldBtn" onClick={() => go("contact")}>Request Custom Package</button>
      </div>
    </main>
  );
}

function Concierge({ go }: { go: (p: string) => void }) {
  const services = [
    ["Dedicated Travel Advisor", "A personal advisor who handles your honeymoon from planning to arrival."],
    ["Private Transfers & Flights", "VIP airport pickups, premium flights, chauffeurs, yachts, and seamless transport."],
    ["Exclusive Hotel Access", "Suite upgrades, VIP amenities, early check-in, and luxury resort privileges."],
    ["Private Dining Experiences", "Beachfront dinners, rooftop reservations, and custom celebration setups."],
    ["Curated Experiences", "Private island trips, spa retreats, yacht cruises, and romantic activities."],
    ["24/7 In-Trip Support", "Our concierge team is available during your trip for any request or support."],
  ];

  return (
    <main className="page">
      <PageHero title="Your Personal Travel Concierge" subtitle="Every detail handled beautifully, before and during your honeymoon." />

      <div className="grid">
        {services.map(([title, desc]) => (
          <div className="serviceCard" key={title}>
            <Check />
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>

      <div className="center">
        <button className="goldBtn" onClick={() => go("contact")}>Request Concierge</button>
      </div>
    </main>
  );
}

function Contact() {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = [
      "Hello Honeymoons & Co., I would like to plan my honeymoon.",
      `Name: ${data.get("firstName")} ${data.get("lastName")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Destination: ${data.get("destination")}`,
      `Travel Date: ${data.get("travelDate")}`,
      `Return Date: ${data.get("returnDate")}`,
      `Budget: ${data.get("budget")}`,
      `Message: ${data.get("message")}`,
    ].join("\n");

    window.open(`https://wa.me/${PHONE_WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <main className="page">
      <PageHero title="Begin Your Story" subtitle="Tell us about your dream honeymoon and we will design it for you." />

      <section className="contactWrap">
        <form onSubmit={submit} className="form">
          <h2>Plan Your Honeymoon</h2>

          <div className="two">
            <input name="firstName" required placeholder="First Name *" />
            <input name="lastName" placeholder="Last Name" />
          </div>

          <div className="two">
            <input name="email" type="email" placeholder="Email Address" />
            <input name="phone" required placeholder="Phone Number *" />
          </div>

          <div className="two">
            <input name="destination" placeholder="Dream Destination" />
            <input name="budget" placeholder="Approximate Budget" />
          </div>

          <div className="two">
            <label>Travel Date<input name="travelDate" type="date" /></label>
            <label>Return Date<input name="returnDate" type="date" /></label>
          </div>

          <textarea name="message" rows={6} placeholder="Tell us about your dream honeymoon..." />

          <button className="goldBtn" type="submit">Send To WhatsApp</button>
        </form>

        <aside className="contactInfo">
          <h2>Get in Touch</h2>
          <p><Mail size={18} /> {EMAIL}</p>
          <p><Phone size={18} /> {PHONE_DISPLAY}</p>
          <p><Clock size={18} /> Daily · 9:00 AM — 10:00 PM</p>
        </aside>
      </section>
    </main>
  );
}

function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="pageHero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="sectionTitle">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function DestinationCard({ d }: { d: any }) {
  return (
    <div className="card">
      <img src={d.image} alt={d.name} loading="lazy" />
      <div className="cardBody">
        <h3>{d.name}</h3>
        <p><MapPin size={14} /> {d.country}</p>
        <p>{d.desc}</p>
        <strong>From ${d.price.toLocaleString()} pp</strong>
      </div>
    </div>
  );
}

function PackageCard({ p }: { p: any }) {
  return (
    <div className="card">
      <img src={p.image} alt={p.name} loading="lazy" />
      <div className="cardBody">
        <span className="badge">{p.tier}</span>
        <h3>{p.name}</h3>
        <p>{p.destination} · {p.nights} nights</p>
        <div className="stars">{[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}</div>
        <strong>From ${p.price.toLocaleString()} pp</strong>
      </div>
    </div>
  );
}

const css = `
body{
  margin:0;
  font-family:Arial, sans-serif;
  background:#fbf8f2;
  color:#161616;
}

button{
  font-family:inherit;
}

.navbar{
  position:fixed;
  top:0;
  left:0;
  right:0;
  height:78px;
  z-index:50;
  background:rgba(20,20,20,.82);
  backdrop-filter:blur(12px);
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 6%;
  color:white;
}

.brand{
  background:none;
  border:0;
  color:white;
  text-align:left;
  cursor:pointer;
}

.brand span{
  display:block;
  font-family:Georgia, serif;
  font-size:26px;
}

.brand small{
  letter-spacing:4px;
  text-transform:uppercase;
  opacity:.7;
  font-size:10px;
}

.desktopNav{
  display:flex;
  gap:25px;
  align-items:center;
}

.desktopNav button{
  background:none;
  border:0;
  color:white;
  cursor:pointer;
  text-transform:uppercase;
  letter-spacing:2px;
  font-size:12px;
}

.menuBtn{
  display:none;
  background:none;
  color:white;
  border:0;
}

.mobileMenu{
  position:fixed;
  top:78px;
  left:0;
  right:0;
  z-index:49;
  background:#111;
  padding:24px;
  display:flex;
  flex-direction:column;
  gap:20px;
}

.mobileMenu button{
  color:white;
  background:none;
  border:0;
  text-align:left;
  font-size:18px;
}

.hero{
  min-height:100vh;
  background:url("https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1800&q=90") center/cover;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  position:relative;
  color:white;
}

.overlay{
  position:absolute;
  inset:0;
  background:rgba(0,0,0,.48);
}

.heroContent{
  position:relative;
  max-width:900px;
  padding:120px 24px 60px;
}

.eyebrow{
  color:#d7b978;
  letter-spacing:5px;
  text-transform:uppercase;
  font-size:13px;
}

.hero h1{
  font-family:Georgia, serif;
  font-size:clamp(46px,8vw,92px);
  line-height:1.05;
  margin:20px 0;
}

.hero em{
  color:#d7b978;
}

.heroContent > p{
  font-size:20px;
  color:rgba(255,255,255,.86);
}

.heroBtns{
  margin-top:30px;
  display:flex;
  justify-content:center;
  gap:15px;
  flex-wrap:wrap;
}

.goldBtn{
  background:#c7a66b!important;
  color:white!important;
  border:0!important;
  padding:15px 25px;
  text-transform:uppercase;
  letter-spacing:2px;
  cursor:pointer;
}

.outlineBtn{
  background:transparent;
  color:white;
  border:1px solid white;
  padding:15px 25px;
  text-transform:uppercase;
  letter-spacing:2px;
  cursor:pointer;
}

.stats{
  background:#111;
  color:white;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:20px;
  padding:60px 6%;
  text-align:center;
}

.stats strong{
  display:block;
  color:#d7b978;
  font-size:44px;
  font-family:Georgia, serif;
}

.stats span{
  text-transform:uppercase;
  letter-spacing:2px;
  font-size:12px;
  color:#ccc;
}

.sectionTitle{
  padding:80px 6% 30px;
}

.sectionTitle p{
  color:#b99555;
  text-transform:uppercase;
  letter-spacing:4px;
  font-size:12px;
}

.sectionTitle h2{
  font-family:Georgia, serif;
  font-size:48px;
  margin:0;
}

.grid{
  padding:0 6% 80px;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:28px;
}

.grid.four{
  grid-template-columns:repeat(4,1fr);
}

.card{
  background:white;
  border:1px solid #eee;
  overflow:hidden;
  box-shadow:0 10px 30px rgba(0,0,0,.06);
  transition:.35s ease;
}

.card:hover{
  transform:translateY(-6px);
  box-shadow:0 20px 45px rgba(0,0,0,.12);
}

.card img{
  width:100%;
  height:290px;
  object-fit:cover;
}

.cardBody{
  padding:24px;
}

.cardBody h3{
  font-family:Georgia, serif;
  font-size:25px;
  margin:10px 0;
}

.cardBody p{
  color:#666;
  line-height:1.6;
}

.cardBody p:first-of-type{
  display:flex;
  align-items:center;
  gap:6px;
}

.badge{
  background:#f1e5d1;
  color:#8a6932;
  padding:6px 10px;
  font-size:11px;
  text-transform:uppercase;
  letter-spacing:2px;
}

.stars{
  color:#c7a66b;
  display:flex;
  gap:2px;
  margin:12px 0;
}

.cta{
  background:#111;
  color:white;
  text-align:center;
  padding:100px 24px;
}

.cta svg{
  color:#d7b978;
}

.cta h2{
  font-family:Georgia, serif;
  font-size:50px;
}

.cta p{
  color:#ccc;
  max-width:650px;
  margin:0 auto 30px;
}

.page{
  padding-top:78px;
}

.pageHero{
  background:#111;
  color:white;
  text-align:center;
  padding:120px 24px 90px;
}

.pageHero h1{
  font-family:Georgia, serif;
  font-size:clamp(42px,7vw,76px);
  margin:0 0 18px;
}

.pageHero p{
  color:#ccc;
  font-size:18px;
}

.filters{
  padding:30px 6%;
  display:flex;
  gap:12px;
  flex-wrap:wrap;
}

.filters button{
  padding:12px 18px;
  background:white;
  border:1px solid #ddd;
  cursor:pointer;
  text-transform:uppercase;
  letter-spacing:2px;
}

.filters .active{
  background:#111;
  color:white;
}

.serviceCard{
  background:white;
  padding:35px;
  border:1px solid #eee;
}

.serviceCard svg{
  color:#c7a66b;
}

.serviceCard h3{
  font-family:Georgia, serif;
  font-size:24px;
}

.serviceCard p{
  color:#666;
  line-height:1.6;
}

.contactWrap{
  padding:70px 6%;
  display:grid;
  grid-template-columns:2fr 1fr;
  gap:35px;
}

.form,.contactInfo{
  background:white;
  border:1px solid #eee;
  padding:35px;
}

.form h2,.contactInfo h2{
  font-family:Georgia, serif;
  font-size:36px;
}

.two{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:15px;
}

input, textarea{
  width:100%;
  box-sizing:border-box;
  padding:15px;
  border:1px solid #ddd;
  margin-bottom:15px;
  font-size:15px;
}

label{
  color:#666;
  font-size:13px;
  text-transform:uppercase;
  letter-spacing:2px;
}

.contactInfo p{
  display:flex;
  align-items:center;
  gap:10px;
  color:#555;
}

.footer{
  background:#050505;
  color:white;
  display:flex;
  justify-content:space-between;
  gap:30px;
  padding:60px 6%;
}

.footer h2{
  font-family:Georgia, serif;
}

.footer p{
  color:#bbb;
  display:flex;
  gap:8px;
  align-items:center;
}

.whatsapp{
  position:fixed;
  right:22px;
  bottom:22px;
  background:#16a34a;
  color:white;
  text-decoration:none;
  padding:14px 20px;
  border-radius:999px;
  box-shadow:0 10px 30px rgba(0,0,0,.25);
  z-index:60;
}

.center{
  text-align:center;
  padding:0 0 80px;
}

@media(max-width:900px){
  .desktopNav{display:none}
  .menuBtn{display:block}
  .stats{grid-template-columns:1fr 1fr}
  .grid,.grid.four{grid-template-columns:1fr}
  .contactWrap{grid-template-columns:1fr}
  .two{grid-template-columns:1fr}
  .footer{flex-direction:column}
  .card img{height:240px}
}
`;

export default App;
