# starter-Angular

## Requirements
* [Vagrant](https://www.vagrantup.com/downloads.html)
* [Git](https://git-scm.com/downloads)
* [Virtual Box](https://www.virtualbox.org/wiki/Downloads)
* [nodeJS 4.1.1](https://nodejs.org/en/download/)
* [LiveReaload](http://livereload.com/)
* [HeidiSQL](http://www.heidisql.com/download.php)
* [LiveReload Chrome extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
* [GulpJS](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
	- enter the command in cmd ```npm install --global gulp```
* [plink](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)

## Fork Process
* Fork the project through Github
* in git bash enter the command ```https://github.com/tommycor/starter-Angular.git``` or ```git@github.com:tommycor/starter-Angular.git``` (ssh style)
* in git bash enter the command ```git fetch upstream```
* in git bash enter the command ```git merge upstream/master```

* **Before making a new pull request, fetch upstream content and merge it localy**

## Project installation
* install puphpet files
	- go to [puphpet](https://puphpet.com/)
	- drag on the page the file config.yaml
	- create the archive on puphpet
	- Unzip the whole archive in the project directory
	- add in C:\Windows\System32\drivers\etc\hosts file ```192.168.56.101	local.dev```
* in cmd enter the command ```vagrant up``` in project directory
* Install and configure HeidiSQL
	- run Heidi SQL -> new sesson
	- type de réseau ```SSH tunnel```
	- Mot de passe ```root```
	- Emplacement de plink add your plink path
	- Hôte et port SSH ```local.dev```
	- Nom d'utilisateur ```vagrant```
	- Clef privée add the absolute path to puphpet\files\dot\ssh\id_rsa.ppk
	- try to open connection
	- if connection failes
		- in cmd enter the command ```plink local.dev``` in plink directory and accept to update cached key
		- finaly open connection in HeidiSQL
* Install npm packages
	- in cmd enter the command ```npm update -g``` to update packages
	- in cmd enter the command ```npm install``` to install packages
* in cmd enter the command ```gulp``` in project directory
* Access it through **http://local.dev/dist**
* run LiveReload software 
* Enable LiveReload chrome extension

## Styling guide
* If a class intends to be added through javascript, prefix it with ```is-```
* Class name must be of type ```hello-world``` and id in camelCase ```helloWorld```
* Respect BEM naming convention (informations [here](http://guidecss.fr/convention.html))
	- ```.block {}```
	- ```.block__element {}```
	- ```.block--modifier {}```

## Run project locally
* in cmd enter the command ```vagrant up``` in project directory
* in cmd enter the command ```gulp watch``` in project directory
* Access it through [http://local.dev/dist](http://local.dev/)
* run LiveReload software 
* Enable LiveReload chrome extension

## Commit changes
* in git bash enter the command ```git add .```
* if files have been erased, in git bash enter the command ```git add -A```
* in git bash enter the command ```git add -m "my message"```

