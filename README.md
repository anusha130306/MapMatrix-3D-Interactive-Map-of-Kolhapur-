<div align="center">

# 🗺️ 3D Interactive Map of Kolhapur
*Explore Kolhapur's landmarks in 3D, in five languages, with audio narration and 360° street views.*

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Mapbox](https://img.shields.io/badge/Mapbox-GL-000000?logo=mapbox&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-3D-black?logo=three.js&logoColor=white)

</div>

---

## 📺 Demo Video

<!-- Edit this README on GitHub, drag your .mp4 here, and keep the generated link alone on its own line. -->

https://github.com/user-attachments/assets/YOUR-VIDEO-ASSET-ID

| Home | Map | Information |
|:---:|:---:|:---:|
| ![Home](docs/images/home.png) | ![Map](docs/images/map.png) | ![Info](docs/images/info.png) |

---

## ❗ Problem

Traditional 2D maps are static, text-heavy and not very engaging. Google Maps and Apple Maps are great for navigation, but they lack:

- Locally modelled 3D landmarks for a specific district like Kolhapur
- Multilingual content in local languages
- Audio narration for accessibility
- Culturally specific information about heritage sites

## 💡 Our Solution

A web app that shows Kolhapur district as an interactive 3D map. Users click a landmark to open its details with text, images and audio in their chosen language, then step into a 360° street view of the site.

## ✨ Features

- 🏛️ **Custom 3D landmark models** built in Blender (Mahalaxmi Temple, New Palace, Town Hall, Railway Station and more)
- 🌍 **Interactive 3D map** with zoom, pan and rotate using Mapbox
- 🌐 **Five languages:** English, हिंदी, मराठी, ಕನ್ನಡ, తెలుగు
- 🔊 **Audio narration** for every landmark
- 🔍 **Search** by text or voice, with zoom to the matched location
- 🧭 **360° Google Street View** integration
- 🌓 **Light and dark themes**
- 📱 **Responsive design** for desktop, tablet and mobile

## 🔄 How It Works

`Start (Earth model)` → `Load map` → `Zoom / Pan` → `Click landmark marker` → `View info` → `Listen in your language`

## 🛠️ Tech Stack

| Area | Technology |
|---|---|
| Frontend | React 19, Vite, React Router, CSS |
| Mapping | Mapbox GL JS, Mapbox Studio, Google Street View |
| 3D | Blender (models), Three.js, React Three Fiber, Drei |
| Animation | GSAP, Framer Motion |
| Tooling | ESLint, VS Code |

## ⚙️ Run Locally

**Requirements:** Node.js 18+ and a free [Mapbox access token](https://account.mapbox.com/).

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
npm install
npm run dev
```

Add your Mapbox token in a `.env` file at the project root (use the variable name your code reads; `VITE_MAPBOX_TOKEN` is shown as an example):

```
VITE_MAPBOX_TOKEN=your_token_here
```

| Command | Purpose |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the build |
| `npm run lint` | Run ESLint |

> ⚠️ Never commit your API keys. Keep `.env` listed in `.gitignore`.

## 🚀 Future Scope

- 📱 **Mobile app** with GPS tracking and offline maps
- 🤖 **AI route suggestions** and personalised itineraries
- ⏱️ **Real-time updates:** traffic, weather and local events
- 📊 **Cloud analytics** on popular landmarks and languages
- 🕶️ **AR / holographic maps** of landmarks
- 🗺️ **More districts**, expanding beyond Kolhapur

## 👥 Team

**Mini Project-I**, B.Tech Computer Science and Engineering
Kolhapur Institute of Technology's College of Engineering, Kolhapur (Empowered Autonomous), October 2025

| Name | Contribution |
|---|---|
| Anusha Patil | `<role>` |
| Pratik Patil | `<role>` |
| Adarsh Gurav | `<role>` |
| Sanket Magdum | `<role>` |

**Guide:** Mr. Vivek Ugale  |  **HOD:** Dr. Lingaraj Hadimani

## 🤝 Contributing

Fork the repo, create a branch (`git checkout -b feature/your-feature`), commit, push, and open a Pull Request.

---

<div align="center">

⭐ If you like this project, please star the repo!

</div>
