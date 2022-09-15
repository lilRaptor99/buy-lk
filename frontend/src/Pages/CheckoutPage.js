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

const TAX_RATE = 0.15;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function createRow(image, desc, unit, qty) {
  const price = qty * unit;
  return { image, desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow(null, "Item 1", 1.15, 100),
  createRow(null, "Item 2", 45.99, 10),
  createRow(null, "Item 3", 17.99, 2),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function CheckoutPage() {
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
                <TableCell align="right">
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
              {rows.map((row) => (
                <TableRow key={row.desc}>
                  <TableCell>
                    <div className="checkout-item-image"></div>
                  </TableCell>
                  <TableCell>{row.desc}</TableCell>
                  <TableCell align="right">{row.unit}</TableCell>
                  <TableCell align="right">{row.qty}</TableCell>
                  <TableCell align="right">{ccyFormat(row.price)}</TableCell>
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
          <button className="btn-primary mt3">
            <Link to="/">Buy now</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
