---
layout: homepage
---

<section class="profile" id="about" aria-labelledby="profile-title">
  <div class="profile-intro">
    <div class="profile-copy">
      <h1 id="profile-title">Chao Wang</h1>
      <p class="profile-role">Computer graphics &amp; computer vision</p>
      <p class="profile-description">I am a researcher working on neural rendering, 3D reconstruction, and computational photography.</p>
      <div class="profile-links"><a href="mailto:{{ site.email }}">Email</a><a href="{{ site.google_scholar }}">Google Scholar</a><a href="{{ site.cv_link | relative_url }}">CV</a><a href="{{ site.github_link }}">GitHub</a></div>
    </div>
    <img class="portrait" src="{{ site.avatar | relative_url }}" alt="Chao Wang" width="2540" height="3265" fetchpriority="high">
  </div>
  <div class="bio" id="bio" aria-labelledby="bio-title">
    <h2 id="bio-title">Bio</h2>
    <div class="bio-copy"><p>I received my Ph.D. from the Max Planck Institute for Informatics, advised by <a href="https://people.mpi-inf.mpg.de/~karol/">Prof. Karol Myszkowski</a> and <a href="https://people.mpi-inf.mpg.de/~hpseidel/">Prof. Hans-Peter Seidel</a>. I also worked closely with <a href="https://ana-serrano.github.io/">Prof. Ana Serrano</a> and <a href="https://people.mpi-inf.mpg.de/~tleimkue/">Prof. Thomas Leimkühler</a>. My Ph.D. thesis received an <a href="https://www.eg.org/wp/eurographics-awards-programme/phd-award/#:~:text=Chao%20Wang">Honorable Mention for the Eurographics PhD Award 2026</a>. I received my M.S. in Computer Engineering from Peking University in 2020, advised by <a href="https://www.ece.pku.edu.cn/info/1046/2147.htm">Prof. Ronggang Wang</a>, and my B.S. in Information Engineering from the University of Electronic Science and Technology of China in 2017. I was a Research Scientist Intern at Adobe’s Next Cam Lab, working with <a href="https://graphics.stanford.edu/~levoy/">Prof. Marc Levoy</a> and <a href="https://ceciliavision.github.io/">Dr. Cecilia Zhang</a>. Previously, I interned as an Algorithm Research Scientist at Tencent Robotics X Lab, mentored by <a href="https://ygling2008.github.io/">Dr. Yonggen Ling</a>, and was a research assistant at the <a href="https://ucalgary.ca/labs/spatial-intelligence/home">Spatial Intelligence Lab, University of Calgary</a>, advised by <a href="https://profiles.ucalgary.ca/ruisheng-wang">Prof. Ruisheng Wang</a>.</p></div>
  </div>
</section>

{% include news.html %}
{% include publications.md %}
{% include activities.html %}
{% include visitors.html %}
