pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..' 
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..' > 1.txt
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}