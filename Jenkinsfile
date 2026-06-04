pipeline{
    agent {
        docker{
            image 'jacoblincool/playwright:all'
        }
    }   
    stages{
        
        stage("installation dépendances"){
            steps{
                sh'node --version'
                sh'npm install'
            }
        }
        stage("Vérification playwright"){
            steps{
                sh'npx playwright --version'
            }
        }

        stage("Lancement du test"){
            steps{
                sh'npx playwright test'
            }
        }
    }
}