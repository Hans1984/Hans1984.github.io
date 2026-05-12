<h2 id="publications" style="margin: 2px 0px 10px;">
  Publications 
  <span style="font-size:14px; color:#555; margin-left:10px;">📧 indicates the corresponding author</span>
</h2>

<div class="publications">
  <ol class="bibliography">

    {% for link in site.data.publications.main %}
    <li style="list-style:none;">
      <div class="pub-row" style="display:flex; gap:15px; align-items:flex-start; margin-bottom:25px; flex-wrap:wrap;">

        <!-- 左侧图片：宽度适中 -->
        <div class="col-sm-3 abbr" style="position:relative; padding-right:15px; padding-left:15px; flex:0 0 180px; max-width:180px;">
          {% if link.image %}
          <img src="{{ site.baseurl }}/{{ link.image }}" class="teaser img-fluid z-depth-1" 
               style="width:100%; height:auto; object-fit:contain; border-radius:4px;">
          {% endif %}

          <!-- 会议 badge -->
          {% if link.conference_short %}
          <abbr class="badge" style="
                position:absolute;
                top:8px;
                left:8px;
                background-color:#0056b3;
                color:white;
                padding:2px 6px;
                font-size:12px;
                border-radius:4px;
                z-index:10;
              ">
            {{ link.conference_short }}
          </abbr>
          {% endif %}
        </div>

        <!-- 右侧文字 -->
        <div class="col-sm-9" style="position:relative; padding-right:15px; padding-left:20px; flex:1; min-width:200px;">
          <div class="title"><a href="{{ link.pdf }}">{{ link.title }}</a></div>

          <!-- 作者 -->
          <div class="author" style="margin:3px 0;">
            {% assign authors_list = link.authors | split: "," %}
            {% for author in authors_list %}
              {% assign trimmed = author | strip %}
              {% if trimmed contains "Chao Wang" %} 
                <a href="mailto:your_email@example.com" style="text-decoration:none;">{{ trimmed }} 📧</a>
              {% else %}
                {{ trimmed }}
              {% endif %}
              {% if forloop.last == false %}, {% endif %}
            {% endfor %}
          </div>

          <div class="periodical"><em>{{ link.conference }}</em></div>

          <div class="links" style="margin-top:5px;">
            {% if link.pdf %}<a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" target="_blank" style="font-size:12px;">PDF</a>{% endif %}
            {% if link.code %}<a href="{{ link.code }}" class="btn btn-sm z-depth-0" target="_blank" style="font-size:12px;">Code</a>{% endif %}
            {% if link.page %}<a href="{{ link.page }}" class="btn btn-sm z-depth-0" target="_blank" style="font-size:12px;">Project Page</a>{% endif %}
            {% if link.bibtex %}<a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" target="_blank" style="font-size:12px;">BibTex</a>{% endif %}
            {% if link.notes %}<strong><i style="color:#e74d3c">{{ link.notes }}</i></strong>{% endif %}
            {% if link.others %}{{ link.others }}{% endif %}
          </div>
        </div>

      </div>
    </li>

    {% endfor %}

  </ol>
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

 
