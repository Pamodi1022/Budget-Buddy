# Budget Buddy 💰

![Budget Buddy Logo](https://via.placeholder.com/150) <!-- Replace with actual logo -->

Budget Buddy is a modern, intuitive personal finance management application built with Svelte and TailwindCSS. Take control of your finances with this sleek, user-friendly budgeting tool that helps you track expenses, set savings goals, and achieve financial freedom.

## ✨ Features

- 📊 Interactive dashboard with financial insights
- 💸 Easy expense tracking and categorization
- 🎯 Goal setting and progress tracking
- 📱 Responsive design for all devices
- 🔒 Secure and private data management
- 📈 Visual spending analytics and reports

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/budget-buddy.git
   cd budget-buddy
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or if you prefer yarn
   yarn install
   ```

3. **Environment Setup**
   - Create a `.env` file in the root directory
   - Add any required environment variables (if applicable)

### Running the Project

#### Development Mode

1. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. **Access the application**
   - Open your browser and navigate to [http://localhost:5173](http://localhost:5173)
   - The app will automatically reload when you make changes to the source files

#### Production Build

1. **Build the application**
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Preview the production build**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

3. **Deploy**
   - The built files will be in the `build` directory
   - Deploy these files to your preferred hosting service

### Common Issues & Solutions

- **Port already in use**: If port 5173 is in use, the server will automatically try the next available port
- **Dependency issues**: Try clearing the cache and reinstalling dependencies
  ```bash
  npm cache clean --force
  rm -rf node_modules
  npm install
  ```

## 🛠️ Built With

- [Svelte](https://svelte.dev/) - Frontend framework
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [SvelteKit](https://kit.svelte.dev/) - Application framework
- [Chart.js](https://www.chartjs.org/) - Data visualization

## 📦 Project Structure

```
budget-buddy/
├── src/
│   ├── components/   # Shared components 
│   ├── routes/       # Application routes
│   └── app.html      # Main HTML template
├── static/           # Static assets
└── package.json      # Project dependencies
```


