namap = []
codep = []
qtyp = []
price = []

function tambahItem(){
  namap.push(document.getElementById('pname').value)
  codep.push(parseInt(document.getElementById('pcode').value))
  qtyp.push(parseInt(document.getElementById('pqty').value))
  price.push(parseInt(document.getElementById('price').value))
  Cart()
}

function Cart(){
  tabel = '<table><tr><th>Product Name</th><th>Product Code</th><th>Quantity</th><th>Price</th><th>Total</th></tr>';
  total = 0;

  for (index=0; index<namap.length; index++){
    total += qtyp[index] * price[index]
    tabel += "<tr><td>" + namap[index] + "</td><td>" + codep[index] + "</td><td>" + qtyp[index] + "</td><td>" + price[index] + "</td><td>" + qtyp[index] * price[index] + "</td><td><button onclick='delElement(" + index + ")'>Delete</button></td></tr>"
  }
  tabel += '<tr><td></td><td></td><td></td><td>' + total + '</td></tr></table>'
  document.getElementById('cart').innerHTML = tabel
}

function delElement(a){
  namap.splice(a, 1);
  codep.splice(a, 1);
  qtyp.splice(a, 1)
  price.splice(a, 1)
  Cart()
}
