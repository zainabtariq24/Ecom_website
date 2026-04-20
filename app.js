// ===== PRODUCT DATA =====
const products = [
  { id: 1, name: "Rose Glow Serum", category: "skincare", subcategory: "Serums", price: 48, originalPrice: 65, badge: "sale", emoji: "🌹", rating: 4.8, reviews: 124, size: "30ml", description: "A luxurious rose-infused serum that deeply hydrates and gives your skin a natural, radiant glow. Packed with rosehip oil and vitamin C." },
  { id: 2, name: "Velvet Matte Lipstick", category: "makeup", subcategory: "Lips", price: 24, originalPrice: null, badge: "best", emoji: "💄", rating: 4.9, reviews: 89, size: "3.5g", description: "Long-lasting velvet matte finish lipstick with intense color payoff. Enriched with vitamin E to keep lips soft and moisturized." },
  { id: 3, name: "Hyaluronic Moisturizer", category: "skincare", subcategory: "Moisturizers", price: 52, originalPrice: null, badge: "new", emoji: "💧", rating: 4.7, reviews: 67, size: "50ml", description: "Lightweight yet deeply hydrating moisturizer with triple hyaluronic acid complex. Plumps skin and locks in moisture for 72 hours." },
  { id: 4, name: "Luminous Foundation", category: "makeup", subcategory: "Face", price: 38, originalPrice: 45, badge: "sale", emoji: "✨", rating: 4.6, reviews: 203, size: "30ml", description: "Buildable medium-to-full coverage foundation with a luminous satin finish. Blends seamlessly for a flawless, natural look." },
  { id: 5, name: "Vitamin C Brightening Cream", category: "skincare", subcategory: "Moisturizers", price: 56, originalPrice: null, badge: "best", emoji: "🍊", rating: 4.8, reviews: 156, size: "50ml", description: "Powerful brightening cream with 15% vitamin C, niacinamide, and turmeric extract. Fades dark spots and evens skin tone." },
  { id: 6, name: "Silk Eye Shadow Palette", category: "makeup", subcategory: "Eyes", price: 42, originalPrice: 55, badge: "sale", emoji: "🎨", rating: 4.7, reviews: 178, size: "12 shades", description: "12 buttery-soft eyeshadow shades ranging from everyday neutrals to bold shimmer. Highly pigmented and blendable." },
  { id: 7, name: "Retinol Night Repair", category: "skincare", subcategory: "Serums", price: 64, originalPrice: null, badge: "new", emoji: "🌙", rating: 4.5, reviews: 92, size: "30ml", description: "Advanced retinol night treatment that works while you sleep. Reduces fine lines, wrinkles, and improves skin texture overnight." },
  { id: 8, name: "Perfect Brow Pencil", category: "makeup", subcategory: "Eyes", price: 18, originalPrice: null, badge: null, emoji: "✏️", rating: 4.4, reviews: 312, size: "0.3g", description: "Ultra-fine tip brow pencil for precise, hair-like strokes. Waterproof formula lasts all day with a built-in spoolie brush." },
  { id: 9, name: "Clay Purifying Mask", category: "skincare", subcategory: "Masks", price: 34, originalPrice: 42, badge: "sale", emoji: "🧖", rating: 4.6, reviews: 88, size: "75ml", description: "Deep-cleansing clay mask with kaolin and bentonite clay. Draws out impurities, minimizes pores, and leaves skin refreshed." },
  { id: 10, name: "Dewy Setting Spray", category: "makeup", subcategory: "Face", price: 22, originalPrice: null, badge: "best", emoji: "💫", rating: 4.8, reviews: 267, size: "100ml", description: "Lock in your makeup look for up to 16 hours with this hydrating dewy setting spray. Infused with aloe vera and coconut water." },
  { id: 11, name: "Gentle Foam Cleanser", category: "skincare", subcategory: "Cleansers", price: 28, originalPrice: null, badge: null, emoji: "🫧", rating: 4.5, reviews: 145, size: "150ml", description: "pH-balanced gentle foaming cleanser suitable for all skin types. Removes makeup and impurities without stripping natural oils." },
  { id: 12, name: "Volumizing Mascara", category: "makeup", subcategory: "Eyes", price: 26, originalPrice: 32, badge: "sale", emoji: "👁️", rating: 4.7, reviews: 198, size: "10ml", description: "Dramatic volume and length in one coat. Smudge-proof, clump-free formula with a curved brush for maximum lash lift." },
  { id: 13, name: "SPF 50 Sunscreen Gel", category: "skincare", subcategory: "Sun Care", price: 32, originalPrice: null, badge: "best", emoji: "☀️", rating: 4.9, reviews: 334, size: "50ml", description: "Lightweight, non-greasy gel sunscreen with broad spectrum SPF 50 PA++++. Leaves no white cast and works perfectly under makeup." },
  { id: 14, name: "Cream Blush Duo", category: "makeup", subcategory: "Face", price: 28, originalPrice: null, badge: "new", emoji: "🌸", rating: 4.6, reviews: 76, size: "6g", description: "Creamy, buildable blush duo with two complementary shades. Melts into skin for a natural, healthy flush that lasts all day." },
  { id: 15, name: "Niacinamide Pore Serum", category: "skincare", subcategory: "Serums", price: 38, originalPrice: null, badge: null, emoji: "🔬", rating: 4.7, reviews: 211, size: "30ml", description: "10% niacinamide serum that visibly minimizes pores, controls oil, and improves skin texture. Suitable for acne-prone skin." },
  { id: 16, name: "Lip Gloss Collection", category: "makeup", subcategory: "Lips", price: 30, originalPrice: 40, badge: "sale", emoji: "💋", rating: 4.5, reviews: 143, size: "Set of 3", description: "Three gorgeous high-shine lip glosses in versatile shades. Non-sticky formula with a hint of vanilla and plumping peptides." }
];

