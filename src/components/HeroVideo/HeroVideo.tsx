const HeroVideo = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <video
        preload="metadata"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        style={{ objectPosition: "center center", objectFit:"cover" }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeroVideo;
