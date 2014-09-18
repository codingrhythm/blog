---
layout: post
title:  "Instagram Engineering Challenge: The Unshredder"
date:   2013-04-21 1:13:00
categories: coding
---


I spent couple of hours on this [challenge][challenge-link], and finally worked out a solution. I tested the solution with 15 different photos, the result went really well. Except for one photo which has constant sky color, all other photos were all completely restored.

The steps of solution are:

1. Cut the shredded photo in to sections
2. Compare right side of each section with left sides of others and score and sort the matches
3. Check if there are cases that more than one sections connect with the same section, if yes, remove the less match one.
4. Find the first section (left edge) of the photo, this part is a bit tricky. The method I used is to check the match score from both side and determine if there is a significant change on the current match score. If yes, it might be the last section (right edge) of the photo and the section it connects to is the first section. It demonstrates best in graph.

    0 –(12)–> 9 –(39)–> 8 — (15) –> 13 — (20) –> 10 — (25) –> 3 –(34)–> 5 –(27)–> 4 …..

    the chain above shows the link and match score between sections. Section 0 links with section 9 the score is 12, section 9 links with section 8 score is 39. Section 9 is the right edge and section 8 is the left edge as there is a significant match score change from 9 to 8.
5. Connect the sections by match, and the original photo is beautifully restored.

I also toke the bonus challenge to detect shredder width of the photo. Source code of the solution is [here][solution-link].

[challenge-link]: http://instagram-engineering.tumblr.com/post/12651721845/instagram-engineering-challenge-the-unshredder
[solution-link]: https://github.com/codingrhythm/unshredder