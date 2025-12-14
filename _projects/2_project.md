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

<div class="container mt-4">

<p class="lead">
This project presents an implementation of <strong>CycleGAN</strong> for
<strong>unpaired image-to-image translation</strong>, focusing on bidirectional
translation between horses and zebras. The work follows the original formulation
introduced by <em>Zhu et&nbsp;al.</em> (ICCV&nbsp;2017) and emphasizes stable training,
visual fidelity, and reproducibility.
</p>

---

## Model Architecture

<ul>
  <li><strong>Generators:</strong> ResNet-9 architecture</li>
  <li><strong>Discriminators:</strong> 70×70 PatchGAN</li>
  <li><strong>Loss functions:</strong> Adversarial loss, cycle-consistency loss, identity loss</li>
  <li><strong>Training paradigm:</strong> Fully unpaired image-to-image translation</li>
</ul>

<p>
Training was conducted on the <strong>Horse2Zebra</strong> dataset without aligned image
pairs, demonstrating CycleGAN’s ability to learn cross-domain mappings using
cycle consistency alone.
</p>

---

## Qualitative Results

### Horse-to-Zebra Translation

<div class="row justify-content-center mt-4">

  <div class="col-md-5 text-center">
    <h6 class="text-uppercase text-muted mb-2">Input (Horse)</h6>
    <div style="max-width: 360px; margin: auto;">
      {% include figure.liquid
         path="assets/img/cyclegan-horse.jpg"
         title="Real Horse"
         class="img-fluid rounded shadow-sm" %}
    </div>
  </div>

  <div class="col-md-5 text-center">
    <h6 class="text-uppercase text-muted mb-2">Output (Zebra)</h6>
    <div style="max-width: 360px; margin: auto;">
      {% include figure.liquid
         path="assets/img/cyclegan-zebra.jpg"
         title="Translated Zebra"
         class="img-fluid rounded shadow-sm" %}
    </div>
  </div>

</div>

<p class="text-muted text-center mt-2">
Qualitative example of unpaired horse-to-zebra translation produced by CycleGAN.
</p>

---

### Zebra-to-Horse Translation

<div class="row justify-content-center mt-4">

  <div class="col-md-5 text-center">
    <h6 class="text-uppercase text-muted mb-2">Input (Zebra)</h6>
    <div style="max-width: 360px; margin: auto;">
      {% include figure.liquid
         path="assets/img/cyclegan-zebra-original.jpg"
         title="Real Zebra"
         class="img-fluid rounded shadow-sm" %}
    </div>
  </div>

  <div class="col-md-5 text-center">
    <h6 class="text-uppercase text-muted mb-2">Output (Horse)</h6>
    <div style="max-width: 360px; margin: auto;">
      {% include figure.liquid
         path="assets/img/cyclegan-horse-generated.jpg"
         title="Translated Horse"
         class="img-fluid rounded shadow-sm" %}
    </div>
  </div>

</div>

<p class="text-muted text-center mt-2">
Reverse translation results obtained using the inverse generator.
</p>

---

## Key Highlights

<ul>
  <li>Fully unpaired training without paired supervision</li>
  <li>Consistent and coherent style transfer across visual domains</li>
  <li>Lightweight architecture with a reproducible training pipeline</li>
</ul>

---

## Limitations

<p>
Although CycleGAN produces visually coherent translations, fine-grained texture
consistency and structural artifacts remain challenging, particularly in complex
background regions.
</p>

---

## Reference

<p class="text-muted">
Zhu et&nbsp;al., <em>Unpaired Image-to-Image Translation using Cycle-Consistent
Adversarial Networks</em>, ICCV&nbsp;2017.
</p>

</div>
