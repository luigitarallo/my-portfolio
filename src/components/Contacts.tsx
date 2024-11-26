import "./Contacts.css";

export function Contacts() {
  return (
    <section id="contacts">
      <div className="container">
        <div className="contacts-text">
          <h2>Get in touch</h2>
          <button>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.3333 6.66675H6.66666C4.82571 6.66675 3.33333 8.15913 3.33333 10.0001V30.0001C3.33333 31.841 4.82571 33.3334 6.66666 33.3334H33.3333C35.1743 33.3334 36.6667 31.841 36.6667 30.0001V10.0001C36.6667 8.15913 35.1743 6.66675 33.3333 6.66675Z"
                stroke="#D9D9D9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M36.6667 11.6667L21.7167 21.1667C21.2021 21.4891 20.6072 21.6601 20 21.6601C19.3928 21.6601 18.7979 21.4891 18.2833 21.1667L3.33333 11.6667"
                stroke="#D9D9D9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Email
          </button>
          <div>
            <span>ghithub</span>
            <span>linkedin</span>
          </div>
        </div>
      </div>
    </section>
  );
}
