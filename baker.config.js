const entrypoints = [
  // Add more script entrypoints here as needed
  'config',
];

export default {
  output: 'docs',
  domain: 'https://pspauster.github.io',
  entrypoints: `scripts/${
    entrypoints.length > 1 ? `{${entrypoints.join(',')}}` : entrypoints[0]
  }.js`,
  pathPrefix: '/gas-expansion-city-limits/',
  // An example of how creating dynamic pages, as described in the README
  // createPages(createPage, data) {
  //   const pageList = data.example;
  //   for (const d of pageList) {
  //     const template = 'year-detail.html';
  //     const url = `${d.year}`;
  //     const context = { obj: d };
  //     createPage(template, url, context);
  //   }
  // },
};
