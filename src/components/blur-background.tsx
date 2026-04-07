const BlurBackground = () => {
  const balls = [
    {
      top: '5%',
      left: '0',
      width: '450px',
      height: '600px',
      bg: '#6A0DAD',
      blur: '180px',
      opacity: 0.4,
      delay: '0s',
      duration: '40s',
      origin: '16vw -2vh',
    },
    {
      top: '5%',
      left: '0',
      width: '250px',
      height: '200px',
      bg: '#6A0DAD',
      blur: '180px',
      opacity: 0.4,
      delay: '0s',
      duration: '40s',
      origin: '50vw 2vh',
    },
    {
      top: 'auto',
      bottom: '10%',
      right: '0',
      width: '600px',
      height: '600px',
      bg: '#FF4D9E',
      blur: '200px',
      opacity: 0.4,
      delay: '0.3s',
      duration: '53s',
      origin: '-19vw 21vh',
    },
    {
      top: 'auto',
      bottom: '15%',
      right: '0',
      width: '350px',
      height: '200px',
      bg: '#ED1C24',
      blur: '200px',
      opacity: 0.4,
      delay: '0.5s',
      duration: '49s',
      origin: '-22vw 3vh',
    },
    {
      top: 'auto',
      bottom: '0',
      right: '50%',
      width: '300px',
      height: '300px',
      bg: '#1E90FF',
      blur: '160px',
      opacity: 0.4,
      delay: '0.7s',
      duration: '26s',
      origin: '17vw -6vh',
    },
    {
      top: '20%',
      left: '30%',
      width: '400px',
      height: '400px',
      bg: '#ED1C24',
      blur: '180px',
      opacity: 0.4,
      delay: '0.4s',
      duration: '45s',
      origin: '4vw 0vh',
    },
    {
      top: '60%',
      left: '10%',
      width: '500px',
      height: '500px',
      bg: '#1E90FF',
      blur: '200px',
      opacity: 0.4,
      delay: '0.4s',
      duration: '50s',
      origin: '18vw 4vh',
    },
    {
      top: '15%',
      right: '20%',
      width: '350px',
      height: '350px',
      bg: '#FF4D9E',
      blur: '170px',
      opacity: 0.4,
      delay: '0.6s',
      duration: '42s',
      origin: '1vw -23vh',
    },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {balls.map((ball, i) => (
        <div
          key={i}
          className={`absolute rounded-full breathing animate-move`}
          style={{
            top: ball.top,
            bottom: ball.bottom,
            left: ball.left,
            right: ball.right,
            width: ball.width,
            height: ball.height,
            backgroundColor: ball.bg,
            filter: `blur(${ball.blur})`,
            opacity: ball.opacity,
            animationDelay: ball.delay,
            animationDuration: ball.duration,
            transformOrigin: ball.origin,
          }}
        ></div>
      ))}
    </div>
  );
};

export default BlurBackground;