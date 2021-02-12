# Notes on Haskell and Elm

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

## Relevant links

- Books: [Official Elm Guide](https://guide.elm-lang.org) | [Learn you a Haskell](http://learnyouahaskell.com)
- Meta: [Elm news aggregator](https://elm-news.com/)