# NestJS

## Inhoudstafel

- [NestJS](#nestjs)
  - [Inhoudstafel](#inhoudstafel)
  - [1. Motivatie keuze](#1-motivatie-keuze)
  - [2. NestJS](#2-nestjs)
    - [2.1 Wat is NestJS](#21-wat-is-nestjs)
    - [2.2 Installatie](#22-installatie)
  - [2. Bronvermelding](#2-bronvermelding)

## 1. Motivatie keuze

Om in de javascript wereld te blijven, had ik de beslissing gemaakt om in Node een REST API te maken. Ik was begonnen met een stuk in Express te schrijven. Express is een Node library die mechanismen biedt om handlers te schrijven voor HTTP requests. Ik miste hierbij echter wat structuur, dus ben ik op zoek gegaan naar clean architecure modellen. Ik vond hier in eerste instantie weinig informatie over terug, tot ik een vermelding van NestJS tegenkwam. Dit framework was precies wat ik zocht. Het biedt een reeks tools die gebruik maken van Fastify of Express om snelle ontwikkeling en leesbare code mogelijk te maken.

## 2. NestJS

<img src="./images/nestjs.png" alt="drawing" style="width:300px; margin:20px;"/>


### 2.1 Wat is NestJS


NestJS is een node js-framework voor het bouwen van schaalbare server-side applicaties met Typescript. Het ondersteunt REST en GraphQL API's. Het kan ook worden gebruikt om een volledige full-stack applicaties te bouwen met behulp van het model-view-controller patroon, vergelijkbaar met frameworks zoals Laravel. Het bevat ook veel ingebouwde modules om met databases te werken, de beveiliging af te handelen, streaming en andere zaken die bij server-side applicaties aan bod komen te implementeren. NestJS combineert elementen van OOP (Object Oriented Programming), FP (Functioneel Programmeren) en FRP (Functioneel Reactief Programmeren).


### 2.2 Installatie

Nest kan geïnstalleerd worden met het volgende command:

npm install -g @nestjs/cli

Nest heeft een eigen command line tool, en je kunt een nieuw project opzetten met het 'nest new -projectnaam-' command. Dat biedt een codebasis die vooraf is geconfigureerd met 'Jest' voor testing en Typescript om ons te helpen beter leesbare en betrouwbaardere code te schrijven.



## 2. Bronvermelding

Officiële NestJS
documentatie:<br>
https://docs.nestjs.com/<br>
Fireship, NestJS in 100 seconds:<br>
https://www.youtube.com/watch?v=0M8AYU_hPas
