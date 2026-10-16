# Practical 7: Read Operation with API (Unit 5 Prac 2)

## Aim
Develop a Student List application that retrieves student data from a dummy API using `fetch()` and displays the records using React components and `map()`.

## GitHub Repository
`https://github.com/mayuri2907/u5-prac2.git`

## Concepts Implemented
- **Read Operation (HTTP GET)**: Uses browser `fetch()` API inside `useEffect()` on initial component render.
- **Component Decomposition**: Encapsulates card rendering in a dedicated `<StudentCard />` child component.
- **List Rendering with `.map()`**: Iterates through the fetched student records and binds each to a card with a unique `key={student.id}`.
- **Loading & Fallback Handlers**: Handles loading spinners, network errors, and includes an offline fallback dataset for exam labs without internet connectivity.

## How to Run Locally
```bash
npm install
npm run dev
```

## Push to GitHub
```bash
git remote add origin https://github.com/mayuri2907/u5-prac2.git
git branch -M main
git push -u origin main
```
