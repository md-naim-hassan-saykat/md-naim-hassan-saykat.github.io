---
layout: page
title: "Generalizable Skin-Lesion Classification with Deep Learning"
subtitle: "Dermoscopic Imaging | Deep Ensembles | External Evaluation | Explainable AI"
description: "A reproducible study of seven deep learning architectures and a probability-level ensemble for dermoscopic skin-lesion classification, with internal evaluation on HAM10000 and external evaluation on ISIC 2019."
img: https://raw.githubusercontent.com/md-naim-hassan-saykat/skin-lesion-classification-ensemble-ham10000/main/results/figures/gradcam_ensemble_mel.png
importance: 1
category: work
giscus_comments: false
year: 2026
status: "Under review"
tags:
  - Medical Imaging
  - Deep Learning
  - Ensemble Learning
  - External Validation
  - Grad-CAM
links:
  doi: "https://doi.org/10.5281/zenodo.17390952"
  github: "https://github.com/md-naim-hassan-saykat/skin-lesion-classification-ensemble-ham10000"
---

<div class="container mt-5">

  <div class="row">
    <div class="col-lg-10 mx-auto">

      <p class="lead mb-4">
        This research investigates the generalizability of deep learning systems
        for multiclass dermoscopic skin-lesion classification through harmonized
        internal evaluation on <strong>HAM10000</strong> and external evaluation
        on <strong>ISIC 2019</strong>.
      </p>

      <p class="mb-4">
        Seven architectures are evaluated:
        <strong>a conventional CNN, ResNet-50, DenseNet-121, EfficientNet-B3,
        ConvNeXt-Tiny, MobileNetV3-Large, and ViT-B/16</strong>.
        Their class-probability outputs are additionally combined using an
        equal-weight probability-level ensemble. The study examines classification
        performance, discrimination, calibration, statistical uncertainty,
        external generalization, and model interpretability.
      </p>

      <div class="alert alert-secondary mb-5" role="alert">
        <strong>Research scope:</strong>
        This project is intended for research and reproducibility purposes.
        It is not a clinical diagnostic system and is not intended to replace
        evaluation by qualified healthcare professionals.
      </div>

      <hr class="my-5">

      <h2 class="h3 mb-4">Study Design</h2>

      <div class="row row-cols-1 row-cols-md-2 g-4 mb-4">

        <div class="col">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">

              <h5 class="card-title">Model Architectures</h5>

              <ul class="mb-0">
                <li>Conventional CNN</li>
                <li>ResNet-50</li>
                <li>DenseNet-121</li>
                <li>EfficientNet-B3</li>
                <li>ConvNeXt-Tiny</li>
                <li>MobileNetV3-Large</li>
                <li>Vision Transformer (ViT-B/16)</li>
              </ul>

            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">

              <h5 class="card-title">Ensemble Strategy</h5>

              <p class="mb-0">
                The ensemble uses equal-weight arithmetic averaging of the
                harmonized class-probability vectors produced by the seven
                component models. Predictions are mapped to a common seven-class
                output order before aggregation.
              </p>

            </div>
          </div>
        </div>

      </div>

      <hr class="my-5">

      <h2 class="h3 mb-4">Datasets &amp; Evaluation</h2>

      <div class="card border-0 shadow-sm mb-4">
        <div class="card-body">

          <h5 class="card-title">HAM10000</h5>

          <p class="mb-0">
            HAM10000 is used for the standardized retrospective internal
            evaluation. The harmonized evaluation cohort contains
            <strong>2,003 dermoscopic images</strong> spanning seven diagnostic
            classes:
            AKIEC, BCC, BKL, DF, MEL, NV, and VASC.
          </p>

        </div>
      </div>

      <div class="card border-0 shadow-sm mb-4">
        <div class="card-body">

          <h5 class="card-title">ISIC 2019</h5>

          <p class="mb-0">
            ISIC 2019 is used for external evaluation after harmonizing its labels
            with the seven-class prediction space. This analysis assesses how
            performance changes when the models are evaluated beyond the internal
            HAM10000 setting.
          </p>

        </div>
      </div>

      <div class="card border-0 shadow-sm mb-5">
        <div class="card-body">

          <h5 class="card-title">Evaluation Framework</h5>

          <ul class="mb-0">
            <li>Accuracy and weighted F1 score</li>
            <li>Macro and micro ROC-AUC for HAM10000</li>
            <li>Macro and weighted ROC-AUC for ISIC 2019</li>
            <li>Expected Calibration Error (ECE)</li>
            <li>Bootstrap 95% confidence intervals</li>
            <li>Paired McNemar comparisons</li>
            <li>Paired bootstrap model-difference analysis</li>
            <li>Per-class external performance analysis</li>
          </ul>

        </div>
      </div>

      <hr class="my-5">

      <h2 class="h3 mb-4">Key Results</h2>

      <p class="mb-4">
        The results demonstrate that strong internal performance does not
        necessarily translate into equivalent external performance. The study
        therefore emphasizes comparative evaluation and generalization rather
        than assuming that an ensemble will uniformly outperform every individual
        architecture.
      </p>

      <div class="row row-cols-1 row-cols-md-2 g-4 mb-5">

        <div class="col">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">

              <h5 class="card-title">HAM10000</h5>

              <p class="mb-2">
                <strong>ViT-B/16</strong> achieved the strongest individual
                HAM10000 point estimates:
              </p>

              <ul class="mb-0">
                <li>Accuracy: <strong>0.9591</strong></li>
                <li>Weighted F1: <strong>0.9585</strong></li>
                <li>Macro ROC-AUC: <strong>0.9959</strong></li>
                <li>Micro ROC-AUC: <strong>0.9978</strong></li>
              </ul>

            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">

              <h5 class="card-title">Seven-Model Ensemble</h5>

              <p class="mb-2">
                The equal-weight ensemble remained highly competitive on the
                harmonized HAM10000 evaluation:
              </p>

              <ul class="mb-0">
                <li>Accuracy: <strong>0.9386</strong></li>
                <li>Weighted F1: <strong>0.9374</strong></li>
                <li>Macro ROC-AUC: <strong>0.9951</strong></li>
                <li>Micro ROC-AUC: <strong>0.9971</strong></li>
              </ul>

            </div>
          </div>
        </div>

      </div>

      <div class="card border-0 shadow-sm mb-5">
        <div class="card-body">

          <h5 class="card-title">External Evaluation</h5>

          <p>
            On ISIC 2019, the ensemble achieved:
          </p>

          <ul class="mb-3">
            <li>Accuracy: <strong>0.6830</strong></li>
            <li>Weighted F1: <strong>0.6446</strong></li>
            <li>Macro ROC-AUC: <strong>0.8981</strong></li>
            <li>Weighted ROC-AUC: <strong>0.9011</strong></li>
          </ul>

          <p class="mb-0">
            The reduction relative to internal HAM10000 performance highlights
            the importance of external evaluation when assessing the
            generalizability of medical-image classification systems.
          </p>

        </div>
      </div>

      <div class="text-center mb-5">

        {% include figure.liquid
           path="https://raw.githubusercontent.com/md-naim-hassan-saykat/skin-lesion-classification-ensemble-ham10000/main/results/figures/model_comp_accuracy_f1.png"
           title="Comparison of classification performance across evaluated models"
           class="img-fluid rounded shadow" %}

        <p class="text-muted fst-italic small mt-2">
          Comparative classification performance across the evaluated
          architectures and ensemble.
        </p>

      </div>

      <hr class="my-5">

      <h2 class="h3 mb-4">Explainable AI</h2>

      <p class="mb-4">
        <strong>Grad-CAM</strong> is used for qualitative attribution analysis to
        visualize image regions associated with model predictions. The repository
        contains curated class-specific ensemble visualizations for all seven
        lesion categories, together with selected model-comparison examples.
      </p>

      <div class="text-center mb-4">

        {% include figure.liquid
           path="https://raw.githubusercontent.com/md-naim-hassan-saykat/skin-lesion-classification-ensemble-ham10000/main/results/figures/gradcam_ensemble_mel.png"
           title="Grad-CAM attribution for an ensemble melanoma prediction"
           class="img-fluid rounded shadow" %}

      </div>

      <p class="text-muted text-center fst-italic small mb-5">
        Example Grad-CAM attribution for the melanoma class. Attribution maps
        indicate regions associated with the model prediction and should not be
        interpreted as independent clinical evidence.
      </p>

      <hr class="my-5">

      <h2 class="h3 mb-4">Reproducibility</h2>

      <p class="mb-3">
        The public repository provides the implementation and curated
        reproducibility materials for the study, including:
      </p>

      <ul class="mb-4">
        <li>training and evaluation code;</li>
        <li>seven-model ensemble evaluation workflow;</li>
        <li>HAM10000 data-preparation utilities;</li>
        <li>machine-readable result tables;</li>
        <li>ROC curves and confusion matrices;</li>
        <li>calibration and statistical-comparison outputs;</li>
        <li>Grad-CAM attribution figures;</li>
        <li>automated tests and continuous-integration checks; and</li>
        <li>installation, training, evaluation, and ensemble documentation.</li>
      </ul>

      <div class="d-flex flex-wrap gap-2 mb-5">

        <a class="btn btn-outline-primary"
           href="https://github.com/md-naim-hassan-saykat/skin-lesion-classification-ensemble-ham10000"
           target="_blank"
           rel="noopener noreferrer">
          GitHub Repository
        </a>

        <a class="btn btn-outline-secondary"
           href="https://doi.org/10.5281/zenodo.17390952"
           target="_blank"
           rel="noopener noreferrer">
          Zenodo Archive
        </a>

      </div>

      <hr class="my-5">

      <h2 class="h3 mb-3">Publication Status</h2>

      <p class="mb-4">
        This project forms the reproducibility framework for the manuscript
        <strong>
          “Generalizable Ensemble Deep Learning for Dermoscopic Skin-Lesion
          Classification: Internal Evaluation on HAM10000 and External Evaluation
          on ISIC 2019”
        </strong>,
        which is currently under peer review.
      </p>

      <p class="text-muted small mb-5">
        Manuscript status and bibliographic information will be updated following
        peer-review decisions and publication.
      </p>

    </div>
  </div>

</div>
