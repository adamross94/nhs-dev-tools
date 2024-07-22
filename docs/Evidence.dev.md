---
sidebar_position: 6
title: Evidence.dev
sidebar_label: Evidence.dev
---

Evidence.dev is an open-source framework for building data products using SQL. It's designed as a code-driven alternative to traditional drag-and-drop business intelligence (BI) tools, allowing users to create reports, decision-support tools, and embedded dashboards. Evidence.dev renders a BI website from markdown files, combining SQL queries, data visualization components, and narrative content.

![Alt text](https://docs.evidence.dev/img/how-it-works.png)

## Why Evidence.dev for the NHS?

Evidence.dev offers several advantages that make it particularly suitable for NHS use:

- **Lightweight and fast**: Evidence pre-builds all queries and pages, ensuring instant page loads, which is crucial for busy healthcare environments.
- **Context-rich reporting**: It allows for the inclusion of narrative, definitions, and caveats inline with reports, essential for accurate interpretation of healthcare data.
- **Version control**: Evidence.dev projects can be managed through Git, facilitating collaboration and maintaining a history of changes.
- **Customizable and scalable**: It can generate thousands of pages using a single markdown template, which could be useful for creating reports for different departments, regions, or healthcare services.
- **Cost-effective**: Being open-source and free to start, it aligns well with NHS budget considerations.

## Getting Started with Evidence.dev

To begin using Evidence.dev, follow these steps to set up your environment and create your first project.

### Installation and Setup

1. **Install Evidence.dev**:
   - Follow the installation instructions provided in the [Evidence.dev documentation](https://docs.evidence.dev/install-evidence/).
   - Ensure you have Node.js installed. If not, download it from [nodejs.org](https://nodejs.org/).

2. **Create a New Evidence.dev Project**:

   ```bash
   npx create-evidence my-nhs-evidence-project
   cd my-nhs-evidence-project
   ```

3. **Start the Development Server**:

   ```bash
   npm start
   ```

   - Your Evidence.dev project will be running locally. Visit `http://localhost:3000/` in your web browser to see your project.

## Basic Evidence.dev Concepts

### Markdown Files

Markdown files are the foundation of an Evidence.dev project . They combine SQL queries, data visualizations, and narrative content in a single, easy-to-read format. These files use a .md extension and can include:

- Standard markdown syntax for text formatting
- SQL code blocks for data queries
- Evidence-specific syntax for charts and components
- YAML frontmatter for page metadata

This approach allows for a seamless integration of data analysis and storytelling, crucial for creating comprehensive healthcare reports.

### SQL Statements

SQL statements are embedded directly within the markdown files using code blocks . These queries interact with your connected data sources to fetch the required data. Evidence.dev supports a wide range of SQL dialects, making it versatile for different NHS database systems.

### Charts and Components

Evidence.dev provides a library of built-in charts and components to visualize query results. These include:

- Bar charts, line charts, and scatter plots
- Tables and pivot tables
- KPI cards and big value displays

You can customize these components using properties and even create your own custom components. For instance, you could create a specialized chart for visualizing patient wait times across different NHS services.

### Templated Pages

Templated pages are a powerful feature that allows you to generate multiple pages from a single markdown template . This is particularly useful for creating standardized reports across different NHS trusts or departments. You can use variables and loops within the template to customize content for each generated page. For example:

```markdown
---
title: {{ trust_name }} Performance Report
---

# {{ trust_name }} Monthly Statistics

{%- for department in departments %}
## {{ department }} Overview
...
{%- endfor %}
```

### Control Structures

Evidence.dev has been used to create a variety of data projects that showcase its versatility and potential applications for healthcare analytics. Here are some notable examples:

- **[World Happiness Report](https://vidit.evidence.app/happiness/)**: This interactive dashboard uses data from the World Happiness Report to visualize global happiness trends. It demonstrates Evidence.dev's capability to handle and present complex international datasets, which could be adapted for global health comparisons.
- **[Alcohol Consumption Analysis](https://jared.evidence.app/)**: This project compares alcohol consumption across countries, showcasing Evidence.dev's ability to create comparative analyses. Such an approach could be valuable for NHS public health initiatives or for analyzing health behavior trends across different regions.
- **[Northstar Report](https://northstar-report.netlify.app/)**: This template demonstrates a compact way to distribute top-level organizational metrics. The NHS could adapt this format for creating concise, high-level reports on hospital performance, patient satisfaction, or healthcare outcomes across trusts.
- **[Internal KPI Portal](https://evidence-demo.netlify.app/)**: This expansive KPI portal for a mock e-commerce business showcases Evidence.dev's potential for daily KPI reporting and operations support. The NHS could use a similar approach to create comprehensive dashboards for monitoring various healthcare metrics, from patient wait times to resource utilization.

## Further Learning Resources

- **[Evidence.dev Official Documentation](https://docs.evidence.dev/)**: Comprehensive guide to all aspects of Evidence.dev.
