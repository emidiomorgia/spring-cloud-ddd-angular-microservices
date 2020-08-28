
FROM node:12-alpine as NODE_BUILDER
WORKDIR '/app'
COPY /client/uiclient/package*.json ./
RUN npm ci
COPY /client/uiclient/ .
RUN npx ng build --prod

FROM maven:3.6.3-openjdk-11 AS MAVEN_BUILD
COPY /server/pom.xml /build/server/
COPY /server/src /build/server/src/
COPY --from=NODE_BUILDER /app/dist/uiclient /build/server/src/main/resources/static
WORKDIR /build/server
RUN mvn package
FROM openjdk:11
EXPOSE 8002
WORKDIR /app
COPY --from=MAVEN_BUILD /build/server/target/*.jar /app/app.jar
ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=prod", "app.jar"]