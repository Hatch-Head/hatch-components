import React from "react";

export interface TestimonialProps {
  quote: string;
  credit: string;
  image: string;
  alt: string;
}

const Testimonial = ({ quote, credit, image, alt }: TestimonialProps) => (
  <section className="bg-light center">
    <div className="row no-gutter">
      <div className="col-lg-6 d-flex align-items-center justify-content-center">
        <div className="p-10 text-center">
          <p className="paragraph">{credit}:</p>
          <h3 className="display-4 mb-4">&quot;{quote}&quot;</h3>
        </div>
      </div>

      <div className="col-lg-6 bg-image-03 padding-bottom padding-top">
        <img src={image} alt={alt || quote} />
      </div>
    </div>
  </section>
);

export default Testimonial;
