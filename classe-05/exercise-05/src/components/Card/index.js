import './styles.css';
import CloseCardImage from '../../assets/closeCard.svg';

export default function Card({
    src,
    alt,
    p,
    textButton,
    colorButton
}) {
    return (
        <div className='card'>
            <div className='close-card'>
                <img src={CloseCardImage} />
            </div>
            <img src={src} alt={alt} />
            <p>{p}</p>
            <button
                type='button'
                style={{ backgroundColor: colorButton }}
            >
                {textButton}
            </button>
        </div>
    )
};