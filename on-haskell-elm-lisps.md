# Haskell and Elm

```haskell
-- HASKELL

-- common typeclasses
Num; Floating, Integral				-- Int, Float / Integer, Double
Eq; Ord, Enum, Bounded				-- equality, ordered, sequentially ordered (list ranges), limits
Show, Read

typicalAssigment :: Num
typicalAssigment = 24				-- assigment is a like a function without arguments

typicalFunction :: Num -> Num -> Num
typicalFunction x y = 2 * x + 2 * y		-- typical function with signature

functionPatternMatching :: Integral -> Text	
functionPatternMatching 1 = "one"		-- pattern matching works also with tuples
functionPatternMatching 2 = "two"
functionPatternMatching 3 = "three"
functionPatternMatching x = "out of range"
```
Relevant link: [elm news aggregator](https://elm-news.com/)

# Lisps

- tools: [cursive](https://cursive-ide.com) - [lumo](https://github.com/anmonteiro/lumo) - [docs](https://clojuredocs.org/quickref)
- clojure: [news aggregator](http://planet.clojure.in) - [koans](http://clojurescriptkoans.com/)
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