---

# 🎬 **MovieLand – Frontend**
Modern end‑to‑end **React**, **Redux Toolkit**, and **Vite** application for browsing movies, searching titles, watching trailers, and managing a personal liked‑movies list.

MovieLand provides a clean, modern UI inspired by streaming platforms, with smooth navigation, dynamic search, and user‑specific movie collections powered by a secure backend.

<img width="1660" height="905" alt="image" src="https://github.com/user-attachments/assets/6d763e03-557b-4efc-8249-547135fcb549" />

Built by **Yahav Mor**.

---

# 🔗 Links
- **Live App:*: https://movie-land-frontend-kfja.vercel.app/ 

---

# 🚀 Project Setup

## Install dependencies
```bash
npm i
```

## Run the app
```bash
npm run dev
```

---

# 🏗️ Project Structure

```
src/
  cmp/
    MovieList.jsx
    MoviePreview.jsx
    MovieSearchBar.jsx
    NavBar.jsx
    UserMsg.jsx
    NoMovies.jsx
    Footer.jsx
  pages/
    Home.jsx
    About.jsx
    RegisterForm.jsx
    MovieIndex.jsx
    MovieDetails.jsx
    UserPage.jsx
  services/
    movie.service.js
    auth.service.js
    user.service.js
    utils.js
    localStorage.service.js
  store/
    movieSlice.js
    userSlice.js
    store.js
  App.jsx
  RootCmp.jsx
  main.jsx
```

---

# 🎨 UI Components

## ⭐ **NavBar**
- Navigation menu  
- Shows user name when logged in  
- Logout button  
- Links to Home, About, Movies, Profile  

## ⭐ **MovieList**
- Displays a list of movies  
- Uses `<MoviePreview />` for each movie  
- Shows `<NoMovies />` when empty  

## ⭐ **MoviePreview**
- Shows poster, rating, release date, plot  
- Clicking opens full movie details  
- Supports TMDB posters or fallback images  

## ⭐ **MovieSearchBar**
- Search movies by name  
- Explore random movie  
- Prevents duplicates  
- Shows toast messages  

## ⭐ **MovieDetails**
- Full movie info  
- Trailer link  
- Add/remove from liked movies  
- Dynamic UI based on user state  

## ⭐ **UserPage**
- Shows user info  
- Displays liked movies  
- Allows deleting account  

## ⭐ **UserMsg**
- Global toast notifications  
- Auto‑dismiss after 3 seconds  

## ⭐ **Footer**
Simple footer with credits.

---

# 🔐 Authentication Flow

MovieLand uses **JWT authentication** stored in **localStorage**.

### Login / Signup
- Signup stores: `token` + `user`  
- Login stores: `token` + `user`  
- On refresh, the app loads the logged user via `/loggedUser`  

### Logout
- Clears token  
- Clears user from Redux  
- Redirects to home  

---

# 🎥 Movie Features

### 🔍 Search Movies
- Search by name (TMDB API)  
- Shows first result  
- Prevents duplicates  
- Adds to Redux store  

### 🎲 Explore Random Movie
- Fetches random page from TMDB  
- Picks random movie  
- Adds to preview  

### ❤️ Liked Movies
- Add movie to liked list  
- Remove movie  
- Stored in backend SQL DB  
- Synced with user profile  

### 🎞️ Trailers
- Fetches TMDB videos  
- Finds main trailer  
- Opens YouTube link  

---

# 🔄 State Management (Redux Toolkit)

### **movieSlice**
- `movie` – current preview  
- `movies` – list of searched movies  
- Actions: `setMovie`, `addMovie`  

### **userSlice**
- `user` – logged user  
- `msg` – global toast  
- Actions: `updateUser`, `clearUser`, `setMsg`, `clearMsg`  

---

# 🌐 Services

## **auth.service**
- Signup  
- Login  
- Logout  
- Get logged user  
- Stores token & user in localStorage  

## **movie.service**
- Search by name  
- Search by ID  
- Get trailer  
- Explore random movie  
- Add to liked movies  
- Remove movie  
- Load user movies  

## **user.service**
- Delete user  
- Validate fields  
- Fetch random profile image  

---

# 🧭 Routing

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page |
| `/register` | RegisterForm | Login / Signup |
| `/about` | About | Project info |
| `/movies` | MovieIndex | Search & explore |
| `/movies/:title` | MovieDetails | Full movie page |
| `/me` | UserPage | User profile + liked movies |

---

# 🎨 Styling
- Modern CSS  
- Responsive layout  
- Clean movie‑app aesthetic  
- Hover effects  
- Toast animations  

---

# 👤 Author
**Yahav Mor**  
Frontend Developer  
EST 2026  

---

# 🤝 Contributions
Pull requests are welcome.  
Found a bug? Open an issue.

---

# 📜 License
MIT License.

---
