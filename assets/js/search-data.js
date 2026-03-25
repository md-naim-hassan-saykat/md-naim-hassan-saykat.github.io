// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "A curated portfolio of research projects in medical imaging, information retrieval, and generative deep learning, emphasizing reproducibility, generalization, and real-world evaluation.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Manuscripts, preprints, and research contributions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Selected GitHub repositories showcasing research implementations, experiments, and reproducible systems.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-skin-lesion-classification-with-deep-learning-ensembles",
          title: 'Skin Lesion Classification with Deep Learning Ensembles',
          description: "A generalizable ensemble deep learning framework for automated skin lesion classification, integrating CNNs and ViTs with internal + external validation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-patent-retrieval-amp-re-ranking-dense-cross-encoders",
          title: 'Patent Retrieval &amp;amp; Re-ranking (Dense + Cross-Encoders)',
          description: "Research-oriented patent retrieval pipeline combining dense retrieval with transformer cross-encoder re-ranking, evaluated using standard IR metrics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-cyclegan-horse-zebra-unpaired-image-translation",
          title: 'CycleGAN: Horse ↔ Zebra (Unpaired Image Translation)',
          description: "PyTorch implementation of CycleGAN for unpaired image-to-image translation, with qualitative results and quantitative evaluation using SSIM and PSNR.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-emotion-recognition-from-text-ml-transformers",
          title: 'Emotion Recognition from Text (ML + Transformers)',
          description: "Comprehensive emotion recognition pipeline combining classical machine learning baselines with transformer-based models, evaluated on a standard emotion dataset.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-skin-cancer-classification-cnn-baselines",
          title: 'Skin Cancer Classification (CNN Baselines)',
          description: "CNN-based framework for skin lesion and melanoma classification using dermoscopic image datasets, serving as a strong baseline for medical imaging research.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
