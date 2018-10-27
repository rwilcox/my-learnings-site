#!groovy

/*
    This Jenkinsfile shows two interesting things:
      1. Using the Jenkins Node plugin with custom NPMRC file (created in the admin files interface in Jenkins)
      2. Hey look Ma, all our commands are in Groovy functions! (Meaning we could extract them out to a library!)
      3. Hey we build a Gatsbyjs.com site! Maybe someday we'll even set up publishing!
*/

pipeline {
    agent any
    
    tools {
        nodejs "node8.11"
    }
    
    environment {
        NODEJS_HOME = tool "node8.11"
    }
    
    stages {
        stage("Checkout") {
            steps {
                checkout scm
                genericCMD "git submodule update --init" // checkout scm doesn't check out submodules? WD-rpw 05-01-2018
            }
        }
        
        stage("Install") {
            steps {
                npm_install()
            }
        }
        
        /*stage("Quality") {
            steps {
                //npm_lint()
                npm_test()
            }
        }*/
        
        stage("Build") {
            steps {
                npm_run_script("build")
            }
        }
    }
}



def npm_install() {
  nodejs(nodeJSInstallationName: 'node8.11', configId: 'npm_config_silly_log') {
    genericCMD "npm install"
  }   
}


def npm_test() {
    npm_run_script("test")
}


def npm_build() {
     nodejs(nodeJSInstallationName: 'node8.11', configId: 'npm_config_silly_log') {
        genericCMD "npm build"
  } 
}


def npm_run_script(goal) {
     nodejs(nodeJSInstallationName: 'node8.11', configId: 'npm_config_silly_log') {
        genericCMD "npm run ${goal}"
  } 
}

