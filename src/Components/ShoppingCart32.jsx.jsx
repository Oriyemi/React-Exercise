import React, { useReducer, useState } from "react";

const initialState = {
  cart: [
    { name: "Lotion", price: 2000, quantity: 0 },
    { name: "Toner", price: 1500, quantity: 0 },
    { name: "Cleanser", price: 3000, quantity: 0 },
    { name: "Soap", price: 1000, quantity: 0 },
    { name: "Face cream", price: 4000, quantity: 0 },
  ],
};

function reducer(state, action) {
  if (action.type === "add") {
    return {
      ...state,
      cart: state.cart.map((product) =>
        product.name === action.payload
          ? {
              ...product,
              quantity: product.quantity + 1,
            }
          : product,
      ),
    };
  }

  if (action.type === "remove") {
    return {
      ...state,
      cart: state.cart.map((product) =>
        product.name === action.payload && product.quantity > 0
          ? {
              ...product,
              quantity: product.quantity - 1,
            }
          : product,
      ),
    };
  }

  return state;
}

function ShoppingCart32() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [showCart, setShowCart] = useState(false);

  const cartItems = state.cart.filter((product) => product.quantity > 0);
  const cartCount = state.cart.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  const total = state.cart.reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0,
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Glow Store</h1>

          <button
            type="button"
            onClick={() => setShowCart((previous) => !previous)}
            className="bg-gray-900 text-white px-5 py-3 rounded-xl font-medium hover:bg-gray-800 transition"
          >
            🛒 View Cart ({cartCount})
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Products Heading */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
            Beauty Collection
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Shop Our Products
          </h2>

          <p className="text-gray-500 mt-2">
            Choose your favourite products and add them to your cart.
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {state.cart.map((product) => (
            <div
              key={product.name}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div className="h-44 bg-gray-100 flex items-center justify-center">
                <span className="text-6xl">🧴</span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>

                <p className="text-xl font-bold text-gray-900 mt-2">
                  ₦{product.price.toLocaleString()}
                </p>

                {product.quantity === 0 ? (
                  <button
                    type="button"
                    onClick={() =>
                      dispatch({
                        type: "add",
                        payload: product.name,
                      })
                    }
                    className="w-full mt-5 bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="flex items-center justify-between mt-5 bg-gray-100 rounded-xl p-1">
                    <button
                      type="button"
                      onClick={() =>
                        dispatch({
                          type: "remove",
                          payload: product.name,
                        })
                      }
                      className="w-10 h-10 bg-white rounded-lg text-xl font-bold hover:bg-gray-200"
                    >
                      −
                    </button>

                    <span className="font-bold">{product.quantity}</span>

                    <button
                      type="button"
                      onClick={() =>
                        dispatch({
                          type: "add",
                          payload: product.name,
                        })
                      }
                      className="w-10 h-10 bg-gray-900 text-white rounded-lg text-xl font-bold hover:bg-gray-800"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* VIEW CART BUTTON */}

        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setShowCart((previous) => !previous)}
            className="bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
          >
            {showCart ? "Hide Cart" : "View Cart"}
          </button>
        </div>

        {/* CART */}

        {showCart && (
          <section className="mt-12">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900">My Cart</h2>

              <p className="text-gray-500 mt-1">
                Review the products you have selected.
              </p>
            </div>

            {cartItems.length === 0 ? (
              <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">🛒</div>

                <h3 className="text-xl font-semibold text-gray-900">
                  Your cart is empty
                </h3>

                <p className="text-gray-500 mt-2">
                  Add some products before viewing your cart.
                </p>
              </div>
            ) : (
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                {cartItems.map((product) => (
                  <div
                    key={product.name}
                    className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {product.name}
                      </h3>

                      <p className="text-gray-500 mt-1">
                        ₦{product.price.toLocaleString()} × {product.quantity}
                      </p>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1">
                        <button
                          type="button"
                          onClick={() =>
                            dispatch({
                              type: "remove",
                              payload: product.name,
                            })
                          }
                          className="w-9 h-9 bg-white rounded-md hover:bg-gray-200"
                        >
                          −
                        </button>

                        <span className="font-semibold">
                          {product.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            dispatch({
                              type: "add",
                              payload: product.name,
                            })
                          }
                          className="w-9 h-9 bg-gray-900 text-white rounded-md hover:bg-gray-800"
                        >
                          +
                        </button>
                      </div>

                      <p className="font-bold text-gray-900">
                        ₦{(product.price * product.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Cart Total */}

                <div className="p-6 bg-gray-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Cart Total</p>

                    <h3 className="text-3xl font-bold text-gray-900">
                      ₦{total.toLocaleString()}
                    </h3>
                  </div>

                  <button
                    type="button"
                    className="bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

export default ShoppingCart32;
