# build-tools-demo

The same small web app built with Gradle and with Maven, plus a Node.js app built with npm: compile, test, package, and publish the results as a GitHub release. Lab work from week 3 of my Azure and DevOps training.

## What's in it
- java-gradle: a Spring Boot app built with the Gradle wrapper.
- java-maven: the same app built with the Maven wrapper.
- node-app: an Express app with a test, packaged with npm.

## Build it
- Gradle: cd java-gradle && ./gradlew build (gives build/libs/demo-0.0.1-SNAPSHOT.jar)
- Maven: cd java-maven && ./mvnw package (gives target/demo-0.0.1-SNAPSHOT.jar)
- npm: cd node-app && npm install && npm test && npm pack (gives node-app-1.0.0.tgz)

Needs Java 21 and Node.js. The wrappers download Gradle and Maven themselves.

## Releases
v0.1.0 holds the Gradle jar and the npm package. In week 3 the jar ran as a systemd service on an Azure VM.

## What I learned
- 
- 
- 
