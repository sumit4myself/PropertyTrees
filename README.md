## WebientSoft Esycation


## Documentation
See the current [Javadoc][] and [reference docs][].


## Building from Source
The WebientSoft esykart uses a [Gradle][]-based build system. In the instructions
below, [`./gradlew`][] is invoked from the root of the source tree and serves as
a cross-platform, self-contained bootstrap mechanism for the build.

### Prerequisites

[Git][] and [OpenJDK 8 early access build 100 or later][JDK8 build]

Be sure that your `JAVA_HOME` environment variable points to the `jdk1.8.0` folder
extracted from the JDK download.

### Check out sources
`git clone git@github.com/sumit4myself/Esycation.git`

### Import sources into your IDE
Run `./import-into-eclipse.bat`.
> **Note:** Per the prerequisites above, ensure that you have JDK 8 configured properly in your IDE.

### Install all esycation-\* jars into your local Maven cache
`./gradlew install`

### Compile and test; build all jars, distribution zips, and docs
`./gradlew build`

... and discover more commands with `./gradlew tasks`. See also the [Gradle
build and release FAQ][].

## Contributing
[Pull requests][] are welcome; see the [contributor guidelines][] for details.

## Staying in Touch
Follow [@WebientSoft][] and its [team members][]
on Twitter.


