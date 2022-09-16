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
            <img
                src={CloseCardImage}
                alt='botão que fecha o card'
                className='close-card'
            />
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