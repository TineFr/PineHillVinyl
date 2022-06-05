# Styling

## Inhoudstafel

- [Styling](#styling)
  - [Inhoudstafel](#inhoudstafel)
  - [1. Onderzochte technologieën <a name="technologieën"></a>](#1-onderzochte-technologieën-)
    - [1.1 SCSS <a name="scss"></a>](#11-scss-)
      - [1.1.1  Intro <a name="scssIntro"></a>](#111--intro-)
      - [1.1.2  Voordelen <a name="scssVoordelen"></a>](#112--voordelen-)
      - [1.1.3 Nadelen <a name="scssNadelen"></a>](#113-nadelen-)
    - [1.2 Styled components <a name="sc"></a>](#12-styled-components-)
      - [1.2.1  Intro  <a name="scIntro"></a>](#121--intro--)
      - [1.2.2 Voordelen <a name="scVoordelen"></a>](#122-voordelen-)
      - [1.2.2 Nadelen <a name="scNadelen"></a>](#122-nadelen-)
    - [1.3 Motivatie gekozen technologie <a name="motivatie"></a>](#13-motivatie-gekozen-technologie-)
  - [2. Gekozen technologie: Styled Components <a name="gekozenTechnologie"></a>](#2-gekozen-technologie-styled-components-)
    - [2.1 Installatie <a name="installatie"></a>](#21-installatie-)
    - [2.2 Declaratie <a name="declaratie"></a>](#22-declaratie-)
    - [2.3 Gebruik <a name="gebruik"></a>](#23-gebruik-)
      - [2.3.1 Properties <a name="properties"></a>](#231-properties-)
      - [2.3.2 Herbruikbaarheid <a name="herbruikbaarheid"></a>](#232-herbruikbaarheid-)
      - [2.3.3 Globale styling <a name="globaleStyling"></a>](#233-globale-styling-)


## 1. Onderzochte technologieën <a name="technologieën"></a>

### 1.1 SCSS <a name="scss"></a>
#### 1.1.1  Intro <a name="scssIntro"></a>
<img src="./images/sass.png" alt="drawing" style="width:200px; margin:20px;"/>

SASS, beter bekend als SCSS, staat voor Syntactisch Awesome Style Sheets. Kortom, het is een CSS-preprocessor, wat betekent dat het een scripttaal is die CSS uitbreidt door ontwikkelaars in staat te stellen code in één taal te schrijven en deze vervolgens in CSS te compileren. 

Zoals eerder vermeld, worden twee termen gebruikt: 'SASS' en 'SCSS'. Het verschil tussen beide ligt in de syntaxis. De SCSS-syntaxis gebruikt de bestandsextensie .scss. Op een paar kleine uitzonderingen na is het een superset van CSS, wat betekent dat in wezen alle geldige CSS ook geldige SCSS is. Dit is de meest gebruikte manier.

SASS maakt gebruik van 'indented syntax' en gebruikt een inspringing in plaats van '{  }' om blokken af te bakenen. Statements worden gescheiden door middel van een nieuwe regel.

Waar CSS wat in te kort schiet is organisatie. Styling files kunnen al snel heel groot en onoverzichtelijk worden. Hier komt SASS met de oplossing. Zaken als variabelen, geneste regels, inline imports en meer kunnen gebruikt worden. Het helpt om dingen georganiseerd te houden en stelt de gebruiker in staat om sneller stylesheets te maken.

#### 1.1.2  Voordelen <a name="scssVoordelen"></a>

* <b>Variabelen :</b> Met een variabele kunt u een waarde of een reeks waarden opslaan en deze variabelen in uw SASS-bestanden zo vaak en waar u maar wilt opnieuw gebruiken.


* <b>Geneste syntaxis:</b> Sass maakt het mogelijk om een ​​stuk code te schrijven dat zich in een ander stuk code bevindt. De stijl voor wanneer een element zich in de zweefstatus bevindt, kan bijvoorbeeld worden geschreven in de stijl van de standaardstatus van het element. Dit heeft op zich meerdere voordelen. De syntaxis is gemakkelijker te lezen en beter georganiseerd, is beter te onderhouden en vermijdt de noodzaak om selectors meerdere keren te herschrijven


* <b>Mixins:</b> Mixins retourneren een waarde of een reeks waarden en kunnen parameters aannemen, inclusief standaardwaarden. Dit is geweldig als je herhalende codeblokken hebt.

* <b>Grote gemeenschap:</b> Sass is enorm populair en wijdverbreid. Daardoor is het zeer goed gedocumenteerd.

* <b>Stabiel:</b> sinds de release in 2006 wordt Sass ondersteund door zowel zijn kernontwikkelaars als grote technologiebedrijven. Als gevolg hiervan kan Sass worden beschouwd als een volwassen en up-to-date taal.


#### 1.1.3 Nadelen <a name="scssNadelen"></a>

* <b>Verlies van devtools-voordelen:</b> het gebruik van Sass, en vooral mixins, kan ertoe leiden dat de voordelen van de ingebouwde elementinspecteur van de browser verloren gaan. Het is namelijk niet gemakkelijk terug te vinden waar de styling gebeurd.

* <b>Leercurve:</b> Als CSS je al bekend is, duurt het niet lang voordat je gewend bent aan SCSS. Maar toch moet worden vermeld dat er een leercurve is.

* <b>Compilatievertraging:</b> De code moet worden gecompileerd, wat een kleine vertraging veroorzaakt.




### 1.2 Styled components <a name="sc"></a>

#### 1.2.1  Intro  <a name="scIntro"></a>
<img src="./images/styledcomponentslogo.jfif" alt="drawing" style="width:200px; margin:20px;"/>

Styled components is een populaire bibliotheek die wordt gebruikt om React-applicaties te stylen. Hiermee kunt u aangepaste componenten bouwen door echte CSS in uw JavaScript te schrijven. Gestileerde componenten zijn gebaseerd op de CSS-in-JS-benadering. Dit betekent dat je elke prop aan hen kunt doorgeven en de stijl kunt veranderen.

#### 1.2.2 Voordelen <a name="scVoordelen"></a>

* <b>Elimineert fouten in de klassenaam:</b> voor elk onderdeel wordt automatisch een unieke klassenaam gegenereerd. Dit voorkomt problemen met duplicaties en spelfouten

* <b>Overzichtelijk:</b> styling kan gemakkelijk worden beheerd. Het is eenvoudig te bepalen welke CSS is toegepast. Omdat er slechts één klassenaam wordt gebruikt, zorgt dit ervoor dat er geen overbelasting van verschillende klassenamen hoeft te worden gebruikt om het gewenste resultaat te bereiken

* <b>Eenvoudig en dynamisch:</b> aangezien styling wordt toegepast door middel van props en globale thema's, zorgt het ervoor dat er geen overbelasting van verschillende klassennamen hoeft te worden gebruikt om het gewenste resultaat te bereiken. Niet alleen dat, maar u hoeft nooit door verschillende bestanden te jagen om de stijl te vinden die van invloed is op het component.

* <b>Herbruikbaarheid:</b> componenten kunnen oneindig worden hergebruikt door imports.

* <b>Optimalisatie:</b> styled components hebben enkele optimalisatiefuncties, wat betekent dat ze alleen worden weergegeven wanneer ze nodig zijn. Er wordt bijegehouden welke componenten op een pagina worden weergegeven en enkel deze styling wordt automatisch geinjecteerd.
  
#### 1.2.2 Nadelen <a name="scNadelen"></a>

* <b>Extra leercurve:</b> omdat het een unieke en onconventionele manier van stylen is, hangt er wel een kleine leercurve aan vast.

* <b>Een kleinere community:</b> Styled components is relatief nieuw, wat er bijgevolg voor zorgt dat er minder informatie over te vinden is dan bij oudere stylingmanieren.

* <b>Onzekere Levensduur:</b> net als elke tool in het JS-ecosysteem, kunnen styled components op een dag verdwijnen, wat een refactoring van de codebasis noodzakelijk zou maken. Het is dus belangrijk om dat in gedachten te houden.

### 1.3 Motivatie gekozen technologie <a name="motivatie"></a>

Uit dit onderzoek kon ik concluderen dat beide goed zijn en dat er geen verkeerde keuze gemaakt kan worden. Wel kwam ik verdeelde meningen tegen, waarin stond dat javacript en CSS gescheiden moesten worden. Wat in lijn is met wat er in de lessen werd vermeld.

Ondanks deze controverse heb ik uiteindelijk besloten om toch met styled components te werken. Mijn redenering was dat ik dacht dat het een unieke kans zou zijn om deze aanpak eens te proberen, aangezien het alleen kan worden gebruikt in combinatie met React. Een andere, en misschien wel de grootste reden was dat ik tijdens mijn stage al kennis heb kunnen maken met SCSS. Dit was heel gelijkaardig aan CSS en daardoor was er minder in te leren. Bovendien kan het principe van nesting ook met styled components gebruikt worden.

 Daarom leek styled components de meest interessante manier om te gaan. Styled components is relatief nieuw en heeft een groeiende belangstelling gezien van grote bedrijven zoals BBC, Vimeo, Disney, Riot Games, Spotify en nog veel meer.



## 2. Gekozen technologie: Styled Components <a name="gekozenTechnologie"></a>

### 2.1 Installatie <a name="installatie"></a>

Met npm 

npm install --save styled-components

Met yarn

yarn add styled-components

### 2.2 Declaratie <a name="declaratie"></a>

voorbeeld:

    import styled from ‘styled-components’

    const Button = styled.button`
    background: green;
    border-radius: 3px;
    border: 2px solid red;
    color: red;
    margin: ${props => props.thin? '7px auto 0':'10px auto'};
    padding: 0.25em 1em;
    `

    const SaveButton = () => {
        return (
            <Button thin={true}> Save <Button/>
        );
    };

    export default SaveButton;

Er wordt een react component aangemaakt. In dit geval 'Button' waaraan styling wordt toegevoegd.

Dit wordt gedeclareerd door styled. + 'tag-type : button'

Dit component kan dan zoals een 'normaal' react component gebruikt worden. Dit voorbeeld maakt gebruik van een extensie 'vscode-styled-components' waardoor CSS IntelliSense wordt toegevoegd.

### 2.3 Gebruik <a name="gebruik"></a>

#### 2.3.1 Properties <a name="properties"></a>

Een van de kernen van styled components is het gebruik van properties om styling te veranderen.
In het voorbeeld heeft het component Button een property 'thin'. Dit zal de margin gaan bepalen. Heeft thin de waarde 'true', is margin-top 7px. Is de waarde 'false', is de margin-top 10px.

voorbeeld

    const SaveButton = () => {
        return (
            <Button thin={true}> Save <Button/>
        );
    };

    margin: ${props => props.thin? '7px auto 0':'10px auto'};


#### 2.3.2 Herbruikbaarheid <a name="herbruikbaarheid"></a>

Het kan voorkomen dat je een component wilt hergebruiken, maar deze enigszins wilt wijzigen. Nu zou je een geïnterpoleerde functie kunnen doorgeven en ze veranderen op basis van enkele props, maar dat is nogal wat moeite om de stijlen maar één keer te overschrijven.

Een gemakkelijkere manier is om een nieuwe component te maken die de stijl van een andere overneemt. Het overgenomen component wordt dan gewikkeld in de styled() constructor. Deze kan dan vervolgens worden uitgebreid.

voorbeeld

    const DifferentButton = styled(Button)`
         color: blue;
         background-color: white;
    `

In bepaalde gevallen, wil je dezelfde styling gebruiken, maar dan voor een ander tag type. In deze situatie kan "as" gebruikt worden. Stel dat we in het voorbeeld van 'DifferentButton' geen 'button' tag maar een 'a' tag willen, kan dit zo worden aangepast: 

    const SaveButton = () => {
        return (
            <DifferentButton as="a" href="#" thin={true}> Save <DifferentButton/>
        );
    };

Dit werkt ook met eigen gemaakte of third-party components.

#### 2.3.3 Globale styling <a name="globaleStyling"></a>

