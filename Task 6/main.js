const form = document.getElementById('productForm');
const tableBody = document.querySelector('#productTable tbody');
const searchInput = document.getElementById('searchInput');
const filterCategory = document.getElementById('filterCategory');
const submitBtn = document.getElementById('submitBtn');

let products = [];
let editIndex = -1;

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const product = {
    name: document.getElementById('productName').value.trim(),
    desc: document.getElementById('description').value.trim(),
    price: parseFloat(document.getElementById('price').value),
    category: document.getElementById('category').value,
    available: document.getElementById('availability').checked
  };

  if (!product.name || !product.desc || !product.price || product.price <= 0 || !product.category) {
    alert("Please fill all fields correctly.");
    return;
  }

  if (editIndex === -1) {
    products.push(product);
  } else {
    products[editIndex] = product;
    editIndex = -1;
    submitBtn.textContent = "Add Product";
  }

  form.reset();
  renderTable();
});

function renderTable() {
  tableBody.innerHTML = "";
  const search = searchInput.value.toLowerCase();
  const filter = filterCategory.value;

  products.forEach((prod, index) => {
    const matchSearch =
      prod.name.toLowerCase().includes(search) ||
      prod.category.toLowerCase().includes(search);
    const matchFilter = !filter || prod.category === filter;

    if (matchSearch && matchFilter) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${prod.name}</td>
        <td>${prod.desc}</td>
        <td>$${prod.price.toFixed(2)}</td>
        <td>${prod.category}</td>
        <td>${prod.available ? 'Yes' : 'No'}</td>
        <td class="actions">
          <button onclick="editProduct(${index})">Edit</button>
          <button onclick="deleteProduct(${index})">Delete</button>
        </td>
      `;
      tableBody.appendChild(row);
    }
  });
}

function editProduct(index) {
  const prod = products[index];
  document.getElementById('productName').value = prod.name;
  document.getElementById('description').value = prod.desc;
  document.getElementById('price').value = prod.price;
  document.getElementById('category').value = prod.category;
  document.getElementById('availability').checked = prod.available;

  editIndex = index;
  submitBtn.textContent = "Update Product";
}

function deleteProduct(index) {
  if (confirm("Are you sure you want to delete this product?")) {
    products.splice(index, 1);
    renderTable();
  }
}

searchInput.addEventListener('input', renderTable);
filterCategory.addEventListener('change', renderTable);
