# web-development
*Trail guide to learn web-development.*

After trailing it (as an housing architect), I'm mapping the best path I know to learn web-development.<br>
It might be useful to others doing this lonely journey.


### 1. Starting

- [Choosing languages](#choosing-languages)
- [Choosing tools](#choosing-tools)

### 2. HTML+CSS (graphical user interface for the web browser)

- [Installing HTML+CSS](#installing-htmlcss)
- [Learning HTML+CSS](#learning-htmlcss)

### 3. Javascript (everywhere)

- [Installing Javascript (front-end Javascript)](#installing-javascript-front-end-javascript)
- [Installing Node.js (server-side Javascript)](#installing-nodejs-server-side-javascript)
- [Learning Javascript](#learning-javascript)

### 4. Ruby (server-side)

- [Installing Ruby](#installing-ruby)
- [Learning Ruby](#learning-ruby)

### 5. Next?

- [Elm?](#elm)
- [Installing Elm](#installing-elm)
- [Learning Elm](#learning-elm)



---
## 1. Starting

###  Choosing languages

After rambling with several languages <sup id="refnote1">[1](#footnote1)</sup>, beyond HTML+CSS, I chose [Javascript](https://nodejs.org/en/) and [Ruby](https://www.ruby-lang.org/). Resuming:


#### HTML/CSS (graphical user interface for the web browser)

- To build a graphical user interface (GUI) for the web browser you must use HTML/CSS directly or indirectly.
- There are specific toolkits to build GUIs for every system but HTML/CSS is eating their marketshare. 


#### Javascript (everywhere)

- Pros:
  - you can use it everywhere: front-end (from the classical [Jquery](https://jquery.com/) and React & [derivates](http://infernojs.org/) to my bets: [Vue](https://vuejs.org/) and [Svelte](https://svelte.technology/)), back-end and even native (using [Electron](http://electron.atom.io/) and [React native](http://facebook.github.io/react-native/)).
  - faster than Ruby due to constant corporation work on browsers' JS engines.

- Cons:
  - javascript is ugly. [Coffeescript](http://coffeescript.org/) makes JS more palatable but it's out of fashion and one more language to learn.
  - everything changes everyday, terrible for noobs as us.
  - slower than native platform languages (Java on Android, Swift on IOS/OSX or .NET on Windows)


#### Ruby (server-side)

- Pros:
  - mature.
  - concise and elegant - this is VERY important for someone with my background. (created by a [Japanese](https://en.wikipedia.org/wiki/Yukihiro_Matsumoto))
  - great for web dev ([Rails](http://rubyonrails.org/), [Sinatra](http://www.sinatrarb.com/), [Jekyll](https://jekyllrb.com/), [Discourse](http://www.discourse.org/) .. )
  - great *glue* to automate tasks <sup id="refnote2">[2](#footnote2)</sup>. Even on [Sketchup](http://ruby.sketchup.com/) ..

- Cons:
  - slow (but now there is [MRuby](https://mruby.org/), [Crystal](https://crystal-lang.org/) and someday [Ruby 3](http://engineering.appfolio.com/appfolio-engineering/2015/11/18/ruby-3x3)).
  - dying (or being re-invented?).



---
###  Choosing tools

If you're using a Windows PC (like me), get:

- [ConEmu](https://conemu.github.io/), a nice command line (yes, it's necessary, get used).
- [Sublime Text](https://www.sublimetext.com/), a fast text editor (it will be your main tool, the developer's autocad.. ).<br>
There are several valid options <sup id="refnote3">[3](#footnote3)</sup> but for now stick with Sublime.



---                                                                                                      
## 2. HTML+CSS (graphical user interface for the web)

### Installing HTML+CSS

- Good news: every browser has a HTML+CSS engine already installed. Open any HTML+CSS files and they will render on your browser.



---
### Learning HTML+CSS

- By being interested in web development, you probably know the basics. Just take a look on [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) and you're good to go for now.<br>As HTML+CSS became more powerful, classic JS libraries like [Masonry](http://masonry.desandro.com/) to improve CSS seem outdated.



---                                                                                                      
## 3. Javascript (everywhere)

### Installing Javascript (front-end Javascript)

- Good news: every browser has a Javascript engine already installed <sup id="refnote4">[4](#footnote4)</sup>! Just click F12 on most browsers and the REPL will open! Or embed a JS file on a HTML file and it will run also.



---
### Installing Node.js (server-side Javascript)

- Now install [Node JS](https://nodejs.org/en/) <sup>[4](#footnote4)</sup>. NPM (Node package manager) will also be installed.
- On [ConEmu](https://conemu.github.io/) type *node*. You're on Node.js REPL now. To exit, press *Ctrl + d*.
- To install a [node package](https://www.npmjs.com/), on command line type *npm install package-name*



---
### Learning Javascript

- Take a look on [Javascript (Learn X in Y minutes)](https://learnxinyminutes.com/docs/javascript/) to get an overview of the language.
- Great learning resources around the web as [Xahlee JS course](http://xahlee.info/js/js.html) and [Eloquent Javascript](http://eloquentjavascript.net/)
- To easily evaluate scripts, do it inside the same directory you keep them.

		// On command line navigate to your script's folder. e.g:
		> cd desktop/scripts

		// Now you can evaluate a JS file directly (you can omit the extension). Just type:
		> node expFile



---
## 4. Ruby (back-end)

### Installing Ruby

- Now install [Ruby](https://www.ruby-lang.org/en/documentation/installation/).
- On command line (ConEmu) type *irb*. You're on Ruby REPL now. To exit, press *Ctrl + d*.
- To install a ruby package ([gem](https://rubygems.org/)), on command line type *gem install package-name*



---
### Learning Ruby

- Take a look on [Ruby (Learn X in Y minutes)](https://learnxinyminutes.com/docs/ruby/) to get an overview of the language.
- Ruby looks good, isn't it? Use this [style guide](https://github.com/bbatsov/ruby-style-guide) as role model.
- To easily evaluate scripts, do it inside the same directory you keep them.

		# On command line navigate to your script's folder. e.g:
		> cd desktop/scripts

		# Now you can evaluate a ruby file directly. Just type:
		> ruby exp_file.rb



---
## 5. Next?

### Elm?

- Pros:
  - concise and elegant - this is VERY important for someone with my background.
  - opinionated. A bunch of decisions were already made for us. Great for noobs ..
  - human readable error messages when something goes wrong!
  - allow you to *dream* with a better world with no unreadable JS ..

- Cons:
  - immature AKA breaking changes and few information about it.


### Installing Elm

- Elm code is compiled to JS and Elm itself works as a Node.js package. So first install [Node JS](https://nodejs.org/en/) (if you didn't do it yet) and then [Elm](https://www.npmjs.com/package/elm) with NPM (Node package manager). 
- On [ConEmu](https://conemu.github.io/) type *elm repl*. You're on Elm REPL now. To exit, press *Ctrl + d*.



---
### Learning Elm

- Take a look on [Elm (Learn X in Y minutes)](https://learnxinyminutes.com/docs/elm/) to get an overview of the language.
- Read the [Elm guide](http://guide.elm-lang.org/) (from the language creator).
- Elm looks good, isn't it? Unfortunately there isn't a mature style guide yet. So for now look [here](http://elm-lang.org/docs/style-guide), [here](https://github.com/NoRedInk/elm-style-guide) and [here also](https://github.com/ohanhi/elm-style-guide).



---
<sup>Notes:</sup><br>
<sup><a name="footnote1">1</a> - Python, Go, Coffeescript and [functional programming](https://en.wikipedia.org/wiki/Functional_programming) stuff (Elixir, Elm, Clojure & Lisps, Haskell, Purescript, OCaml, F#, Scala..). [↩](#refnote1)</sup><br>
<sup><a name="footnote2">2</a> - Like Python. [↩](#refnote2)</sup><br>
<sup><a name="footnote3">3</a> - Specially [VScode](https://code.visualstudio.com/).. but also emacs and vim.[↩](#refnote3)</sup><br>
<sup><a name="footnote4">4</a> - Google Chrome and Node use V8 JS engine. [↩](#refnote4)</sup>