// ===== CART STATE =====
let cart = JSON.parse(localStorage.getItem('glowCart')) || [];

function saveCart() {
  localStorage.setItem('glowCart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const counts = document.querySelectorAll('.cart-count');
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  counts.forEach(el => { el.textContent = total; el.style.display = total > 0 ? 'flex' : 'none'; });
}

function addToCart(productId, qty = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, emoji: product.emoji, size: product.size, qty });
  }
  saveCart();
  showToast(`${product.name} added to cart!`);
  renderCartItems();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  renderCartItems();
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(productId); return; }
  saveCart();
  renderCartItems();
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

// ===== CART SIDEBAR =====
function toggleCart() {
  const overlay = document.querySelector('.cart-overlay');
  const sidebar = document.querySelector('.cart-sidebar');
  if (!overlay || !sidebar) return;
  overlay.classList.toggle('open');
  sidebar.classList.toggle('open');
  if (sidebar.classList.contains('open')) renderCartItems();
}

function renderCartItems() {
  const container = document.querySelector('.cart-items');
  const totalEl = document.querySelector('.cart-total-amount');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '<div class="cart-empty"><span>🛒</span><p>Your cart is empty</p></div>';
  } else {
    container.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-image">${item.emoji}</div>
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-variant">${item.size}</div>
          <div class="cart-item-bottom">
            <div class="cart-item-qty">
              <button onclick="updateCartQty(${item.id}, -1)">-</button>
              <span>${item.qty}</span>
              <button onclick="updateCartQty(${item.id}, 1)">+</button>
            </div>
            <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      </div>
    `).join('');
  }

  if (totalEl) totalEl.textContent = '$' + getCartTotal().toFixed(2);
  updateCartCount();
}

// ===== TOAST =====
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== HEADER SCROLL =====
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (header) header.classList.toggle('scrolled', window.scrollY > 20);
});

// ===== MOBILE NAV =====
function toggleMobileNav() {
  const links = document.querySelector('.nav-links');
  if (links) links.classList.toggle('mobile-open');
}

// ===== RENDER PRODUCT CARDS =====
function renderProductCard(product) {
  return `
    <div class="product-card">
      ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge === 'sale' ? 'Sale' : product.badge === 'new' ? 'New' : 'Bestseller'}</span>` : ''}
      <div class="product-image">
        ${product.emoji}
        <div class="product-actions">
          <button class="product-action-btn" onclick="addToCart(${product.id})" title="Add to Cart">🛒</button>
          <a href="product.html?id=${product.id}" class="product-action-btn" title="View Details">👁️</a>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${product.subcategory}</div>
        <div class="product-name"><a href="product.html?id=${product.id}">${product.name}</a></div>
        <div class="product-rating">
          ${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 >= 0.5 ? '½' : ''} <span>(${product.reviews})</span>
        </div>
        <div class="product-price">
          <span class="current">$${product.price.toFixed(2)}</span>
          ${product.originalPrice ? `<span class="original">$${product.originalPrice.toFixed(2)}</span>` : ''}
        </div>
      </div>
    </div>
  `;
}

