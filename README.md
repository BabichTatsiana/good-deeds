# Good deeds

Test task

## Getting started

### Prerequisites:
- docker & docker-compose
- Node.js & npm

### One-shot run:
```
docker-compose up -d
```

### Local development:
- run database
```
docker-compose up database -d
```
- prepare backend & frontend 
```
cd backend && npm install && cd ../frontend && npm install && cd ../
```
- run backend
```
cd backend
npm run start:dev
```
- run frontend in another tab
```
cd frontend
npm run dev
```
