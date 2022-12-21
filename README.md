# Getting started with the Crispy Projects Blog

## Project Templates

List of templates for interfacing different components

### Template for project preview

The template of the fetched data for displaying previews of articles with the component BlogCard is defined here.

```json
{
    // Image which is displayed on preview
    image: {
        alt: string, // Alt text of image
        url: string // Link to the image
    },
    title: string, // Title displayed on top
    subTitle: string, // Sub title (date of publish)

    // Author of article
    author: {
        alt: string, // Name of the author
        src: string // Link to image of author
    },
    description: string, // Short description of article
    tags: string[] // List of tags describing the article
}
```
