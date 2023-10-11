export const searchParams = ({ urlCus, param }) => {
  const url = new URL(urlCus);
  const searchParams = new URLSearchParams(url.search);
  return searchParams.get(param);
}

