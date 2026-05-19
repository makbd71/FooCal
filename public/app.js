// ── Menu Data ──
const MENU = {
  "McDonald's": [
    "Cheeseburger","Big Mac","Quarter Pounder w/ Cheese","McDouble",
    "Double Quarter Pounder","Filet-O-Fish","McChicken",
    "Chicken McNuggets (6 pc)","Chicken McNuggets (10 pc)","McRib",
    "Small Fries","Medium Fries","Large Fries",
    "Apple Pie","McFlurry (Oreo)",
    "Small Coke","Medium Coke","Large Coke",
    "Egg McMuffin","Sausage McMuffin","Big Breakfast","Hash Browns","Hotcakes"
  ],
  "Burger King": [
    "Whopper","Whopper Jr.","Double Whopper","Bacon Cheeseburger",
    "Impossible Whopper","Crispy Chicken Sandwich","Spicy Crispy Chicken Sandwich",
    "Small Fries","Medium Fries","Large Fries",
    "Small Onion Rings","Medium Onion Rings","Large Onion Rings",
    "Chocolate Shake (small)","Vanilla Shake (small)",
    "Hershey's Sundae Pie","French Toast Sticks (3 pc)"
  ],
  "Wendy's": [
    "Dave's Single","Dave's Double","Dave's Triple",
    "Baconator","Son of Baconator","Jr. Cheeseburger",
    "Spicy Chicken Sandwich","Grilled Chicken Sandwich",
    "Small Fries","Medium Fries","Large Fries",
    "Small Frosty (Chocolate)","Medium Frosty (Chocolate)",
    "Apple Pecan Chicken Salad","Chili (small)","Baked Potato (plain)"
  ],
  "Taco Bell": [
    "Crunchy Taco","Soft Taco","Doritos Locos Taco",
    "Burrito Supreme","Bean Burrito","Chicken Burrito Supreme",
    "Crunchwrap Supreme","Mexican Pizza","Chalupa Supreme",
    "Nachos BellGrande","Nachos Supreme","Cheesy Gordita Crunch",
    "Quesadilla (Chicken)","Power Bowl (Chicken)",
    "Cinnabon Delights (2 pc)","Cinnabon Delights (4 pc)","Baja Blast (medium)"
  ],
  "KFC": [
    "Original Recipe Breast","Extra Crispy Breast",
    "Original Recipe Drumstick","Original Recipe Thigh",
    "Chicken Little Sandwich","Crispy Colonel Sandwich",
    "Popcorn Chicken (small)","Popcorn Chicken (large)",
    "Mac & Cheese","Coleslaw","Biscuit","Mashed Potatoes & Gravy",
    "Famous Bowl","Pot Pie","Corn on the Cob"
  ],
  "Subway": [
    "6\" Italian BMT","Footlong Italian BMT",
    "6\" Meatball Marinara","Footlong Meatball Marinara",
    "6\" Turkey Breast","Footlong Turkey Breast",
    "6\" Tuna","Footlong Tuna",
    "6\" Chicken & Bacon Ranch","Footlong Chicken & Bacon Ranch",
    "6\" Veggie Delite","Footlong Veggie Delite",
    "6\" BLT","Footlong BLT",
    "Oatmeal Raisin Cookie","Chocolate Chip Cookie"
  ],
  "Chick-fil-A": [
    "Original Chicken Sandwich","Spicy Chicken Sandwich",
    "Deluxe Chicken Sandwich","Grilled Chicken Sandwich",
    "Chicken Nuggets (8 pc)","Chicken Nuggets (12 pc)",
    "Spicy Deluxe Sandwich","Grilled Chicken Club",
    "Waffle Potato Fries (medium)","Waffle Potato Fries (large)",
    "Mac & Cheese (medium)","Coleslaw (medium)",
    "Chocolate Chunk Cookie","Milkshake (Chocolate, small)"
  ],
  "Pizza Hut": [
    "Pepperoni (1 slice, Hand Tossed)","Cheese (1 slice, Hand Tossed)",
    "Pepperoni (1 slice, Pan)","Cheese (1 slice, Pan)",
    "Meat Lovers (1 slice)","Veggie Lovers (1 slice)",
    "BBQ Chicken (1 slice)","Supreme (1 slice)",
    "Breadstick","Garlic Bread (2 pc)",
    "Bone-In Wings (2 pc)","Boneless Wings (2 pc)","Cinnamon Sticks (2 pc)"
  ],
  "Domino's": [
    "Pepperoni (1 slice, Hand Tossed)","Cheese (1 slice, Hand Tossed)",
    "ExtravaganZZa (1 slice)","MeatZZa (1 slice)",
    "Pacific Veggie (1 slice)","BBQ Bacon (1 slice)",
    "Garlic Bread Twists (1 pc)","Stuffed Cheesy Bread (1 pc)",
    "Lava Cake","Marbled Cookie Brownie",
    "Boneless Chicken (4 pc)","Buffalo Wings (2 pc)"
  ],
  "Chipotle": [
    "Burrito (Chicken)","Burrito (Steak)","Burrito (Carnitas)",
    "Burrito Bowl (Chicken)","Burrito Bowl (Steak)",
    "Tacos (3, Crispy, Chicken)","Tacos (3, Soft, Chicken)",
    "Salad (Chicken)","Salad (Steak)",
    "Chips & Guacamole","Chips & Salsa",
    "Quesadilla (Chicken)","Kids Meal Quesadilla"
  ],
  "Starbucks": [
    "Caffe Latte (Grande)","Caffe Mocha (Grande)",
    "Frappuccino (Grande, Mocha)","Caramel Macchiato (Grande)",
    "Vanilla Latte (Grande)","Iced Coffee (Grande)",
    "Pumpkin Spice Latte (Grande)","Flat White (Grande)",
    "Chocolate Croissant","Butter Croissant",
    "Banana Bread","Blueberry Muffin",
    "Chicken & Bacon Panini","Turkey Pesto Panini"
  ],
  "Panera Bread": [
    "Broccoli Cheddar Soup (bowl)","French Onion Soup",
    "Mac & Cheese (regular)","Tomato Soup (bowl)",
    "Turkey Sandwich (half)","Tuna Salad Sandwich (half)",
    "Chipotle Chicken Avocado Melt (half)","Grilled Cheese",
    "Caesar Salad (half)","Asian Sesame Salad (half)",
    "Fuji Apple Salad (half)","Cinnamon Crunch Bagel",
    "Chocolate Chip Cookie","Pecan Roll"
  ],
  "Popeyes": [
    "Chicken Sandwich (Original)","Chicken Sandwich (Spicy)",
    "3 Pc Handcrafted Tenders","5 Pc Handcrafted Tenders",
    "Leg & Thigh (Mild)","Breast (Mild)",
    "Red Beans & Rice (regular)","Mashed Potatoes & Gravy",
    "Cajun Fries (regular)","Coleslaw (regular)","Biscuit","Mac & Cheese (regular)"
  ],
  "Five Guys": [
    "Hamburger","Cheeseburger","Bacon Burger",
    "Little Hamburger","Little Cheeseburger","Hot Dog","Veggie Sandwich",
    "Regular Fries","Little Fries",
    "Bacon Cheese Dog","Milkshake (Chocolate)","Milkshake (Vanilla)","Milkshake (Strawberry)"
  ],
  "In-N-Out Burger": [
    "Hamburger","Cheeseburger","Double-Double","3x3","4x4",
    "Protein Style (Cheeseburger)","Animal Style Burger","Grilled Cheese",
    "French Fries","Animal Style Fries",
    "Vanilla Shake","Chocolate Shake","Strawberry Shake","Lemonade"
  ],
  "Panda Express": [
    "Orange Chicken","Beijing Beef","Broccoli Beef",
    "Kung Pao Chicken","Honey Walnut Shrimp","Mushroom Chicken",
    "Chow Mein","Fried Rice","White Steamed Rice",
    "Spring Roll (1 pc)","Cream Cheese Rangoon (3 pc)","Wonton Soup"
  ],
  "Dairy Queen": [
    "Blizzard (Medium, Oreo)","Blizzard (Medium, Reese's)",
    "Dipped Cone (Medium)","Soft Serve Cone (Medium)",
    "Banana Split","Peanut Buster Parfait",
    "Original Cheeseburger","1/4 lb GrillBurger",
    "Chicken Strip Basket (4 pc)","Hot Dog","Small Fries","Medium Fries"
  ],
  "Jack in the Box": [
    "Jumbo Jack","Jumbo Jack w/ Cheese","Sourdough Jack","Bacon Ultimate Cheeseburger",
    "Chicken Sandwich","Spicy Crispy Chicken Sandwich",
    "Tacos (2 pc)","Egg Rolls (3 pc)",
    "Small Curly Fries","Medium Curly Fries",
    "Cheesecake (slice)","Mini Churros (5 pc)"
  ],
  "Sonic": [
    "Sonic Cheeseburger","SuperSONIC Bacon Double Cheeseburger",
    "Classic Grilled Cheese","Corn Dog",
    "Crispy Chicken Sandwich","Grilled Chicken Sandwich",
    "Tots (medium)","Onion Rings (medium)","Fries (medium)",
    "Shake (medium, Chocolate)","Slush (medium)","Route 44 Coke"
  ],
  "Arby's": [
    "Classic Roast Beef","Double Roast Beef",
    "Beef & Cheddar (Classic)","French Dip & Swiss",
    "Crispy Chicken Sandwich","Reuben",
    "Curly Fries (medium)","Curly Fries (large)",
    "Mozzarella Sticks (4 pc)","Jamocha Shake (small)","Apple Turnover"
  ],
};

