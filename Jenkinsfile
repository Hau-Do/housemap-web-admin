podTemplate(containers: [
    containerTemplate(name: 'nodejs', image: 'node:10-alpine', ttyEnabled: true, command: 'cat'),
  ]) {

    node(POD_LABEL) {
        stage('Checkout') {
            checkout scm
        }
        stage('Build') {
            container('nodejs') {
                environment {
                }
                stage('Build a npm project') {
                    sh 'npm i'
                }
                stage('Test') {
                    sh 'npm test'
                }
            }
        }
    }
}