pipeline {
    agent any

    environment {
        REGISTRY = "127.0.0.1:5000"
        IMAGE_NAME = "portfolio"
    }

    stages {

        stage("Pull from GitHub") {
            steps {
                checkout([$class: 'GitSCM',
                          branches: [[name: '*/main']],
                          userRemoteConfigs: [[
                              url: 'https://github.com/biruk-mulualem/portfolio.git',
                              credentialsId: 'github-credentials' // replace with your Jenkins GitHub credential ID
                          ]]])
            }
        }

        stage("Build Docker Image") {
            steps {
                sh "docker build -t ${REGISTRY}/${IMAGE_NAME}:latest ."
            }
        }

        stage("Push to Local Registry") {
            steps {
                sh "docker push ${REGISTRY}/${IMAGE_NAME}:latest"
            }
        }

        stage("Run Container (Optional)") {
            steps {
                sh "docker run -d -p 80:80 --name ${IMAGE_NAME} ${REGISTRY}/${IMAGE_NAME}:latest || docker restart ${IMAGE_NAME}"
            }
        }

    }
}
