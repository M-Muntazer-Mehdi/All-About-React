// File: App.js
import React from "react";

function TableRows() {
  return (
    <>
      <tr>
        <td>1</td>
        <td>John Doe</td>
        <td>30</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jane Smith</td>
        <td>25</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Mike Johnson</td>
        <td>40</td>
      </tr>
    </>
  );
}

export default function Fragment() {
  return (
    <div style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>React Fragments Example</h1>
      <p>
        Using Fragments allows us to return multiple table rows without adding
        extra wrapper elements.
      </p>

      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {/* TableRows returns multiple <tr> using Fragment */}
          <TableRows />
        </tbody>
      </table>
    </div>
  );
}
