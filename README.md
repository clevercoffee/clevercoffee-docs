# CleverCoffee-docs
<div align="center">
<img src="https://img.shields.io/github/actions/workflow/status/clevercoffee/clevercoffee-docs/mkdocs-deploy-latest.yml?branch=master">
<img src="https://img.shields.io/github/last-commit/clevercoffee/clevercoffee-docs/master"><br>
<a href='https://ko-fi.com/clevercoffee' target='_blank'><img height='35' style='border:0px;height:46px;' src='https://az743702.vo.msecnd.net/cdn/kofi3.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
</div>

## About
This repository contains the documentation for the CleverCoffee PID controller project. This manual covers all the necessary steps. This includes installing PlatformIO and uploading the code to the microcontroller. The manual also includes the parts list, information about installing and configuring the PID parameters.  
You can find our project website here: [Clever Coffee Website](https://clevercoffee.de).

## Build with [Nextra](https://nextra.site/) and [Next.js](https://nextjs.org/)

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Development Server](#running-the-development-server)
- [Building the Project](#building-the-project)
- [Serving the Static Site Locally](#serving-the-static-site-locally)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Prerequisites

Before you begin, ensure you have met the following requirements:

### 1. **Node.js (v20 or Higher)**

CleverCoffee requires **Node.js version 20** or higher. You can verify your current Node.js version by running:

```bash
node -v
```

If you need to install or update Node.js, download it from the [official website](https://nodejs.org/) or use a version manager like [nvm](https://github.com/nvm-sh/nvm).

### 2. **pnpm**

[CleverCoffee](https://pnpm.io/) uses **pnpm** as its package manager for efficient dependency management.

#### **Installing pnpm Globally**

You can install `pnpm` globally using `npm`:

```bash
npm install -g pnpm
```

Verify the installation by checking the version:

```bash
pnpm -v
```

---

## Installation

Follow these steps to set up the CleverCoffee project locally after having checked out the code.

### **Install Dependencies**

Install all necessary dependencies using `pnpm`:

```bash
pnpm install
```

This command will read the `package.json` and install all required packages into the `node_modules` directory.

---

## Running the Development Server

To start the development server with hot-reloading:

```bash
pnpm dev
```

After running the command, open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the site.

---

## Building the Project

To create an optimized production build and generate static files:

```bash
pnpm build
```

This process performs the following:

1. **Compiles the Project**: Transforms TypeScript and JSX/TSX files into JavaScript.
2. **Generates Static Assets**: Creates static HTML, CSS, and JavaScript files in the `out` directory for deployment.

---

## Serving the Static Site Locally

After building the project, you can serve the static site locally to verify everything works as expected.

### **Using the `serve` Package**

[`serve`](https://www.npmjs.com/package/serve) is a simple static file server for Node.js.

#### **1. Install `serve` Globally**

If you haven't installed `serve` yet, do so using `pnpm`:

```bash
pnpm add -g serve
```

#### **2. Serve the `out` Directory**

Navigate to the project root (if not already there) and run:

```bash
serve -s out
```

- `-s` or `--single`: Enables Single Page Application (SPA) mode, which redirects all routes to `index.html`. This is essential for client-side routing features like search.

#### **3. Access the Site**

Open your browser and navigate to [http://localhost:5000](http://localhost:5000) (default port) to view the static site.

#### **Specifying a Different Port (Optional)**

To serve the site on a different port, use the `-l` flag:

```bash
serve -s out -l 3000
```

Now, access the site at [http://localhost:3000](http://localhost:3000).

---

## Troubleshooting

### **1. Search Functionality Not Working**

If you encounter issues with the search feature, such as the error "page find could not be loaded," ensure that:

- **SPA Mode is Enabled**: Serving the site with the `-s` flag in `serve` ensures proper client-side routing.
- **Search Index Files are Present**: After building, verify that search-related assets (e.g., `search-index.json`) exist in the `out` directory.
- **No JavaScript Errors**: Open the browser's developer console to check for any runtime errors that might affect search.

### **2. Node.js Version Issues**

Ensure that you are using Node.js version **20** or higher. If not, update Node.js and reinstall dependencies:

```bash
pnpm install
```

### **3. pnpm Not Recognized**

If the `pnpm` command is not found:

- Ensure `pnpm` is installed globally:

  ```bash
  npm install -g pnpm
  ```

- Restart your terminal or command prompt after installation.

### **4. Missing Dependencies**

If you encounter missing dependency errors during build or runtime, try reinstalling dependencies:

```bash
pnpm install
```

### **5. TypeScript Errors**

Ensure that your TypeScript configurations are correct and that there are no type errors. Run type checking with:

```bash
pnpm type-check
```

If you have a type-check script defined in your `package.json`, use it accordingly.

---

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the Repository**

2. **Create a New Branch**

   ```bash
   git checkout -b feature/YourFeatureName
   ```

3. **Make Your Changes**

4. **Commit Your Changes**

   ```bash
   git commit -m "Add your detailed description of changes"
   ```

5. **Push to the Branch**

   ```bash
   git push origin feature/YourFeatureName
   ```

6. **Open a Pull Request**

Please ensure your contributions adhere to the project's coding standards and include relevant tests where applicable.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

- [Nextra](https://nextra.site/) for the beautiful documentation framework.
- [Next.js](https://nextjs.org/) for the powerful React framework.
- [pnpm](https://pnpm.io/) for the efficient package management.
- [Serve](https://www.npmjs.com/package/serve) for the easy-to-use static server.

---


## License
This manual is available as open source under the terms of the [MIT License](./LICENSE).
