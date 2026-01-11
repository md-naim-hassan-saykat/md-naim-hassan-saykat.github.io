---
layout: project
title: "Patent Retrieval & Re-ranking (Dense + Cross-Encoders)"
subtitle: "Information Retrieval · Dense Retrieval · Cross-Encoder Re-ranking"
description: "Research-oriented patent retrieval pipeline combining dense retrieval with transformer cross-encoder re-ranking, evaluated using standard IR metrics."
img: /assets/img/2.jpg
importance: 2
category: work
giscus_comments: true
links:
  github: "https://github.com/md-naim-hassan-saykat/ir-patent-reranking"
---

<div class="container mt-5">

  <div class="row">
    <div class="col-lg-10 mx-auto">

      <p class="lead mb-4">
        This project builds an end-to-end <strong>patent retrieval and re-ranking</strong> system designed for research-grade evaluation.
        The pipeline first retrieves candidates using <strong>dense vector search</strong>, then improves ranking quality with a
        <strong>transformer-based cross-encoder</strong> that scores query–document relevance more precisely.
      </p>

      <p class="mb-4">
        The system supports experimentation with embedding models, re-rankers, and fusion strategies, and reports standard IR metrics such as
        <strong>Recall@k</strong>, <strong>MAP</strong>, and <strong>Mean Rank / MRR</strong>.
        The repository is organized into clear notebooks/scripts for training, inference, and analysis.
      </p>

      <hr class="my-5">

      <h2 class="h3 mb-4">Pipeline Overview</h2>

      <div class="card border-0 shadow-sm mb-4">
        <div class="card-body">
          <h5 class="card-title">Two-Stage Retrieval</h5>
          <ol class="mb-0">
            <li><strong>Stage 1 — Dense Retrieval:</strong> encode queries and documents into embeddings and retrieve top-k candidates via ANN search.</li>
            <li><strong>Stage 2 — Cross-Encoder Re-ranking:</strong> score each (query, candidate) pair with a transformer model and re-order results.</li>
          </ol>
        </div>
      </div>

      <div class="card border-0 shadow-sm mb-4">
        <div class="card-body">
          <h5 class="card-title">Key Components</h5>
          <ul class="mb-0">
            <li>Dense encoder(s) for initial retrieval (bi-encoder style)</li>
            <li>Cross-encoder re-ranker for fine-grained relevance scoring</li>
            <li>Evaluation suite with IR metrics + plots</li>
            <li>Configurable experiments for ablation/comparison</li>
          </ul>
        </div>
      </div>

      <hr class="my-5">

      <h2 class="h3 mb-4">Evaluation & Metrics</h2>

      <div class="alert alert-info" role="alert">
        <ul class="mb-0">
          <li><strong>Recall@k</strong> to measure candidate coverage in top-k retrieval</li>
          <li><strong>MAP</strong> to measure ranking quality across queries</li>
          <li><strong>MRR / Mean Rank</strong> to quantify how early relevant documents appear</li>
          <li>Comparison across retrievers, re-rankers, and fusion variants</li>
        </ul>
      </div>

      <hr class="my-5">

      <h2 class="h3 mb-4">Qualitative Analysis</h2>

      <div class="row justify-content-center g-4 mb-4">
        <div class="col-md-5">
          <div class="text-center">
            <h6 class="text-uppercase text-muted small fw-bold mb-3">Re-ranking Impact</h6>
            {% include figure.liquid
               path="assets/img/ir-rerank-impact.jpg"
               title="Ranking improvement after cross-encoder re-ranking"
               class="img-fluid rounded shadow" %}
          </div>
        </div>

        <div class="col-md-5">
          <div class="text-center">
            <h6 class="text-uppercase text-muted small fw-bold mb-3">Metrics Comparison</h6>
            {% include figure.liquid
               path="assets/img/ir-metrics-comparison.jpg"
               title="Recall/MAP/MRR comparison across models"
               class="img-fluid rounded shadow" %}
          </div>
        </div>
      </div>

      <p class="text-muted text-center fst-italic small mb-5">
        Tip: If you don’t have these images yet, either add them under <code>assets/img/</code> or remove this whole section.
      </p>

      <hr class="my-5">

      <h2 class="h3 mb-3">Repository</h2>

      <p class="mb-4">
        The full implementation, experiments, and documentation are available here:
        <br>
        <a href="https://github.com/md-naim-hassan-saykat/ir-patent-reranking" target="_blank" rel="noopener">
          https://github.com/md-naim-hassan-saykat/ir-patent-reranking
        </a>
      </p>

    </div>

  </div>

</div>
