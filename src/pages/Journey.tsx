import { useEffect, useRef } from 'react';
import './Journey.css';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  image?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "Valentine's Day",
    title: "Our First Valentine's Day",
    description: "Our first Valentine's Day together",
    image: "/images/valentine-day.jpeg"
  },
  {
    date:"Photo Time",
    title:"Anniversary hong được up",
    description:"Cục shit hun tôi",
    image: "/images/photo-time.jpeg"
  },
  {
    date:"Bí Birthday",
    title:"Ngày bé sanh ra đời đó",
    description:"Bé đi chụp hình",
    image: "/images/my-birthday.jpeg"
  }
];

const Journey = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.2
    });

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="journey">
      <h1 className="journey-title">Our Journey Together</h1>
      <div className="timeline" ref={timelineRef}>
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-content">
              <div className="timeline-date">{event.date}</div>
              <div className="timeline-image-container">
                {event.image && (
                  <img src={event.image} alt={event.title} className="timeline-image" />
                )}
                <div className="timeline-image-overlay">
                  <span className="timeline-heart">♥</span>
                </div>
              </div>
              <h3 className="timeline-title">{event.title}</h3>
              <p className="timeline-description">{event.description}</p>
            </div>
          </div>
        ))}
        <div className="timeline-line">
          {timelineEvents.map((_, index) => (
            <div key={index} className="timeline-dot">
              <div className="timeline-dot-inner"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey; 