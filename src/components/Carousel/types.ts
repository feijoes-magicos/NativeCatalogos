import { Product } from "src/RNTypes";

export type CursorHandler = {
  cursor: number;
  setCursor: (x: number) => void;
};

export interface Props {
  products: Array<Product>;
  cursorHandler: CursorHandler;
  photoCursor: number;
}
