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
inspired by the seminal paper <em>“Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks”</em> 
by Zhu et al. (2017).
</p>

<h3>Model Components</h3>
<ul>
  <li><strong>ResNet-9</strong> generator architecture</li>
  <li><strong>70×70 PatchGAN</strong> discriminators</li>
  <li><strong>Cycle-consistency loss</strong> for structural preservation</li>
  <li><strong>Identity loss</strong> for texture and color consistency</li>
</ul>

<p>
The <strong>Horse2Zebra</strong> dataset was used for training, enabling photorealistic translation between domains 
<strong>without paired images</strong>. The repository includes training scripts, inference pipelines, and visualization tools.
</p>

<hr>

## 🐎 Example Results (Horse → Zebra)

<div class="row justify-content-center mt-4">
  <div class="col-sm-5 text-center">
    <h5 class="mb-2">Real Horse</h5>
    {% include figure.liquid 
       path="assets/img/cyclegan-horse.jpg" 
       title="Original Horse" 
       class="img-fluid rounded shadow-sm" %}
  </div>

  <div class="col-sm-5 text-center">
    <h5 class="mb-2">Translated Zebra</h5>
    {% include figure.liquid 
       path="assets/img/cyclegan-zebra.jpg" 
       title="Generated Zebra" 
       class="img-fluid rounded shadow-sm" %}
  </div>
</div>

<p class="text-muted text-center mt-2">
CycleGAN successfully transforms horses into zebra-like images using unpaired training data.
</p>

<hr>

## 🦓 Example Results (Zebra → Horse)

<div class="row justify-content-center mt-4">
  <div class="col-sm-5 text-center">
    <h5 class="mb-2">Real Zebra</h5>
    {% include figure.liquid 
       path="assets/img/cyclegan-zebra-original.jpg" 
       title="Original Zebra" 
       class="img-fluid rounded shadow-sm" %}
  </div>

  <div class="col-sm-5 text-center">
    <h5 class="mb-2">Translated Horse</h5>
    {% include figure.liquid 
       path="assets/img/cyclegan-horse-generated.jpg" 
       title="Generated Horse" 
       class="img-fluid rounded shadow-sm" %}
  </div>
</div>

<p class="text-muted text-center mt-2">
The inverse CycleGAN generator translates zebra patterns into realistic horse textures.
</p>

<hr>

<h3>Highlights</h3>
<ul>
  <li>Fully unpaired training (no image alignment needed)</li>
  <li>High-quality image style transfer</li>
  <li>Lightweight and interpretable architecture</li>
  <li>Reproducible training & inference scripts included</li>
</ul>

</div>
