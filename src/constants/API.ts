const origin = (uri?: string) => `https://poloniex.com${uri ? uri : ''}`;

export const API = {
  origin,
  catalog: () => origin('/public?command=returnTicker'),
};
