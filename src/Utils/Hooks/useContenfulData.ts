const contentful = require("contentful");

export const useContentfulData = () => {
  console.log(process.env);
  //   const client = contentful.createClient({
  //     space: process.env.CONTENTFUL_SPACE,
  //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  //     // environment: process.env.CONTENTFUL_ENVIRONMENT, // defaults to 'master' if not set
  //   });

  //   client
  //     .getSpace()
  //     .then((space: { name: string }) => console.log(space))
  //     .catch(console.error);
};
