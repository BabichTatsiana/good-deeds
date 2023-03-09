FROM node:alpine as build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build && \
    npm prune --production

FROM node:alpine as final
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
EXPOSE 3000
CMD ["npm", "start"]
