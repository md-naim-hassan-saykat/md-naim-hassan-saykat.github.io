---
layout: page
title: "Skin Lesion Classification with Deep Learning Ensembles"
subtitle: "Medical Imaging · Melanoma Detection · Explainable AI"
description: "A generalizable ensemble deep learning framework for automated skin lesion classification, integrating CNNs and ViTs with internal + external validation."
img: /assets/img/1.jpg
importance: 1
category: work
giscus_comments: true

year: 2026
status: "Under review"
tags: ["Medical Imaging", "Deep Ensembles", "External Validation", "Grad-CAM"]

links:
  github: "https://github.com/md-naim-hassan-saykat/skin-lesion-classification-ensemble-ham10000"
  project: "/projects/"
  manuscript: "/publications/#skin-lesion-ensemble"
---

<div class="container mt-5">

  <div class="row">
    <div class="col-lg-10 mx-auto">

      <p class="lead mb-4">
        This project presents a <strong>robust and generalizable deep learning ensemble framework</strong>
        for automated <strong>skin lesion classification</strong>, with a focus on melanoma detection.
        Multiple complementary architectures are combined to improve diagnostic performance,
        prediction stability, and cross-dataset generalization in real-world medical imaging settings.
      </p>

      <p class="mb-4">
        The ensemble integrates <strong>CNN baselines, ResNet50, DenseNet121, EfficientNetB3,
        ConvNeXt-Tiny, MobileNetV3, and Vision Transformer (ViT-B/16)</strong>.
        Models are trained on <strong>HAM10000</strong> and evaluated both internally and via
        <strong>external validation on ISIC 2019</strong>, following best practices for
        medical AI benchmarking.
      </p>

      <hr class="my-5">

      <h2 class="h3 mb-4">Model Architecture</h2>

      <div class="card border-0 shadow-sm mb-4">
        <div class="card-body">
          <h5 class="card-title">Feature Extractors</h5>
          <ul class="mb-0">
            <li>Convolutional Neural Network (baseline)</li>
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
          <h5 class="card-title">Training & Optimization</h5>
          <ul class="mb-0">
            <li>Class-balanced sampling to address severe class imbalance</li>
            <li>Extensive data augmentation and regularization</li>
            <li>Early stopping and adaptive learning-rate scheduling</li>
            <li>Consistent evaluation across internal and external datasets</li>
          </ul>
        </div>
      </div>

      <hr class="my-5">

      <h2 class="h3 mb-4">Evaluation & Results</h2>

      <div class="alert alert-info" role="alert">
        <ul class="mb-0">
          <li>The ensemble consistently outperforms individual models</li>
          <li>Improved <strong>melanoma sensitivity</strong> and minority-class performance</li>
          <li>Strong <strong>macro-F1</strong> and <strong>ROC–AUC</strong> across datasets</li>
          <li>Stable predictions for rare lesion categories</li>
          <li>External validation confirms <strong>robust generalization</strong></li>
        </ul>
      </div>

      <hr class="my-5">

      <h2 class="h3 mb-4">Explainable AI (Grad-CAM)</h2>

      <p class="mb-4">
        To support clinical interpretability, <strong>Grad-CAM</strong> visualizations are generated
        for all models in the ensemble. These heatmaps highlight regions of interest that drive
        model predictions and align with clinically relevant lesion structures.
      </p>

      <div class="row justify-content-center g-4 mb-4">
        <div class="col-md-5">
          <div class="text-center">
            <h6 class="text-uppercase text-muted small fw-bold mb-3">Melanoma Example</h6>
            {% include figure.liquid
               path="assets/img/gradcam1.jpg"
               title="Grad-CAM visualization for melanoma prediction"
               class="img-fluid rounded shadow" %}
          </div>
        </div>

        <div class="col-md-5">
          <div class="text-center">
            <h6 class="text-uppercase text-muted small fw-bold mb-3">Nevus Example</h6>
            {% include figure.liquid
               path="assets/img/gradcam2.jpg"
               title="Grad-CAM visualization for nevus prediction"
               class="img-fluid rounded shadow" %}
          </div>
        </div>
      </div>

      <p class="text-muted text-center fst-italic small mb-5">
        Explainability results demonstrate that ensemble predictions rely on
        clinically meaningful regions rather than spurious image artifacts.
      </p>

      <hr class="my-5">

      <h2 class="h3 mb-3">Publication Status</h2>

      <p class="mb-4">
        This work forms the basis of an <strong>ongoing Q1 journal submission</strong>
        focused on generalizable and explainable deep learning systems for
        medical image analysis.
      </p>

      <hr class="my-5">

      <h2 class="h3 mb-3">Repository</h2>

      <p class="mb-4">
        The complete implementation, training pipelines, evaluation scripts,
        and documentation are available here:
        <br>
        <a href="https://github.com/md-naim-hassan-saykat/skin-lesion-classification-ensemble-ham10000"
           target="_blank" rel="noopener">
          https://github.com/md-naim-hassan-saykat/skin-lesion-classification-ensemble-ham10000
        </a>
      </p>

    </div>
  </div>

</div>
