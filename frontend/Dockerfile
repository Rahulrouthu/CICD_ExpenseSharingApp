# Stage 1: Build the React Project with Vite
FROM node:20 as build-stage
WORKDIR /frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app with nginx
FROM nginx:1.21
COPY --from=build-stage /frontend/dist/ /usr/share/nginx/html
# Replace default Nginx config with SPA-friendly config
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
