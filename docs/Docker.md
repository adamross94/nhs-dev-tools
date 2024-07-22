---
sidebar_position: 2
title: Docker
sidebar_label: Docker
---

[Docker](https://www.docker.com/) is an open-source platform that enables developers to build, package, and distribute applications as lightweight, portable containers. Launched in 2013, Docker has revolutionized software development by providing a consistent environment across different stages of the development lifecycle, from local development to production deployment.

## Why Docker for the NHS?

Docker offers several benefits for NHS projects:

- **Consistency**: Docker ensures a uniform environment across development, testing, and production stages, which significantly reduces the "it works on my machine" issues. By using Docker containers, developers can create and clone packages that work in any environment, minimizing the risk of bugs due to different dependency versions[^1][^2][^3][^4].
- **Portability**: Docker containers can run on any system that supports Docker, facilitating easier deployment across NHS infrastructure[^1]. This portability ensures consistent behavior and eliminates compatibility issues, making it easier to transfer applications between different environments and cloud providers without requiring code changes[^2][^3][^4][^5].
- **Efficiency**: Docker containers are lightweight and share the host OS, making them more resource-efficient than traditional virtual machines[^1]. This results in faster deployment times, lower infrastructure costs, and improved system resource utilization. Docker’s lightweight nature allows for running more workloads on the same hardware, optimizing resource usage[^2][^3][^4][^6].
- **Scalability**: Docker's architecture allows for easy scaling of applications to meet varying demands in healthcare settings. Containers can be started and stopped quickly, enabling seamless deployment and scaling of applications based on fluctuating traffic or increased workloads. This responsiveness is essential for handling surges in demand, such as during peak times in healthcare services[^2][^3][^4][^6].
- **Isolation**: Containers provide a level of isolation, enhancing security for sensitive healthcare applications and data. Each Docker container operates in its own isolated runtime environment, preventing interference between containers and protecting the host system[^2][^3][^4][^5][^6].

## Getting Started with Docker

To begin using Docker in NHS projects, follow these steps:

1. Download and install [Docker Desktop](https://www.docker.com/products/docker-desktop/) from the official website. Docker Desktop provides a user-friendly interface and includes all necessary components to run Docker on your local machine.
2. Familiarize yourself with basic Docker commands:
- `docker pull`: Download Docker images from a registry (like Docker Hub)
- `docker run`: Create and start a container from an image
- `docker build`: Build a Docker image from a Dockerfile
- `docker ps`: List running containers
- `docker stop`: Stop a running container
- `docker rm`: Remove a container
1. After installation, try running a simple container to ensure everything is working correctly. For example:
   ```bash
   docker run -d -p 80:80 docker/getting-started
   ```
   This command runs the Docker "Getting Started" tutorial as a container. 
2. Browse [Docker Hub](https://hub.docker.com/) for pre-built images that might be useful for NHS projects. For instance, the nhsdev/nia-111-adaptor image is available for NHS 111 adaptor services.
3. Work through Docker's official getting started guide or other tutorials to gain hands-on experience with building containers, using volumes to persist data, and networking containers.
4. Explore Docker integrations with your preferred Integrated Development Environment (IDE) to streamline your workflow.

## Basic Docker Concepts

### Images

Docker images are read-only templates used to create containers. They contain executable application source code, tools, libraries, and dependencies needed to run an application as a container. Images are often based on other images, with additional customization. For example, you might build an image based on the Ubuntu image, but install Apache web server and your application on top of it.

### Containers

Containers are runnable instances of images, isolated from the host system. They are lightweight and contain everything needed to run the application, including the filesystem, system tools, libraries, and code. Containers run as discrete processes on the host machine, sharing the host OS kernel, which makes them more efficient than traditional virtual machines.

### Dockerfile

A Dockerfile is a text file containing instructions to build a Docker image. It specifies the base operating system, languages, environmental variables, file locations, network ports, and other components needed for the container. Each instruction in a Dockerfile creates a layer in the image, allowing for efficient rebuilding and sharing of layers between images.

### Docker Compose

Docker Compose is a tool for defining and running multi-container Docker applications. It uses a YAML file to configure the application's services, networks, and volumes. With Docker Compose, you can run multiple containers as a single service, allowing them to interact with each other while running in isolation.

## Examples of Docker in Action

- [NHS England Tools](https://github.com/nhs-england-tools): The NHS England Tools organization on GitHub uses Docker to package and distribute open-source projects and code snippets.
- [TKW Simulators](https://developer.nhs.uk/apis/uec-appointments/sims_install.html): The ToolKit Workbench (TKW) Simulators use Docker containers to package all required resources for testing Provider and Consumer functionality in NHS booking systems.
- [GP Connect Consumer Adaptor](https://hub.docker.com/r/nhsdev/nia-gpc-consumer-adaptor): The nhsdev/nia-gpc-consumer-adaptor Docker image simplifies GP Connect integration by handling service discovery and request routing, making it easier for NHS services to interact with GP systems.
- [nhsdev/nia-111-adaptor](https://hub.docker.com/r/nhsdev/nia-111-adaptor): An image for the NHS 111 adaptor service.

## Further Learning Resources

- **[Docker Documentation](https://docs.docker.com/)**: Comprehensive guide to Docker.
- **[Docker Hub](https://hub.docker.com/)**: Repository of Docker images.

[^1]: Thorner, Ben. "Developing GOV.UK with Docker" *GOV.UK*, 2020, [Link](https://technology.blog.gov.uk/2020/02/25/developing-gov-uk-with-docker/)
[^2]: Anonymous. "Docker containers and virtualization" *mprofi*, [Link](https://www.mprofi.ch/en/technologies/docker)
[^3]: Anonymous. "Docker overview" *Docker*, [Link](https://docs.docker.com/guides/docker-overview/)
[^4]: Anonymous. "What is Docker? A guide to containerization " *Atlassian*, [Link](https://www.atlassian.com/microservices/microservices-architecture/docker)
[^5]: Anonymous. "Why You Should Be Utilizing Docker Containers In Your Cloud Computing Workflows" *InRhythm*, 2023, [Link](https://www.linkedin.com/pulse/why-you-should-utilizing-docker-containers-your-cloud-computing)
[^6]: Mitrofanskiy, Kosta. "Docker and Microservices: The Future of Scalable and Resilient Application Development" *Intellisoft*, 2024, [Link](https://intellisoft.io/docker-and-microservices-the-future-of-scalable-and-resilient-application-development/)

