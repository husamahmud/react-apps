
# React Apps

This repository contains simple react apps for learning purposes




## Getting Started

1. Creating a Vite Project
    ```
    $ npm create vite@latest my-project
    $ cd my-project
    $ npm install
    ```

2. ## Install #Tailwind CSS
    ```
    # Install Tailwind CSS
    
    $ npm install -D tailwindcss
    $ npx tailwindcss init

    # Configure your template paths (in `tailwind.config.js` file.)

    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],

    # Add the Tailwind directives to your CSS (Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.)
    
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

3. Install Material UI
    ```
    $ npm install @mui/material @emotion/react @emotion/styled
    ```

4. Change the default VITE port development server
    ```
    # the default port is 5174, to change it in ` vite.config.js `

    export default defineConfig({
    server: { port: 3000 },
    });

    ```

5. Execute the application
    ```
    $ npm run dev
    ```

6. Build for production
    ```
    $ npm run build
    ```
