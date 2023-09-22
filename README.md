
<img src="./readme/title1.svg"/> 
<br><br> 


## Table of Contents
- [Project Description](#project-description)
- [User Types](#user-types)
- [Features of the App](#features-of-the-app)
- [Prototyping](#prototyping)
- [Implementation](#implementation)
- [Tech Stack](#tech-stack)
- [How to Run](#how-to-run)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)


<br><br>  

<!-- Project Description -->
<a name="project-description"></a>
<img src="./readme/title2.svg"/> 


> The aim of the EcoTech project is to develop a comprehensive application that harnesses various technologies to help prevent and alert forest guards about potential wildfire outbreaks. 

> The application utilizes React Native (Expo) for the mobile app, Node.js with Express for the backend, MongoDB Atlas for database storage, AWS server for cloud infrastructure, Arduino for sensor data collection, OpenAI for predictive analytics, and Firebase for real-time notifications. 

EcoTech's primary goal is to enhance forest safety by collecting vital data such as temperature, humidity, and other factors that can indicate a wildfire. This data is gathered through sensors connected to an Arduino and sent to an AI system that predicts potential fire outbreaks. If a threat is detected, the app sends real-time notifications to nearby firefighting stations and forest guards, enabling prompt and efficient response. The user base for this application includes firefighters, forest guards, and environmentally-conscious individuals committed to safeguarding forests and wildlife. 

In addition to its critical wildfire prevention functionality, EcoTech offers a unique feature that promotes community engagement in reforestation efforts. Users can view a map displaying the locations of forest sensors. 

Potential challenges for EcoTech include ensuring accurate and timely data collection and analysis, securing funding for sensor installation and maintenance, and fostering user engagement for the tree-planting feature. 


### User Types 

1. Admin 
2. General Users (Environmentally-conscious individuals)

### Features of the App 

As an Admin: 

- Create and maintain Arduino connection and configuration. 
- Receive real-time notifications of potential wildfire outbreaks for early prevention.   
- Monitor live data from various forest sensors to understand the current forest conditions. 
- Receive information about the fire risk in particular areas. 

As a General User, I want to: 

- View the locations of forest sensors to understand where monitoring is taking place. 
- Receive real-time notifications of potential wildfire outbreaks for early prevention. 
- Receive information about the fire risk in particular areas. 

<br><br> 

 
<a name="prototyping"></a>
<img src="./readme/title3.svg"/>


> We designed EcoTech using wireframes and mockups, iterating on the design to ensure easy navigation and a seamless user experience. 

### Wireframes 

| Login screen  | Register screen | Landing screen | 
| ---| ---| ---|   
| ![Login](./readme/demo/1440x1024.png) | ![Register](./readme/demo/1440x1024.png) | ![Landing](./readme/demo/1440x1024.png) | 

### Mockups 

| Home screen  | Map Screen | Plant Trees Screen | 
| ---| ---| ---|  
| ![Home](./readme/demo/1440x1024.png) | ![Map](./readme/demo/1440x1024.png)  | ![Plant Trees](./readme/demo/1440x1024.png) | 

<br><br> 


<a name="implementation" ></a>
<img src="./readme/title4.svg"/>


> Based on the wireframes and mockups, we implemented the EcoTech app with the following features: 


### User Screens 

| Login screen  | Register screen | Landing screen | Monitoring screen | 
| ---| ---| ---| ---|   
| ![Login](https://placehold.co/900x1600) | ![Register](https://placehold.co/900x1600) | ![Landing](https://placehold.co/900x1600) | ![Monitoring](https://placehold.co/900x1600) | 
| News screen  | Tree Planting Screen | Notification Settings | Evacuation Information | 
| ![News](https://placehold.co/900x1600) | ![Plant Trees](https://placehold.co/900x1600) | ![Notifications](https://placehold.co/900x1600) | ![Evacuation](https://placehold.co/900x1600) | 

<br><br> 


<a name="tech-stack" ></a>
<img src="./readme/title5.svg"/>


EcoTech is built using the following technologies: 

- React Native (Expo) for the mobile app development.   
- Node.js with Express for the backend server. 
- MongoDB Atlas for database storage. 
- AWS server for cloud infrastructure.    
- Arduino for sensor data collection. 
- OpenAI for predictive analytics. 
- Firebase for real-time notifications. 

EcoTech utilizes these technologies to provide a seamless and comprehensive wildfire prevention and community engagement experience. 

<br><br> 

<a name="how-to-run" ></a>
<img src="./readme/title6.svg"/> 


> To set up EcoTech locally, follow these steps: 


### Prerequisites 

Ensure you have the following software and dependencies installed: 

1. Node.js and npm (Node Package Manager). You can install them from [nodejs.org](https://nodejs.org/). 
2. Expo CLI for React Native. You can install it globally using the command: 

```sh 
npm install -g expo-cli 
```
3. Clone the GitHub repository: 

```sh 
git clone https://github.com/Rayan-Emad1/EcoTech  
```


### Installation 



#### Frontend (Mobile App) 


1. Navigate to the `client` directory: 

   ```bash  
   cd EcoTech/client 
   ``` 
2. Install dependencies:  

   ```bash  
     npm install 
   ``` 
3. Start development server: 

   ```bash  
   npx expo start  
   ``` 

#### Backend (Server) 

1. Navigate to the `server` directory: 

   ```bash 
   cd EcoTech/server 
   ``` 

2. Install dependencies: 

   ```bash   
   npm install 
   ```  

3. Create a `.env` file with your credentials

   ```bash  
   cp .env.example .env
   ``` 
  
4. Start the server: 

   ```bash 
   npm run start 
   ``` 

Now you can run the app locally and test out its features. Make sure to run both frontend and backend concurrently. 