// ===== SHOP PAGE LOGIC =====
function initShopPage() {
  const grid = document.getElementById('shopGrid');
  const resultCount = document.getElementById('resultCount');
  const sortSelect = document.getElementById('sortSelect');
  if (!grid) return;

  function getFilters() {
    const cats = [...document.querySelectorAll('.filter-cat:checked')].map(c => c.value);
    const subcats = [...document.querySelectorAll('.filter-subcat:checked')].map(c => c.value);
    const minPrice = parseFloat(document.getElementById('minPrice')?.value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice')?.value) || 999;
    return { cats, subcats, minPrice, maxPrice };
  }

  function render() {
    const { cats, subcats, minPrice, maxPrice } = getFilters();
    let filtered = products.filter(p => {
      if (cats.length && !cats.includes(p.category)) return false;
      if (subcats.length && !subcats.includes(p.subcategory)) return false;
      if (p.price < minPrice || p.price > maxPrice) return false;
      return true;
    });

    const sort = sortSelect?.value || 'featured';
    if (sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
    else if (sort === 'price-high') filtered.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    else if (sort === 'newest') filtered.sort((a, b) => (b.badge === 'new' ? 1 : 0) - (a.badge === 'new' ? 1 : 0));

    grid.innerHTML = filtered.length ? filtered.map(renderProductCard).join('') : '<p style="grid-column:1/-1;text-align:center;color:#999;padding:60px 0;">No products found matching your filters.</p>';
    if (resultCount) resultCount.textContent = `Showing ${filtered.length} of ${products.length} products`;
  }

  document.querySelectorAll('.filter-cat, .filter-subcat').forEach(el => el.addEventListener('change', render));
  document.getElementById('minPrice')?.addEventListener('input', render);
  document.getElementById('maxPrice')?.addEventListener('input', render);
  sortSelect?.addEventListener('change', render);

  // Check URL params for category filter
  const params = new URLSearchParams(window.location.search);
  const catParam = params.get('category');
  if (catParam) {
    const checkbox = document.querySelector(`.filter-cat[value="${catParam}"]`);
    if (checkbox) checkbox.checked = true;
  }

  render();
}

// ===== PRODUCT DETAIL PAGE =====
function initProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const product = products.find(p => p.id === id);
  if (!product) {
    document.querySelector('.product-detail')?.insertAdjacentHTML('afterbegin', '<div class="container" style="text-align:center;padding:80px 0;"><h2>Product not found</h2><p><a href="shop.html" style="color:var(--primary)">Back to shop</a></p></div>');
    return;
  }

  const el = (sel) => document.querySelector(sel);
  if (el('#pdName')) el('#pdName').textContent = product.name;
  if (el('#pdEmoji')) el('#pdEmoji').textContent = product.emoji;
  if (el('#pdRating')) el('#pdRating').innerHTML = `${'★'.repeat(Math.floor(product.rating))} <span>${product.rating} (${product.reviews} reviews)</span>`;
  if (el('#pdPrice')) el('#pdPrice').innerHTML = `<span class="current">$${product.price.toFixed(2)}</span>${product.originalPrice ? `<span class="original">$${product.originalPrice.toFixed(2)}</span>` : ''}`;
  if (el('#pdDesc')) el('#pdDesc').textContent = product.description;
  if (el('#pdCategory')) el('#pdCategory').textContent = product.subcategory;
  if (el('#pdBreadcrumb')) el('#pdBreadcrumb').textContent = product.name;
  document.title = `${product.name} — GlowBeauty`;

  // Thumbnails
  const thumbs = document.querySelectorAll('.product-thumb');
  thumbs.forEach(t => { t.textContent = product.emoji; });

  // Quantity
  let qty = 1;
  const qtyInput = el('#pdQty');
  el('#pdQtyMinus')?.addEventListener('click', () => { if (qty > 1) { qty--; qtyInput.value = qty; } });
  el('#pdQtyPlus')?.addEventListener('click', () => { qty++; qtyInput.value = qty; });

  // Add to cart
  el('#pdAddToCart')?.addEventListener('click', () => addToCart(product.id, qty));

  // Related products
  const relatedGrid = el('#relatedProducts');
  if (relatedGrid) {
    const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
    relatedGrid.innerHTML = related.map(renderProductCard).join('');
  }
}

// ===== CHECKOUT PAGE =====
function initCheckout() {
  const container = document.getElementById('checkoutItems');
  const subtotalEl = document.getElementById('checkoutSubtotal');
  const totalEl = document.getElementById('checkoutTotal');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:#999;padding:20px 0;">Your cart is empty. <a href="shop.html" style="color:var(--primary)">Start shopping</a></p>';
  } else {
    container.innerHTML = cart.map(item => `
      <div class="order-item">
        <div class="order-item-left">
          <div class="order-item-thumb">${item.emoji}</div>
          <div>
            <div class="order-item-name">${item.name}</div>
            <div class="order-item-qty">Qty: ${item.qty}</div>
          </div>
        </div>
        <div class="order-item-price">$${(item.price * item.qty).toFixed(2)}</div>
      </div>
    `).join('');
  }

  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;
  if (subtotalEl) subtotalEl.textContent = '$' + subtotal.toFixed(2);
  if (totalEl) totalEl.textContent = '$' + total.toFixed(2);
  const shippingEl = document.getElementById('checkoutShipping');
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'Free' : '$' + shipping.toFixed(2);

  // Place order
  document.getElementById('placeOrder')?.addEventListener('click', (e) => {
    e.preventDefault();
    const form = document.getElementById('checkoutForm');
    if (form && !form.checkValidity()) { form.reportValidity(); return; }
    cart = [];
    saveCart();
    showToast('Order placed successfully! Thank you for shopping with us.');
    setTimeout(() => { window.location.href = 'index.html'; }, 2000);
  });
}

