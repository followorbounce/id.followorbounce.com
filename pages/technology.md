---
layout: default
title: "Tech & Tools"
permalink: /technology/
description: "Reference guides, deep dives, and interactive tools for radio, electronics, access control, and marine technology."
---

<div class="page-hero">
  <p class="eyebrow">Technology</p>
  <h1>Tech &amp; Tools</h1>
  <p class="subtitle">Reference guides, interactive tools, and deep dives into the technology that shapes how we work, communicate, and navigate.</p>
</div>

<section class="page-content" aria-label="Technology reference and tools">

{% assign items = site.reference | sort: "year" | reverse %}
{% for item in items %}
<article class="content-row">
  <a class="content-row__link" href="{{ item.url | relative_url }}">
    <span class="content-row__year">{{ item.year }}</span>
    <span class="content-row__title">{{ item.title }}</span>
    {% if item.tags %}<span class="content-row__tags">{{ item.tags | join: ", " }}</span>{% endif %}
  </a>
</article>
{% endfor %}

</section>
