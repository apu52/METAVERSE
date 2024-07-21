function Navigation() {
  return `
    <!-- this is the first navigation bar -->
    <nav class="navbar justify-content-between px-4 py-4 title">
      <h1 class="m-0 fw-bold">Country Guide</h1>
      <button class="my-sm-0 fw-normal toggle-mode">
        <i class="fa-regular fa-moon me-1"></i>
        <p class="d-inline mode-text">Dark Mode</p>
      </button>
    </nav>
    `;
}
export default Navigation;
