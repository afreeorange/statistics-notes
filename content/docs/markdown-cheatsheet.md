# Markdown Cheatsheet

This site is based on [the Hugo Book theme](https://github.com/alex-shpak/hugo-book#page-configuration) and offers quite a new niceties that I may or may not use for I want my markup to be as neutral/compatible as possible.

## Frontmatter

Here be [all available options](https://github.com/alex-shpak/hugo-book#page-configuration) for this particular theme. Won't use them as much as possible. Only thing I'm interested in right now is `bookToC: false`.

```
# Set type to 'docs' if you want to render page outside of configured section or if you render section other than 'docs'
type = 'docs'

# Set page weight to re-arrange items in file-tree menu (if BookMenuBundle not set)
weight = 10

# (Optional) Set to mark page as flat section in file-tree menu (if BookMenuBundle not set)
bookFlatSection = true

# (Optional, Experimental) Set to hide nested sections or pages at that level. Works only with file-tree menu mode
bookCollapseSection = true

# (Optional) Set true to hide page or section from side menu (if BookMenuBundle not set)
bookHidden = true

# (Optional) Set 'false' to hide ToC from page
bookToC = true

# (Optional) If you have enabled BookComments for the site, you can disable it for specific pages.
bookComments = true
```

## LaTeX

Uses KaTeX which is 'heavy' and loaded for _every_ page. Here's a block-level equation:

$$
f(x) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi
$$

And its inline equivalent: {{< katex >}}f(x) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi{{< /katex >}}

## Hints

{{< hint info >}}
**Info**
Some info
{{< /hint >}}

{{< hint warning >}}
**Warning**
A warning
{{< /hint >}}

{{< hint danger >}}
**Danger**
Watch out Will Robinson!
{{< /hint >}}

## Tabs

{{< tabs "some-unique-id" >}}
{{< tab "Foo" >}}
# Foo

This is tab **Foo** content.
{{< /tab >}}

{{< tab "Bar" >}}
# Bar

This is tab **Bar** content.
{{< /tab >}}

{{< tab "Baz" >}}

# Baz

This is tab **Baz** content.
{{< /tab >}}
{{< /tabs >}}

## Sequence Diagrams

Uses Mermaid:

{{< mermaid >}}
sequenceDiagram
    Alice->>Bob: Hello Bob, how are you?
    alt is sick
        Bob->>Alice: Not so good :(
    else is well
        Bob->>Alice: Feeling fresh like a daisy
    end
    opt Extra response
        Bob->>Alice: Thanks for asking
    end
{{< /mermaid >}}

## Expand & Details

{{< expand >}}
## Markdown content
Lorem markdownum insigne...
{{< /expand >}}

{{< details "Title" >}}
## Markdown content
Add an `open` to the tag to keep it open
{{< /details >}}

## Columns

Pretty cool!

{{< columns >}}
**Left Content**

Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
protulit, sed sed aere valvis inhaesuro Pallas animam: qui _quid_, ignes.
Miseratus fonte Ditis conubia.

<--->

**Mid Content**

Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter!

<--->

**Right Content**

Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
protulit, sed sed aere valvis inhaesuro Pallas animam: qui _quid_, ignes.
Miseratus fonte Ditis conubia.
{{< /columns >}}
