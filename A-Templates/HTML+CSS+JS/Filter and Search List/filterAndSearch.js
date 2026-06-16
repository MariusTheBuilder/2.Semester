const items = [
  "Denmark", "Sweden", "Norway", "Finland", "Iceland",
  "Germany", "France", "Spain", "Italy", "Portugal"
];

const list = document.getElementById("list");

// Build the list once on load
items.forEach(function(item) {
  const li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
});

// Filter on every keystroke
document.getElementById("searchInput").addEventListener("input", function() {
  const query = this.value.toLowerCase();
  const allItems = list.querySelectorAll("li");
  let visibleCount = 0;

  allItems.forEach(function(li) {
    const match = li.textContent.toLowerCase().includes(query);
    li.style.display = match ? "list-item" : "none";
    if (match) visibleCount++;
  });

  document.getElementById("noResults").style.display =
    visibleCount === 0 ? "block" : "none";
});