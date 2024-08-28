import { Textbox } from '../../components/Textbox/Textbox'
import { DISCOVER_PORTUGAL } from '../../content/__discover-portugal'
import './DiscoverPortugal.css'


export const DiscoverPortugal = () => {

    const content = DISCOVER_PORTUGAL;

    return (
        <section className='discover-portugal'>
            <div className='sticky-container'>
                {content.map((el, index) => (
                    <div className='discover-portugal__item' key={el.id}
                    style={{
                        backgroundColor: el.background,
                        top: `${index + index}rem`
                    }}
                    >
                        <Textbox title={el.title} text={el.text}/>
                        <img className='discover-portugal__image' src={el.img} alt={el.alt} />
                    </div>
                ))}
            </div>
        </section>
    )
}