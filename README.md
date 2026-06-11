# Mattress Customizer & Premium Sleep Portal 🛏️

Welcome to the **Premium Mattress Customization Portal**. This is a fully production-ready, full-stack web application designed to help users customize mattresses by size, firmness, and material, custom-tailored for their specific sleeping positions. 

The application is built using a lightweight **Node.js + Express** backend serving a responsive frontend with interactive pricing calculators and modal checkouts.

---

## 🚀 Live CI/CD Status
![Node.js CI](https://github.com/amir701771/Mattress_website_1/actions/workflows/node.js.yml/badge.svg)
- **Status**: Stable & Passing (✅ Green Tick)
- **Build Verification**: Automatively validates repository structure, dependencies, and code syntax compilation via static pre-flight checks on every commit.

---

## 🌟 Key Features

1. **Interactive Posture Selector**:
   - Recommends ideal mattress firmness (Soft, Medium, Firm) based on user sleeping positions (Side, Back, Stomach).
2. **Real-time Price Calculator**:
   - Calculates custom pricing instantly as users toggle between different **Sizes** (Twin, Full, Queen, King), **Firmness levels**, and **Materials** (Poly Foam, Memory Foam, Natural Latex).
3. **Selection Summary Modal**:
   - Renders a clean details sheet summarizing chosen configurations when clicking "Customize".
4. **Compare Section**:
   - Showcases side-by-side mattress models with smooth scroll navigation and action sheets.
5. **Integrated Contact API**:
   - A fully functional contact form submission handler communicating with the backend `/api/contact` API.

---

## 🛠️ Technology Stack

- **Backend**: Node.js, Express.js (Serving static assets, API routing, requests validation).
- **Frontend**: HTML5, Vanilla CSS (harmonious, modern color system, Poppins/Inter typography), JavaScript (ES6 DOM interaction, live calculations).
- **CI/CD**: GitHub Actions (Static code analysis, syntax compiler check, build sanity verification).
- **Configuration**: Dotenv environment manager.

---

## 📂 Project Structure

```text
Mattress_website_1/
├── .env                  # Environment variables (Port & Mode)
├── .env.example          # Environment variables template
├── .github/
│   └── workflows/
│       └── node.js.yml   # CI/CD Static Validation Pipeline
├── images/
│   ├── mattress-comfort.svg   # Custom Plush Comfort Mattress vector
│   ├── mattress-hero.svg      # Custom Bedroom Mattress vector
│   └── mattress-pro.svg       # Custom Mattress Pro vector
├── Mattress.html         # Mattress Customizer page
├── README.md             # Project documentation
├── about.css             # Styles for About Page
├── about.html            # About Us page
├── about.js              # Interactivity for About Page
├── contact.css           # Styles for Contact Page
├── contact.html          # Contact Us Page
├── contact.js            # Frontend contact validator and fetch handler
├── css_1.css             # Styles for Landing Page
├── index.html            # Main Landing page
├── mattress.png          # Landing page hero asset
├── package.json          # Node.js manifest
├── script.js             # Placeholder script
├── script_2.js           # Core customizer script
├── server.js             # Express.js backend server
└── style_2.css           # Customizer page styles
```

---

## ⚙️ Local Installation & Setup

Ensure you have **Node.js (v18 or higher)** installed on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/amir701771/Mattress_website_1.git
cd Mattress_website_1
```

### 2. Configure Environment Variables
Create your local `.env` file from the template:
```bash
cp .env.example .env
```
Default parameters:
- `PORT=3000`
- `NODE_ENV=development`

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the Server
- **For Production**:
  ```bash
  npm start
  ```
- **For Development (with file watch-reloading)**:
  ```bash
  npm run dev
  ```

Once started, navigate to:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🧪 CI/CD Pipeline Architecture

To prevent server hangs and ensure maximum build speed, the GitHub Actions pipeline is optimized to run static pre-flight validations without hosting a server process:
- **Dependency Install Check**: Verifies packages compile and resolve cleanly under standard `npm install`.
- **Pre-flight File Checks**: Confirms critical entry-points (`package.json`, `server.js` or `app.js`) are physically present.
- **Static Syntax Check**: Uses Node's built-in syntax checker `node -c server.js` to ensure the Javascript code compiles without runtime syntax errors.