---
layout: page
title: "Emotion Recognition from Text (ML + Transformers)"
subtitle: "Natural Language Processing | Emotion Classification | Transformers"
description: "Comprehensive emotion recognition pipeline combining classical machine learning baselines with transformer-based models, evaluated on a standard emotion dataset."
img: /assets/img/4.jpg
importance: 5
category: work
links:
  github: "https://github.com/md-naim-hassan-saykat/emotion-recognition-nlp"
---

<div class="container mt-5">

  <div class="row">
    <div class="col-lg-10 mx-auto">

      <p class="lead mb-4">
        This project investigates <strong>emotion recognition from text</strong> using a combination of
        <strong>traditional machine learning models</strong> and
        <strong>transformer-based architectures</strong>.
        The goal is to systematically compare classical NLP pipelines against modern deep contextual models
        under a unified evaluation framework.
        This study provides a comprehensive comparison between classical and deep learning approaches for
        text-based emotion recognition under a unified evaluation setting.
      </p>

      <p class="mb-4">
        Experiments are conducted on the widely used
        <code>dair-ai/emotion</code> benchmark dataset, with careful attention to
        preprocessing, feature representations, model selection, and metric-based analysis.
        The repository is structured to support reproducibility and controlled comparison across approaches.
      </p>

      <hr class="my-5">

      <h2 class="h3 mb-4">Pipeline Overview</h2>

      <div class="card border-0 shadow-sm mb-4">
        <div class="card-body">
          <h5 class="card-title">Two Modeling Paradigms</h5>
          <ol class="mb-0">
            <li>
              <strong>Classical ML Pipeline:</strong>
              TF-IDF feature extraction followed by classifiers such as Logistic Regression, SVM, and Random Forest.
            </li>
            <li>
              <strong>Transformer-Based Modeling:</strong>
              Fine-tuning pre-trained language models (e.g., BERT) for multi-class emotion classification.
            </li>
          </ol>
        </div>
      </div>

      <div class="card border-0 shadow-sm mb-4">
        <div class="card-body">
          <h5 class="card-title">Key Components</h5>
          <ul class="mb-0">
            <li>Text preprocessing and normalization</li>
            <li>TF-IDF vectorization for classical baselines</li>
            <li>Transformer fine-tuning with task-specific heads</li>
            <li>Optional ensemble modeling across classifiers</li>
            <li>Unified evaluation and comparison framework</li>
          </ul>
        </div>
      </div>

      <hr class="my-5">

      <h2 class="h3 mb-4">Evaluation & Metrics</h2>

      <div class="alert alert-info" role="alert">
        <ul class="mb-0">
          <li><strong>Accuracy</strong> for overall classification performance</li>
          <li><strong>Macro Precision, Recall, and F1</strong> to handle class imbalance</li>
          <li>Model-wise comparison between classical ML and transformers</li>
          <li>Analysis of ensemble behavior relative to single models</li>
        </ul>
      </div>

      <hr class="my-5">

      <h2 class="h3 mb-4">Results & Analysis</h2>

      <p class="mb-4">
        Transformer-based models consistently achieve the strongest overall performance, demonstrating the benefit of
        contextualized representations for emotion understanding.
        Classical models remain competitive baselines and provide interpretability and efficiency advantages.
        Ensemble experiments highlight trade-offs between robustness and peak performance.
      </p>

      <div class="row justify-content-center g-4 mb-4">
        <div class="col-md-6">
          <div class="text-center">
            <h6 class="text-uppercase text-muted small fw-bold mb-3">Model Comparison</h6>
            {% include figure.liquid
               path="assets/img/4.jpg"
               title="Performance comparison across classical ML and transformer-based models"
               class="img-fluid rounded shadow" %}
          </div>
        </div>
      </div>

      <p class="text-muted text-center fst-italic small mb-5">
        The comparison highlights the performance gap between feature-based classifiers and fine-tuned
        transformer models, especially under macro-averaged metrics.
      </p>

      <hr class="my-5">

      <h2 class="h3 mb-3">Repository</h2>

      <p class="mb-4">
        The full implementation, experimental notebooks, and evaluation scripts are available at:
        <br>
        <a href="https://github.com/md-naim-hassan-saykat/emotion-recognition-nlp" target="_blank" rel="noopener">
          https://github.com/md-naim-hassan-saykat/emotion-recognition-nlp
        </a>
      </p>

    </div>

  </div>

</div>
