declare module "*.png" {
  const value: any;
  export default value;
}
declare module "*.svg" {
  const value: any;
  export default value;
}
declare module '@env' {
  export const PRODUCTS_LOCATION: string;
  // adicione outras variáveis conforme for usando
}

