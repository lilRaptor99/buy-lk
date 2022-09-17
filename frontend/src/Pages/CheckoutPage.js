import React from "react";
import "./CheckoutPage.css";
import Header from "../components/Header";
import TitleAndSearch from "../components/TitleAndSearch";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const TAX_RATE = 0.15;

export default function CheckoutPage() {
  const ShoppingCart = useShoppingCart();

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  function subtotal() {
    return ShoppingCart.cartItems
      .map(({ price, quantity }) => price * quantity)
      .reduce((sum, i) => sum + i, 0);
  }

  const invoiceSubtotal = subtotal();
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  return (
    <div className="main-container">
      <Header />
      <TitleAndSearch title="Checkout" search={null} />
      <div className="w-80">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <span className="checkout-table-header-cell">Image</span>
                </TableCell>
                <TableCell>
                  <span className="checkout-table-header-cell">Item name </span>
                </TableCell>
                <TableCell align="right">
                  <span className="checkout-table-header-cell">Unit price</span>
                </TableCell>
                <TableCell>
                  <span className="checkout-table-header-cell">Qty. </span>
                </TableCell>
                <TableCell align="right">
                  <span className="checkout-table-header-cell">
                    Line total{" "}
                  </span>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ShoppingCart.cartItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <img className="checkout-item-image" src={item.imageUrl} />
                  </TableCell>
                  <TableCell>
                    <div className="d-flex align-center space-between">
                      <span>{item.name}</span>
                      <button
                        className="delete-btn"
                        onClick={() => {
                          ShoppingCart.removeFromCart(item.id);
                        }}
                      >
                        <DeleteIcon style={{ fontSize: "15px" }} />
                      </button>
                    </div>
                  </TableCell>
                  <TableCell align="right">{ccyFormat(item.price)}</TableCell>
                  <TableCell align="right">
                    <div className="d-flex flex-column align-center space-between">
                      <div>{item.quantity}</div>
                      <div className="d-flex">
                        <button
                          className="inc-btn"
                          onClick={() => {
                            ShoppingCart.decrementQuantity(item.id);
                          }}
                        >
                          <RemoveIcon style={{ fontSize: "15px" }} />
                        </button>
                        <button
                          className="inc-btn"
                          onClick={() => {
                            ShoppingCart.incrementQuantity(item.id);
                          }}
                        >
                          <AddIcon style={{ fontSize: "15px" }} />
                        </button>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    {ccyFormat(item.price * item.quantity)}
                  </TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="right">
                  {ccyFormat(invoiceSubtotal)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tax</TableCell>
                <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                  0
                )} %`}</TableCell>
                <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>
                  <span className="checkout-table-header-cell">Total</span>
                </TableCell>
                <TableCell align="right">
                  <span className="checkout-table-header-cell">
                    LKR {ccyFormat(invoiceTotal)}
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div className="checkout-btn-container">
          {ShoppingCart.cartItems.length > 0 ? (
            <button className="btn-primary mt3">
              <Link to="/">Buy now</Link>
            </button>
          ) : (
            <button className="btn-primary mt3" disabled>
              <Link to="/">Buy now</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