// ===== NEWSLETTER =====
function handleNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  if (input && input.value) {
    showToast('Thank you for subscribing!');
    input.value = '';
  }
}

// ===== CONTACT FORM =====
function handleContact(e) {
  e.preventDefault();
  showToast('Message sent! We\'ll get back to you soon.');
  e.target.reset();
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();

  // Cart overlay close
  document.querySelector('.cart-overlay')?.addEventListener('click', toggleCart);
  document.querySelector('.cart-close')?.addEventListener('click', toggleCart);
  document.querySelector('.continue-shopping')?.addEventListener('click', toggleCart);

  // Page-specific init
  if (document.getElementById('shopGrid')) initShopPage();
  if (document.querySelector('.product-detail')) initProductDetail();
  if (document.getElementById('checkoutItems')) initCheckout();

  // Homepage featured products
  const featuredGrid = document.getElementById('featuredProducts');
  if (featuredGrid) {
    const featured = products.filter(p => p.badge === 'best' || p.badge === 'new').slice(0, 8);
    featuredGrid.innerHTML = featured.map(renderProductCard).join('');
  }

  // Newsletter forms
  document.querySelectorAll('.newsletter-form').forEach(f => f.addEventListener('submit', handleNewsletter));

  // Contact form
  document.getElementById('contactForm')?.addEventListener('submit', handleContact);
});
