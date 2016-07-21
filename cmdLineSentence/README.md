# CLI Sentence
Using only the `cd`, `ls` and `cp` commands (don't use finder or mkdir), copy folders from the verbs, adverbs, nouns and conjunction folders into the `sentence` directory to create a directory heirarchy that forms a sentence.

# Example
`sentence/the/zebra/joyously/dreamt/while/the/lion/secretively/leapt`

# Tips
* Use tab completion to help you narrow down what folders to copy

# My Process

* I tried cp /the /sentence to copy the "the" folder into the sentence folder, but starting with the slash means you're starting from root. 

* Tried `cp the nouns/fat nouns/chauffeur adverbs/endlessly verbs/ate sentence/` but forgot to use -r for copying directories

* Tried `cp -r the nouns/fat nouns/chauffeur adverbs/endlessly verbs/ate` but the files did not end up in a tree-like structure

* Tried individually copying words so that I could make it more tree-like but warning: "overwrite sentence/the/.gitkeep? (y/n [n]) n"

* `rm -rf sentence/* ` to delete everything in sentence directory and start over with a different approach (the /* at the end was helpful)

* copy one thing at a time `cp -r the sentence` then check to see that it went as expected `ls sentence` it did. The the directory was in there (yes!)

*  Tried to put the next word in the tree `cp -r nouns/fat the` accidentally put it in the wrong "the" directory. `rm -rf the/fat`

* `cp -r nouns/fat sentence/the` (Yes! It worked!!!)

* Going to try starting from the sentence directory now, which means I will have to go up one to the cmdLineSentence with .. `cp -r ../nouns/chauffeur the/fat`

* `cp -r ../adverbs/endlessly the/fat/chauffeur/ate`

#O.m.g. I did it.

That was really rewarding.
Must use -r to copy directories.
Pay attention to where you are when you're copying files.
/* means everything in the directory (but not including the directory), like the slash is the separator bar in the grocery store

![alt text](http://i.stack.imgur.com/igL8p.jpg "Grocery separator")

* finally `cd` to last file and `pwd` to get the entire path (YES)

