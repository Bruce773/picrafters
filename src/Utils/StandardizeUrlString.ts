export const StandardizeUrlString: (arg0: string) => string = urlString =>
  urlString
    .toLowerCase()
    .split(" ")
    .join("-");
