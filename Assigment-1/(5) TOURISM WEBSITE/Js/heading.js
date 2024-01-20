
document.addEventListener("DOMContentLoaded", function () {
  // Your navigation bar code goes here
  const header = `
    <div class="alert alert-primary text-center fw-bold fs-1" role="alert">
    State Name is : Bihar
</div>
    `;

  // Append the navigation bar to the body
  document.body.insertAdjacentHTML("afterbegin", header);
});
