---
layout: page
title: "CycleGAN: Unpaired Horse-to-Zebra Image Translation"
subtitle: "Generative Adversarial Networks . Unpaired Image Translation . Computer Vision"
description: "PyTorch implementation of CycleGAN for unpaired image-to-image translation, with qualitative results and quantitative evaluation using SSIM and PSNR."
img: /assets/img/3.jpg
importance: 3
category: work
links:
  github: "https://github.com/md-naim-hassan-saykat/horse-to-zebra-cyclegan"
---

<div class="container mt-5">

  <div class="row">
    <div class="col-lg-10 mx-auto">

      <p class="lead mb-4">
        This project implements <strong>Cycle-Consistent Generative Adversarial Networks (CycleGAN)</strong>
        for <strong>unpaired image-to-image translation</strong>, focusing on the canonical
        <em>Horse-to-Zebra</em> benchmark task.
        The goal is to learn mappings between two visual domains without requiring paired training data,
        following the original CycleGAN formulation.
        The model successfully learns cross-domain mappings without paired supervision,
        demonstrating strong generalization in unpaired image translation tasks.
      </p>

      <p class="mb-4">
        The implementation is built in <strong>PyTorch</strong> and emphasizes
        <strong>reproducibility</strong>, <strong>training stability</strong>, and
        <strong>evaluation beyond qualitative visual inspection</strong>, combining qualitative results
        with quantitative image similarity metrics.
      </p>

      <hr class="my-5">

      <h2 class="h3 mb-4">Model Overview</h2>

      <div class="card border-0 shadow-sm mb-4">
        <div class="card-body">
          <h5 class="card-title">CycleGAN Architecture</h5>
          <ul class="mb-0">
            <li>Two generators: <strong>G<sub>H→Z</sub></strong> and <strong>G<sub>Z→H</sub></strong></li>
            <li>Two discriminators for adversarial training in each domain</li>
            <li><strong>Cycle-consistency loss</strong> to enforce structural preservation</li>
            <li><strong>Identity loss</strong> to stabilize color and texture mapping</li>
          </ul>
        </div>
      </div>

      <div class="card border-0 shadow-sm mb-4">
        <div class="card-body">
          <h5 class="card-title">Training Setup</h5>
          <ul class="mb-0">
            <li>Unpaired horse and zebra image datasets</li>
            <li>PatchGAN discriminators</li>
            <li>Adam optimizer with learning rate scheduling</li>
            <li>Image buffers to reduce model oscillation</li>
          </ul>
        </div>
      </div>

      <hr class="my-5">

      <h2 class="h3 mb-4">Evaluation & Metrics</h2>

      <div class="alert alert-info" role="alert">
        <ul class="mb-0">
          <li><strong>SSIM (Structural Similarity Index)</strong> to measure perceptual structure preservation</li>
          <li><strong>PSNR (Peak Signal-to-Noise Ratio)</strong> to quantify reconstruction fidelity</li>
          <li>Side-by-side comparison of <em>real</em>, <em>translated</em>, and <em>cycle-reconstructed</em> images</li>
          <li>Visual inspection across multiple test samples</li>
        </ul>
      </div>

      <hr class="my-5">

      <h2 class="h3 mb-4">Qualitative Results</h2>

      <div class="row justify-content-center g-4 mb-4">
        <div class="col-md-5">
          <div class="text-center">
            <h6 class="text-uppercase text-muted small fw-bold mb-3">Horse → Zebra</h6>
            {% include figure.liquid
               path="assets/img/3.jpg"
               title="Unpaired translation from horses to zebras using CycleGAN"
               class="img-fluid rounded shadow" %}
          </div>
        </div>
      </div>

      <p class="text-muted text-center fst-italic small mb-5">
        Generated samples demonstrate texture transfer and stripe synthesis while preserving
        underlying object structure, demonstrating effective cycle consistency and domain translation quality.
      </p>

      <hr class="my-5">

      <h2 class="h3 mb-3">Repository</h2>

      <p class="mb-4">
        The full implementation, training scripts, and result visualizations are available at:
        <br>
        <a href="https://github.com/md-naim-hassan-saykat/horse-to-zebra-cyclegan" target="_blank" rel="noopener">
          https://github.com/md-naim-hassan-saykat/horse-to-zebra-cyclegan
        </a>
      </p>

    </div>

  </div>

</div>
