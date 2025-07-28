export const getQueryParams = (request: Request): URLSearchParams => {
  return new URL(request.url).searchParams;
};
