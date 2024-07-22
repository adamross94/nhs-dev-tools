---
sidebar_position: 15
---

# ChatGPT

ChatGPT is a large language generation model developed by OpenAI, based on the GPT (Generative Pre-trained Transformer) architecture, specifically GPT-3.5. This model is designed to generate human-like text based on the input it receives. It can handle a wide range of natural language processing tasks, including answering questions, generating creative content, translating languages, tutoring, coding, and more.

The "chat" in ChatGPT signifies its capability to engage in interactive conversations with users. This allows it to process and generate text in a conversational manner, making it ideal for chatbots, virtual assistants, customer support applications, and other interactive interfaces. ChatGPT can adapt to various conversational contexts, providing responses that are contextually relevant and coherent.

OpenAI has trained ChatGPT on diverse and extensive datasets including:

- **Books and Literature**: This includes a vast collection of fiction and non-fiction books, covering various genres, authors, and periods. These texts provide the model with a rich understanding of language, narrative structure, and diverse writing styles.
- **Websites and Articles**: The model is trained on content from numerous websites and articles, encompassing news, blogs, educational resources, and opinion pieces. This helps the model stay updated with current events, trends, and a variety of perspectives.
- **Scientific Papers and Journals**: To ensure the model can handle technical and specialized queries, it is trained on scientific literature across various disciplines, including medicine, technology, social sciences, and more.
- **Code Repositories**: For coding and technical support, datasets include code snippets, documentation, and discussions from programming communities and open-source repositories. This enables the model to assist with programming tasks and troubleshooting.
- **Conversation Data**: The model learns from a wide array of conversational data, including dialogues from movies, TV shows, chat logs, and more. This helps it develop conversational skills and understand context, tone, and intent.
- **User-Generated Content**: Platforms like forums, Q&A sites, and social media provide a range of informal and formal language uses, opinions, and interactive dialogues that the model can learn from.
- **Legal and Government Documents**: Including laws, regulations, and public records, these texts help the model understand formal and technical language used in legal and bureaucratic contexts.
- **Technical Manuals and Guides**: Instructional content and how-to guides across various domains enable the model to provide practical advice and step-by-step instructions.

This helps it understand and generate text across a broad spectrum of topics. This training includes reinforcement learning from human feedback (RLHF), a process where human trainers provide feedback on the model's outputs. This feedback loop helps refine the model's responses, enhancing its ability to produce high-quality, contextually appropriate answers.

## Use Cases

### Writing Code

ChatGPT serves as a proficient assistant in writing code for data analysis tasks within the NHS. Whether it's crafting SQL queries to retrieve patient information from databases or developing Python scripts for data manipulation and statistical analysis, ChatGPT can streamline the coding process, offering suggestions and guidance to analysts, thereby expediting the generation of insights crucial for healthcare decision-making.

