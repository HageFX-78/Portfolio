pipeline {
    agent any
    tools {
        nodejs 'Node22'
    }
    stages {
        stage('Verify Node'){
            steps {
                sh '''
                    npm install
                    node -v
                    npm -v
                '''
            }
        }
        stage('Build') {
            steps {
                sh '''
                    npm run build
                '''
            }
        }
    }
}