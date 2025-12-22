---
layout: project
title: "Unpaired Image-to-Image Translation with CycleGAN"
subtitle: "Horse-to-Zebra Translation · Generative Adversarial Networks"
description: "Implementation of CycleGAN for unpaired image-to-image translation using ResNet generators and PatchGAN discriminators."
img: /assets/img/cyclegan-cover.jpg
importance: 2
category: work
giscus_comments: true

links:
  github: "https://github.com/md-naim-hassan-saykat/horse-to-zebra-cyclegan"
---

<div class="container mt-5">

<div class="row">
  <div class="col-lg-10 mx-auto">

<p class="lead mb-4">
This project presents an implementation of <strong>CycleGAN</strong> for
<strong>unpaired image-to-image translation</strong>, focusing on bidirectional
translation between horses and zebras. The work follows the original formulation
introduced by <em>Zhu et&nbsp;al.</em> (ICCV&nbsp;2017) and emphasizes stable training,
visual fidelity, and reproducibility.
</p>

<hr class="my-5">

<h2 class="h3 mb-4">Model Architecture</h2>

<div class="card border-0 shadow-sm mb-4">
  <div class="card-body">
    <ul class="mb-0">
      <li><strong>Generators:</strong> ResNet-9 architecture</li>
      <li><strong>Discriminators:</strong> 70×70 PatchGAN</li>
      <li><strong>Loss functions:</strong> Adversarial loss, cycle-consistency loss, identity loss</li>
      <li><strong>Training paradigm:</strong> Fully unpaired image-to-image translation</li>
    </ul>
  </div>
</div>

<p class="mb-4">
Training was conducted on the <strong>Horse2Zebra</strong> dataset without aligned image
pairs, demonstrating CycleGAN's ability to learn cross-domain mappings using
cycle consistency alone.
</p>

<hr class="my-5">

<h2 class="h3 mb-4">Qualitative Results</h2>

<h3 class="h5 text-primary mb-3">Horse-to-Zebra Translation</h3>

<div class="row justify-content-center g-4 mb-4">
  <div class="col-md-6 col-lg-5">
    <div class="text-center">
      <h6 class="text-uppercase text-muted small fw-bold mb-3">Input (Horse)</h6>
      {% include figure.liquid
         path="assets/img/cyclegan-horse.jpg"
         title="Real Horse"
         class="img-fluid rounded shadow" %}
    </div>
  </div>

  <div class="col-md-6 col-lg-5">
    <div class="text-center">
      <h6 class="text-uppercase text-muted small fw-bold mb-3">Output (Zebra)</h6>
      {% include figure.liquid
         path="assets/img/cyclegan-zebra.jpg"
         title="Translated Zebra"
         class="img-fluid rounded shadow" %}
    </div>
  </div>
</div>

<p class="text-muted text-center fst-italic small mb-5">
Qualitative example of unpaired horse-to-zebra translation produced by CycleGAN.
</p>

<h3 class="h5 text-primary mb-3">Zebra-to-Horse Translation</h3>

<div class="row justify-content-center g-4 mb-4">
  <div class="col-md-6 col-lg-5">
    <div class="text-center">
      <h6 class="text-uppercase text-muted small fw-bold mb-3">Input (Zebra)</h6>
      {% include figure.liquid
         path="assets/img/cyclegan-zebra-original.jpg"
         title="Real Zebra"
         class="img-fluid rounded shadow" %}
    </div>
  </div>

  <div class="col-md-6 col-lg-5">
    <div class="text-center">
      <h6 class="text-uppercase text-muted small fw-bold mb-3">Output (Horse)</h6>
      {% include figure.liquid
         path="assets/img/cyclegan-horse-generated.jpg"
         title="Translated Horse"
         class="img-fluid rounded shadow" %}
    </div>
  </div>
</div>

<p class="text-muted text-center fst-italic small mb-5">
Reverse translation results obtained using the inverse generator.
</p>

<hr class="my-5">

<h2 class="h3 mb-4">Key Highlights</h2>

<div class="card border-0 bg-light mb-4">
  <div class="card-body">
    <ul class="mb-0">
      <li>Fully unpaired training without paired supervision</li>
      <li>Consistent and coherent style transfer across visual domains</li>
      <li>Lightweight architecture with a reproducible training pipeline</li>
    </ul>
  </div>
</div>

<hr class="my-5">

<h2 class="h3 mb-3">Limitations</h2>

<p class="mb-4">
Although CycleGAN produces visually coherent translations, fine-grained texture
consistency and structural artifacts remain challenging, particularly in complex
background regions.
</p>

<hr class="my-5">

<h2 class="h3 mb-3">Reference</h2>

<div class="alert alert-secondary" role="alert">
  <p class="mb-0">
    Zhu, J.-Y., Park, T., Isola, P., & Efros, A. A. (2017). 
    <em>Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks</em>. 
    In <strong>ICCV 2017</strong>. 
    <a href="https://arxiv.org/abs/1703.10593" target="_blank" rel="noopener" class="alert-link">arXiv:1703.10593</a>
  </p>
</div>

  </div>
</div>

</div>
