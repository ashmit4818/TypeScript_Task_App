# TypeScript Task Management App

Welcome to the TypeScript Task Management App! This project is built using Vite and TypeScript to showcase my TypeScript skills and provide a simple yet efficient way to manage tasks. The app features dynamic task creation, task completion toggle, and persistent storage through localStorage. It leverages modern web development practices like CI/CD pipelines using GitHub Actions and deployment on Netlify.

### 🌐 Live Site 
The project is hosted and publicly available at:  
[TypeScript Task App](https://typescripttaskapp.netlify.app)

### 🚀 Automation & CI/CD  
This project is automated using GitHub Actions and a CI/CD pipeline with Netlify. Every push to the main branch triggers an automated deployment to Netlify using a Netlify Build Hook. This ensures continuous integration and deployment, making updates instantly available on the live site.

The GitHub Actions workflow for deployment:

```yaml
name: Deploy netlify site

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: "Deployed site"
      run: curl -X POST -d {} ${{ secrets.NETLIFY_BUILD_HOOK }}
```

### Netlify Build Hook

- A Build Hook is a unique URL provided by Netlify that you can call to trigger a new build of your site.
- This is useful for deploying your application automatically whenever there are changes in your code.
- By using a Build Hook, you ensure that your latest changes are reflected on your live site without needing to manually trigger deployments.

### 📚 Key Features

- **Task Creation:** Create tasks dynamically using TypeScript, ensuring type safety and clear task structure.
- **Task Management:** Toggle task completion and update task status in real-time.
- **Persistent Storage:** Store and load tasks using localStorage for a seamless user experience.
- **Automated Deployment:** Continuous integration and deployment via GitHub Actions and Netlify Build Hooks.

### 🛠️ Technologies Used

- **Vite:** A fast and modern build tool for frontend projects.
- **TypeScript:** Ensuring type safety and enhanced developer experience.
- **localStorage:** Persistent storage for managing tasks.
- **GitHub Actions:** Automated CI/CD workflow for continuous integration and deployment.
- **Netlify:** Hosting platform for the live site.

### 💻 Local Setup
To run the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ashmit4818/TypeScript_Task_App.git
    ```

2. **Install dependencies:**  
   Navigate to the project folder and install the required packages:

    ```bash
    cd TypeScript_Task_App && npm install
    ```

3. **Run the application:**  
   Start the development server:

    ```bash
    npm run dev
    ```

4. **Visit the app:**  
   Open your browser and visit [http://localhost:5173](http://localhost:5173) to see the app in action.


### 📝 Contributing
Contributions are highly encouraged! If you have improvements, feature ideas, or bug fixes, feel free to fork the repository, create a new branch, and submit a pull request. I’d love to see the community grow around this project!

### 📜 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

