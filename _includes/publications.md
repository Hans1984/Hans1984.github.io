<section class="section research" id="publications" aria-labelledby="publications-title">
  <div class="section-heading"><h2 id="publications-title">Selected publications</h2><a class="text-link" href="{{ site.google_scholar }}">Full list</a></div>
  <p class="section-description">* Equal contribution. <span class="corresponding-mark">✉</span> Corresponding author.</p>
  <ol class="publication-list">
  {% assign selected_papers = site.data.publications.main | where: "selected", true %}
  {% for paper in selected_papers %}
    <li class="publication" data-topic="{{ paper.topic }}">
      <div class="paper-image"><img src="{{ paper.image | relative_url }}" alt="Research overview for {{ paper.title | escape }}" loading="lazy" width="640" height="360"></div>
      <div class="paper-copy">
        {% assign paper_year = paper.year | append: "" %}
        <p class="paper-venue"><span>{{ paper.conference_short }}{% unless paper.conference_short contains paper_year %} · {{ paper.year }}{% endunless %}</span></p>
        <h3>{{ paper.title | escape }}</h3>
        <p class="paper-authors">{{ paper.authors }}</p>
        <div class="paper-links">
          {% if paper.pdf %}<a href="{{ paper.pdf }}">Paper</a>{% endif %}
          {% if paper.page %}<a href="{{ paper.page }}">Project Page</a>{% endif %}
          {% if paper.notes %}<span class="paper-note">{{ paper.notes }}</span>{% endif %}
        </div>
      </div>
    </li>
  {% endfor %}
  </ol>
</section>
