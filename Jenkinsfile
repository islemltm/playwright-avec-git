pipeline{
    agent {
        docker{
            image 'jacoblincool/playwright:latest'
        }
    }   
    stages{
        stage("Vérification playwright"){
            steps{
                sh'npx playwright --version'
            }
        }
        stage("installation dépendances"){
            steps{
                sh'npm install'
            }
        }
        stage("Lancement du test"){
            steps{
                sh'npx playwright test'
            }
        }
    }
}