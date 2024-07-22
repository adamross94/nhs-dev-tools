---
sidebar_position: 1
title: Jupyter Notebooks
sidebar_label: Jupyter Notebooks
---

[Jupyter Notebooks](https://jupyter.org/) is an open-source web application that allows you to create and share documents containing live code, equations, visualizations, and narrative text. It was developed in 2014 as a spin-off project from IPython and has since become a popular tool for data analysis, scientific computing, and machine learning.

## Why Jupyter Notebooks for the NHS?

Jupyter Notebooks is particularly useful for data analysis and research in healthcare because it supports:

- **Data exploration and visualization**: Jupyter Notebooks allows healthcare researchers to easily analyze and visualize medical data through various diagrams like pie charts and bar graphs, facilitating better decision-making[^1].
- **Reproducible research**: Jupyter Notebooks enables sharing of complete analyses, including code and results, which is essential for transparency and reproducibility in healthcare research. This feature allows other researchers to verify findings and build upon existing work, promoting collaborative advancement in medical research[^2].
- **Collaborative work**: The platform enables team members to work together on data projects efficiently. In healthcare settings, this collaborative environment supports interdisciplinary research and facilitates knowledge sharing among clinicians, data scientists, and other healthcare professionals.
- **Interactive learning**: Jupyter Notebooks provides an excellent platform for teaching and learning data science skills, particularly in epidemiological data analysis. It has been used to enhance learning about data analysis using R for graduate students in medical fields, offering an interactive and efficient environment without compatibility issues or package installation problems.
- **Integration and flexibility**: Jupyter Notebooks can connect to various data sources and tools used in the NHS, supporting multiple programming languages and a wide range of data analysis libraries, making it versatile and scalable for different healthcare data analysis tasks.

## Getting Started with Jupyter Notebooks

To begin using Jupyter Notebooks:

### Install Anaconda

[Anaconda](https://www.anaconda.com/) is a popular distribution that includes Jupyter Notebooks and many useful packages for data science and scientific computing. It's available for Windows, macOS, and Linux.

- Download Anaconda from the official website
- Run the installer and follow the prompts
- During installation, it's recommended **not** to add Anaconda to the PATH environment variable to avoid potential conflicts with other software

### Launch Jupyter Notebooks

There are two main ways to start Jupyter Notebooks:

- From Anaconda Navigator: Open Anaconda Navigator from your applications menu and click the "Launch" button under Jupyter Notebook
- From the command line: Open a terminal or Anaconda Prompt and type `jupyter notebook`
### Create a new notebook or open an existing one
- To create a new notebook, click the "New" button in the Jupyter dashboard and select "Python 3" (or your preferred kernel)
- To open an existing notebook, navigate to the file in the Jupyter dashboard and click on it
### Start writing and executing code in cells:
- Code cells: Write Python code and execute it by pressing Shift+Enter or clicking the "Run" button
- Markdown cells: For adding formatted text, equations, and images to document your work


## Basic Jupyter Notebooks Concepts

- **Cells**: Units of content that can contain code, markdown, or raw text. Cells are the fundamental building blocks of Jupyter Notebooks, allowing users to organize their work into discrete, executable units[^3]. There are three main types of cells:
   - Code cells: For writing and executing code
   - Markdown cells: For creating formatted text, equations, and images
   - Raw cells: For content that should not be modified by the notebook
- **Kernel**: The computational engine that executes the code in a notebook. The kernel is responsible for running the code within the notebook and returning results. Jupyter supports multiple kernels, allowing users to work with different programming languages in the same notebook environment[^3][^4].
- **Markdown**: A simple formatting syntax for writing narrative text. Markdown cells in Jupyter Notebooks allow users to create rich, formatted text including headers, lists, links, and even LaTeX equations. This feature enables users to create comprehensive, well-documented analyses[^3][^5].
- **Magic commands**: Special commands that provide additional functionality. Magic commands in Jupyter Notebooks are prefixed with % (for line magics) or %% (for cell magics) and offer a range of utilities, such as timing code execution, displaying images, or running code from external files[^3][^5].



## Example of Using Jupyter Notebooks in Healthcare

- **[Bioscience and Informatics Education](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7643937/)**: Researchers from the University of Manchester have used Jupyter notebooks for teaching bioscience and informatics. They implemented Python and SQL teaching in the Jupyter notebook environment for their MSc Health Informatics programme.
- **[Public Health Dashboard](https://discourse.bokeh.org/t/a-public-health-dashboard-reusable-in-other-projects/5345)**: A public health dashboard has been created using Jupyter notebooks and ipywidgets. This dashboard allows users to select relevant features and visualize health-related data.
- **[Genomics England Research Environment](https://re-docs.genomicsengland.co.uk/jupyter/)**: Genomics England provides access to Jupyter notebooks in their Research Environments. These notebooks can be used for genomics research and analysis.
- **[GitHub Health Topic](https://github.com/topics/health?l=jupyter+notebook)**: On GitHub, there are numerous repositories tagged with the "health" topic that use Jupyter notebooks. These repositories contain various analyses performed on open-source health datasets.

## Further Learning Resources

- **[Jupyter Documentation](https://jupyter.org/documentation)**: Official documentation for Jupyter.
- **[Jupyter Notebook Examples](https://github.com/jupyter/notebook/tree/main/docs/source/examples/Notebook)**: Example notebooks demonstrating various features.

[^1]: Anonymous. "How do healthcare researchers use Jupyter Notebook for data analytics and visualization?" *Typeset.io*, 2023, [Link](https://typeset.io/questions/how-do-healthcare-researchers-use-jupyter-notebook-for-data-5976c8f3x8)
[^2]: Anonymous. "Jupyter Notebook" *databricks*, [Link](https://www.databricks.com/glossary/jupyter-notebook)
[^3]: Shafi, Adam. "How to Use Jupyter Notebooks: The Ultimate Guide" *datacamp*, 2023, [Link](https://www.datacamp.com/tutorial/tutorial-jupyter-notebook)
[^4]: Anonymous. "The Jupyter Notebook" *Jupyter*, [Link](https://jupyter-notebook.readthedocs.io/en/stable/notebook.html)
[^5]: Pryke, Benjamin. "How to Use Jupyter Notebook: A Beginner’s Tutorial" *dataquest*, [Link](https://www.dataquest.io/blog/jupyter-notebook-tutorial/)