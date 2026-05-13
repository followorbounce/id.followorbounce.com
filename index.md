---
layout: default
title: Follow or Bounce
---

<section class="hero">

<div class="hero-left">

<div class="hero-eyebrow">
EST. 2024 — Identity System
</div>

<div>
<h1 class="hero-title">
FOLLOW<br>
<span class="dot">.</span>OR<span class="dot">.</span><br>
BOUNCE
</h1>
</div>

<div>
<p class="hero-line">
Automatically indexed archive system for standalone HTML projects and editorial documents.
</p>
</div>

</div>

<div class="hero-right">
<div class="hero-monogram">
<h1 class="hero-title">
BOUNCE<br>
<span class="dot">.</span>OR<span class="dot">.</span><br>
FOLLOW
</h1>
</div>
</div>

</section>

<div class="section-label">
<span>Archive Index</span>
<span>Pages / Auto Parsed</span>
</div>

<section>

<div class="archive-grid">

{% assign html_pages = site.pages | where_exp: "item", "item.path contains 'pages/'" %}

{% for p in html_pages %}

<a class="archive-card" href="{{ p.url | relative_url }}">

<div class="archive-tag">
DOCUMENT
</div>

<div class="archive-title">
{{ p.title }}
</div>

<div class="archive-desc">
{{ p.description }}
</div>

</a>

{% endfor %}

</div>

</section>
