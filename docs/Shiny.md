---
sidebar_position: 9
title: Shiny by RStudio
sidebar_label: Shiny by RStudio
---

[Shiny](https://www.rstudio.com/products/shiny/) is an open-source R package that enables building interactive web applications straight from R. Developed by RStudio, Shiny allows R users to create dynamic, web-based dashboards and tools without requiring extensive web development knowledge. It seamlessly integrates R's statistical and graphical capabilities with modern web frameworks, making it an ideal tool for data visualization and analysis in healthcare settings.

## Why Shiny for the NHS?

Shiny is highly favored in healthcare and medical research, and offers several key advantages for NHS applications:

- **Interactive Data Exploration**: Shiny's real-time interactivity allows healthcare professionals to dynamically explore complex datasets, such as patient records or epidemiological data. This capability is crucial for identifying trends, outliers, and patterns that might not be apparent in static reports[^1].
- **Rapid Prototyping and Deployment**: The NHS can quickly develop and iterate on data-driven tools without extensive web development resources. This agility is particularly valuable in healthcare, where rapid response to changing needs is often critical.
- **Accessibility for Non-Technical Stakeholders**: Shiny apps can present complex analyses in user-friendly interfaces, making data-driven insights accessible to a wide range of NHS staff, from clinicians to administrators.
- **Cost-Effectiveness**: By leveraging existing R skills within the NHS, Shiny allows for the creation of sophisticated tools without additional software costs or extensive training. This is particularly important in a public healthcare system where budget efficiency is crucial[^2].
- **Integration with NHS Systems**: Shiny can connect to various data sources and NHS systems, allowing for the creation of comprehensive dashboards that pull data from multiple sources. This integration capability is essential for creating holistic views of healthcare data[^3].
- **Customization for NHS Needs**: Shiny apps can be tailored to specific NHS requirements, including branding, security protocols, and specific healthcare metrics. This flexibility ensures that the tools developed are fit-for-purpose within the NHS context.
- **Statistical Robustness**: Built on R, Shiny inherits its powerful statistical capabilities. This is particularly valuable in healthcare for tasks such as predictive modeling, risk assessment, and complex data analysis.

## Getting Started with Shiny by RStudio

To begin using Shiny:

1. Download and [install R](https://cran.r-project.org/) from the official R Project website, then install [RStudio](https://posit.co/download/rstudio-desktop/), which provides an integrated development environment for R[^4].
2. Open RStudio and run the following command in the console:

    ```r
    install.packages("shiny")
    ```

    This will download and install the Shiny package from CRAN.
3. In your R script or console, load the Shiny package:

    ```r
    library(shiny)
    ```

4. You can either use RStudio's built-in template or start from scratch. To use the template, go to File > New File > Shiny Web App in RStudio[^5].
5. Define your user interface (UI) and server logic: The UI controls the app's appearance, while the server function contains the app's functionality. Here's a basic structure:

   ```r
        ui <- fluidPage(
    # UI elements go here
        )

        server <- function(input, output) {
        # Server logic goes here
        }
   ```

6. Use the following command to launch your Shiny app:
        ```r
        shinyApp(ui = ui, server = server)
        ```
    This will start the app in your default web browser

As you develop your Shiny app, remember to frequently test it by running the entire script, not just portions of it. This helps catch errors early and ensures all components are working together correctly.

## Basic Shiny by RStudio Concepts

Shiny applications consist of two main components:

1. **UI (User Interface)**: Defines the layout and appearance of your app. It's created using R functions that generate HTML, CSS, and JavaScript[^6]. The UI is typically built using functions like fluidPage(), sidebarLayout(), or navbarPage() to structure the layout[^7].
2. **Server**: Contains the R code that powers the app's functionality. It's where you define how to construct the objects that will be rendered in the UI. The server is a function that takes three parameters: input, output, and session.

Key concepts include:

- **Reactive programming**: Shiny uses a reactive programming model, which automatically updates outputs when inputs change. This allows for dynamic, interactive applications without explicitly managing updates.
- **Inputs**: Collect user data through various widgets (e.g., sliders, dropdowns, text inputs). These are created using functions like sliderInput(), selectInput(), or textInput(). Each input has a unique ID that you use to access its value in the server function.
- **Outputs**: Display results as plots, tables, or text. These are created using functions like plotOutput(), tableOutput(), or textOutput() in the UI, and rendered using corresponding render*() functions in the server.
- **Reactivity**: Efficiently manage dependencies between inputs and outputs. Shiny tracks which outputs depend on which inputs and only recalculates when necessary. This is handled through reactive expressions and observers.

## Publishing a Shiny Dashboard

Although it is very easy to build Shiny dashboards on a local computer, developers in health and social care often get stuck when they want to share their dashboard with others. There are numerous ways to go about this depending on who you want to share it with and where they are, and some of the methods are listed below:

### Posit Connect Server

[Posit Connect](https://posit.co/products/enterprise/connect/) is probably the simplest way to share a Shiny application once it is set up and working, however it is not free. You will also need a Linux server, either in the cloud or on your organisations network, on which to run the software. Once it is set up you will have access to a wide range of features, including authenticated access to Shiny dashboards and RMarkdown/ Quarto documents, as well as the facility to run RMarkdown/ Quarto on a schedule. Note also that Posit Connect works with Python content.

### shinyapps.io

[shinyapps.io](https://www.shinyapps.io/) is also a paid service which can give you the ability to easily deploy Shiny applications in the cloud, and you can optionally add user authentication to your Shiny applications. The downside is that shinyapps.io is not suitable for use with sensitive data because you have no control over which server your data is hosted on.

### Network File Storage

You can distribute Shiny applications and the data associated with them on your organisational network file storage. This is a very secure way of distributing your work but the downside is that the people you are sharing it with need to actually run the code themselves with an installation of R and all of the packages in the Shiny application. This method is therefore only really useful to share your work with other data scientists.

## Shiny by RStudio Packages Useful for Healthcare

Several Shiny-compatible packages are particularly relevant for NHS applications:

- [shinydashboard](https://rstudio.github.io/shinydashboard/): Create professional-looking dashboard layouts
- [plotly](https://plotly.com/r/): Generate interactive, publication-quality graphs
- [DT](https://rstudio.github.io/DT/): Display and interact with data tables
- [shinyWidgets](https://shinyapps.dreamrs.fr/shinyWidgets/): Enhance UI with advanced input controls
- [shinyjs](https://deanattali.com/shinyjs/): Add JavaScript functionality to Shiny apps
- [shinythemes](https://rstudio.github.io/shinythemes/): Easily customize the appearance of your app

## Examples of Shiny by RStudio in Action

Here’s how Shiny can be used for a dynamic dashboard to monitor patient metrics:

- **Patient Flow Visualization**: [The Emergency Department Simulation app](https://gallery.shinyapps.io/EDsimulation/) models patient flow information under different assumptions about emergency department case loads. It illustrates how predictive analytics and statistical analysis can be integrated into operational clinical workflows.
- **Clinical Trial Data Explorer**: [The Genome viewer for ICGC cancer](https://gallery.shinyapps.io/genome_browser/), built by Aridhia, is an example of a Shiny app geared towards researchers. It allows users to interactively explore genomic data related to cancer, which is crucial in clinical trial analysis.
- **Treatment Outcome Predictor**: [The Colorectal Cancer risk calculator](https://riskcalc.org/ColorectalCancer/) from the Cleveland Clinic is an example of a predictive tool. It targets physicians and the general public to personalize the risk of colorectal cancer based on various factors.

## Further Learning Resources

- Shiny by RStudio Official Documentation: [Shiny from RStudio](https://shiny.rstudio.com/)
- Mastering Shiny: A book and online course that teaches you how to build professional Shiny applications.

[^1]: Rickert, Joseph. "Shiny in Medicine" *R Views*, 2017, [Link](https://rviews.rstudio.com/2017/05/03/shiny-in-medicine/)
[^2]: Hejazi, Yasmine. "Beginner’s Guide to Creating an R Shiny App" *Towards Data Science*, 2020, [Link](https://towardsdatascience.com/beginners-guide-to-creating-an-r-shiny-app-1664387d95b3)
[^3]: Reading, Christopher. "SPC Charting in R" *NHS-R Community*, 2020, [Link](https://nhsrcommunity.com/spc-charting-in-r/)
[^4]: Anonymous. "Getting Started with Shiny - Creating interactive web apps using the R language" *Coding Club*, [Link](https://ourcodingclub.github.io/tutorials/shiny/)
[^5]: Anonymous. "Getting Started - Shiny - Postit" *Postit*, [Link](https://shiny.posit.co/r/getstarted/build-an-app/hello-shiny/getting-started.html)
[^6]: Anonymous. "Shiny for R :: Cheatsheet" *Postit*, [Link](https://rstudio.github.io/cheatsheets/html/shiny.html)
[^7]: Anonymous. "Chapter 1 Your first Shiny app" *Mastering Shiny*, [Link](https://mastering-shiny.org/basic-app.html)
