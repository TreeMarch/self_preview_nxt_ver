import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="objective">
          <h1 className="resume-name">Tran Trong Trinh</h1>
          <div className="objective-des">
            <p>
              A motivated and skilled FullStack Developer Intern with a strong
              foundation in both front-end and back-end technologies. Adept at
              working in agile environments and committed to continuous learning
              and professional growth.
            </p>
          </div>
          <p className="address-section">
            <a
              className="address"
              href="https://www.google.com/maps/search/T%C3%B4%20Hi%E1%BB%87u%2C%20C%E1%BA%A7u%20Gi%E1%BA%A5y%2C%20H%C3%A0%20N%E1%BB%99i%2C%20Vi%E1%BB%87t%20Nam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Location: Tô Hiệu, Cầu Giấy, Hà Nội, Việt Nam"
            >
              To Hieu, Cau Giay, Ha Noi
            </a>
          </p>
          <div className="contact">
            <a href="mailto:your-email@example.com" aria-label="Email">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </a>
            <a
              href="tel:0337321659"
              aria-label="Phone"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width=".875rem"
                height="1.25rem"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-phone"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/TreeMarch?ref=selfso"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width=".875rem"
                height="1.25rem"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
                aria-hidden="true"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
          </div>
        </div>
        <span className="img-profile">
          <Image
            src="/img/profile.png"
            alt="Trần Trọng Trình profile picture"
            width={150} // Set appropriate width
            height={150} // Set appropriate height
          />
        </span>
      </header>
    </div>
  );
};

export default Header;
