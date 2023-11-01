
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="lg:w-1/2 relative">

    <img src="https://i.ibb.co/48XJNNC/person.jpg" className="w-3/4 rounded-lg shadow-2xl" />

    <img src="https://i.ibb.co/5Tjmb1P/parts.jpg" alt=""  className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg"/>
  
    </div>
    <div className="lg:w-1/2 space-y-2">
        <h3 className="text-3xl text-orange-500 font-bold">About Us</h3>
      <h1 className="text-5xl font-bold lg:w-[370px]">We are qualified & of experience in this field</h1>
      <p className="py-4 lg:w-[440px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable.</p>
      <p className="lg:w-[400px]">the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
      <button className="btn btn-outline bg-[#FF3811] text-white">Get More Info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;