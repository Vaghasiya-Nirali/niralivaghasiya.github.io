import "./experience.css";
const Experience = () => {
  return (
    <section id="experience">
      <div className="shadow my-5 p-5">
        <div className="display-6 mb-3 text-muted">Work Experience</div>
        <div className="timeline">
          <span className="timeline-card"></span>
          <div className="timeline-head px-4 pt-3">
            <div className="h4 text-muted ">
              Frontend Developer
              <span className="text-muted h6">at Creative Agency</span>
            </div>
          </div>

          <div className="timeline-body px-4 pb-4">
            <div className="text-muted text-small mb-3">
              May, 2015 - Present
            </div>
            <div className="text-muted">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
            </div>
          </div>
          <span className="timeline-card"></span>
          <div className="timeline-head px-4 pt-3">
            <div className="h4 text-muted">
              Graphic Designer
              <span className="text-muted h6">at Design Studio</span>
            </div>
          </div>
          <div className="timeline-body px-4 pb-4">
            <div className="text-muted text-small mb-3">
              June, 2013 - May, 2015
            </div>
            <div className="text-muted">
              Override the digital divide with additional clickthroughs from
              DevOps. Nanotechnology immersion along the information highway
              will close the loop on focusing solely on the bottom line.
            </div>
          </div>
          <span className="timeline-card"></span>
          <div className="timeline-head px-4 pt-3">
            <div className="h4 text-muted">
              Junior Web Developer
              <span className="text-muted h6">at Indie Studio</span>
            </div>
          </div>
          <div className="timeline-body px-4 pb-4">
            <div className="text-muted text-small mb-3">
              Jan, 2011 - May, 2013
            </div>
            <div className="text-muted">
              User generated content in real-time will have multiple touchpoints
              for offshoring. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
