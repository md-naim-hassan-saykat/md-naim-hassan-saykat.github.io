---
layout: project
title: "Unpaired Image-to-Image Translation with CycleGAN"
subtitle: "Horse ↔ Zebra Translation · Generative Adversarial Networks"
description: "Implementation of CycleGAN for unpaired image-to-image translation using ResNet generators and PatchGAN discriminators."
img: /assets/img/cyclegan-cover.jpg
importance: 2
category: work
giscus_comments: true

links:
  github: "https://github.com/md-naim-hassan-saykat/horse-to-zebra-cyclegan"
---

<div class="container mt-4">

<p class="lead">
This project implements <strong>CycleGAN</strong> for unpaired image-to-image translation between horses and zebras,
inspired by Zhu et al. (2017).
</p>

<h3>Model Components</h3>
<ul>
  <li><strong>ResNet-9</strong> generators</li>
  <li><strong>70×70 PatchGAN</strong> discriminators</li>
  <li><strong>Cycle-consistency loss</strong></li>
  <li><strong>Identity loss</strong> for color preservation</li>
</ul>

<p>
Training was performed on the <strong>Horse2Zebra</strong> dataset without paired samples.
</p>

<hr>

## 🐎 Example Results (Horse → Zebra)

<div class="row justify-content-center mt-4">

  <div class="col-md-5 text-center">
    <h5 class="mb-2">Real Horse</h5>
    <div style="max-width: 350px; margin: auto;">
      {% include figure.liquid 
         path="assets/img/cyclegan-horse.jpg" 
         title="Original Horse"
         class="img-fluid rounded shadow-sm" %}
    </div>
  </div>

  <div class="col-md-5 text-center">
    <h5 class="mb-2">Translated Zebra</h5>
    <div style="max-width: 350px; margin: auto;">
      {% include figure.liquid 
         path="assets/img/cyclegan-zebra.jpg" 
         title="Generated Zebra"
         class="img-fluid rounded shadow-sm" %}
    </div>
  </div>

</div>

<p class="text-muted text-center mt-2">
Side-by-side comparison of CycleGAN horse → zebra translation.
</p>

<hr>

## 🦓 Example Results (Zebra → Horse)

<div class="row justify-content-center mt-4">

  <div class="col-md-5 text-center">
    <h5 class="mb-2">Real Zebra</h5>
    <div style="max-width: 350px; margin: auto;">
      {% include figure.liquid 
         path="assets/img/cyclegan-zebra-original.jpg" 
         title="Original Zebra"
         class="img-fluid rounded shadow-sm" %}
    </div>
  </div>

  <div class="col-md-5 text-center">
    <h5 class="mb-2">Translated Horse</h5>
    <div style="max-width: 350px; margin: auto;">
      {% include figure.liquid 
         path="assets/img/cyclegan-horse-generated.jpg" 
         title="Generated Horse"
         class="img-fluid rounded shadow-sm" %}
    </div>
  </div>

</div>

<p class="text-muted text-center mt-2">
Reverse translation results using the inverse generator.
</p>

<hr>

<h3>Highlights</h3>
<ul>
  <li>Fully unpaired training</li>
  <li>Consistent style transfer across domains</li>
  <li>Lightweight architecture, reproducible pipeline</li>
</ul>

</div>
