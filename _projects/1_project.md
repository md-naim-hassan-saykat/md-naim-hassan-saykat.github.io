---
layout: project
title: "Generalizable Deep Learning Ensemble for Skin Lesion Classification"
subtitle: "HAM10000 & ISIC 2019 · CNN, ResNet50, EfficientNet, ConvNeXt, ViT"
description: "A state-of-the-art ensemble framework for melanoma and skin lesion diagnosis with cross-dataset validation and explainable AI (Grad-CAM)."
img: assets/img/skin-lesion-cover.jpg
importance: 1
category: work
related_publications: true

links:
  github: "https://github.com/md-naim-hassan-saykat/skin-lesion-classification-ensemble-ham10000"
  paper: "https://arxiv.org/xxxx.xxxxx"   # Optional — remove if not available
  notebook: "https://www.kaggle.com/your-kaggle-notebook-link"   # Optional
---
<div class="container mt-4">

<p class="lead">
This project presents a robust and generalizable deep learning ensemble framework for automated skin lesion classification.  
The system integrates multiple architectures—<strong>CNN, ResNet50, DenseNet121, EfficientNetB3, ConvNeXt-Tiny, MobileNetV3,
and Vision Transformer (ViT)</strong>—to improve melanoma detection, model stability, and cross-dataset generalization.
</p>

<p>
Models were trained on <strong>HAM10000</strong> and externally validated on <strong>ISIC 2019</strong>.  
Evaluation includes per-class metrics, <strong>ROC–AUC</strong>, confusion matrices, ensemble fusion strategies,
and interpretability through <strong>Grad-CAM</strong>.
</p>

<hr>

## Project Architecture

<div class="text-center my-4">
  {% include figure.liquid 
     path="assets/img/skin-lesion-cover.jpg" 
     title="Ensemble Learning Pipeline" 
     class="img-fluid rounded shadow" %}
</div>

<p class="text-muted text-center">High-level overview of the ensemble-based skin lesion classification workflow.</p>

<hr>

## Model Components

<div class="row mt-4">
  <div class="col-sm-6">
    <h4>Feature Extractors</h4>
    <ul>
      <li>CNN (baseline)</li>
      <li>ResNet50</li>
      <li>DenseNet121</li>
      <li>EfficientNetB3</li>
      <li>ConvNeXt-Tiny</li>
      <li>MobileNetV3-Large</li>
      <li>Vision Transformer (ViT-B/16)</li>
    </ul>
  </div>

  <div class="col-sm-6">
    <h4>Training Highlights</h4>
    <ul>
      <li>Class-balanced sampling</li>
      <li>Label smoothing</li>
      <li>Data augmentation</li>
      <li>Early stopping & learning-rate scheduling</li>
      <li>Cross-dataset generalization testing</li>
    </ul>
  </div>
</div>

<hr>

## Results Summary

- Ensemble outperformed all individual models  
- Superior **melanoma sensitivity**  
- High **macro-F1** and **ROC–AUC** across datasets  
- Stable predictions across rare lesion types  
- External validation confirms **strong generalization**

<hr>

## Explainable AI (Grad-CAM)

<div class="row justify-content-center mt-4">
  <div class="col-sm-5">
    {% include figure.liquid 
       path="assets/img/gradcam1.jpg" 
       title="Melanoma – Grad-CAM Heatmap" 
       class="img-fluid rounded shadow" %}
  </div>
  <div class="col-sm-5">
    {% include figure.liquid 
       path="assets/img/gradcam2.jpg" 
       title="Nevus – Grad-CAM Heatmap" 
       class="img-fluid rounded shadow" %}
  </div>
</div>

<p class="text-muted text-center mt-2">
Grad-CAM visualizations demonstrate model interpretability and highlight clinically relevant regions.
</p>

<hr>

## Publication Status

This work is part of an upcoming **Q1 journal submission** on generalizable medical imaging AI systems.

</div>
