pipeline {
    agent any 

    stages {
        stage('Checkout') {
            steps {
                // Pulls code from your GitHub repository
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building your application...'
                // Example for a Node.js project:
                // sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running automated tests...'
                // Example:
                // sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to the server...'
                // Add deployment commands here
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished. Cleaning up...'
        }
        success {
            echo 'Build and Test succeeded!'
        }
        failure {
            echo 'Build failed. Please check the logs.'
        }
    }
}
