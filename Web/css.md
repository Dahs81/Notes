# CSS and SCSS

## Basics


## Advanced
1.  Child Combinator
- `>` is a special character that tells the css processor to only apply a particular class to a particular tag.
- Example:
	> `div > .myClass`
	> This says to only apply .myClass to a div
- This allows you to define .myClass differently for a particular tag type
- Another example:
`div > p.specialClass`
HTML
```

<div>
	<p class='specialClass'>SELECTED</p>
	<blockquote>
		<p class='specialClass'>NOT SELECTED</p>
	</blockquote>
</div>

```

- NOTE:  Only the p tag that is a direct descendent of a div is selected

## SCSS and SASS


