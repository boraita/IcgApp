
const getPath = (params: any[])=> {
  if (params.length === 0) {
    // TODO update when alert component exist
    alert('wrong arguments to setUrls');
  }
  let url = params.slice(0, 1)[0];
  params.splice(1).map((urlParam: string) => (url = url.replace(/%s/, urlParam)));
  return url;
};

export const resolveApiPath = (...params: Array<string | number>) => {
  return getPath(params);
};

