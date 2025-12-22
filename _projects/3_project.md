---
layout: project
title: "Patent Document Re-ranking with Dense and Cross-Encoders"
description: "Neural information retrieval pipeline for patent search using dense embeddings, cross-encoder re-ranking, and evaluation on IR benchmarks."
importance: 3
category: research
---

## Overview

This project focuses on **neural information retrieval (IR)** for patent and technical document search.  
The goal is to improve ranking quality beyond traditional lexical methods (e.g., BM25) by combining:

- **Dense retrieval models** for semantic matching
- **Cross-encoder re-ranking** for fine-grained relevance estimation

The system is designed for **high-recall candidate generation** followed by **high-precision re-ranking**, reflecting state-of-the-art retrieval pipelines used in industry and research.

---

## Methodology

The pipeline consists of three main stages:

### 1. Dense Retrieval
- Dual-encoder embedding models are used to encode queries and documents
- Similarity search is performed using vector similarity
- Multiple embedding models are supported for comparison

### 2. Cross-Encoder Re-ranking
- Top-k candidates from dense retrieval are re-ranked
- Transformer-based cross-encoders jointly encode query–document pairs
- Models such as **BGE reranker** and large instruction-tuned rerankers are evaluated

### 3. Rank Fusion and Evaluation
- Reciprocal Rank Fusion (RRF) is used to combine rankings from multiple retrievers
- Evaluation metrics include:
  - Recall@k
  - Mean Average Precision (MAP)
  - Mean Rank

---

## Experiments & Results

- Extensive comparison between dense retrievers and cross-encoders
- Demonstrates significant ranking improvements after re-ranking
- Analysis of trade-offs between accuracy and computational cost
- Visualization of performance across models and metrics

---

## Tools & Technologies

- **Python**, **PyTorch**
- **Hugging Face Transformers**
- **Sentence-Transformers**
- **FAISS** for vector search
- **Matplotlib / Seaborn** for evaluation plots

---

## Research Relevance

This project reflects real-world **LLM-era search systems** used in:
- Patent search
- Legal document retrieval
- Scientific literature search
- Enterprise knowledge bases

It also serves as a foundation for future research on:
- Query understanding
- Hybrid lexical–neural retrieval
- LLM-based re-ranking and reasoning

---

## Code

🔗 **GitHub Repository:**  
[https://github.com/md-naim-hassan-saykat/ir-patent-reranking](https://github.com/md-naim-hassan-saykat/ir-patent-reranking)

---

## Future Work

- Integration of generative LLMs for query expansion
- Multi-stage re-ranking with reasoning models
- Extension to multilingual and cross-domain retrieval
- Preparation for Q1 journal or conference submission
