-- HASKELL NOTES

-- common typeclasses
Num; Floating, Integral					-- Int, Float / Integer, Double
Eq; Ord, Enum, Bounded					-- equality, ordered, sequentially ordered (list ranges), limits
Show, Read

typicalAssigment :: Num
typicalAssigment = 24					-- assigment is a like a function without arguments

typicalFunction :: Num -> Num -> Num
typicalFunction x y = 2 * x + 2 * y		-- typical function with signature

functionPatternMatching 1 = "one"		-- pattern matching works also with tuples
functionPatternMatching 2 = "two"
functionPatternMatching 3 = "three"
functionPatternMatching x = "out of range"