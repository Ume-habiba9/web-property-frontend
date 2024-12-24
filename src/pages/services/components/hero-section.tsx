import Container from "components/core-ui/container/container"
import servicesbg from 'assets/images/servicesbg.png'
function HeroSection() {
  return (
    <div className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center text-white bg"
    style={{
        backgroundImage: `url(${servicesbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.8s ease-in-out',
      }}
      >
      <Container>
        <div>
            
        </div>
      </Container>
    </div>
  )
}

export default HeroSection
