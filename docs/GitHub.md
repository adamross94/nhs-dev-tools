---
sidebar_position: 2
title: GitHub
sidebar_label: GitHub
---

[GitHub](https://github.com/) is a web-based platform for version control and collaboration that allows developers to store, manage, and track changes to their code. Founded in 2008, GitHub has become the world's largest host of source code, with over 100 million developers using the platform as of 2023.

## Why GitHub for the NHS?

GitHub provides several advantages for NHS projects, including:

- **Collaboration**: GitHub facilitates collaboration among team members through various features. It allows for code reviews, where developers can comment on specific lines of code, suggest changes, and discuss implementations. The platform's pull request system enables team members to propose changes, review code, and merge contributions seamlessly. GitHub also provides tools for real-time discussions through issues and comments, fostering a collaborative environment for development teams[^1][^2].
- **Project Management**: GitHub offers powerful project management tools that go beyond just code hosting. Its issue tracking system allows teams to create, assign, and track tasks, bugs, and feature requests. Project boards provide a visual representation of work items, helping teams organize and prioritize tasks. GitHub Actions, a continuous integration and continuous deployment (CI/CD) tool, automates workflows directly from the repository. These features collectively enhance project organization and streamline development processes[^1][^2].
- **Hosting and Sharing**: As a web-based platform, GitHub excels at hosting and sharing code repositories. It provides a centralized location for storing code, making it easily accessible to team members regardless of their physical location. GitHub's forking feature allows developers to create personal copies of repositories, facilitating experimentation and contribution to open-source projects. The platform's visibility options (public or private) give teams control over who can access their code[^1].
- **Integration**: GitHub integrates seamlessly with a wide range of third-party tools and services, enhancing the development and deployment workflow. It supports integration with popular services like Slack for notifications, Jira for issue tracking, and various CI/CD tools. This integration capability allows teams to create a customized development environment that suits their specific needs. Additionally, GitHub's API enables developers to build custom integrations and automate workflows, further extending its functionality[^2].

## Getting Started with GitHub

### Creating a GitHub Account

1. **Sign Up**:

   - Go to github.com and click on the "Sign up" button.
   - Fill in your username, email address, and password.
   - Choose the free plan for personal use or explore other options for teams and organizations.
   - Verify your email address to activate your account.

2. **Set Up Your Profile**:

   - Add a profile picture and bio to personalize your account.
   - Configure two-factor authentication for enhanced security.

### Setting Up a Repository

1. **Create a New Repository**:

   - Click the "+" icon in the top-right corner of the GitHub homepage and select "New repository".
   - Alternatively, navigate to your repositories page and click the "New" button.
   - Choose a meaningful name for your repository.
   - Add a description to explain the purpose of your project.
   - Select whether the repository should be public or private.
   - Initialize the repository with a README file if desired.
   - Click "Create repository".

2. **Clone the Repository Locally**:
   - On your repository page, click the "Code" button and copy the HTTPS URL.
   - Open your terminal or command prompt and navigate to where you want to store the project.
   - Run the following commands:
   ```text
     git clone https://github.com/yourusername/your-repo-name.git
     cd your-repo-name
   ```

3. **Add and Commit Changes**:
   - Make changes to your files locally.
   - Stage the changes for commit:
   ```text
      git add .
   ``` 
   - Commit the changes with a descriptive message:
   ```text
      git commit -m "Initial commit: Add project files"
   ```  

4. **Push Changes to GitHub**:
   - Send your local commits to the remote repository:
   ```text
      git push origin main
   ``` 

5. **Create Branches for New Features**:
   - Create a new branch for each feature or bug fix:
   ```text
      git checkout -b feature-branch-name
   ``` 
   - Make changes, commit, and push to GitHub:
   ```text
      git push origin feature-branch-name
   ```  

6. **Create Pull Requests**:

    - On GitHub, navigate to your repository and click "Pull requests".
    - Click "New pull request" and select your feature branch.
    - Add a title and description for your changes.
    - Submit the pull request for review.


## Core Concepts in GitHub

### Repositories

Repositories (or repos) are the most basic element of GitHub, serving as a place to store your project's files and each file's revision history. They can have multiple collaborators and be either public or private. Repositories are often described as a project's folder containing all related code, files, and documentation[^4].

### Branches

Branches allow you to develop features, fix bugs, or safely experiment with new ideas in a contained area of your repository. The default branch, typically named main, is the base branch for new pull requests and code commits. Creating a new branch makes a copy of the existing branch at that point in time, allowing for parallel development without affecting the main codebase[^5].

### Commit

A commit represents a specific point in your project's history, capturing a saved change to your code. Each commit creates a unique ID (a SHA) that allows you to keep record of the specific changes made, along with who made them and when[^6].

### Fork

A fork is a new repository that shares code and visibility settings with the original "upstream" repository. Forks allow you to freely experiment with changes without affecting the original project and are commonly used to propose changes to someone else's project or to use someone else's project as a starting point for your own idea.

### Pull Requests

Pull requests (or PRs) are proposed changes to a repository submitted by a user and accepted or rejected by a repository's collaborators[^6]. They provide a way to notify team members about new changes pushed to a branch in a repository and initiate code review and general discussion about a set of changes before merging into the main branch.

### Issues

Issues are used to track ideas, enhancements, tasks, or bugs for work on GitHub. They can be shared and discussed with collaborators, assigned to specific team members, and linked to pull requests. Issues help you organize your work and prioritize tasks within your project.

## Example of Github in Action

Github is utilised across UK government institutions to enhance collaboration, transparency, and efficiency in various projects:

### NHS

- [Birmingham and Solihull ICS](https://github.com/Birmingham-and-Solihull-ICS)
- [Bristol North Somerset and South Gloucestershire ICB](https://github.com/nhs-bnssg-analytics)
- [Midlands and Lancashire Commissioning Support Unit](https://github.com/MLCSU)
- [National Disease Registration Service](https://github.com/NHSE-NDRS)
- [Nottinghamshire Healthcare NHS Foundation Trust](https://github.com/CDU-data-science-team/)
- [NHS Business Services Authority](https://github.com/nhsbsa-data-analytics)
- [NHS England](https://github.com/nhsengland)
- [NHS England - Open Health Statistics](https://nhsengland.github.io/open-health-statistics/)
- [Public Health Scotland](https://github.com/Public-Health-Scotland)
- [Public Health Wales](https://github.com/public-health-wales-health-intelligence)
- [RAP Community of Practice - NHS England but under NHS Digital’s organisation](https://github.com/NHSDigital/rap-community-of-practice)
- [The Strategy Unit](https://github.com/The-Strategy-Unit)
- [NHS England Data Science](https://nhsengland.github.io/datascience/)
- [NHS Digital](https://github.com/NHSDigital)

### Office for National Statistics

- [Data Science Campus](https://github.com/datasciencecampus)
- [Government Analysis Function](https://github.com/best-practice-and-impact)
- [ONS Big Data](https://github.com/ONSBigData)
- [ONS Data Visualisation](https://github.com/ONSvisual)
- [ONS Digital](https://github.com/ONSdigital)

### UK Government Departments

- [The Analysis Function](https://github.com/best-practice-and-impact)
- Cabinet Office
    - [Central](https://github.com/cabinetoffice)
    - [Analysis & Insight](https://github.com/co-analysis)
- Department for Education
    - [Analytical Services](https://github.com/dfe-analytical-services)
    - [R Community](https://github.com/DfE-R-Community)
    - [DfE Digital](https://github.com/DFE-Digital)
    - [Standard](https://github.com/DFEAGILEDEVOPS)
    - [Digital](https://github.com/DFE-Digital)
    - [Analytical Services](https://github.com/dfe-analytical-services)
- Department for Environment, Food and Rural Affairs (Defra)
    - [Data Science Centre of Excellence](https://github.com/Defra-Data-Science-Centre-of-Excellence)
    - [Central](https://github.com/defra)
    - [Defra Design Team](https://github.com/defra-design)
- [Department for Health and Social Care Data Science](https://github.com/DataS-DHSC)
- [Department for International Trade](https://github.com/uktrade)
- [Department for Levelling Up, Housing and Communities](https://github.com/communitiesuk)
- [Department for Transport](https://github.com/department-for-transport)
- [Foreign, Commonwealth and Development Office](https://github.com/DFID)
- [Government Digital Service](https://github.com/alphagov)
- Ministry of Justice
    - [Analysis](https://github.com/moj-analytical-services)
    - [Central](https://github.com/ministryofjustice)
- UKHSA
    - [Collaboration](https://github.com/ukhsa-collaboration)
    - [Internal](https://github.com/UKHSA-Internal)

## Further Learning Resources

- **[GitHub Learning Lab](https://lab.github.com/)**: Interactive tutorials on using Git and GitHub.
- **[GitHub Guides](https://guides.github.com/)**: Guides and articles on various GitHub features.


[^1]: Johnston, Aaron. "GitHub for Software Development: The Ultimate Collaboration Tool" *LinkedIn*, 2023, [Link](https://www.linkedin.com/pulse/github-software-development-ultimate-collaboration-tool-johnston)
[^2]: Emy, Njong. "Collaborating on GitHub: Best Practices for Working With Others" *GitKraken*, 2023, [Link](https://www.gitkraken.com/blog/collaborate-on-github)
[^3]: Margaryan, Hayk. "GitHub։ The Ultimate Collaboration Tool for Tech Teams" *Business Development Group*, [Link](https://bdg.am/en/blog/programming/github/)
[^4]: Anonymous. "About repositories" *GitHub*, [Link](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories)
[^5]: Anonymous. "About branches" *GitHub*, [Link](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
[^6]: Anonymous. "GitHub glossary" *GitHub*, [Link](https://docs.github.com/en/get-started/learning-about-github/github-glossary)
