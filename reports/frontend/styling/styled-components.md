# Styled components

![logo](../../images/styledcomponentslogo.jfif)

## Intro

Styled-components is a popular library that is used to style React applications. It allows you to build custom components by writing actual CSS in your JavaScript.  Styled Components are based on the CSS-in-JS approach. This means you can pass any prop to them and change the style. 

## Advantages

* <b>Eleminates class name bugs:</b> For each component, a unique class name is automatically generated. This avoids problems with duplications and misspellings 

* <b>Clean:</b> styling can be easily managed. It is easy to determine which CSS was applied. As only one classname is applied, it ensures that no overload of different class names has to be used to achieve the desired result

* <b>Clean:</b> styling can be easily managed. It is easy to determine which CSS was applied. 

* <b>Simple and dynamic:</b> As styling is applied through props and global themes, it ensures that no overload of different class names has to be used to achieve the desired result. Not only that, but you will never have to hunt across different files to find the styling affecting your component.

* <b>Reproducible:</b> Components can be resued infinitely through imports.

* <b>Optimization:</b> Styled Components have some optimization features which means they render only when they’re needed. It keeps track of which components are rendered on a page and injects their styles and nothing else, fully automatically.


## Disadvantages

* <b>Extra learning curve</b>: Although almost negligible, it must be mentioned that SC have a small learning curve, as it is a unique and unconventional way of styling.
  
* <b>A smaller community</b>: As mentioned before, SC is relatively new, which consequently ensures that there is less information to be found about it than older styling ways.

* <b>Longevity</b>: Just like any tool in the JS ecosystem, styled components may disappear one day, which would involve refactoring your code base. So it's important to keep that in mind before committing to it in production.
  


## How to use

### How to Install

npm install — save styled-components

### How to Declare


example:<br>

        import styled from ‘styled-components’
        import React from 'react';

        const Button = styled.button`<br>
        background: transparent;<br>
        border-radius: 3px;<br>
        border: 2px solid palevioletred;<br>
        color: palevioletred;<br>
        margin: ${props => props.thin? '7px auto 0':'10px auto'};
        padding: 0.25em 1em;
        `

        const SaveButton = () => {
            return (
                <Button thin={true}> Save <Button/>
            );
        };

        export default SaveButton;

### Sources

Official SC documentation: https://styled-components.com/docs/basics#motivation <br>
Review by Christopher Kade, Frontend Engineer @OpenClassrooms : https://dev.to/christopherkade/styled-component-what-why-and-how-5gh3#disadvantages <br>
Review by 
Lior Amsalem :https://medium.com/@lior_amsalem/styled-components-how-to-use-when-to-use-what-are-the-pros-and-cons-68a58f12265f
