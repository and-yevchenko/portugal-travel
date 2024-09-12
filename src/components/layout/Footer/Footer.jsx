import { INFO } from '../../../content/__info';
import './Footer.css';

export const Footer = () => {
  const INFO_FOOTER = INFO;

  return (
    <footer className="footer">
      <div className="footer__up">
        <div className="footer__company">
          <a className="footer__name" href="/">
            {INFO_FOOTER.NAME}
          </a>
          <div className="footer__contacts">
            <address>Address: {INFO_FOOTER.ADDRESS}</address>
            <span>
              Phone:{' '}
              <a href={`tel:${INFO_FOOTER.PHONE}`}>{INFO_FOOTER.PHONE}</a>
            </span>
            <span>
              Email:{' '}
              <a href={`mailto:${INFO_FOOTER.EMAIL}`}>{INFO_FOOTER.EMAIL}</a>
            </span>
          </div>
        </div>
        <div className="footer__links">
          <a href="#">Privacy Policy</a>
          <a href="#">Booking and Cancellation Policy</a>
          <div className="footer__social">
            {INFO_FOOTER.SOCIAL.map((el) => (
              <a key={el.id} href="#" title={el.title}>
                <img src={el.icon} alt={el.title} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer__down">
        <p>
          © 2024 {INFO_FOOTER.NAME}.{' '}
          <a href="https://github.com/and-yevchenko" target="_blank">
            {INFO_FOOTER.AUTHOR}
            <img src="/public/icons/github.svg" alt="GitHub" />
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};
