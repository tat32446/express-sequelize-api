//http://pm2.keymetrics.io/docs/usage/deployment/



module.exports = {
  apps : [{
    name   : "express-sequelize-api",
    script : "./server.js",
    watch  : true,
    instances :1,
    exec_mode :"cluster",
    env: {
      "PORT": 3000,
      "NODE_ENV": "development"
    },
    env_staging : {
      "PORT": 80,
      "NODE_ENV": "staging"
    },
    env_production : {
      "PORT": 80,
      "NODE_ENV": "production"
    }

  }],

 // Deployment part
  // Here you describe each environment
  "deploy" : {
    "production" : {
      "user" : "node",
      // Multi host is possible, just by passing IPs/hostname as an array
      "host" : ["212.83.163.1", "212.83.163.2", "212.83.163.3"],
      // Branch
      "ref"  : "origin/master",
      // Git repository to clone
      "repo" : "git@github.com:repo.git",
      // Path of the application on target servers
      "path" : "/var/www/production",
      // Can be used to give options in the format used in the configura-
      // tion file.  This is useful for specifying options for which there
      // is no separate command-line flag, see 'man ssh' 
      // can be either a single string or an array of strings
      "ssh_options": "StrictHostKeyChecking=no",
      // To prepare the host by installing required software (eg: git) 
      // even before the setup process starts
      // can be multiple commands separated by the character ";"
      // or path to a script on your local machine
      "pre-setup" : "apt-get install git",
      // Commands / path to a script on the host machine
      // This will be executed on the host after cloning the repository
      // eg: placing configurations in the shared dir etc
      "post-setup": "ls -la",
      // Commands to execute locally (on the same machine you deploy things)
      // Can be multiple commands separated by the character ";"
      "pre-deploy-local" : "echo 'This is a local executed command'",
      // Commands to be executed on the server after the repo has been cloned
      "post-deploy" : "npm install && pm2 startOrRestart ecosystem.json --env production",
      // Environment variables that must be injected in all applications on this env
      "env"  : {
        "NODE_ENV": "production"
      }
    },
    "staging" : {
      "user" : "node",
      "host" : "212.83.163.1",
      "ref"  : "origin/master",
      "repo" : "git@github.com:repo.git",
      "path" : "/var/www/development",
      "ssh_options": ["StrictHostKeyChecking=no", "PasswordAuthentication=no"],
      "post-deploy" : "pm2 startOrRestart ecosystem.json --env dev",
      "env"  : {
        "NODE_ENV": "staging"
      }
    }
  }
}

