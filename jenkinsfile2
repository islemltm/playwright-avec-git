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

                        sh('npx playwright test')
                    }
                    else{
                        if(params.Checktags){
                        sh('npx playwright test --grep '+params.tags+' --project '+params.Browser)
                        }
                        else{
                            sh('npx playwright test --project '+params.Browser)
                        }
                    }
                    
                }
                build job:'JenkinsGitJob',
                    parameters: [
                        booleanParam(name: 'checkBrowser', value:true)

                        choice(name: 'Browser', value: 'webkit')

                        booleanParam(name: 'Checktags', value: true)

                        choice(name: 'tags', value: '@regression')
                    ]
            }
        }
    }
}