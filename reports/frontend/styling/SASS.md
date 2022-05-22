# SASS

![logo](../../images/sass.png) 

## Intro

SASS, also known as SCSS, stands for Syntactically Awesome Style Sheets. In short, Sass is a CSS preprocessor, which means it is a scripting language that extends CSS by allowing developers to write code in one language and then compile it into CSS. It enables you to use things like variables, nested rules, inline imports and more. It also helps to keep things organized and allows you to create style sheets faster.

## Advantages

* <b>Variables:</b> A variable allows you to store a value or a set of values, and to reuse these variables throughout your SASS files as many times you want and wherever you want. 

* <b>Nested syntax:</b> Sass allows to write a piece of code contained within another piece of code. For example, the styling for when an element is in hover state, can be written inside the styling of the element's default state.
This in itself has multiple advantages. The syntax is more easy to read and better organized, it is more maintainable and it averts the need to  rewrite selectors multiple times

* <b>Mixins:</b> Mixins return a value or set of values and can take parameters including default values. This great if you have repeating blocks of code.
  
* <b>Large community:</b> Sass is extremely popular and widespread. As a result it is very well documented.

* <b>Stable:</b> Since its release in 2006, Sass has been supported by its core developers as well as large tech companies. As a result, Sass can be considered a mature yet up-to-date language.
  

## Disadvantages

* <b>Loss of devtools benefits:</b> Using Sass, and especially mixins, may cause losing benefits of browser’s built-in element inspector.

* <b>Small learning curve:</b> If CSS is already known to you, it only takes a little bit of time to get used to SCSS. But still, it should be mentioned that there is a learning curve.

* <b>Compilation delay:</b> The code has to be compiled, which causes a slight delay.

## How to use

 SASS comes with two different syntaxes: SASS itself and SCSS. The SCSS syntax uses the file extension .scss. With a few small exceptions, it’s a superset of CSS, which means essentially all valid CSS is valid SCSS as well. Because of its similarity to CSS, it’s the easiest syntax to get used to and the most popular. The indented syntax was Sass’s original syntax, and so it uses the file extension .sass. Because of this extension, it’s sometimes just called “Sass”. The indented syntax supports all the same features as SCSS, but it uses indentation instead of curly braces and semicolons to describe the format of the document.

### How to Install

Using Nodejs: npm install -g sass



### How to implement

SCSS example:

        @mixin button-base() {
        @include typography(button);
        @include ripple-surface;
        @include ripple-radius-bounded;

        display: inline-flex;
        position: relative;
        height: $button-height;
        border: none;
        vertical-align: middle;

        &:hover { cursor: pointer; }

        &:disabled {
            color: $mdc-button-disabled-ink-color;
            cursor: default;
            pointer-events: none;
        }
        }

SASS example:

        @mixin button-base()
        @include typography(button)
        @include ripple-surface
        @include ripple-radius-bounded

        display: inline-flex
        position: relative
        height: $button-height
        border: none
        vertical-align: middle

        &:hover
            cursor: pointer

        &:disabled
            color: $mdc-button-disabled-ink-color
            cursor: default
            pointer-events: none

## Sources


Official SASS documentation: https://sass-lang.com/ <br>
mugo web: https://www.mugo.ca/Blog/7-benefits-of-using-SASS-over-conventional-CSS <br>
Code Academy: https://www.codecademy.com/resources/blog/what-is-sass/ <br>

