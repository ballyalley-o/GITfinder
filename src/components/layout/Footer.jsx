import {FaRocket} from 'react-icons/fa'

function Footer() {
    const footerYear = new Date().getFullYear()
  return (
    <footer className="footer w-full p-10 bg-neutral static text-white -content footer-center z-20">
      <div>
        <FaRocket />
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer