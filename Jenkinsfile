pipeline{
    agent {
        docker{
            image 'mcr.microsoft.com/playwright:v1.60.0-noble'
        }
    }
    parameters{
            booleanParam(name: 'checkBrowser', defaultValue: true, description: 'Voulez-vous executer sur les 3 navigateurs')

            choice(name: 'Browser', choices: ['Chromium', 'firefox', 'webkit'], description: 'Pick a browser')

            booleanParam(name: 'Checktags', defaultValue: true, description: 'Toggle this value')

            choice(name: 'tags', choices: ['@regression', '@smoke', '@invalide','@integration','@test'], description: 'Pick a tag')
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
                script{
                    if(params.checkBrowser){

                        echo('npx playwright test')
                    }
                    else{
                        if(params.Checktags){
                        echo('npx playwright test --grep '+params.tags+' --project '+params.Browser)
                        }
                        else{
                            echo('npx playwright test --project '+params.Browser)
                        }
                    }
                    
                }
            }
        }
    }
}