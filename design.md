<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Artfy – Gallery Collection</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Dancing+Script:wght@600&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet" />
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #edeae4;
    --navy: #1c1f4a;
    --orange: #f5841f;
    --orange-light: #f9a04e;
    --script: #c8732a;
    --text: #2a2a3a;
    --muted: #7a7a8a;
    --white: #ffffff;
    --card-bg: #fff;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Outfit', sans-serif;
    background: var(--bg);
    color: var(--text);
    overflow-x: hidden;
  }

  /* ─── NAVBAR ─── */
  nav {
    position: sticky; top: 0; z-index: 100;
    background: var(--bg);
    display: flex; align-items: center; justify-content: space-between;
    padding: 18px 60px;
    border-bottom: 1px solid rgba(0,0,0,.06);
  }

  .logo {
    display: flex; align-items: center; gap: 8px;
    font-family: 'DM Serif Display', serif;
    font-size: 1.5rem; color: var(--navy); text-decoration: none;
  }
  .logo svg { width: 22px; height: 22px; }

  .nav-links { display: flex; gap: 36px; list-style: none; }
  .nav-links a {
    text-decoration: none; color: var(--text);
    font-size: .9rem; font-weight: 400;
    transition: color .2s;
  }
  .nav-links a:hover { color: var(--orange); }

  .nav-actions { display: flex; align-items: center; gap: 20px; }
  .btn-login {
    background: none; border: none; cursor: pointer;
    font-size: .9rem; font-weight: 500; color: var(--navy);
    font-family: 'Outfit', sans-serif;
  }
  .btn-signup {
    background: var(--orange); color: #fff;
    border: none; border-radius: 50px; padding: 10px 26px;
    font-size: .9rem; font-weight: 500; cursor: pointer;
    font-family: 'Outfit', sans-serif;
    transition: background .2s, transform .15s;
  }
  .btn-signup:hover { background: var(--orange-light); transform: translateY(-1px); }

  /* ─── HERO ─── */
  .hero {
    display: flex; align-items: center;
    padding: 80px 60px 60px;
    gap: 60px; max-width: 1200px; margin: 0 auto;
  }

  .hero-title {
    flex: 0 0 42%;
  }
  .hero-title h1 {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(2.2rem, 4vw, 3.6rem);
    color: var(--navy);
    line-height: 1.15;
    font-weight: 400;
  }
  .hero-title h1 em {
    font-family: 'Dancing Script', cursive;
    font-style: normal;
    color: var(--script);
    font-size: 1.15em;
  }

  .hero-right {
    flex: 1;
  }
  .hero-right p {
    font-size: .95rem; color: var(--muted);
    line-height: 1.7; margin-bottom: 28px;
    max-width: 380px;
  }
  .btn-explore {
    background: var(--orange); color: #fff;
    border: none; border-radius: 50px; padding: 14px 34px;
    font-size: .95rem; font-weight: 500; cursor: pointer;
    font-family: 'Outfit', sans-serif;
    transition: background .2s, transform .15s;
  }
  .btn-explore:hover { background: var(--orange-light); transform: translateY(-2px); }

  /* ─── CAROUSEL SECTION ─── */
  .carousel-section {
    padding: 40px 0 80px;
    text-align: center;
  }

  .carousel-label {
    font-family: 'DM Serif Display', serif;
    font-size: 1.35rem; color: var(--navy);
    margin-bottom: 4px;
  }
  .carousel-sub {
    font-size: .85rem; color: var(--muted);
    margin-bottom: 48px;
  }

  .cards-track {
    display: flex; justify-content: center; align-items: flex-end;
    gap: 0; position: relative; height: 400px;
    perspective: 1200px;
  }

  .art-card {
    position: absolute; border-radius: 18px; overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,.18);
    cursor: pointer;
    transition: transform .5s ease, box-shadow .3s;
  }
  .art-card img { width: 100%; height: 100%; object-fit: cover; display: block; }

  /* card positions */
  .art-card.c0 { width: 155px; height: 255px; left: calc(50% - 340px); transform: rotate(-14deg) translateY(20px); z-index: 1; }
  .art-card.c1 { width: 175px; height: 290px; left: calc(50% - 215px); transform: rotate(-7deg) translateY(10px); z-index: 2; }
  .art-card.c2 { width: 185px; height: 320px; left: calc(50% - 92px); transform: rotate(0deg) translateY(0px); z-index: 5; box-shadow: 0 30px 80px rgba(0,0,0,.3); }
  .art-card.c3 { width: 175px; height: 290px; left: calc(50% + 30px); transform: rotate(7deg) translateY(10px); z-index: 2; }
  .art-card.c4 { width: 155px; height: 255px; left: calc(50% + 155px); transform: rotate(14deg) translateY(20px); z-index: 1; }

  .art-card:hover { box-shadow: 0 30px 80px rgba(0,0,0,.3); z-index: 10; }
  .art-card.c0:hover { transform: rotate(-14deg) translateY(0px) scale(1.04); }
  .art-card.c1:hover { transform: rotate(-7deg) translateY(0px) scale(1.04); }
  .art-card.c2:hover { transform: rotate(0deg) translateY(-10px) scale(1.04); }
  .art-card.c3:hover { transform: rotate(7deg) translateY(0px) scale(1.04); }
  .art-card.c4:hover { transform: rotate(14deg) translateY(0px) scale(1.04); }

  /* Color placeholder cards */
  .art-card.c0 { background: linear-gradient(135deg, #8fb8d6, #4a7fa0, #2a4f70); }
  .art-card.c1 { background: linear-gradient(135deg, #c8dfc0, #8ab890, #5a9068); }
  .art-card.c2 { background: linear-gradient(180deg, #1a1a2e 0%, #16213e 40%, #0f3460 70%, #c9a227 100%); }
  .art-card.c3 { background: linear-gradient(135deg, #d4a873, #a87845, #6b4523); }
  .art-card.c4 { background: linear-gradient(135deg, #7ab8d0, #3d85aa, #1a5a80); }

  /* SVG illustrations inside cards */
  .card-art { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }

  .carousel-nav {
    margin-top: 48px;
    display: flex; justify-content: center; gap: 12px;
  }
  .nav-btn {
    width: 44px; height: 44px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    border: 1.5px solid #ccc; background: var(--bg);
    cursor: pointer; transition: all .2s; font-size: 1.1rem;
    color: var(--navy);
  }
  .nav-btn.active, .nav-btn:hover {
    background: var(--orange); border-color: var(--orange); color: #fff;
  }

  /* ─── ABOUT ─── */
  .about-section {
    display: flex; align-items: center;
    padding: 60px 60px 80px; gap: 80px;
    max-width: 1200px; margin: 0 auto;
  }

  .about-title {
    flex: 0 0 200px;
    font-family: 'DM Serif Display', serif;
    font-size: 2.6rem; line-height: 1.1;
    color: var(--navy);
  }
  .about-title em {
    font-family: 'Dancing Script', cursive;
    font-style: normal; color: var(--script);
    font-size: 1.1em;
  }

  .about-text { flex: 1; }
  .about-text p {
    line-height: 1.8;
    font-size: 1rem;
  }
  .about-text p strong {
    color: var(--navy); font-weight: 600;
  }
  .about-text p span {
    color: var(--muted);
  }

  /* ─── FEATURED ─── */
  .featured-section {
    background: var(--navy);
    padding: 60px;
    position: relative; overflow: hidden;
  }

  .featured-header {
    display: flex; justify-content: space-between; align-items: flex-end;
    margin-bottom: 40px;
  }

  .featured-title {
    font-family: 'DM Serif Display', serif;
    font-size: 2.2rem; color: var(--white);
    line-height: 1.1;
  }
  .featured-title em {
    font-family: 'Dancing Script', cursive;
    font-style: normal; color: var(--orange);
    display: block; font-size: 1.2em;
  }

  .btn-slide {
    background: transparent; border: 1.5px solid rgba(255,255,255,.3);
    color: #fff; border-radius: 50px; padding: 10px 22px;
    font-size: .85rem; cursor: pointer; font-family: 'Outfit', sans-serif;
    display: flex; align-items: center; gap: 8px;
    transition: border-color .2s, background .2s;
  }
  .btn-slide:hover { border-color: var(--orange); background: rgba(245,132,31,.1); }
  .btn-slide svg { width: 14px; height: 14px; }

  .watermark-text {
    position: absolute;
    font-family: 'Dancing Script', cursive;
    font-size: 9rem; color: rgba(255,255,255,.04);
    bottom: 30px; left: 50%;
    transform: translateX(-50%);
    white-space: nowrap; pointer-events: none; user-select: none;
    letter-spacing: 4px;
  }

  .artworks-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .artwork-card {
    border-radius: 16px; overflow: hidden;
    position: relative; cursor: pointer;
    transition: transform .3s;
  }
  .artwork-card:hover { transform: scale(1.02); }
  .artwork-card .placeholder {
    width: 100%; height: 220px;
  }
  .artwork-card.a0 .placeholder { background: linear-gradient(135deg, #2d8b4e, #7bc96f, #f7e018, #e84040); }
  .artwork-card.a1 .placeholder { background: linear-gradient(135deg, #c8a96e, #8b5e3c, #d4895a); }
  .artwork-card.a2 .placeholder { background: linear-gradient(135deg, #c4813a, #a05a20, #d49060, #7a4010); }

  .artwork-inner {
    width: 100%; height: 100%;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Dancing Script', cursive;
    font-size: 2.5rem; color: rgba(255,255,255,.5);
  }

  /* ─── ANIMATION ─── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .hero, .carousel-section, .about-section, .featured-section {
    animation: fadeUp .7s ease both;
  }
  .carousel-section { animation-delay: .15s; }
  .about-section    { animation-delay: .25s; }
  .featured-section { animation-delay: .35s; }
</style>
</head>
<body>

<!-- ── NAVBAR ── -->
<nav>
  <a class="logo" href="#">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10"/>
      <path d="M16.24 7.76a6 6 0 0 1 0 8.49"/>
    </svg>
    Artfy
  </a>
  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">About us</a></li>
    <li><a href="#">Collections</a></li>
    <li><a href="#">Events</a></li>
  </ul>
  <div class="nav-actions">
    <button class="btn-login">Log in</button>
    <button class="btn-signup">Sign up</button>
  </div>
</nav>

<!-- ── HERO ── -->
<section class="hero">
  <div class="hero-title">
    <h1>Drive into<br>creativity with our<br><em>gallery collection</em></h1>
  </div>
  <div class="hero-right">
    <p>Explore our curated gallery collections, featuring captivating works from renowned artists, and immerse yourself in upcoming exhibitions and events that celebrate creativity and expression.</p>
    <button class="btn-explore">Explore Collection</button>
  </div>
</section>

<!-- ── CAROUSEL ── -->
<section class="carousel-section">
  <div class="carousel-label">Keeper of the Night</div>
  <div class="carousel-sub">Robbie Arnett</div>

  <div class="cards-track">
    <!-- Card 0 – rainy street -->
    <div class="art-card c0">
      <div class="card-art">
        <svg viewBox="0 0 155 255" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
          <defs>
            <linearGradient id="g0" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#7ab0cc"/>
              <stop offset="100%" stop-color="#2a4f70"/>
            </linearGradient>
          </defs>
          <rect width="155" height="255" fill="url(#g0)"/>
          <!-- buildings -->
          <rect x="10" y="60" width="30" height="120" fill="rgba(0,0,0,.25)" rx="2"/>
          <rect x="45" y="40" width="25" height="140" fill="rgba(0,0,0,.2)" rx="2"/>
          <rect x="75" y="70" width="40" height="110" fill="rgba(0,0,0,.18)" rx="2"/>
          <!-- couple -->
          <ellipse cx="65" cy="180" rx="14" ry="30" fill="rgba(0,0,0,.4)"/>
          <circle cx="58" cy="152" r="6" fill="#d4a875"/>
          <circle cx="72" cy="150" r="6" fill="#c49060"/>
          <!-- umbrella -->
          <path d="M48 148 Q65 130 82 148" stroke="#2a2a5a" stroke-width="3" fill="rgba(40,40,100,.7)"/>
          <line x1="65" y1="148" x2="65" y2="170" stroke="#2a2a5a" stroke-width="2"/>
          <!-- rain lines -->
          <g stroke="rgba(255,255,255,.25)" stroke-width="1">
            <line x1="20" y1="0" x2="15" y2="30"/>
            <line x1="50" y1="10" x2="45" y2="40"/>
            <line x1="90" y1="5" x2="85" y2="35"/>
            <line x1="120" y1="0" x2="115" y2="30"/>
            <line x1="140" y1="15" x2="135" y2="45"/>
            <line x1="30" y1="50" x2="25" y2="80"/>
            <line x1="110" y1="40" x2="105" y2="70"/>
          </g>
          <!-- reflection puddle -->
          <ellipse cx="65" cy="235" rx="50" ry="8" fill="rgba(120,180,220,.3)"/>
        </svg>
      </div>
    </div>

    <!-- Card 1 – pastoral meadow -->
    <div class="art-card c1">
      <div class="card-art">
        <svg viewBox="0 0 175 290" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#a8d8c0"/>
              <stop offset="60%" stop-color="#c8e8a8"/>
              <stop offset="100%" stop-color="#6aaa70"/>
            </linearGradient>
          </defs>
          <rect width="175" height="290" fill="url(#g1)"/>
          <!-- sky -->
          <rect width="175" height="140" fill="#d0eaf8"/>
          <!-- mountains far -->
          <path d="M0 120 L40 60 L80 120Z" fill="#b8d8b0" opacity=".6"/>
          <path d="M50 130 L100 55 L150 130Z" fill="#a0c898" opacity=".6"/>
          <!-- tree - cherry blossom -->
          <rect x="80" y="130" width="8" height="80" fill="#8b5e3c"/>
          <ellipse cx="84" cy="120" rx="35" ry="28" fill="#f9c8d8"/>
          <ellipse cx="60" cy="130" rx="25" ry="20" fill="#f7b8cc"/>
          <ellipse cx="108" cy="125" rx="28" ry="22" fill="#f9c8d8"/>
          <!-- horse -->
          <ellipse cx="55" cy="215" rx="22" ry="13" fill="#f5f5f0"/>
          <rect x="44" y="218" width="5" height="22" fill="#f0f0eb" rx="2"/>
          <rect x="57" y="218" width="5" height="22" fill="#f0f0eb" rx="2"/>
          <rect x="66" y="216" width="5" height="20" fill="#f0f0eb" rx="2"/>
          <rect x="76" y="216" width="5" height="20" fill="#f0f0eb" rx="2"/>
          <ellipse cx="40" cy="210" rx="10" ry="7" fill="#f5f5f0"/><!-- head -->
          <line x1="38" y1="204" x2="36" y2="195" stroke="#e0e0d8" stroke-width="2"/><!-- ear -->
          <!-- fence -->
          <line x1="0" y1="240" x2="175" y2="240" stroke="#8b6030" stroke-width="2"/>
          <line x1="0" y1="252" x2="175" y2="252" stroke="#8b6030" stroke-width="2"/>
          <line x1="20" y1="232" x2="20" y2="260" stroke="#8b6030" stroke-width="2"/>
          <line x1="60" y1="232" x2="60" y2="260" stroke="#8b6030" stroke-width="2"/>
          <line x1="100" y1="232" x2="100" y2="260" stroke="#8b6030" stroke-width="2"/>
          <line x1="140" y1="232" x2="140" y2="260" stroke="#8b6030" stroke-width="2"/>
          <!-- grass -->
          <rect x="0" y="260" width="175" height="30" fill="#5a9840"/>
        </svg>
      </div>
    </div>

    <!-- Card 2 – Keeper of the Night (center, hero) -->
    <div class="art-card c2">
      <div class="card-art">
        <svg viewBox="0 0 185 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
          <defs>
            <radialGradient id="moon" cx="50%" cy="35%" r="15%">
              <stop offset="0%" stop-color="#ffffff"/>
              <stop offset="40%" stop-color="#f0f0e0"/>
              <stop offset="100%" stop-color="transparent"/>
            </radialGradient>
            <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#0a0a1a"/>
              <stop offset="50%" stop-color="#151530"/>
              <stop offset="100%" stop-color="#1a3a20"/>
            </linearGradient>
            <linearGradient id="dunes" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#c9a227"/>
              <stop offset="100%" stop-color="#7a5a10"/>
            </linearGradient>
          </defs>
          <rect width="185" height="320" fill="url(#g2)"/>
          <!-- stars -->
          <g fill="white">
            <circle cx="30" cy="25" r="1"/><circle cx="60" cy="15" r="1.2"/>
            <circle cx="90" cy="30" r="0.8"/><circle cx="130" cy="18" r="1"/>
            <circle cx="155" cy="35" r="1.2"/><circle cx="20" cy="55" r="0.8"/>
            <circle cx="170" cy="50" r="1"/><circle cx="45" cy="70" r="0.8"/>
            <circle cx="160" cy="80" r="0.8"/>
          </g>
          <!-- moon glow -->
          <circle cx="92" cy="80" r="45" fill="rgba(255,255,240,.06)"/>
          <!-- moon -->
          <circle cx="92" cy="80" r="28" fill="#f8f8ec"/>
          <circle cx="88" cy="76" r="5" fill="rgba(200,200,160,.3)"/>
          <circle cx="98" cy="85" r="3" fill="rgba(200,200,160,.25)"/>
          <!-- clouds -->
          <ellipse cx="50" cy="95" rx="30" ry="10" fill="rgba(80,80,100,.5)"/>
          <ellipse cx="145" cy="88" rx="25" ry="9" fill="rgba(80,80,100,.4)"/>
          <!-- landscape dunes -->
          <path d="M0 220 Q50 180 92 200 Q140 175 185 205 L185 320 L0 320Z" fill="url(#dunes)"/>
          <path d="M0 240 Q45 215 90 230 Q140 210 185 235 L185 320 L0 320Z" fill="#a07820"/>
          <path d="M0 260 Q50 250 92 258 Q140 248 185 260 L185 320 L0 320Z" fill="#7a5a10"/>
          <!-- deer silhouette -->
          <g transform="translate(70,160)" fill="#c9a227">
            <!-- body -->
            <ellipse cx="20" cy="22" rx="18" ry="10" fill="#d4b030"/>
            <!-- neck -->
            <rect x="28" y="10" width="6" height="14" rx="3" fill="#d4b030"/>
            <!-- head -->
            <ellipse cx="34" cy="8" rx="7" ry="5" fill="#d4b030"/>
            <!-- antlers -->
            <line x1="34" y1="4" x2="28" y2="-10" stroke="#d4b030" stroke-width="2"/>
            <line x1="28" y1="-5" x2="22" y2="-10" stroke="#d4b030" stroke-width="1.5"/>
            <line x1="34" y1="4" x2="42" y2="-10" stroke="#d4b030" stroke-width="2"/>
            <line x1="42" y1="-5" x2="48" y2="-10" stroke="#d4b030" stroke-width="1.5"/>
            <!-- legs -->
            <line x1="12" y1="30" x2="10" y2="48" stroke="#c09020" stroke-width="3"/>
            <line x1="18" y1="30" x2="16" y2="48" stroke="#c09020" stroke-width="3"/>
            <line x1="26" y1="30" x2="28" y2="48" stroke="#c09020" stroke-width="3"/>
            <line x1="32" y1="30" x2="34" y2="48" stroke="#c09020" stroke-width="3"/>
          </g>
          <!-- teal accent ground -->
          <path d="M0 290 Q92 270 185 290 L185 320 L0 320Z" fill="#204830" opacity=".8"/>
        </svg>
      </div>
    </div>

    <!-- Card 3 – urban street kids -->
    <div class="art-card c3">
      <div class="card-art">
        <svg viewBox="0 0 175 290" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
          <defs>
            <linearGradient id="g3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#a8c8e8"/>
              <stop offset="100%" stop-color="#d4a873"/>
            </linearGradient>
          </defs>
          <rect width="175" height="290" fill="url(#g3)"/>
          <!-- buildings -->
          <rect x="0" y="30" width="40" height="200" fill="#c8956a" opacity=".8" rx="2"/>
          <rect x="42" y="60" width="35" height="170" fill="#b87a4a" opacity=".7" rx="2"/>
          <rect x="110" y="20" width="45" height="210" fill="#c89060" opacity=".8" rx="2"/>
          <rect x="80" y="80" width="28" height="150" fill="#a06030" opacity=".6" rx="2"/>
          <!-- windows -->
          <g fill="rgba(255,230,150,.6)">
            <rect x="8" y="50" width="8" height="10" rx="1"/>
            <rect x="22" y="50" width="8" height="10" rx="1"/>
            <rect x="8" y="75" width="8" height="10" rx="1"/>
            <rect x="22" y="75" width="8" height="10" rx="1"/>
            <rect x="118" y="40" width="8" height="10" rx="1"/>
            <rect x="132" y="40" width="8" height="10" rx="1"/>
            <rect x="118" y="65" width="8" height="10" rx="1"/>
            <rect x="132" y="65" width="8" height="10" rx="1"/>
          </g>
          <!-- street -->
          <rect x="0" y="230" width="175" height="60" fill="#7a6050"/>
          <line x1="87" y1="230" x2="87" y2="290" stroke="rgba(255,255,255,.3)" stroke-width="3" stroke-dasharray="10,8"/>
          <!-- 3 kids walking away -->
          <!-- kid 1 -->
          <circle cx="65" cy="205" r="8" fill="#f4c090"/>
          <rect x="60" y="213" width="11" height="18" fill="#e84040" rx="2"/>
          <line x1="60" y1="220" x2="53" y2="232" stroke="#4040c0" stroke-width="4"/>
          <line x1="71" y1="220" x2="78" y2="232" stroke="#4040c0" stroke-width="4"/>
          <!-- kid 2 -->
          <circle cx="87" cy="202" r="9" fill="#8b5e3c"/>
          <rect x="82" y="211" width="12" height="20" fill="#40a040" rx="2"/>
          <line x1="82" y1="218" x2="75" y2="232" stroke="#c09040" stroke-width="4"/>
          <line x1="94" y1="218" x2="101" y2="232" stroke="#c09040" stroke-width="4"/>
          <!-- kid 3 -->
          <circle cx="108" cy="205" r="8" fill="#d4956a"/>
          <rect x="103" y="213" width="11" height="18" fill="#a040a0" rx="2"/>
          <line x1="103" y1="220" x2="96" y2="232" stroke="#606060" stroke-width="4"/>
          <line x1="114" y1="220" x2="121" y2="232" stroke="#606060" stroke-width="4"/>
          <!-- shadows -->
          <ellipse cx="65" cy="235" rx="12" ry="3" fill="rgba(0,0,0,.2)"/>
          <ellipse cx="87" cy="235" rx="13" ry="3" fill="rgba(0,0,0,.2)"/>
          <ellipse cx="108" cy="235" rx="12" ry="3" fill="rgba(0,0,0,.2)"/>
        </svg>
      </div>
    </div>

    <!-- Card 4 – waterfall mountains -->
    <div class="art-card c4">
      <div class="card-art">
        <svg viewBox="0 0 155 255" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
          <defs>
            <linearGradient id="g4" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#1a3a6a"/>
              <stop offset="50%" stop-color="#2a6090"/>
              <stop offset="100%" stop-color="#4090b0"/>
            </linearGradient>
          </defs>
          <rect width="155" height="255" fill="url(#g4)"/>
          <!-- moon -->
          <circle cx="78" cy="45" r="25" fill="#f0f0e0" opacity=".9"/>
          <!-- mountains -->
          <path d="M0 160 L40 70 L80 160Z" fill="#1a4060" opacity=".9"/>
          <path d="M40 160 L90 50 L140 160Z" fill="#154050" opacity=".8"/>
          <path d="M80 160 L130 80 L180 160Z" fill="#1a4560" opacity=".7"/>
          <!-- waterfall -->
          <path d="M70 80 Q75 120 72 160 Q74 160 78 160 Q76 120 80 80Z" fill="rgba(200,230,250,.5)"/>
          <path d="M72 160 Q74 180 70 210 Q73 210 78 210 Q75 180 78 160Z" fill="rgba(200,230,250,.4)"/>
          <!-- mist at base -->
          <ellipse cx="74" cy="215" rx="30" ry="8" fill="rgba(200,230,250,.35)"/>
          <!-- water pool -->
          <ellipse cx="74" cy="225" rx="40" ry="12" fill="rgba(100,180,220,.4)"/>
          <!-- trees silhouette -->
          <g fill="#0d2030">
            <path d="M5 160 L12 130 L19 160Z"/>
            <path d="M12 160 L18 140 L24 160Z"/>
            <path d="M125 160 L133 128 L141 160Z"/>
            <path d="M133 160 L140 142 L147 160Z"/>
          </g>
          <rect x="0" y="238" width="155" height="17" fill="#0a1828"/>
        </svg>
      </div>
    </div>
  </div>

  <div class="carousel-nav">
    <button class="nav-btn" onclick="this.classList.remove('active')">&#8592;</button>
    <button class="nav-btn active">&#8594;</button>
  </div>
</section>

<!-- ── ABOUT ── -->
<section class="about-section">
  <div class="about-title">
    About <em>the<br>gallery</em>
  </div>
  <div class="about-text">
    <p>
      <strong>Welcome to Artfy, where creativity thrives. We showcase diverse collections, from timeless classics to contemporary art, connecting artists and audiences through inspiring exhibitions.</strong>
      <span> Explore our gallery, discover our collections, and join us for upcoming events, workshops, and artist talks. Experience the beauty and stories that art brings to life!</span>
    </p>
  </div>
</section>

<!-- ── FEATURED ARTWORKS ── -->
<section class="featured-section">
  <div class="featured-header">
    <div class="featured-title">
      Featured
      <em>Artworks</em>
    </div>
    <button class="btn-slide">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
      Slide to Watch more
    </button>
  </div>

  <div class="artworks-grid">
    <div class="artwork-card a0">
      <div class="placeholder">
        <div class="artwork-inner">Urban</div>
      </div>
    </div>
    <div class="artwork-card a1">
      <div class="placeholder">
        <div class="artwork-inner">Portrait</div>
      </div>
    </div>
    <div class="artwork-card a2">
      <div class="placeholder">
        <div class="artwork-inner">Warrior</div>
      </div>
    </div>
  </div>

  <div class="watermark-text">Creative</div>
</section>

</body>
</html>