# React

## Inhoudstafel

- [React](#react)
  - [Inhoudstafel](#inhoudstafel)
  - [1. Motivatie keuze <a name="motivatie"></a>](#1-motivatie-keuze-)
  - [2. React<a name="gekozenTechnologie"></a>](#2-react)
    - [2.1 Wat is React](#21-wat-is-react)
    - [2.2 Installatie](#22-installatie)
    - [2.3 Werking](#23-werking)
  - [3. Bronvermelding <a name="bronvermelding"></a>](#3-bronvermelding-)

## 1. Motivatie keuze <a name="motivatie"></a>

De keuze om React te gebruiken was eigenlijk snel gemaakt. Op school ben ik reeds in aanmerking gekomen met Vue, en tijdens mijn stage heb ik leren werken met Angular. Om mijn kennis uit te breiden was React hier de logische keuze. Het stelt me in staat om een beetje kennis te hebben van de drie belangrijkste javascript frameworks/bibliotheken voor het bouwen van gebruikersinterfaces. Het is bijna onvermijdelijk dat ik één van deze drie tegen zal komen als ik later de richting van frontend developer in ga.

## 2. React<a name="gekozenTechnologie"></a>

<img src="./images/react.png" alt="drawing" style="width:400px; margin:20px;"/>

### 2.1 Wat is React

React is een <b>javascript bibliotheek</b> voor het bouwen van snelle en interactieve gebruikersinterfaces. De kern van alle react-applicaties zijn <b>componenten</b>. Een component is in wezen een onderdeel van de gebruikersinterface. Wanneer je een applicatie bouwt met React, bouw je een aantal onafhankelijke, geïsoleerde en herbruikbare componenten en stel je deze vervolgens samen om een complexe gebruikersinterface te bouwen. Kortom, het zorgt voor het weergeven van de weergave en zorgt ervoor dat de weergave synchroon loopt met de staat.

### 2.2 Installatie

Om React te installeren heb ik Node Package Manager gebruikt. Met het command 'create-react-app' worden de vereiste bestanden en mappen  gegenereert om de React-toepassing te starten en in de browser uit te voeren.

### 2.3 Werking

Elke React-applicatie heeft een root-component, meestal de 'App'- component genoemd. Deze component vertegenwoordigt de gehele applicatie en bevat andere onderliggende componenten.

Een component wordt meestal geïmplementeerd als een javascript-klasse met een status- en een rendermethode. De status bevat de gegevens die worden weergegeven wanneer de component wordt weergegeven. De rendermethode is verantwoordelijk voor het beschrijven van hoe de gebruikersinterface eruit zou moeten zien.

    class Example{
        state = {};
        render(){           
        }
    }

De uitvoer van deze rendermethode is een React-element dat een eenvoudig, duidelijk javascript-object is dat het DOM-element toewijst. React houdt een lightweight  weergave van de DOM in het geheugen bij, die de virtuele DOM wordt genoemd. Wanneer de toestand van het component is veranderd, krijgen we een nieuw React-element. React vergelijkt dit nieuwe element dan met het vorige, zoekt uit wat er is veranderd en werkt vervolgens een deel van het echte DOM bij om het synchroon te houden met het virtuele DOM.

In tegenstelling tot vanilla JS wordt niet meer gewerlt met de DOM API in browsers. Met andere woorden, we hoeven niet langer code in een query te schrijven en de DOM te manipuleren of eventhandlers aan DOM-elementen te koppelen. We veranderen simpelweg de status van onze componenten en React zal de DOM automatisch bijwerken om met die status overeen te komen.


## 3. Bronvermelding <a name="bronvermelding"></a>

Officiële React documentatie: <br>
https://reactjs.org/ <br>
Programming with Mosh, What is react? <br>
https://www.youtube.com/watch?v=N3AkSS5hXMA
