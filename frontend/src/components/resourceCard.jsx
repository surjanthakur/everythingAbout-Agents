import "../css/resource.css";

export default function Card({ title, about, url }) {
  return (
    <>
      <div class="card">
        <span class="card__title">{title}</span>
        <p class="card__content">{about}</p>
        <button class="card__button">{url}</button>
      </div>
    </>
  );
}
