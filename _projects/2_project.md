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

This project implements CycleGAN for unpaired image-to-image translation between horses and zebras, based on the 
seminal paper *"Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks"* by Zhu et al. (2017).

The model uses:
- **ResNet-9 generator architecture**
- **70×70 PatchGAN discriminators**
- **Cycle-consistency loss** to preserve semantic structure
- **Identity loss** for improved color and texture preservation

Training was conducted using the Horse2Zebra dataset, enabling realistic transformation of horses into zebras and 
vice versa without paired examples. The project includes full training loops, dataset pipelines, inference scripts, 
and visualization utilities to showcase generated outputs.

---

## Example Results (Horse → Zebra)

<div class="row">
  <div class="col-sm mt-3">
    {% include figure.liquid path="assets/img/cyclegan-horse.jpg" title="Original Horse" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3">
    {% include figure.liquid path="assets/img/cyclegan-zebra.jpg" title="Translated to Zebra" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  Example of CycleGAN translating a horse image into a zebra without paired training data.
</div>

---

## Example Results (Zebra → Horse)

<div class="row">
  <div class="col-sm mt-3">
    {% include figure.liquid path="assets/img/cyclegan-zebra-original.jpg" title="Original Zebra" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3">
    {% include figure.liquid path="assets/img/cyclegan-horse-generated.jpg" title="Translated to Horse" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  Reverse translation (Zebra → Horse) using the inverse CycleGAN generator.
</div>

---
