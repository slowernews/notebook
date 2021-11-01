# Haskell and Elm

```elm
-- ELM

typicalAssigment : Num
typicalAssigment = 24				-- assigment is a like a function without arguments

typicalFunction : Num -> Num -> Num
typicalFunction x y = 2 * x + 2 * y		-- typical function with signature

functionPatternMatching : Num -> String
functionPatternMatching 1 = "one"
functionPatternMatching 2 = "two"
functionPatternMatching 3 = "three"
functionPatternMatching x = "out of range"
```
Relevant elm links: [news aggregator](https://elm-news.com/) - [packages](https://korban.net/elm/catalog/)

# Lisps

- clojure: [get started](https://calva.io/get-started-with-clojure/) - [clojure radar](https://www.juxt.pro/radar) - [news aggregator](http://planet.clojure.in) - [koans](http://clojurescriptkoans.com/) - [cursive](https://cursive-ide.com) - [docs](https://clojuredocs.org/quickref)
- books on:
	- clojure: [brave](https://www.braveclojure.com/) - [elements](https://leanpub.com/elementsofclojure/read_sample) - [design patterns](http://mishadoff.com/blog/clojure-design-patterns) - [by example](https://kimh.github.io/clojure-by-example)
	- clojurescript: [unraveled](https://funcool.github.io/clojurescript-unraveled) - [transforming datat](http://langintro.com/cljsbook) - [learn](https://www.learn-clojurescript.com/)
	- racket: [beautiful racket](https://beautifulracket.com) - [how to design programs](https://htdp.org)

## Clojurescript tooling

I've tried most avaliable solutions:

- vscode + calva: I couldn't understand the fuss around it. I didn't even manage to connect a repl..
- atom + chlorine: simple solution. a text editor and a repl. I used lumo. Not without quirks of course.
- emacs + cider: emacs is an old beast that after my fifth or sixth trial along the years I really believe that worths to tame. It certainly would become loyal for life. For now, I did't get even as far as installling cider..
- intellij + cursive: simple solution but it feels heavy for a drifter.
- sublime + sublimerepl: basic support.