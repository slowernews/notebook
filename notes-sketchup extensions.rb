# HOW TO KNOW RUBY VERSION ON MY SKETCHUP:
# constant inspectable on any ruby console
# RUBY_VERSION # -> 2.2.4 (on sketchup 2017)

# HOW TO LOAD A SKETCHUP EXTENSION:
# window / extension manager / install extension / select RBZ file
# RBZ files are renamed ZIP files packing all necessary files to the extension

# HOW TO MAKE A SKETCHUP EXTENSION:
# minimum: a ruby file
# extra: images, htmls, more ruby files

# BASIC EXTENSION IN SKETCHUP (ruby file only)

require 'sketchup.rb'