// ── State ──
let rows = [];

// ── Init ──
function initBrands() {
  const sel = document.getElementById('sel-brand');
  Object.keys(MENU).sort().forEach(brand => {
    const opt = document.createElement('option');
    opt.value = brand;
    opt.textContent = brand;
    sel.appendChild(opt);
  });
}

// ── Franchise change ──
document.getElementById('sel-brand').addEventListener('change', function () {
  const brand = this.value;
  const foodSel = document.getElementById('sel-food');
  foodSel.innerHTML = '<option value="">— Select item —</option>';
  document.getElementById('in-cal').value = '';
  document.getElementById('err-msg').style.display = 'none';

  if (!brand) {
    foodSel.disabled = true;
    return;
  }
  foodSel.disabled = false;
  MENU[brand].forEach(item => {
    const opt = document.createElement('option');
    opt.value = item;
    opt.textContent = item;
    foodSel.appendChild(opt);
  });
});

// ── Add item ──
document.getElementById('add-btn').addEventListener('click', addItem);
document.getElementById('in-cal').addEventListener('keydown', e => {
  if (e.key === 'Enter') addItem();
});

function addItem() {
  const brand  = document.getElementById('sel-brand').value;
  const food   = document.getElementById('sel-food').value;
  const qty    = parseFloat(document.getElementById('in-qty').value) || 1;
  const calPer = parseFloat(document.getElementById('in-cal').value);
  const errEl  = document.getElementById('err-msg');
  errEl.style.display = 'none';

  if (!brand)                          { showErr('Please select a franchise.'); return; }
  if (!food)                           { showErr('Please select a menu item.'); return; }
  if (!calPer || isNaN(calPer) || calPer <= 0) { showErr('Please enter the calories per serving for this item.'); return; }

  rows.push({ id: Date.now(), brand, food, qty, calPer, total: Math.round(qty * calPer) });
  renderRows();
  updateTotal();

  // Reset form
  document.getElementById('sel-brand').value = '';
  document.getElementById('sel-food').innerHTML = '<option value="">— Select item —</option>';
  document.getElementById('sel-food').disabled = true;
  document.getElementById('in-qty').value = '1';
  document.getElementById('in-cal').value = '';
}

