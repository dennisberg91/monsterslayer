pipeline {
  agent any
  stages {
    stage('SCM') {
      steps {
        git(url: 'https://github.com/dennisberg91/monsterslayer.git', branch: 'master', poll: true, credentialsId: '0371ee40-8e0b-4685-8a6b-a68404b69126', changelog: true)
      }
    }

  }
}