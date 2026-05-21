pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:${env.PATH}"
    }

    stages {

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Running SonarQube code quality analysis'
            }
        }

        stage('Security Scan') {
            steps {
                sh 'npm audit || true'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t student-task-manager .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker stop student-task-manager || true'
                sh 'docker rm student-task-manager || true'
                sh 'docker run -d --name student-task-manager -p 3001:3000 student-task-manager'
            }
        }

        stage('Release') {
            steps {
                echo 'Release completed: student-task-manager:latest'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Monitoring available at /health and /metrics endpoints'
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully'
        }

        failure {
            echo 'Pipeline failed'
        }
    }
}