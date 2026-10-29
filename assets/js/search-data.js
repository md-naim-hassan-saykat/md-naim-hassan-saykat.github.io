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
          description: "Research projects in medical image analysis, AI governance, information retrieval, natural language processing and generative deep learning, with an emphasis on reproducibility and rigorous evaluation.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Journal manuscripts, technical reports and research outputs.",
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
        },{id: "projects-generalizable-skin-lesion-classification-with-deep-learning",
          title: 'Generalizable Skin-Lesion Classification with Deep Learning',
          description: "A reproducible study of seven deep learning architectures and a probability-level ensemble for dermoscopic skin-lesion classification, with internal evaluation on HAM10000 and external evaluation on ISIC 2019.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-patent-retrieval-amp-re-ranking-dense-cross-encoders",
          title: 'Patent Retrieval &amp;amp; Re-ranking (Dense + Cross-Encoders)',
          description: "Research-oriented patent retrieval pipeline combining dense retrieval with transformer cross-encoder re-ranking, evaluated using standard IR metrics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-cyclegan-unpaired-horse-to-zebra-image-translation",
          title: 'CycleGAN: Unpaired Horse-to-Zebra Image Translation',
          description: "PyTorch implementation of CycleGAN for unpaired image-to-image translation, with qualitative results and quantitative evaluation using SSIM and PSNR.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-emotion-recognition-from-text-ml-transformers",
          title: 'Emotion Recognition from Text (ML + Transformers)',
          description: "Comprehensive emotion recognition pipeline combining classical machine learning baselines with transformer-based models, evaluated on a standard emotion dataset.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-simplified-draw-model-for-generative-image-modeling",
          title: 'Simplified DRAW Model for Generative Image Modeling',
          description: "Implementation of a simplified DRAW-style recurrent variational autoencoder for iterative image reconstruction and generation on Fashion-MNIST.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-bangladesh-ai-policy-amp-innovation-lab-bapil",
          title: 'Bangladesh AI Policy &amp;amp; Innovation Lab (BAPIL)',
          description: "An independent research initiative designing a trustworthy AI policy-intelligence capability for Bangladesh, from the White Paper to a Technical Blueprint with a tested reference implementation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
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
