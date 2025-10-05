import "../css/resources";

export default function Resource() {
  return (
    <>
      <div class="card">
        <span class="card__title">Newsletter</span>
        <p class="card__content">
          Get existential crisis delivered straight to your inbox every week.
        </p>
        <form class="card__form">
          <input required="" type="email" placeholder="Your life" />
          <button class="card__button">Click me</button>
        </form>
      </div>
    </>
  );
}
