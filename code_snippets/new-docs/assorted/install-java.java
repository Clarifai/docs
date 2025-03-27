//Via Gradle:

repositories {
    mavenCentral()
}

dependencies {
    implementation 'com.clarifai:clarifai-grpc:LATEST_VERSION_HERE'
}

//Via Maven:

<repositories>
    <repository>
        <id>mavenCentral</id>
        <name>mavenCentral</name>
        <url>https://repo1.maven.org/maven2</url>
    </repository>
</repositories>

<dependencies>
    <dependency>
        <groupId>com.clarifai</groupId>
        <artifactId>clarifai-grpc</artifactId>
        <version>LATEST_VERSION_HERE</version>
    </dependency>
</dependencies>