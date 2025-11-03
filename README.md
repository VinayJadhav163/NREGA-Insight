<a name="top"></a>
# 🌾 NREGA Insight
**Empowering Rural India Through Data**

A modern web dashboard that visualizes insights from the **Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)** — India’s largest rural employment program.  
This project brings transparency and data-driven understanding of rural employment trends across Indian districts.

---

## 🚀 Live Demo
🔗 **[View Project](https://nrega-insight-g9if.onrender.com)**

---

## 🧩 Features

- 📊 **Interactive Dashboard** – Real-time visualization of employment, wages, and completed works.  
- 🌍 **Location Detection** – Auto-detects your district and state using GPS.  
- 📈 **Data Charts** – Dynamic bar charts powered by **Recharts**.  
- 🔍 **Detailed Data View** – Expandable tables showing all fetched metrics.  
- 💡 **Responsive Design** – Built with **Tailwind CSS**, optimized for mobile and desktop.

---

## 🏗️ Tech Stack

| Category         | Technologies                                         |
|------------------|------------------------------------------------------|
| **Frontend**     | React.js, Tailwind CSS                               |
| **Backend / API**| Express.js, Mongoose (MongoDB)                       |
| **Charts**       | Recharts                                             |
| **Hosting**      | Render                                               |
| **Geolocation**  | OpenStreetMap (Nominatim API)                        |
| **Language**     | JavaScript (ES6+)                                    |

---

## ⚙️ Installation & Setup (Local)

> Repo root contains two folders:
> - `nrega-insight-frontend` — React frontend  
> - `nrega-insight-backend` — Node/Express backend

### 1️⃣ Clone the repository
```bash
git clone https://github.com/VinayJadhav163/NREGA-Insight.git
cd NREGA-Insight
```

2️⃣ Backend — Install & Run

cd nrega-insight-backend
# install dependencies
```bash
npm install
```

# create .env (example below)
# run development server
```bash
npm run dev        # if nodemon script exists
```

# OR
```bash
node server.js
```

Create a file at nrega-insight-backend/.env with the following:

```bash
MONGO_URI=your_mongo_connection_string
API_KEY=your_data_gov_in_api_key   # optional — fallback key exists in code
PORT=5000
```

---

3️⃣ Frontend — Install & Run

cd ../nrega-insight-frontend
# install dependencies
```bash
npm install
```

# start development server
```bash
npm start
```

The frontend connects to http://localhost:5000 by default.
If you host backend separately, update src/config.js → BASE_URL value.


---

4️⃣ Build for Production
```bash
npm run build
```

5️⃣ Serve Production Build (optional)

# from nrega-insight-frontend folder after build
```bash
npx serve -s build
```

---

🗺️ How It Works

1. The user enters state & district or uses “Detect My District”.


2. The app fetches MGNREGA data via backend API.


3. The backend fetches from data.gov.in and returns structured data.


4. The frontend visualizes metrics via cards, charts, and tables.




---

🧠 Learning & Takeaways

Understood how to integrate third-party APIs into full-stack projects.

Learned deployment and routing configurations for Render.

Improved UI/UX for better accessibility and performance.



---

🔁 Deployment Notes (Render)

Deploy backend first, copy the Render URL (e.g. https://nrega-insight-backend.onrender.com).

Update frontend src/config.js:
```bash
export const BASE_URL = "https://nrega-insight-backend.onrender.com";
export const API = { MGNREGA: `${BASE_URL}/api/mgnrega` };
```

Rebuild frontend:
```bash
npm run build
```

Deploy frontend on Render as a Static Site.
If using React Router, include a static.json file to redirect all routes to index.html.



---

📂 Example static.json
```bash
{
  "root": "build/",
  "routes": {
    "/**": "index.html"
  }
}
```

Place this file in nrega-insight-frontend/ before deploying to Render.


---

💬 Feedback

If you have suggestions or want to collaborate, feel free to connect with me on
👉 LinkedIn


---

🧾 License

This project is open-source and available under the MIT License.


---

👨‍💻 Author

Vinay Jadhav
MERN Stack Developer | MCA Student | Passionate about Open Data & Visualization
📍 India
---

[🔝 Back to Top](#top)