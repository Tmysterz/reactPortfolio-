import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const CarouselData = [
  { id: 1, title: 'Texas Sports Blog', imageUrl: '../blogImage.jpg', link: 'https://github.com/Tmysterz/blogPost' },
  { id: 2, title: 'Social API', imageUrl: '../socialAPI.jpg', link: 'https://github.com/Tmysterz/socialAPI' },
  { id: 3, title: 'Work Scheduler', imageUrl: '../workSchedule.png', link: 'https://github.com/Tmysterz/work-Schedule-Attemp-Two' },
  { id: 4, title: 'Sky Social', imageUrl: '../skySocialFSS.jpg', link: 'https://github.com/Tmysterz/SkySocial' },
  { id: 5, title: 'Book Search', imageUrl: '../bookSearchSS.jpg', link: 'https://github.com/Tmysterz/bookSearchMERN' },
  { id: 6, title: 'EcommerceAPI', imageUrl: '../ecommerceAPI.jpg', link: 'https://github.com/Tmysterz/socialAPI' },
  { id: 7, title: 'Logo Generator', imageUrl: '../logoMakerSS.jpg', link: 'https://github.com/Tmysterz/logoGenerator' },
  { id: 8, title: 'README.md Generator', imageUrl: '../readmeGeneratorSS.png', link: 'https://github.com/Tmysterz/readmeGenerator' },
  { id: 9, title: 'Random Password Generator', imageUrl: '../randomPasswordSS.jpg', link: 'https://github.com/Tmysterz/Random-Password-Generator' },
];

const ImageCarousel = () => {
  const carouselStyle = {
    border: '15px solid #ddd', // Add your desired border style and color
    borderRadius: '1px', // Optional: Add border radius for rounded corners
    overflow: 'hidden', // Hide overflow to prevent image overflow beyond the border
    width: '100%',
    margin: '0 auto'
  };
  
  return (
    <Container className='mt-5 mb-5' >
      <Carousel style={carouselStyle}>
        {CarouselData.map(data => (
          <Carousel.Item key={data.id}>
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'black' }} // Remove underline and set text color
            >
              <img
                className="d-block w-100"
                src={data.imageUrl}
                alt={data.title}
                style={{ objectFit: 'cover', height: '800px' }}
              />
              <Carousel.Caption style={{color: 'white'}}>
                <h3>{data.title}</h3>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default ImageCarousel;