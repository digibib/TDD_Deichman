# Deichmanske TDD-uke

Ukessprint i Testdrevet utvikling. Deichmanske bibliotek 30.sept-4.okt 2013

## Mål

Gjennomføre et testdrevet utviklingsprosjekt fra A-Å:

* sette opp all nødvendig infrastruktur for et fremtidig prosjekt
* fokus på tester (Unit og Integrasjonstester)
* kontinuerlig deploy, test og refakturering

Uken vil forhåpentligvis resultere i et reinkarnert og forbedret Aktiv hylle-prosjekt. 

## Steg

* Applikasjonen skal utvikles i [Node.js](http://nodejs.org)
* All kode skal ligge på github
* CI (Kontinuerlig integrasjon) skal håndteres med [Jenkins](http://jenkins-ci.org/)
* Deploy til integrasjonstesting skal bruke [Vagrant](http://www.vagrantup.com/) (Virtuelt miljø) og [SaltStack](http://saltstack.com/community.html) (State-håndtert deploy)
* Deploy til testboks/produksjon skal bruke SaltStack

## Verktøy

Alle verktøy er åpen kildekode. Vi bruker selvfølgelig linux i alle ledd. Helst Lubuntu (lettvekts ubuntu)

### Node.js

```
sudo apt-get update
sudo apt-get install python-software-properties python g++ make
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs
```

### Mocha (testing)

```
sudo npm install -g mocha
sudo apt-get install libnotify-bin
```

### Sublime Text

```
sudo add-apt-repository ppa:webupd8team/sublime-text-2
sudo apt-get install sublime-text
```
