import "./TotalCards.scss";

const socialData = [
  {
    username: "@nathanf",
    followers: "1987",
    type: "Followers",
    today: 12,
    isPositive: true,
    icon: "/images/icon-facebook.svg",
    platform: "facebook",
  },
  {
    username: "@nathanf",
    followers: "1044",
    type: "Followers",
    today: 99,
    isPositive: true,
    icon: "/images/icon-twitter.svg",
    platform: "twitter",
  },
  {
    username: "@realnathanf",
    followers: "11k",
    type: "Followers",
    today: 1099,
    isPositive: true,
    icon: "/images/icon-instagram.svg",
    platform: "instagram",
  },
  {
    username: "Nathan F.",
    followers: "8239",
    type: "Subscribers",
    today: 144,
    isPositive: false,
    icon: "/images/icon-youtube.svg",
    platform: "youtube",
  },
];

const TotalCards = () => {
  return (
    <article className="total-cards">
        {socialData.map((item) => (
            <section
                key={item.username}
                className={`total-card ${item.platform}`}
            >
            <div className="total-card__user">
                <img src={item.icon} alt={item.platform} loading="lazy" />
                <h3>{item.username}</h3>
            </div>
            <div className="total-card__numbers">
                <p className="followers">{item.followers}</p>
                <p className="followers-text">{item.type.toUpperCase()}</p>
            </div>
            <div className="total-card__changes">
                <img
                    src={item.isPositive ? "/images/icon-up.svg" : "/images/icon-down.svg"}
                    alt="Direction icon"
                />
                <p className={item.isPositive ? "green" : "red"}>
                    {item.today} Today
                </p>
            </div>
        </section>
  ))}
</article>
  )
}

export default TotalCards