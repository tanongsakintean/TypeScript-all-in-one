import { ReactElement, createContext, useMemo, useReducer } from "react";

export type CartItemType = {
  // create cart type cart
  sku: string;
  name: string;
  price: number;
  qty: number;
};

type CartStateType = {
  // create  cart for put many products in cart type
  cart: CartItemType[];
};

const initCartState: CartStateType = { cart: [] }; // create state for use global

const REDUCER_ACTION_TYPE = {
  // create type of reducer action
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE; // create type of reducer action for use in Context

export type ReducerAction = {
  //create type for parameter reducer
  type: string;
  payload?: CartItemType;
};

const reducer = (
  ///create reducer function for management state global
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) throw new Error("action.payload missing ADD action"); // check if don't have data in payload

      const { sku, name, price } = action.payload; // destructing payload

      const filteredCart: CartItemType[] = state.cart.filter(
        //find products don't have in cart
        (item) => item.sku !== sku
      );

      const itemExists: CartItemType | undefined = state.cart.find(
        // check have this products in cart
        (item) => item.sku === sku
      );

      const qty: number = itemExists ? itemExists.qty + 1 : 1; // check if have itemExits must qty+1 else qty = 1

      return { ...state, cart: [...filteredCart, { sku, name, price, qty }] }; // return  state to set state global
    }
    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload)
        throw new Error("action.payload missing REMOVE action");

      const { sku } = action.payload;

      const filteredCart: CartItemType[] = state.cart.filter(
        // filter item.sku if not the same this
        (item) => item.sku !== sku
      );

      return { ...state, cart: [...filteredCart] }; // return state to set state global
    }
    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload)
        throw new Error("action.payload missing QUANTITY action");
      const { sku, qty } = action.payload;

      const itemExists: CartItemType | undefined = state.cart.find(
        // find item.sku have the same this
        (item) => item.sku === sku
      );

      if (!itemExists)
        throw new Error("Item must exist in order to update quantity"); // if not have item

      const updatedItem: CartItemType = { ...itemExists, qty }; /// replace product update only

      const filteredCart: CartItemType[] = state.cart.filter(
        // find products not the same in cart
        (item) => item.sku !== sku
      );

      return { ...state, cart: [...filteredCart, updatedItem] }; // return state for set state global
    }
    case REDUCER_ACTION_TYPE.SUBMIT: {
      return { ...state, cart: [] }; // return state empty
    }

    default:
      throw new Error("Unidentified reducer action type ");
  }
};

const useCartContext = (initCartState: CartStateType) => {
  // create custom hook for management state global
  const [state, dispatch] = useReducer(reducer, initCartState); // set useReducer put reducer for set state  and put initCaretState for bind state reducer

  const REDUCER_ACTION = useMemo(() => {
    // create function for SELECT action type reducer useMemo for optimize memory -> run once
    return REDUCER_ACTION_TYPE;
  }, []);

  const totalItems = state.cart.reduce((previousValue, cartItem) => {
    return previousValue + cartItem.qty; // calculate totalItem amount in cart
  }, 0);

  const totalPrice = new Intl.NumberFormat("en-Us", {
    // is currency type USD
    style: "currency",
    currency: "USD",
  }).format(
    state.cart.reduce((previousValue, cartItem) => {
      // calculate total price in cart
      return previousValue + cartItem.qty * cartItem.price;
    }, 0)
  );

  const cart = state.cart.sort((a, b) => {
    // sort item in cart
    const itemA = Number(a.sku.slice(-4));
    const itemB = Number(b.sku.slice(-4));

    return itemA - itemB;
  });

  return { dispatch, REDUCER_ACTION, totalItems, totalPrice, cart }; // return function and state to custom hook
};

export type UseCartContextType = ReturnType<typeof useCartContext>; // create type of custom hook

const initCartContextState: UseCartContextType = {
  //create state for keep custom hook in one state object
  dispatch: () => {},
  REDUCER_ACTION: REDUCER_ACTION_TYPE,
  totalItems: 0,
  totalPrice: "",
  cart: [],
};

export const CartContext =
  createContext<UseCartContextType>(initCartContextState); // create context for put initCartContextState to global state

type ChildrenType = { children?: ReactElement | ReactElement[] }; // create type children for wrap ReactElement

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  //create Provider for put ReactElement and wrap custom hook and wrap initCartState in useCartContext for manage all state and function in custom hook only
  // wrap but can not use this must create custom hook
  return (
    <CartContext.Provider value={useCartContext(initCartState)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
