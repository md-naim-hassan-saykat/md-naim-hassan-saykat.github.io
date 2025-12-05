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
This project presents a robust and generalizable deep learning ensemble for automated skin lesion classification.  
The system integrates multiple architectures—**CNN, ResNet50, DenseNet121, EfficientNetB3, ConvNeXt-Tiny, MobileNetV3, 
and Vision Transformer (ViT)**—to improve melanoma detection and reduce model variance.

Models were trained on the **HAM10000** dataset and externally validated on **ISIC 2019** to evaluate cross-dataset robustness.  
Comprehensive evaluation includes per-class metrics, **ROC–AUC**, confusion matrices, ensemble strategies, and explainable AI visualizations using **Grad-CAM**.

---

## Project Architecture

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3">
    {% include figure.liquid path="assets/img/skin-lesion-cover.jpg" title="Ensemble Learning Pipeline" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  Overview of the multi-model ensemble system used for melanoma and skin lesion classification.
</div>

---

## Key Components

- **Multiple deep learning backbones**  
  CNN · ResNet50 · DenseNet121 · EfficientNetB3 · ConvNeXt · MobileNetV3 · ViT

- **Cross-dataset generalization testing**  
  HAM10000 → ISIC 2019

- **Advanced evaluation metrics**  
  ROC-AUC · Macro F1 · Confusion matrices · Per-class performance

- **Explainability (XAI)**  
  Grad-CAM heatmaps for clinical interpretability

---

## Example Grad-CAM Visualizations

<div class="row">
  <div class="col-sm mt-3">
    {% include figure.liquid path="assets/img/gradcam1.jpg" title="Predicted: Melanoma" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3">
    {% include figure.liquid path="assets/img/gradcam2.jpg" title="Predicted: Nevus" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  Grad-CAM visualizations showing model attention during classification.
</div>

---

## Results

- Ensemble model significantly outperformed individual models  
- Strong robustness shown in external validation  
- Improved sensitivity for melanoma detection  
- Consistent interpretability through Grad-CAM

---

## Publication

This work is part of a **Q1-journal submission** on generalizable medical imaging AI systems.

---
