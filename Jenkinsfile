pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                sh 'docker build -t cicd-demo-app .'
            }
        }
        stage('Test') {
            steps {
                // Add test commands here (if any)
                echo 'Running tests...'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker run -d -p 3000:3000 cicd-demo-app'
            }
        }
    }
}

