document.addEventListener("DOMContentLoaded", () => {
  const progress = document.getElementById("progress");
  if (!progress) return;

  const calcScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const percent = Math.round((scrollTop / height) * 100);
    progress.style.display = scrollTop > 100 ? "grid" : "none";
    progress.style.background = `conic-gradient(#03cc65 ${percent}%, #d7d7d7 ${percent}%)`;
  };

  window.addEventListener("scroll", calcScroll);
  progress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
});
