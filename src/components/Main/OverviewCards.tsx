import "./OverviewCards.scss";

const overviewData = [
    {
        id: 1,
        title: "Page Views",
        platform: "facebook",
        icon: "/images/icon-facebook.svg",
        count: "87",
        percentage: "3%",
        trend: "up",
    },
    {
        id: 2,
        title: "Likes",
        platform: "facebook",
        icon: "/images/icon-facebook.svg",
        count: "52",
        percentage: "2%",
        trend: "down",
    },
    {
        id: 3,
        title: "Likes",
        icon: "/images/icon-instagram.svg",
        count: "5462",
        percentage: "2257%",
        trend: "up",
    },
    {
        id: 4,
        title: "Profile Views",
        icon: "/images/icon-instagram.svg",
        count: "52k",
        percentage: "1375%",
        trend: "up",
    },
    {
        id: 5,
        title: "Retweets",
        icon: "/images/icon-twitter.svg",
        count: "117",
        percentage: "303%",
        trend: "up",
    },
    {
        id: 6,
        title: "Likes",
        icon: "/images/icon-twitter.svg",
        count: "507",
        percentage: "553%",
        trend: "up",
    },
    {
        id: 8,
        title: "Total Views",
        icon: "/images/icon-youtube.svg",
        count: "107",
        percentage: "19%",
        trend: "down",
    },
    {
        id: 8,
        title: "Total Views",
        icon: "/images/icon-youtube.svg",
        count: "1407",
        percentage: "12%",
        trend: "down",
    },
];

const OverviewCards = () => {
    return (
        <article className='overview-cards'>
            {
                overviewData.map(item => (
                    <section className='overview-card'>
                        <div className="overview-card__top">
                            <p>{item.title}</p>
                            <img src={item.icon} alt={item.title} />
                        </div>
                        <div className="overview-card__bottom">
                            <p className='big-text'>{item.count}</p>
                            <div className="overview-percents">
                                <img src={item.trend === "up" ? "/images/icon-up.svg" : "/images/icon-down.svg"} alt="trend icon" />
                                <p className={item.trend === "up" ? "green" : "red"}>{item.percentage}</p>
                            </div>
                        </div>
                    </section>
                ))
            }
        </article>
    )
}

export default OverviewCards