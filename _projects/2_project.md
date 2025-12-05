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

This project implements **CycleGAN** for unpaired image-to-image translation between horses and zebras, inspired by  
the seminal paper *“Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks”* by Zhu et al. (2017).

The model uses:

- **ResNet-9 generator architecture**  
- **70×70 PatchGAN discriminators**  
- **Cycle-consistency loss** for structural preservation  
- **Identity loss** to maintain color and texture consistency  

The **Horse2Zebra** dataset was used for training, enabling photorealistic translation between domains **without paired images**.  
The project includes full training pipelines, inference notebooks, and visualization tools.

---

## Example Results (Horse → Zebra)

<div class="row">
  <div class="col-sm mt-3">
    {% include figure.liquid path="assets/img/cyclegan-horse.jpg" title="Original Horse" class="img-fluid rounded shadow" %}
  </div>
  <div class="col-sm mt-3">
    {% include figure.liquid path="assets/img/cyclegan-zebra.jpg" title="Translated to Zebra" class="img-fluid rounded shadow" %}
  </div>
</div>

<div class="caption text-center mt-2">
  CycleGAN transforming a real horse image into a zebra — no paired data required.
</div>

---

## Example Results (Zebra → Horse)

<div class="row">
  <div class="col-sm mt-3">
    {% include figure.liquid path="assets/img/cyclegan-zebra-original.jpg" title="Original Zebra" class="img-fluid rounded shadow" %}
  </div>
  <div class="col-sm mt-3">
    {% include figure.liquid path="assets/img/cyclegan-horse-generated.jpg" title="Translated to Horse" class="img-fluid rounded shadow" %}
  </div>
</div>

<div class="caption text-center mt-2">
  Reverse translation: a zebra converted into a horse using the inverse generator.
</div>

---
