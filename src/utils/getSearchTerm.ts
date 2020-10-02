const getSearchTerm = (query: string | string[] | null) => {
  if (!query) return "";
  if (Array.isArray(query)) return query.join(" ");

  return query;
};

export default getSearchTerm;
