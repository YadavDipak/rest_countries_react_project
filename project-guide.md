![Design preview for the REST Countries API with color theme switcher](./design/desktop-preview.jpg)

## The project

Out task is to integrate with the [REST Countries API](https://restcountries.com) to pull country data and display it like in the designs.

- Use TailwindCSS (https://tailwindcss.com/)

Part 1: Homepage

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region. Filter and search should work together
- Addtional features to be implemented for homepage ( not in design)
  - Filter by subregion. The subregions should be displayed based on the region selected.
  - Sort in descending and ascending order of population
  - Sort in ascending and descending order of area

Part 2: Detail page

- Requires React Router
- Click on a country in homepage to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode ( to be implemented with context hook)

## Where to find everything

Our task is to build out the project to the designs inside the `/design` folder.

The designs are in JPG static format. This will mean that we'll need to use our best judgment for styles such as `font-size`, `padding` and `margin`. This should help train our eye to perceive differences in spacings and sizes.

There are no assets for this project, as the country flags will be pulled from the [REST Countries API](https://restcountries.com) and we can use an icon font library for the icons.

There is a `style-guide.md` file, which contains the information we'll need, such as color palette and fonts.

## Deploying our project

https://vercel.com/guides/deploying-react-with-vercel

**Have fun building!** 🚀
