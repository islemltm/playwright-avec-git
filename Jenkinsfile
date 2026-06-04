pipeline{
    agent {
        docker{
            image 'mcr.microsoft.com/playwright:v1.50.0-noble'
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