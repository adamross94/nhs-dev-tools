---
sidebar_position: 8
title: Dash by Plotly
sidebar_label: Dash by Plotly
---

[Dash](https://plotly.com/dash/) is an open-source Python framework for building analytical web applications. Created by Plotly, it allows developers to create interactive dashboards and data visualization apps using pure Python, without requiring JavaScript or web development expertise. Dash combines the power of Plotly.js for creating interactive charts with React.js for building user interfaces, all wrapped in a Python API.

## Why Dash for the NHS?

Dash has the potential to be highly beneficial for the NHS and we can draw insights from a [case study of its successful implementation](https://youtu.be/1qhZ9iP-HNE?si=PcgMVARB-qy3f_18) at Somerset NHS Foundation Trust:

- **Python-based**: Somerset NHS Foundation Trust had been using Plotly's open-source libraries for years, indicating that Python-based tools can be readily adopted in NHS settings.
- **Interactive visualizations**: The Trust used Dash to build an AI-enhanced Emergency Care dashboard with near real-time updates, demonstrating Dash's capability for creating dynamic, interactive dashboards.
- **Customizability**: Somerset NHS Foundation Trust was able to develop bespoke solutions tailored to their specific needs using Dash.
- **Integration**: The Trust utilized open-source libraries like scikit-learn and SciPy in conjunction with Dash, showcasing Dash's ability to integrate with other data analysis tools.
- **Handling complex data**: The Trust's Emergency Care dashboard, which updates every 20 seconds, demonstrates Dash's ability to handle large, frequently updating datasets.

## Getting Started with Dash

To start using Dash, you'll need to install it along with its dependencies. You can do this using pip:

```python
pip install dash
```

Here's a simple example of a Dash application:

```python
import dash
from dash import dcc, html
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

app.layout = html.Div([
    html.H1('Hello NHS'),
    dcc.Dropdown(['A', 'B'], 'A', id='dropdown'),
    html.Div(id='display-value')
])

@app.callback(Output('display-value', 'children'),
              Input('dropdown', 'value'))
def display_value(value):
    return f'You have selected {value}'

if __name__ == '__main__':
    app.run_server(debug=True)
```

This creates a simple app with a dropdown menu and displays the selected value[^1].

To create a more comprehensive application, you can include data visualization:

1. Import necessary libraries:

    ```python
    import pandas as pd
    import plotly.express as px
    ```

2. Incorporate data:

    ```python
    df = pd.read_csv('https://raw.githubusercontent.com/plotly/datasets/master/gapminder2007.csv')
    ```

3. Create a layout with multiple components:

    ```python
    app.layout = html.Div([
    html.Div('My First App with Data, Graph, and Controls'),
    dcc.RadioItems(options=['pop', 'lifeExp', 'gdpPercap'], value='lifeExp', id='my-radio-buttons'),
    dash_table.DataTable(data=df.to_dict('records'), page_size=11),
    dcc.Graph(figure={}, id='my-graph')
    ])
    ```

4. Add callbacks to create interactivity:

    ```python
    @callback(
    Output(component_id='my-graph', component_property='figure'),
    Input(component_id='my-radio-buttons', component_property='value')
    )
    def update_graph(col_chosen):
        fig = px.histogram(df, x='continent', y=col_chosen, histfunc='avg')
        return fig
    ```

## Basic Dash by Plotly Concepts

Understanding the following core concepts will help you effectively utilize Dash:

- **Layout**: Defines the structure of your application using HTML and Dash core components[^2].
- **Callbacks**: Python functions that are automatically called by Dash whenever an input component's property changes[^3].
- **Components**: Dash provides both HTML components and higher-level components like graphs, dropdowns, and sliders[^4].
- **Plotly Express**: A high-level interface for creating common types of plots quickly.

## Dash by Plotly Packages Useful for Healthcare

- [dash-bio](http://dash.plotly.com/dash-bio): Provides bioinformatics components for Dash applications.
- [dash-daq](http://dash.plotly.com/dash-daq): Offers controls and indicators for data acquisition and monitoring systems.
- [dash_tabulator](https://github.com/preftech/dash-tabulator): Enables the creation of feature-rich, interactive tables.
- [dash-cytoscape](https://js.cytoscape.org/#introduction): Useful for network visualizations, which can be valuable for epidemiological studies or healthcare system mapping.

## Examples of Dash by Plotly in Action

1. [Natural Language Processing Dashboard](https://dash.gallery/dash-nlp/): This application demonstrates the power of Dash in analyzing text data. It uses NLP techniques to process and visualize customer feedback, allowing users to explore sentiment analysis, topic modeling, and named entity recognition. This type of dashboard could be valuable for analyzing patient feedback or medical literature in healthcare settings.
2. [Manufacturing SPC Dashboard](https://dash.gallery/dash-manufacture-spc-dashboard/): A Statistical Process Control (SPC) dashboard that monitors manufacturing processes in real-time. While designed for manufacturing, this concept could be adapted for healthcare to monitor various clinical processes or patient outcomes, helping to identify trends and anomalies quickly.
3. [European Power Flow Visualization](https://121gigawatts.org/copper-sushi-power-flow-european-grid/): This interactive visualization displays power flow across the European grid. It demonstrates Dash's capability to handle complex, interconnected data. In a healthcare context, similar visualizations could be used to map patient flows, resource allocation, or disease spread across different regions.
4. [Brain Viewer](https://dash.gallery/dash-brain-viewer/): An interactive 3D brain visualization tool that allows users to explore different brain regions and their functions. This application showcases Dash's ability to create sophisticated, interactive 3D visualizations, which could be particularly useful for medical education, research, or even surgical planning in healthcare settings.

## Further Learning Resources

- [Dash by Plotly Official Documentation](https://dash.plotly.com/): Comprehensive guide to all aspects of Dash.
- [Interactive Python Dashboards with Plotly and Dash](https://www.udemy.com/course/interactive-python-dashboards-with-plotly-and-dash/?couponCode=LETSLEARNNOWPP): A Udemy course that provides a hands-on approach to learning Dash.

[^1]: Anonymous. "Dash in 20 Minutes" *plotly*, [Link](https://dash.plotly.com/tutorial)
[^2]: Anonymous. "Dash Layout" *plotly*, [Link](https://dash.plotly.com/layout)
[^3]: Anonymous. "Basic Dash Callbacks" *plotly*, [Link](https://dash.plotly.com/basic-callbacks)
[^4]: Anonymous. "Dash Core Components" *plotly*, [Link](https://dash.plotly.com/dash-core-components)
