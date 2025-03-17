<h1 align="center">
    <img src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&center=true&vCenter=true&width=700&height=70&duration=4000&lines=Microservice+Based+Supermarket+System&color=FF0000" />
</h1>

A scalable and modular microservice architecture for managing a supermarket system. This project demonstrates **service separation**, **dynamic service discovery**, and **efficient API gateway patterns**. Built using a **multi-technology stack**—including **Java with Spring Boot**, **Node.js with Express**, and **Python with Flask**—it creates a robust ecosystem of independent services that communicate seamlessly through a centralized gateway and service registry.

---

## Project Overview

This project demonstrates a microservice architecture for a supermarket system with the following components:

- **Eureka Service**: Service discovery server
- **API Gateway**: Central entry point for all client requests
- **Employee Service**: Manages employee data (Spring Boot)
- **Product Service**: Manages product information (Spring Boot)
- **Order Service**: Handles order processing (Spring Boot)
- **Inventory Service**: Tracks inventory levels (Node.js/Express)
- **Customer Service**: Manages customer data (Python/Flask)


## Project Structure

    Microservice-Supermarket/
    ├── Eureka-Service/          # Service Discovery (Spring Boot)
    ├── API-Gateway/             # API Gateway (Spring Boot)
    ├── Product-Service/         # Product Service (Spring Boot)
    ├── Order-Service/           # Order Service (Spring Boot)
    ├── Inventory-Service/       # Inventory Service (Node.js)
    ├── Customer-Service/        # Customer Service (Python)
    └── Employee-Service/        # Employee Service (Spring Boot)

## Technologies Used

- **Java 21** - Core language for Spring Boot services
- **Spring Boot** - Framework for Java services
- **Spring Cloud** - For microservices patterns (Eureka, API Gateway)
- **Node.js/Express** - For Inventory Service
- **Python/Flask** - For Customer Service
- **Gradle** - Build tool for Order Service
- **Maven** - Build tool for other Java services
- **py_eureka_client** - Eureka client for Python service
- **eureka-js-client** - Eureka client for Node.js service

 

                  

