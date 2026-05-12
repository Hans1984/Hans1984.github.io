<!-- Publications Section -->
<div style="margin-bottom: 30px;">
  <div style="display: flex; align-items: center; gap: 10px;">
    <h2 style="margin:0; font-size:28px;">Publications</h2>
    <span style="font-size:14px; color:#555;">📧 indicates the corresponding author</span>
  </div>

  <div class="publications">
    <ol class="bibliography">

      {% for link in site.data.publications.main %}
      <li>
        <div class="pub-row" style="display: flex; gap: 15px; align-items: flex-start;">
          <!-- Teaser image -->
          <div style="flex: 0 0 300px;"> <!-- 最大宽度 300px -->
            {% if link.image %}
            <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="max-width:100%; height:auto; border-radius: 4px;">
            {% endif %}
            {% if link.conference_short %}
            <abbr class="badge">{{ link.conference_short }}</abbr>
            {% endif %}
          </div>

          <!-- Right side text -->
          <div style="flex: 1;">
            <div class="title"><a href="{{ link.pdf }}">{{ link.title }}</a></div>
            <div class="author">{{ link.authors }}</div>
            <div class="periodical"><em>{{ link.conference }}</em></div>
            <div class="links" style="margin-top:5px;">
              {% if link.pdf %}<a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" target="_blank" style="font-size:12px;">PDF</a>{% endif %}
              {% if link.code %}<a href="{{ link.code }}" class="btn btn-sm z-depth-0" target="_blank" style="font-size:12px;">Code</a>{% endif %}
              {% if link.page %}<a href="{{ link.page }}" class="btn btn-sm z-depth-0" target="_blank" style="font-size:12px;">Project Page</a>{% endif %}
              {% if link.bibtex %}<a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" target="_blank" style="font-size:12px;">BibTex</a>{% endif %}
            </div>
          </div>
        </div>
      </li>
      <br>
      {% endfor %}

    </ol>
  </div>
</div>



<!-- <h2 id="publications" style="margin: 2px 0px -15px;">Publications</h2>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.publications.main %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
    {% endif %}
    {% if link.conference_short %} 
    <abbr class="badge">{{ link.conference_short }}</abbr>
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title"><a href="{{ link.pdf }}">{{ link.title }}</a></div>
      <div class="author">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em>
      </div>
    <div class="links">
      {% if link.pdf %} 
      <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a>
      {% endif %}
      {% if link.code %} 
      <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
      {% endif %}
      {% if link.page %} 
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Project Page</a>
      {% endif %}
      {% if link.bibtex %} 
      <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">BibTex</a>
      {% endif %}
      {% if link.notes %} 
      <strong> <i style="color:#e74d3c">{{ link.notes }}</i></strong>
      {% endif %}
      {% if link.others %} 
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>

<br>

{% endfor %}

</ol>
</div>
 -->

 