function showErr(msg) {
  const el = document.getElementById('err-msg');
  el.textContent = msg;
  el.style.display = 'block';
}

// ── Remove row ──
function removeRow(id) {
  rows = rows.filter(r => r.id !== id);
  renderRows();
  updateTotal();
}

// ── Render log ──
function renderRows() {
  const tbody = document.getElementById('log-body');
  if (rows.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" class="empty-msg">No items yet — select a franchise and enter calories to get started.</td></tr>';
    return;
  }
  tbody.innerHTML = rows.map(r => `
    <tr>
      <td><span class="brand-badge">${r.brand}</span></td>
      <td>${r.food}</td>
      <td class="r">${r.qty}</td>
      <td class="r">${Math.round(r.calPer)}</td>
      <td class="r" style="font-weight:600">${r.total}</td>
      <td>
        <button class="del-btn" onclick="removeRow(${r.id})" aria-label="Remove item" title="Remove">&#x2715;</button>
      </td>
    </tr>
  `).join('');
}

// ── Update totals & bar ──
function updateTotal() {
  const t = rows.reduce((sum, r) => sum + r.total, 0);
  document.getElementById('grand-total').textContent = Math.round(t).toLocaleString();
  document.getElementById('foot-total').textContent  = Math.round(t).toLocaleString() + ' kcal';

  const goal = parseInt(document.getElementById('goal').value) || 2000;
  const rem  = goal - t;
  const pct  = Math.min(100, Math.round((t / goal) * 100));

  const bar = document.getElementById('bar');
  bar.style.width = pct + '%';
  bar.style.background = pct >= 100 ? '#A32D2D' : pct >= 80 ? '#BA7517' : '#3B6D11';

  const rl = document.getElementById('remaining-lbl');
  if (rem >= 0) {
    rl.textContent = Math.round(rem).toLocaleString() + ' kcal remaining';
    rl.style.color = '';
  } else {
    rl.textContent = Math.round(Math.abs(rem)).toLocaleString() + ' kcal over goal';
    rl.style.color = '#A32D2D';
  }
}

document.getElementById('goal').addEventListener('input', updateTotal);

// ── Boot ──
initBrands();
