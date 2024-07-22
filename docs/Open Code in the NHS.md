---
sidebar_position: 2
title: Open Code in the NHS
sidebar_label: Open Code in the NHS
---

Several organizations and publications advocate for open coding in its various forms within the NHS and more broadly across the public sector and academia. This page aims to compile relevant literature and proposed or tested approaches for implementing open code policies in the NHS, from individual teams to entire organizations.

There is also a notable overlap between open code and software engineering best practices, which are often promoted together as effective means to enhance reproducibility.

## References

The following is a list of some of the materials discussing and supporting open coding and software engineering approaches to code development in the NHS:

- **[Better, Broader, Safer](https://www.gov.uk/government/publications/better-broader-safer-using-health-data-for-research-and-analysis/better-broader-safer-using-health-data-for-research-and-analysis#BBS)**: Using Health Data for Research and Analysis (The Goldacre Report): A comprehensive and influential report, written on behalf of the Department of Health and Social Care, advocating for open coding and Reproducible Analytical Pipelines (RAP) in the NHS.
- **[Government Analysis Function Reproducible Analytical Pipelines (RAP) Strategy](https://analysisfunction.civilservice.gov.uk/policy-store/reproducible-analytical-pipelines-strategy/#RAP)**: Released in June 2022, this strategy summarizes the findings of the RAP strategy since 2017 and outlines the plan for future work.
- **[Data Saves Lives: Reshaping Health and Social Care with Data](https://www.gov.uk/government/publications/data-saves-lives-reshaping-health-and-social-care-with-data/data-saves-lives-reshaping-health-and-social-care-with-data#data-saves-lives)**: A broad document covering many aspects of improving trust in the health and care system's use of data, referencing the Goldacre Report.
- Office for Statistics Regulation – **[Overcoming Barriers to Adoption of RAP](https://osr.statisticsauthority.gov.uk/publication/reproducible-analytical-pipelines-overcoming-barriers-to-adoption/)**: A report supporting RAP adoption by all government departments involved in analytics, describing challenges and recommending solutions at organizational, team, and individual levels.
- **[Open Sourcing Analytical Code](https://analysisfunction.civilservice.gov.uk/policy-store/open-sourcing-analytical-code/)**: Published by the Analysis Function in March 2023, this guidance is for anyone in government involved in or owning analysis pipelines.
- **[Quality Assurance of Code for Analysis and Research (The Duck Book)](https://best-practice-and-impact.github.io/qa-of-code-guidance/intro.html#duck)**: A living document for Analysis Standards and Pipelines by the Office of National Statistics.
- **[NHS England Open Source Programme](https://www.england.nhs.uk/digitaltechnology/open-source/)**: Detailed on the Digital Transformation pages.
- **[Government GitHub Community](https://government.github.com/community/)**: Links to UK Central and Council GitHub repositories, among many others worldwide.
- **[NHS England R Reporting](https://nhsengland.github.io/nhs-r-reporting/#nhse_report)**: Includes tutorials and example A&E Attendance Reports.
- **[NHSx (now NHS England) Open Source Policy](https://github.com/nhsx/open-source-policy/blob/main/open-source-policy.md#nhsx_osp)**: A comprehensive guide on why and how open source should be implemented in the NHS, including best practice statements and a checklist for open sourcing code.
- **[NHS Digital (now NHS England) RAP Community of Practice](https://nhsdigital.github.io/rap-community-of-practice/)**: A rich resource of material on setting up and running RAP, including [blog posts](https://digital.nhs.uk/blog/data-points-blog) by the team.
- **[Making Source Code Open and Reusable](https://www.gov.uk/service-manual/technology/making-source-code-open-and-reusable#gds-open)**: Guidance from the Gov.uk Service Manual for the Government Digital Service.
- **[CDU Data Science Blog](https://cdu-data-science-team.github.io/team-blog/#cdu)**: The Clinical Development Unit, a team in Nottinghamshire Healthcare NHS Foundation Trust, openly coded and wrote about their approaches on a distill blog site. This is also featured in the [NHS England playbook](https://transform.england.nhs.uk/key-tools-and-info/digital-playbooks/open-source-digital-playbook/i-want-to-create-a-project-that-can-be-used-by-other-healthcare-organisations/), which includes various case examples and is referenced in the "Data Saves Lives" document.

## Challenges with Open Source

### Opening Code Without Exposing Data/‘Secrets’

In coding terms, exposing secrets often means sharing passwords or keys. For data analysis in the NHS and other public sector organizations, this also includes sharing personal, clinical, or other sensitive data. There are several approaches to avoid this, including specific NHS methods:

- NHSx Open Source Policy (note: NHSx is now NHS England, but this hasn’t been adopted as an NHS England Policy).
- NHS England’s R Reporting.
- CDU Data Science Team Blogs about GitHub.
- Making Source Code Open and Reusable (provides broad requirements like storing secret keys and credentials separately).
- NHS North Central London ICB Analytics Team: Uses a template repository for new analytical projects, detailed in the slides for "Intro to Git".

These methods include setting up repositories with automated restrictions to prevent and reduce the risk of unintentional disclosure of any sensitive data.

However, we must rely on people using these recommendations and setting up their systems correctly, similar to our use of email or social media accounts. For example, with email, we need to rely on senders using the blind copy function if the recipients include patients or the public, as there is no automated way to prevent a breach otherwise. Consequently, mistakes do happen, and there are mechanisms in place to report these breaches, which does not mean we prevent people from using email or social media.

Systems like GitHub offer processes to prevent, reverse, and delete accidental sharing (breaches), but they are still subject to reporting for near misses and incidents when they occur. However, these reports may only be shared locally and not more widely.

### Opening Code Without Giving Away Proprietary Information (and Intellectual Property)

The issue of intellectual property is challenging, especially when analysts and data scientists may not be well-versed in this area of law. It is often cited as a reason not to share specific code, such as SQL, without providing formal details on how this would violate any laws. Publishing SQL code is often assumed to risk inadvertently revealing the structure of databases owned by a company. However, there are examples, such as the clinical database schemas of TPP, which owns SystmOne, shared as part of the OpenSafely secure analytics platform for NHS electronic health records.

Discussions related to sharing code should be considered as part of the procurement process. Additionally, Government guidance from the Central Digital & Data Office, titled "When Code Should Be Open or Closed," states:

> Unless your database schema contains credentials, it is not sensitive and can be open. You should store any credentials separately and keep them closed.

### Concerns Over Code Being “Sold” Back to the NHS at a Profit

This concern is often raised without concrete examples of it ever occurring. However, even if it did happen, it doesn’t necessarily justify not sharing code publicly.

#### Adding Value

Courses from the NHS-R Community are open to the public and can be used by anyone for learning, teaching, or modification. Organizations like the Strategy Unit (part of the NHS Midlands and Lancashire Commissioning Strategy Unit) use these materials and offer training sessions at a daily rate. Although the materials are free, the service of the person conducting the course is paid for, representing an added value.

The same principle applies to code that is built upon. If a model is taken and enhanced, it represents an added service. The enhanced code might not be made publicly available, but the original code remains accessible. It is up to the purchaser to decide whether a service leading to closed code is worth buying. It is recommended that procurement always considers the importance of making code open.

#### Selling Back the Same Code

Taking the idea of adding value further, what if a company obtained freely shared code and sold it back to the NHS? This situation is unfortunate but avoidable if staff are knowledgeable about looking for open code initially. Promoting the use of open code and supporting staff in using and contributing to platforms like GitHub can prevent this issue.

#### Taking Ideas and Selling Them Back

If a proposal is written and later taken up by a consultancy and sold back verbatim, it results in unnecessary public spending. However, the sharing of the idea was beneficial because it was valuable. Consultancies often gather information from staff at all levels, something that might not happen internally. Ideas from employees don’t always reach the board but can be elevated through management consultancies.

By putting work out in the open, we allow its discovery by everyone, which mitigates the risk of being sold our own work.

### Coding in the Open

Currently, there is no single policy or procedure for coding in the open. While it has been strongly recommended in key reviews available to the NHS, such as "Data Saves Lives" and "Better, Broader, Safer: Using Health Data for Research and Analysis" (Goldacre), there is still little guidance on what this looks like in day-to-day work. Some teams, like the CDU Data Science Team, have published their work openly and are featured as case study examples. However, the team has changed its approach and name as of 2023, and the blog site is no longer being updated.

The NHSx Open Source Policy recommended that all development and analytics work done in the NHS be coded openly unless there is a good reason not to. NHSx merged into NHS England in 2022, and the GitHub repository (where this policy is published) states:

> Current status: Version 1.0 - This policy is currently undergoing internal review as part of the adoption process.

Regarding open coding, the document also states:

> Internal code review should be conducted for all open-source projects, and specific responsibilities must be met within or close to the development team.

While reviews might slow the process of sharing code openly, they need to be considered within the context of software code maintenance. Books on code review principles from the Tidyteam at Posit can be an excellent starting point.

The document "Making Source Code Open and Reusable" suggests making your code open from the start and provides a short checklist on what to consider when making existing code open.

### Licenses

#### Languages

To clarify the spelling: "license" is both a noun and a verb in US English, while in UK English, "licence" is used as a noun and "license" as a verb. This becomes important for searches, which is why the header title includes both spellings.

The GDS Way states:

> When using a proper name, use the appropriate spelling for that thing (e.g., the MIT License).
> Each repository should include a licence file. This should be called LICENCE or LICENCE.md.

#### How to Use Licenses

Although documents like "Data Saves Lives" stated an intention to:

> Publish a digital playbook on how to open source your code for health and care organizations. Guidance on where to put the code, how to license and maintain it, and best practices for working with suppliers will be published, in addition to case studies of teams who have done this – completed May 2022.

This has not led to any specific document explaining when or how to use licences. The reference to a digital playbook requiring the creation of a project that can be used by other healthcare organizations links to case study scenarios, which may have relevant information but require thorough reading and referencing. One site listed is the CDU Data Science Team, which used licences but did not explicitly mention how or when to use them.

Government documents like the Duck book contain sections on copyright and licenses, and their recommendations, along with those of the Analysis Function, are to use MIT and OGL.

The document "Making Source Code Open and Reusable" states:

> You should publish your code under an Open Source Initiative-compatible licence. For example, GDS uses the MIT licence.
> All code produced by civil servants is automatically covered by Crown Copyright.

However, many people who are part of the NHS-R Community are not considered civil servants:

> Civil servants are defined much more narrowly than public sector workers: police, teachers, NHS staff, members of the armed forces, and local government officers are not counted as civil servants.

Even when a person’s work is covered by being a civil servant, it is still good practice to include the corresponding licence to any published work, as it cannot be assumed that people know the work is covered by the licence or that the person was a civil servant.

While some NHS organizations are considered Crown bodies like the Department of Health:

> Subsection (7) provides that, like NHS trusts, NHS foundation trusts are not Crown bodies: see paragraph 18 of Schedule 2 to the National Health Service and Community Care Act 1990 (“the 1990 Act”).

(Health and Social Care (Community Health and Standards) Act 2003 Explanatory Notes.)

### NHS-R Community Use of Licences

The use of licences by the NHS-R Community for GitHub repositories will be detailed in the NHSR-Way book under the Style Guide for code.

#### Setting Up Licences

There are two ways to start a repository for sharing on GitHub. Firstly, you can create a repository directly on the GitHub website and select the appropriate licence during the setup process.

If you create the project locally, using R for example, you can add a licence to it using the `usethis` package by typing the following commands in the R console:

```R
usethis::use_cc0_license()
usethis::use_mit_license()
```

However, the OGL (Open Government Licence) does not appear in the selections for `usethis` or GitHub. Crown Copyright sometimes appears as a separate licence, as in the `a11ytables` package, and sometimes combined, as in pay-aminusers, an example referred to in the GDS Way.

Dual licences, such as MIT and CC0, are not commonly combined. More information about dual licensing can be found on the GitHub site.