> [I need to select the PAS_Number, Admission_Date, Patient_Surname, Patient_DoB and Diagnosis_Code from a table called IP_Spell in SQL Server and then place it inside of a temp table. Can you show me how I could do this?](https://chatgpt.com/share/beae9090-10f3-454b-a63b-cc9755ef813f)

### ICD Diagnosis & OPCS Procedure Codes

Leveraging its understanding of medical terminologies, including International Classification of Diseases (ICD) diagnosis codes and Office of Population Censuses and Surveys (OPCS) procedure codes, ChatGPT aids data analysts in interpreting and analyzing patient data effectively. By recognizing and processing these codes, ChatGPT facilitates the identification of patterns, trends, and correlations within healthcare datasets, enabling analysts to derive valuable insights for improving patient care and operational efficiency in the NHS.

> [What three digits would be required to identify the ICD-10 diagnosis code for Cellulitis?](https://chat.openai.com/share/daa71638-831c-4758-bf29-4d7b8803d06d)

### Help with Excel

ChatGPT offers invaluable assistance to NHS data analysts in navigating Excel, a commonly used tool for data organisation and visualisation. From providing tips on data manipulation techniques to offering guidance on creating complex formulas and charts, ChatGPT enhances analysts' proficiency in utilising Excel for data analysis tasks. Its prompt and tailored support ensures efficient data handling and presentation, empowering analysts to derive actionable insights from healthcare datasets with ease.

> [How do I perform a VLOOKUP between two tables on different Excel spreadsheets?](https://chat.openai.com/share/fa5a108a-6814-46b1-aaba-972ec7961068)

### Troubleshooting

In troubleshooting scenarios, ChatGPT proves to be a reliable resource for resolving technical issues encountered during data analysis processes in the NHS. Whether it's debugging code, addressing software compatibility issues, or troubleshooting data extraction errors, ChatGPT offers prompt solutions and troubleshooting strategies, minimizing downtime and ensuring smooth progress in data analysis workflows for NHS analysts.

> [Is this code correct?](https://chatgpt.com/share/607fe95e-10ed-4fce-bf05-3162a3c06187)

### NHS Specific Queries

With its specialized knowledge and understanding of NHS-specific protocols, regulations, and terminology, ChatGPT provides tailored support for handling NHS-specific queries. Whether it's retrieving patient data while adhering to confidentiality guidelines, understanding reimbursement procedures, or navigating healthcare policies, ChatGPT offers accurate and contextually relevant responses, assisting analysts in addressing unique challenges and requirements specific to the NHS environment.

> [What is the NHS data dictionary?](https://chatgpt.com/share/6b202f2b-b04e-401c-848a-28c650c9cd43)

### Summarising Documents

ChatGPT excels in summarizing documents, a crucial task for NHS data analysts dealing with extensive reports, research papers, and medical literature. By condensing lengthy documents into concise summaries, ChatGPT enables analysts to quickly extract key insights and findings, facilitating informed decision-making and knowledge dissemination within healthcare organizations. Its summarization capabilities streamline information processing, saving time and effort for analysts while ensuring critical information is readily accessible for stakeholders in the NHS.

> [Can you summarise all of this text below so that I can better understand the Cancer PTL data collection?](https://chatgpt.com/share/d91493ec-37b6-4feb-9253-27cd60afe5cb)

## Best Practices

### Custom Instructions

Custom instructions are parameters that shape how a model interprets and responds to user requests. These instructions will shape ChatGPT’s responses around a specific intent or goal via the context provided. It can influence the model to follow a specified style, tone, or focus. For instance, ChatGPT can be instructed to give answers in layman’s terms or give more details for those who have expertise in a subject matter.

Right now, ChatGPT gives two different input options for custom instructions: “What would you like ChatGPT to know about you to provide better responses?” and “How would you like ChatGPT to respond?”. Generally, the first box can be very useful for sharing who you are and what your goals are, whereas the latter option is most useful for styling and tone.

For the “How would you like ChatGPT to respond?” input box setup the following instructions setup:

> NEVER mention that you're an AI.

> Avoid any language constructs that could be interpreted as expressing remorse, apology, or regret. This includes any phrases containing words like 'sorry', 'apologies', 'regret', etc., even when used in a context that isn't expressing remorse, apology, or regret.

> If events or information are beyond your scope or knowledge cutoff date, provide a response stating 'I don't know' without elaborating on why the information is unavailable.

> Refrain from disclaimers about you not being a professional or expert.

> Keep responses unique and free of repetition.

> Never suggest seeking information from elsewhere.

> Always focus on the key points in my questions to determine my intent.

> Break down complex problems or tasks into smaller, manageable steps and explain each one using reasoning.

> Provide multiple perspectives or solutions.

> If a question is unclear or ambiguous, ask for more details to confirm your understanding before answering.

> Cite credible sources or references to support your answers with links if available.

> If a mistake is made in a previous response, recognize and correct it.

> After a response, provide three follow-up questions worded as if I'm asking you. Format in bold as Q1, Q2, and Q3. Place two line breaks ("\n") before and after each question for spacing. These questions should be thought-provoking and dig further into the original topic.

I usually leave the “What would you like ChatGPT to know about you to provide better responses?” box blank as the custom instructions count towards your word tokens, but you could fill out the template below and put that in there:
> About Me: Born and raised in [Place of Birth]. [Job Title] at [Company Type]. My work tasks: [List of Work Tasks].

> My Background: [Background Information].

> My Education: Hold a [Type of Degree] in [Field].

> Pursuing a [Type of Degree] in [Field], with [Remaining Requirements].

> My Skills and Passions: [Programming Skills].

> Passionate about [Interests].

> My Learning Goals:
>
>      • Short-term: [Goals].
> 
>      • Medium-term: [Goals].
> 
>      • Long-term: [Goals].

### Prompt Engineering

Prompt engineering refers to the process of carefully designing and optimizing input prompts to effectively elicit desired responses from the model. Essentially, it's about crafting input in a way that maximizes the chance of generating accurate, coherent, and useful output.

The importance of Prompt Engineering:

1. Precision: A well engineered prompt can help you get more accurate and relevant responses.
2. Efficiency: It can reduce the number of tokens used, saving computational resources.
3 User Experience: A good prompt can make the interaction more intuitive and user-friendly.

Key Components:

- Initial Query: The actual question or statement you want to ask the model.
- Context: Additional information that helps the model understand the query better.
- Parameters: These are specific settings like temperature and max tokens can be adjusted to fine-tune the model’s responses.

Below is an example of a prompt I use that gets ChatGPT to write me new detailed, high quality prompts:

> Dear ChatGPT,
>
> I want you to become my dedicated Prompt Creator. Your goal is to help me create the best possible prompt for my needs. The prompts will be used by you, ChatGPT.
>
> You will follow the following process:
>
> 1. Your first response will be to ask me what the prompt should be about. I will provide my answer, but we will need to improve it through continuous iterations by going through the following steps.
> 2. Based on my input, you will generate three sections.
> 3. Revise the prompt (provide your rewritten prompt. It should be clear, concise, and easily understood by you).
> 4. Suggestions (provide suggestions on what details to include in the prompts to improve them).
> 5. Questions (ask any relevant questions about what additional information could enhance the prompt).
>
> We will continue this iterative process with me providing additional information and updating the prompt in the prompt revision section until it is complete.
>
> Remember, a good prompt involves assigning a role to the AI (You are an expert in... Specialist in... etc.), providing as much important context as possible, having a clear and precise goal, and optionally including examples and specific syntax.

You can see the above example in action by viewing a chat that uses it [here](https://chatgpt.com/share/524c4c05-4f36-4c97-9872-6e1b32dd6778). Additionally, you can view a further chat [here](https://chatgpt.com/share/f13fc500-3d9d-46bb-b90e-6d06d77b9083) that utilises the prompt created in the first chat to get a highly detailed response from ChatGPT.

## Data Analysis

In GPT-4 you gain access to a feature called ‘Advanced Data Analysis’ - with this you can upload .csv files directly into ChatGPT and then ask it to perform data analysis for you. I’ve found that it can be useful for generating ideas for reports, in the example below I used the CSV file for Maternity Services Monthly Statistics for the purpose of this demonstration. We use this dataset internally to monitor our position concerning the 12+6 risk assessments for Maternity, including both the 0-70 days and 71-90 days assessment periods.

I used ChatGPT to filter the dataset, create new columns that show our performance as a percentage and then take those percentages and plot them as a barchart. Additionally, I was able to create a list of each NHS organisation and their respective performance percentage. The entire process can be seen in the chat below.

> Maternity Services Monthly Statistics Chat (graphs currently unshareable)

The graphs aren’t perfect or free from formatting issues, and often require repeated prompts to achieve an acceptable format - ideally you would still use Python for any data exploration that requires some depth but ChatGPT could be used for efficient preliminary explorations. An example of a GPT produced graph can be seen below.