import './style.scss';

const Footer = () => {
    const generateDateString = () => {
        const creationYear = '2021';
        const currentYear = `${new Date().getFullYear()}`;
        return creationYear === currentYear ? currentYear : `${creationYear} - ${currentYear}`;
    }
    return(
        <>
        <footer id="footer">
          <p className="copy-right">
           <span>Tech Store || </span> 
            Todos os direitos reservados. &copy; Copyright {generateDateString()}
          </p>
        </footer>
        </>
    )
    }

    export default Footer;