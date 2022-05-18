# pull official base image
FROM node:16-alpine AS builder

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
#copies package.json and package-lock.json to Docker environment
COPY package.json ./
COPY package-lock.json ./
# Installs all node packages

#RUN npm install 
RUN npm ci
COPY . ./
RUN npm run build


# production env
FROM nginx:stable-alpine
COPY nginx-conf/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html/bookstore
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Copies everything over to Docker environment
#COPY . ./
#EXPOSE 3000
# start app
#CMD ["npm", "start"]
