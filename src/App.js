import logo from './logo.svg';
import './App.css';
import Header from './Header';
import PdfCard from './Pdfcard';
import Member from './Member';
import { useState } from 'react';


const pdfs = [
  { title: 'Firm GST Registration Certificate', pdfFile: '/assets/pdfs/Firm GST Registration Certificate.pdf' },
  { title: 'Firm PAN CARD', pdfFile: '/assets/pdfs/FIRM PAN CARD.pdf' },
  { title: 'Firm Registration', pdfFile: '/assets/pdfs/Firm Registration.pdf' },
  { title: 'Udyam Registration Certificate', pdfFile: '/assets/pdfs/Print _ Udyam Registration Certificate 01.pdf' },
  {title:'Certificate of Recognition',pdfFile:'/assets/pdfs/FIRM STARTUP CERTIFICATE.pdf'}
];


const members = [
  {
    name: 'Narendra Sharma',
    designation: 'Partner',
    residence: 'Haryana',
    photo: '/assets/naresh.jpg',
  },
  {
    name: 'Hitesh Kumar',
    designation: 'Partner',
    residence: 'Haryana',
    photo: '/assets/hitesh.jpg',
  },];

function App() {
  const [activeSection, setActiveSection] = useState('members');
  const showMembers = () => setActiveSection('members');

  
  const showCertificates = () => setActiveSection('certificates');
  return (
    <>
<Header onMembersClick={showMembers} onCertificatesClick={showCertificates} />

<section className="about-company">
        <h1>About Company</h1>
        <p>
          We are a leading waste management solution provider, committed to ensuring sustainability through efficient
          waste management systems. Our goal is to minimize waste, enhance recycling efforts, and contribute to a cleaner
          environment for future generations.
        </p>
      </section>
      
          <h1>Certificates</h1>
          <div className='pdf-container'>
          <div className="pdf-grid">
            {pdfs.map((pdf, index) => (
              <PdfCard key={index} title={pdf.title} pdfFile={pdf.pdfFile} />
            ))}
          </div>
          </div>
        
      
      
          <h1>Members</h1>
          <div className="member-grid">
            {members.map((member, index) => (
              <Member key={index} member={member} />
            ))}
          </div>
          <section className="vision">
        <h1>Our Vision</h1>
        <p>
          Our vision is to create a cleaner, greener, and more sustainable future by revolutionizing waste management
          practices through innovative solutions that minimize environmental impact, promote recycling, and drive the
          circular economy.
        </p>
      </section>
    
    </>
  );
}


export default App;
