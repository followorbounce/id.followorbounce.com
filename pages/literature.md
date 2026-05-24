---
layout: default
title: "Writing & Ideas"
permalink: /literature/
description: "Essays, manifestos, and long-form pieces on philosophy, consciousness, spirituality, and the ideas that define our time."
---

<div class="page-hero">
  <p class="eyebrow">Literature</p>
  <h1>Writing &amp; Ideas</h1>
  <p class="subtitle">Essays, manifestos, and long-form pieces on philosophy, consciousness, and the ideas that define our time.</p>
</div>

<section class="page-content" aria-label="Essays and writing">

{% assign items = site.essays | sort: "year" | reverse %}
{% for item in items %}
<article class="content-row">
  <a class="content-row__link" href="{{ item.url }}">
    <span class="content-row__year">{{ item.year }}</span>
    <span class="content-row__title">{{ item.title }}</span>
    {% if item.tags %}<span class="content-row__tags">{{ item.tags | join: ", " }}</span>{% endif %}
  </a>
</article>
{% endfor %}

</section>
