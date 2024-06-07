# Bear Fired Fodder

Built from a combination of Sanity studio powering the backend and an Astro frontend.

Sanity stuff found in `/backend`
Astro stuff found in `/frontend`

### Prerequisites
- nvm
- npm
- pnpm

### Getting set up
Copy the contents `.env.example` to a file named `.env`

Replace the placeholder environment variables with the correct values.

``` bash
nvm use
cd backend
npm install
cd ../
cd frontend
pnpm install
```

### Running the project locally
In order to run the full project locally, you will need to run both the frontend and backend in a terminal tab.

``` bash
cd backend
npm run dev

- open new tab

cd frontend
pnpm dev
```
