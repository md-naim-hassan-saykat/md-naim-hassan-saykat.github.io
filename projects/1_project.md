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

<div class="row justify-content-center my-4">
  <div class="col-lg-8 col-md-9 col-sm-11">
    {% include figure.liquid 
       path="assets/img/skin-lesion-cover.jpg" 
       title="Ensemble Learning Pipeline" 
       class="img-fluid rounded shadow" %}
  </div>
</div>

<p class="text-muted text-center mb-4">
High-level overview of the ensemble-based skin lesion classification workflow.
</p>

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

<ul>
  <li>Ensemble outperformed all individual models</li>
  <li>Superior <strong>melanoma sensitivity</strong></li>
  <li>High <strong>macro-F1</strong> and <strong>ROC–AUC</strong> across datasets</li>
  <li>Stable predictions across rare lesion types</li>
  <li>External validation confirms <strong>strong generalization</strong></li>
</ul>

<hr>

## Explainable AI (Grad-CAM)

<div class="row justify-content-center mt-4">
  <div class="col-sm-5 mb-3">
    {% include figure.liquid 
       path="assets/img/gradcam1.jpg" 
       title="Melanoma – Grad-CAM Heatmap" 
       class="img-fluid rounded shadow" %}
  </div>
  <div class="col-sm-5 mb-3">
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

<p>
This work is part of an upcoming <strong>Q1 journal submission</strong> on generalizable medical imaging AI systems.
</p>

</div>
