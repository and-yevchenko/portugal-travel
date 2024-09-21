import { Textbox } from '../../components/Textbox/Textbox';
import { DISCOVER_PORTUGAL } from '../../content/__discover-portugal';
import './DiscoverPortugal.css';

export const DiscoverPortugal = ({ tour }) => {
    const CONTENT = DISCOVER_PORTUGAL;
    const CONTENT_SWIPPER = CONTENT.CONTENT;

    return (
        <section className="discover-portugal" id="tour" ref={tour}>
            <article className="discover-portugal__title">
                <div className="discover-portugal__container">
                    <Textbox title={CONTENT.TITLE} text={CONTENT.TEXT} />
                </div>
            </article>
            <article className="sticky-container">
                {CONTENT_SWIPPER.map((el) => (
                    <div
                        className="discover-portugal__item"
                        key={el.id}
                        style={{
                            backgroundColor: el.background,
                        }}
                    >
                        <div
                            className="discover-portugal__content"
                            style={{ backgroundColor: `${el.background}` }}
                        >
                            <Textbox title={el.title} text={el.text} />
                        </div>
                        <img
                            className="discover-portugal__image"
                            src={el.img}
                            alt={el.alt}
                        />
                    </div>
                ))}
            </article>
        </section>
    );
};
