---
layout: page
title: "Simplified DRAW Model for Generative Image Modeling"
subtitle: "Generative Modeling . Variational Autoencoders . Representation Learning"
description: "Implementation of a simplified DRAW-style recurrent variational autoencoder for iterative image reconstruction and generation on Fashion-MNIST."
img: https://raw.githubusercontent.com/md-naim-hassan-saykat/draw-fashion-mnist-generative-model/main/images/generated_samples.png
importance: 6
category: work
giscus_comments: false
year: 2026
status: "Completed"
tags:
  - Generative Models
  - Variational Autoencoders
  - Representation Learning
  - PyTorch
links:
  github: "https://github.com/md-naim-hassan-saykat/draw-fashion-mnist-generative-model"
---

<div class="container mt-5">
  <div class="row">
    <div class="col-lg-10 mx-auto">

  <p class="lead mb-4">
This work investigates <strong>recurrent generative modeling</strong> through a simplified implementation 
of the <strong>DRAW (Deep Recurrent Attentive Writer)</strong> architecture, applied to the 
<strong>Fashion-MNIST dataset</strong>.
</p>

<p class="mb-4">
The model is formulated as a <strong>recurrent variational autoencoder (VAE)</strong> that iteratively refines 
image reconstructions via an encoder-decoder LSTM architecture and latent variable sampling. 
The study focuses on understanding <strong>structured latent representation learning</strong> 
and the trade-off between reconstruction fidelity and latent regularization under 
<strong>computationally efficient settings</strong>.
</p>
      

   <hr class="my-5">

   <h2 class="h3 mb-4">Model Design</h2>

  <ul class="mb-4">
        <li>Encoder-Decoder architecture based on <strong>LSTM modules</strong></li>
        <li>Latent variable sampling via <strong>reparameterization trick</strong></li>
        <li>Iterative canvas refinement for progressive reconstruction</li>
        <li>Simplified variant without attention mechanism for efficiency</li>
      </ul>

   <hr class="my-5">

   <h2 class="h3 mb-4">Experiments</h2>

   <ul class="mb-4">
        <li><strong>Latent dimension study:</strong> 8, 16, 32</li>
        <li><strong>KL regularization:</strong> β = 0.5, 1.0, 2.0</li>
        <li>Evaluation of reconstruction vs. latent structure trade-off</li>
      </ul>

   <div class="text-center mb-4">
        {% include figure.liquid
           path="https://raw.githubusercontent.com/md-naim-hassan-saykat/draw-fashion-mnist-generative-model/main/images/loss_components.png"
           title="Training dynamics: total loss, reconstruction, and KL divergence"
           class="img-fluid rounded shadow" %}
      </div>

   <hr class="my-5">

  <h2 class="h3 mb-4">Results</h2>

   <ul class="mb-4">
        <li>Stable convergence with consistent reduction in reconstruction loss</li>
        <li>Learned <strong>structured latent representations</strong></li>
        <li>Generated samples capture meaningful Fashion-MNIST patterns</li>
        <li>Expected smoothing artifacts typical of VAE-based models</li>
      </ul>

   <div class="text-center mb-4">
        {% include figure.liquid
           path="https://raw.githubusercontent.com/md-naim-hassan-saykat/draw-fashion-mnist-generative-model/main/images/generated_samples.png"
           title="Samples generated from learned latent space"
           class="img-fluid rounded shadow" %}
      </div>

   <hr class="my-5">

   <h2 class="h3 mb-3">Key Insights</h2>

   <ul class="mb-4">
        <li>Latent dimensionality significantly affects representation capacity</li>
        <li>β-VAE regularization introduces a clear reconstruction-structure trade-off</li>
        <li>Recurrent generative models can learn meaningful structure even without attention</li>
      </ul>

   <hr class="my-5">

   <h2 class="h3 mb-3">Repository</h2>

  <p class="mb-4">
        Full implementation and reproducible experiments:
        <br>
        <a href="https://github.com/md-naim-hassan-saykat/draw-fashion-mnist-generative-model"
           target="_blank" rel="noopener">
           https://github.com/md-naim-hassan-saykat/draw-fashion-mnist-generative-model
        </a>
      </p>

  </div>
  </div>
</div>
