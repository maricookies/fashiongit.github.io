
// add to cart button and the cart item count
const addToCartButton = document.querySelector(".addToCart_Detail");
const cartItemCount = document.getElementById("cartItemCount");

let itemCount = 0;

addToCartButton.addEventListener("click", () => {
  itemCount++;

  cartItemCount.innerText = itemCount;
});


// for product details
document.addEventListener("DOMContentLoaded", function () {
  const circleImageLinks = document.querySelectorAll(".circle-image-link");
  const sidebarImageLinks = document.querySelectorAll(".sidebar-image-link");
  const carouselInner = document.querySelector(".carousel-inner");
  const carousel = document.getElementById("carouselExampleFade");
  const carouselInstance = bootstrap.Carousel.getInstance(carousel);

  circleImageLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("data-target");
      const targetCarouselItem = document.getElementById(targetId);

      // Update the carousel to show the clicked item
      const carouselItems = Array.from(carousel.querySelectorAll(".carousel-item"));
      const targetIndex = carouselItems.indexOf(targetCarouselItem);
      carouselInstance.to(targetIndex);

      // Update the sidebar to show the clicked item's sidebar-image-link
      sidebarImageLinks.forEach(sidebarImageLink => {
        if (sidebarImageLink.getAttribute("href") === `#${targetId}`) {
          sidebarImageLink.classList.add("active");
        } else {
          sidebarImageLink.classList.remove("active");
        }
      });
    });
  });

  sidebarImageLinks.forEach((link, index) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1); 
      const targetCarouselItem = document.getElementById(targetId);

      carouselInner.querySelectorAll(".carousel-item").forEach((item) => {
        item.classList.remove("active");
      });

      const carouselItem = document.createElement("div");
      carouselItem.classList.add("carousel-item", "active");
      carouselItem.innerHTML = `
            <a href="#">
              <img src="${link.querySelector("img").src}" alt="" class="object-fit-cover border rounded" style="width: 600px; height: 799px;">
            </a>
          `;

      carouselInner.appendChild(carouselItem);

      carouselInstance.to(index + 1);
    });
  });
});

// Get all circle-image-link elements
const circleImageLinks = document.querySelectorAll('.circle-image-link');

circleImageLinks.forEach(circleImageLink => {
  circleImageLink.addEventListener('click', function (event) {
    event.preventDefault();

    const targetId = circleImageLink.getAttribute('data-target');

    const carouselItem = document.getElementById(targetId);
    const sidebarImageLink = document.querySelector(`a.sidebar-image-link[data-target="${targetId}"]`);

    document.querySelectorAll('.carousel-item').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('a.sidebar-image-link').forEach(link => link.classList.remove('active'));

    carouselItem.classList.add('active');
    sidebarImageLink.classList.add('active');
  });
});



let cartItems = [];

document.addEventListener('DOMContentLoaded', function () {
  const addToCartBtn = document.querySelector('.addToCart_Detail');
  addToCartBtn.addEventListener('click', function () {
    const productName = 'Qutie Star Patched Crop Tee';
    const productPrice = 19.99;

    const product = {
      name: productName,
      price: productPrice,
    };

    cartItems.push(product);

    showAddToCartToast(productName);

    updateCartDisplay();
  });

  function showAddToCartToast(productName) {
    const toastElement = document.createElement('div');
    toastElement.classList.add('toast');
    toastElement.setAttribute('role', 'alert');
    toastElement.setAttribute('aria-live', 'assertive');
    toastElement.setAttribute('aria-atomic', 'true');

    toastElement.innerHTML = `
      <div class="toast-header" style="background-color: var(--warning)">
        <img src="images/logo.png" class="rounded me-2" style="width: 20px; height: 20px" alt="...">
        <strong class="me-auto">Added to Cart</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body" style="background-color: var(--primary)">
        ${productName} has been added to your cart.
        </br><a href="./cart.html" style="color: var(--warning); font-weight: 300">view cart</a>
      </div>
    `;

    const toastContainer = document.getElementById('toastContainer');
    toastContainer.appendChild(toastElement);

    const toast = new bootstrap.Toast(toastElement);
    toast.show();
  }

  // Function to update the cart display
  function updateCartDisplay() {
    const cartCountElement = document.getElementById('cartCount');
    cartCountElement.textContent = cartItems.length;
  }
});

