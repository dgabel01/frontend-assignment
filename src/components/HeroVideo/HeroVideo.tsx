const HeroVideo = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden ">
      <video
        preload="metadata"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeroVideo;
