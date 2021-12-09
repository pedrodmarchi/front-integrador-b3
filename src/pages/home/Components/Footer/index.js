import style from './style.scss';

const Footer = () => {
    const generateDateString = () => {
        const creationYear = '2021';
        const currentYear = `${new Date().getFullYear()}`;
        return creationYear === currentYear ? currentYear : `${creationYear} - ${currentYear}`;
    }
    return(
        <>
        <footer id="footer">
          <p className="copy-right my-3 fw-bold text-center">
           <span>Tech Store || </span> 
            Todos os direitos reservados. &copy; Copyright {generateDateString()}
          </p>
        </footer>
        </>
    )
    }

    export default Footer;