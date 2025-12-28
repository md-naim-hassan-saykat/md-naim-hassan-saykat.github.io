---
layout: project
title: "Skin Lesion Classification with Deep Learning Ensemble"
subtitle: "Melanoma Detection · Medical Image Analysis"
description: "Generalizable ensemble framework for automated skin lesion classification using multiple deep learning architectures (CNN, ResNet, DenseNet, EfficientNet, ConvNeXt, MobileNet, ViT)."
img: /assets/img/skin-lesion-cover.jpg
importance: 1
category: work
giscus_comments: true

links:
  github: "https://github.com/md-naim-hassan-saykat/skin-lesion-classification-ensemble-ham10000"
---

<div class="container mt-5">

<div class="row">
  <div class="col-lg-10 mx-auto">

<p class="lead mb-4">
This project presents a robust and generalizable deep learning <strong>ensemble framework</strong> for automated skin lesion classification.  
The system integrates multiple architectures—<strong>CNN, ResNet50, DenseNet121, EfficientNetB3, ConvNeXt-Tiny, MobileNetV3, and Vision Transformer (ViT)</strong>—to improve melanoma detection, model stability, and cross-dataset generalization.
</p>

<p class="mb-4">
Models were trained on <strong>HAM10000</strong> and externally validated on <strong>ISIC 2019</strong>.  
Evaluation includes per-class metrics, <strong>ROC–AUC</strong>, confusion matrices, ensemble fusion strategies, and interpretability through <strong>Grad-CAM</strong>.
</p>

<hr class="my-5">

<h2 class="h3 mb-4">Model Architecture</h2>

<div class="card border-0 shadow-sm mb-4">
  <div class="card-body">
    <h5 class="card-title">Feature Extractors</h5>
    <ul class="mb-0">
      <li>CNN (baseline)</li>
      <li>ResNet50</li>
      <li>DenseNet121</li>
      <li>EfficientNetB3</li>
      <li>ConvNeXt-Tiny</li>
      <li>MobileNetV3-Large</li>
      <li>Vision Transformer (ViT-B/16)</li>
    </ul>
  </div>
</div>

<div class="card border-0 shadow-sm mb-4">
  <div class="card-body">
    <h5 class="card-title">Training Highlights</h5>
    <ul class="mb-0">
      <li>Class-balanced sampling</li>
      <li>Label smoothing & augmentation</li>
      <li>Early stopping & learning-rate scheduling</li>
      <li>Cross-dataset generalization testing</li>
    </ul>
  </div>
</div>

<hr class="my-5">

<h2 class="h3 mb-4">Results Summary</h2>

<div class="alert alert-info" role="alert">
  <ul class="mb-0">
    <li>Ensemble outperformed all individual models</li>
    <li>Superior <strong>melanoma sensitivity</strong></li>
    <li>High <strong>macro-F1</strong> and <strong>ROC–AUC</strong> across datasets</li>
    <li>Stable predictions across rare lesion types</li>
    <li>External validation confirms <strong>strong generalization</strong></li>
  </ul>
</div>

<hr class="my-5">

<h2 class="h3 mb-4">Explainable AI (Grad-CAM)</h2>

<div class="row justify-content-center g-4 mb-4">
  <div class="col-md-5">
    <div class="text-center">
      <h6 class="text-uppercase text-muted small fw-bold mb-3">Melanoma Heatmap</h6>
      {% include figure.liquid 
         path="assets/img/gradcam1.jpg" 
         title="Melanoma – Grad-CAM"
         class="img-fluid rounded shadow" %}
    </div>
  </div>
  <div class="col-md-5">
    <div class="text-center">
      <h6 class="text-uppercase text-muted small fw-bold mb-3">Nevus Heatmap</h6>
      {% include figure.liquid 
         path="assets/img/gradcam2.jpg" 
         title="Nevus – Grad-CAM"
         class="img-fluid rounded shadow" %}
    </div>
  </div>
</div>

<p class="text-muted text-center fst-italic small mb-5">
Grad-CAM visualizations demonstrate model interpretability and highlight clinically relevant regions.
</p>

<hr class="my-5">

<h2 class="h3 mb-3">Publication Status</h2>

<p class="mb-4">
This work is part of an upcoming <strong>Q1 journal submission</strong> on generalizable medical imaging AI systems.
</p>

  </div>
</div>

</div>
