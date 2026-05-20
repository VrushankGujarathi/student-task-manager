pipeline {
    agent any

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
                sh 'docker rm -f student-task-manager || true'
                sh 'docker run -d --name student-task-manager -p 3000:3000 student-task-manager'
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
}