# 📱 Study Abroad App

A simple React Native mobile application that displays a list of study abroad programs and allows users to view detailed information about each program.

---

## 🚀 Features

- 📋 View a list of universities / study programs
- 🏫 Each item shows:
  - University name
  - Country
  - Short description
- 🔍 Click on a program to view detailed information
- 📱 Responsive UI for different screen sizes
- ♻️ Clean and reusable component structure

---

## 🛠️ Tech Stack

- React Native (Expo)
- TypeScript
- React Navigation

---

## 📂 Project Structure

```
/src
 ├── components
 │     └── ProgramCard.tsx
 ├── screens
 │     ├── HomeScreen.tsx
 │     └── DetailsScreen.tsx
 ├── data
 │     └── program.ts
 ├── types
 │     └── program.ts
App.tsx
```

---

## 📊 Sample Data

The app uses static JSON data:

```json
[
  {
    "id": 1,
    "university": "University of Toronto",
    "country": "Canada",
    "description": "Top ranked university offering multiple international programs."
  },
  {
    "id": 2,
    "university": "University of Melbourne",
    "country": "Australia",
    "description": "Popular destination for international students."
  },
  {
    "id": 3,
    "university": "Oxford University",
    "country": "UK",
    "description": "World-class education with rich academic history."
  }
]
```

---

## ⚙️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/OmVerma420/study-abroad-app.git
cd study-abroad-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the app**

```bash
npx expo start
```

---

## 📱 How It Works

- The **Home Screen** displays a list of programs using `FlatList`
- Each program is rendered using a reusable `ProgramCard` component
- On clicking a card, the app navigates to the **Details Screen**
- The selected program data is passed via navigation parameters

---

## 🎯 Evaluation Criteria Covered

- ✅ Clean and readable code structure
- ✅ Responsive UI implementation
- ✅ Proper use of reusable components
- ✅ Functional navigation between screens
- ✅ TypeScript for type safety

---

## 📌 Notes

This project was built as part of a technical assignment to demonstrate:

- React Native fundamentals
- Component-based architecture
- Navigation handling
- TypeScript usage

---

## 👨‍💻 Author

**Om Verma**  
GitHub: [https://github.com/OmVerma420](https://github.com/OmVerma420)
